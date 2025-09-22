import { Link, useLocation } from "react-router-dom";
import { CustomButton } from "./custom-button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold gradient-text">
          SaaSFlow
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-4">
          <Link to="/login">
            <CustomButton variant="ghost" size="sm">
              Login
            </CustomButton>
          </Link>
          <Link to="/signup">
            <CustomButton variant="hero" size="sm">
              Sign Up
            </CustomButton>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;