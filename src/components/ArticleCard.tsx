import { Link } from "react-router-dom";
import { Article } from "../types";

const ArticleCard = ({ article }: { article: Article }) => {
  return (
    <Link to={`/article/${article.id}`} className="block">
      <div className="article-card rounded-lg overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-56 object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-primary text-white text-sm rounded-full">
              {article.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <h2 className="article-title mb-3 hover:text-primary/80 transition-colors">
            {article.title}
          </h2>
          <p className="article-excerpt text-gray-600 mb-4">{article.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>{article.date}</span>
            <span className="text-primary hover:text-primary/80 transition-colors">
              Read more →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;