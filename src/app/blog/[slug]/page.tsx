interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function BlogPost({ params }: PageProps) {
  const { slug } = await params;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Blog Post: {slug}</h1>
      <p>Este es el contenido del post con slug: {slug}</p>
    </div>
  );
}