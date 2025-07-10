'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Post {
  id: number;
  title: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  slug: string;
  featured_media: number;
  categories: number[];
}

interface Category {
  id: number;
  name: string;
  slug: string;
}

interface Media {
  id: number;
  source_url: string;
  alt_text: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [media, setMedia] = useState<Record<number, Media>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener posts
        const postsResponse = await fetch('https://todoweb.pro/CMS/wp-json/wp/v2/posts?per_page=3');
        if (!postsResponse.ok) {
          throw new Error('Error al cargar posts');
        }
        const postsData = await postsResponse.json();
        setPosts(postsData);

        // Obtener categorías
        const categoriesResponse = await fetch('https://todoweb.pro/CMS/wp-json/wp/v2/categories');
        if (categoriesResponse.ok) {
          const categoriesData = await categoriesResponse.json();
          setCategories(categoriesData);
        }

        // Obtener imágenes destacadas
        const mediaIds = postsData.map((post: Post) => post.featured_media).filter(Boolean);
        if (mediaIds.length > 0) {
          const mediaResponse = await fetch(`https://todoweb.pro/CMS/wp-json/wp/v2/media?include=${mediaIds.join(',')}`);
          if (mediaResponse.ok) {
            const mediaData = await mediaResponse.json();
            const mediaMap = mediaData.reduce((acc: Record<number, Media>, item: Media) => {
              acc[item.id] = item;
              return acc;
            }, {});
            setMedia(mediaMap);
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const getCategoryNames = (categoryIds: number[]) => {
    return categoryIds.map(id => categories.find(cat => cat.id === id)?.name).filter(Boolean);
  };

  if (loading) {
    return (
      <section className="bg-slate-700 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">Desde mi Blog</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-16"></div>
          <p className="text-white">Cargando artículos...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="bg-slate-700 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-black text-white mb-4">Desde mi Blog</h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-16"></div>
          <p className="text-red-400">Error: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-slate-700 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-black text-white text-center mb-4">
          Desde mi Blog
        </h2>
        <div className="w-20 h-1 bg-cyan-400 mx-auto mb-16"></div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post) => (
            <article key={post.id} className="bg-slate-800 rounded-lg overflow-hidden hover:bg-slate-750 transition-all duration-300">
              <Link href={`/blog/${post.slug}`} className="block">
                {/* Imagen destacada */}
                {media[post.featured_media] && (
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={media[post.featured_media].source_url}
                      alt={media[post.featured_media].alt_text || post.title.rendered}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                
                <div className="p-6">
                  {/* Categorías */}
                  {post.categories.length > 0 && (
                    <div className="mb-3">
                      {getCategoryNames(post.categories).map((category, index) => (
                        <span key={index} className="inline-block bg-cyan-500 text-white text-xs px-3 py-1 rounded-full mr-2 mb-2">
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                    {post.title.rendered}
                  </h3>
                  
                  <div 
                    className="text-gray-300 text-sm mb-4 line-clamp-3"
                    dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                  />
                  
                  <div className="flex justify-between items-center">
                    <div className="text-cyan-400 text-sm">
                      {new Date(post.date).toLocaleDateString('es-ES')}
                    </div>
                    <span className="text-cyan-400 text-sm font-bold">
                      Leer más →
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/blog"
            className="inline-block border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300"
          >
            Ver todos los artículos
          </Link>
        </div>
      </div>
    </section>
  );
}