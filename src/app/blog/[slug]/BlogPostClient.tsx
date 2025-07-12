'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface Post {
  id: number;
  title: { rendered: string };
  content: { rendered: string };
  date: string;
  slug: string;
  featured_media: number;
  categories: number[];
  author: number;
}

interface Author {
  id: number;
  name: string;
}

interface Category {
  id: number;
  name: string;
}

interface Media {
  source_url: string;
  alt_text: string;
}

export default function BlogPostClient({ slug }: { slug: string }) {
  const [post, setPost] = useState<Post | null>(null);
  const [author, setAuthor] = useState<Author | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [featuredImage, setFeaturedImage] = useState<Media | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const postResponse = await fetch(`https://todoweb.pro/CMS/wp-json/wp/v2/posts?slug=${slug}`);
        const postData = await postResponse.json();
        
        if (postData.length === 0) {
          notFound();
          return;
        }
        
        const postItem = postData[0];
        setPost(postItem);

        if (postItem.author) {
          const authorResponse = await fetch(`https://todoweb.pro/CMS/wp-json/wp/v2/users/${postItem.author}`);
          const authorData = await authorResponse.json();
          setAuthor(authorData);
        }

        if (postItem.categories?.length > 0) {
          const categoriesResponse = await fetch(`https://todoweb.pro/CMS/wp-json/wp/v2/categories?include=${postItem.categories.join(',')}`);
          const categoriesData = await categoriesResponse.json();
          setCategories(categoriesData);
        }

        if (postItem.featured_media) {
          const mediaResponse = await fetch(`https://todoweb.pro/CMS/wp-json/wp/v2/media/${postItem.featured_media}`);
          const mediaData = await mediaResponse.json();
          setFeaturedImage(mediaData);
        }

        if (postItem.categories?.length > 0) {
          const relatedResponse = await fetch(`https://todoweb.pro/CMS/wp-json/wp/v2/posts?categories=${postItem.categories[0]}&exclude=${postItem.id}&per_page=3`);
          const relatedData = await relatedResponse.json();
          setRelatedPosts(relatedData);
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-800 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-slate-700 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-slate-700 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-800">
      <div className="py-6 px-6">
        <div className="max-w-4xl mx-auto">
          <Link href="/blog" className="text-cyan-400 hover:text-cyan-300 transition-colors inline-flex items-center">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Volver al blog
          </Link>
        </div>
      </div>

      <article className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {categories.length > 0 && (
            <div className="mb-6 fade-in-up">
              {categories.map((category) => (
                <span key={category.id} className="inline-block bg-cyan-500 text-white text-sm px-3 py-1 rounded-full mr-2 mb-2 hover:bg-cyan-600 transition-colors">
                  {category.name}
                </span>
              ))}
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight fade-in-up delay-1">
            {post.title.rendered}
          </h1>

          <div className="flex items-center text-gray-400 text-sm mb-8 fade-in-up delay-2">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">
                  {author?.name?.charAt(0) || 'R'}
                </span>
              </div>
              <span>Por {author?.name || 'Ronald Rangel'}</span>
            </div>
            <span className="mx-3">•</span>
            <span>{new Date(post.date).toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>

          {featuredImage && (
            <div className="mb-8 fade-in-up delay-3">
              <div className="relative overflow-hidden rounded-xl group">
                <img 
                  src={featuredImage.source_url}
                  alt={featuredImage.alt_text || post.title.rendered}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          )}
          
          <div 
          className="prose prose-lg prose-invert max-w-none fade-in-up delay-4"
          style={{
          textAlign: 'justify',
          lineHeight: '1.8',
          color: '#e5e7eb', // Fuerza color gris claro
          '--tw-prose-body': '#e5e7eb',
          '--tw-prose-headings': '#ffffff'
  }}
  dangerouslySetInnerHTML={{ __html: post.content.rendered }}
/>

          <div className="my-16 flex items-center justify-center">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
              <div className="w-2 h-2 bg-cyan-600 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
            </div>
          </div>

          {relatedPosts.length > 0 && (
            <section className="mt-16">
              <h3 className="text-3xl font-black text-white mb-8 text-center">
                Artículos Relacionados
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <Link 
                    key={relatedPost.id} 
                    href={`/blog/${relatedPost.slug}`}
                    className={`group block fade-in-up delay-${index + 1}`}
                  >
                    <article className="bg-slate-700 rounded-lg overflow-hidden hover:bg-slate-600 transition-all duration-300 hover:scale-105">
                      <div className="p-6">
                        <h4 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                          {relatedPost.title.rendered}
                        </h4>
                        <div className="text-gray-400 text-sm flex items-center">
                          <span>{new Date(relatedPost.date).toLocaleDateString('es-ES')}</span>
                          <span className="ml-auto text-cyan-400">→</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <div className="mt-16 text-center bg-slate-700 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Te gustó este artículo?
            </h3>
            <p className="text-gray-300 mb-6">
              Hablemos sobre cómo puedo ayudarte con tu estrategia digital
            </p>
            <a 
              href="https://wa.me/573002278962?text=Hola%20Ronald,%20acabo%20de%20leer%20tu%20artículo%20y%20me%20interesa%20hablar%20contigo" 
              className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:scale-105"
            >
              Conversemos
            </a>
          </div>
        </div>
      </article>
    </div>
  );
}