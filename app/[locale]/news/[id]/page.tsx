import { getArticleById, getAllArticles } from "../../lib/airtable";
import ArticleClient from "./ArticleClient";

export const revalidate = 60; // revalidate every 60 seconds

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default async function ArticlePage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params object in Next.js 15+ App Router 
  // (though checking Next version might be needed, we can await it safely)
  const resolvedParams = await params;
  const article = await getArticleById(resolvedParams.id);

  return <ArticleClient article={article} />;
}
