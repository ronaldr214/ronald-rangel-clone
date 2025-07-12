import BlogPostClient from './BlogPostClient';

interface PageProps {
  params: { slug: string };
}

export default function PostPage({ params }: PageProps) {
  return <BlogPostClient slug={params.slug} />;
}

export async function generateStaticParams() {
  try {
    const response = await fetch('https://todoweb.pro/CMS/wp-json/wp/v2/posts?per_page=20');
    const posts = await response.json();
    
    return posts.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    return [];
  }
}