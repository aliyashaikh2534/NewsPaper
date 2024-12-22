import { useSearchParams } from "react-router-dom";
import { articles } from "../data/articles";
import ArticleCard from "../components/ArticleCard";
import Navbar from "../components/Navbar";

const Index = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const filteredArticles = category
    ? articles.filter((article) => article.category.toLowerCase() === category)
    : articles;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary mb-2 animate-fade-in">Latest News</h1>
          <p className="text-muted-foreground text-lg">Stay informed with our curated stories</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <div key={article.id} className="animate-fade-in">
              <ArticleCard article={article} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;