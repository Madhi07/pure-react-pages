import { Link } from "react-router-dom";
import { CustomButton } from "@/components/ui/custom-button";
import Navigation from "@/components/ui/navigation";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const features = [
    {
      title: "Advanced Analytics",
      description: "Get deep insights into your business with our powerful analytics dashboard.",
    },
    {
      title: "Team Collaboration",
      description: "Work seamlessly with your team using our collaborative tools and workflows.",
    },
    {
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime guarantee for your peace of mind.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                Transform Your
                <span className="gradient-text block">Business Today</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
                Streamline your workflow, boost productivity, and scale your business 
                with our comprehensive SaaS platform designed for modern teams.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/signup">
                  <CustomButton variant="hero" size="xl" className="w-full sm:w-auto">
                    Start Free Trial
                  </CustomButton>
                </Link>
                <Link to="/services">
                  <CustomButton variant="glass" size="xl" className="w-full sm:w-auto">
                    Learn More
                  </CustomButton>
                </Link>
              </div>
            </div>
            <div className="flex-1">
              <img 
                src={heroImage} 
                alt="SaaS Platform Dashboard"
                className="w-full h-auto rounded-2xl shadow-2xl glow-effect"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Why Choose <span className="gradient-text">SaaSFlow</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform combines powerful features with intuitive design to help 
              you achieve your business goals faster than ever before.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform"
              >
                <h3 className="text-2xl font-bold mb-4 text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <div className="glass-effect rounded-3xl p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their 
              business with SaaSFlow. Start your free trial today.
            </p>
            <Link to="/signup">
              <CustomButton variant="hero" size="xl">
                Start Your Free Trial
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;