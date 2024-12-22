import { useParams, Link } from "react-router-dom";
import { articles } from "../data/articles";
import Navbar from "../components/Navbar";
import { ArrowLeft } from "lucide-react";

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find((a) => a.id === Number(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="inline-flex items-center text-primary hover:text-primary/80 mb-6"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>
        <article className="max-w-3xl mx-auto">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-[400px] object-cover rounded-lg mb-6"
          />
          <h1 className="text-4xl font-bold text-primary mb-4">{article.title}</h1>
          <div className="flex items-center justify-between mb-8">
            <span className="text-muted-foreground">{article.category}</span>
            <span className="text-muted-foreground">{article.date}</span>
          </div>
          <p className="text-lg leading-relaxed">{article.content}</p>
        </article>
      </main>
    </div>
  );
};

export default ArticleDetail;