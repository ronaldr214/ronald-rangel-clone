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

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [media, setMedia] = useState<Record<number, Media>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener posts
        const postsResponse = await fetch('https://todoweb.pro/CMS/wp-json/wp/v2/posts?per_page=10');
        const postsData = await postsResponse.json();
        setPosts(postsData);

        // Obtener categorías
        const categoriesResponse = await fetch('https://todoweb.pro/CMS/wp-json/wp/v2/categories');
        const categoriesData = await categoriesResponse.json();
        setCategories(categoriesData);

        // Obtener imágenes destacadas
        const mediaIds = postsData.map((post: Post) => post.featured_media).filter(Boolean);
        if (mediaIds.length > 0) {
          const mediaResponse = await fetch(`https://todoweb.pro/CMS/wp-json/wp/v2/media?include=${mediaIds.join(',')}`);
          const mediaData = await mediaResponse.json();
          const mediaMap = mediaData.reduce((acc: Record<number, Media>, item: Media) => {
            acc[item.id] = item;
            return acc;
          }, {});
          setMedia(mediaMap);
        }
      } catch (err) {
        console.error('Error fetching data:', err);
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
      <div className="min-h-screen bg-slate-800 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white text-xl">Cargando blog...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-800">
      {/* Header */}
      <header className="py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 mb-8 inline-block">
            ← Volver al inicio
          </Link>
          <h1 className="text-5xl font-black text-white mb-6">Blog</h1>
          <p className="text-xl text-gray-300">Estrategias, insights y tendencias en marketing digital</p>
        </div>
      </header>

      {/* Posts Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300">
                <Link href={`/blog/${post.slug}`}>
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
                    
                    <h2 className="text-xl font-bold text-white mb-3 hover:text-cyan-400 transition-colors">
                      {post.title.rendered}
                    </h2>
                    
                    <div 
                      className="text-gray-300 text-sm mb-4 line-clamp-3"
                      dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                    />
                    
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-400">
                        {new Date(post.date).toLocaleDateString('es-ES')}
                      </span>
                      <span className="text-cyan-400 font-bold">
                        Leer más →
                      </span>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}