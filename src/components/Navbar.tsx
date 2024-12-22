import { Link } from "react-router-dom";

const Navbar = () => {
  const categories = ["Technology", "Business", "Science", "World"];

  return (
    <nav className="border-b sticky top-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-primary">NewsHub</Link>
          <div className="hidden md:flex space-x-8">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/?category=${category.toLowerCase()}`}
                className="text-foreground/80 hover:text-primary transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;