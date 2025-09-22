import { CustomButton } from "@/components/ui/custom-button";
import Navigation from "@/components/ui/navigation";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      title: "Business Intelligence",
      description: "Advanced analytics and reporting tools to help you make data-driven decisions.",
      features: ["Real-time dashboards", "Custom reports", "Predictive analytics", "Data visualization"],
    },
    {
      title: "Workflow Automation",
      description: "Streamline your processes with intelligent automation and workflow management.",
      features: ["Process automation", "Task scheduling", "Integration hub", "Custom workflows"],
    },
    {
      title: "Team Management",
      description: "Comprehensive tools for managing teams, projects, and collaboration.",
      features: ["Project tracking", "Team collaboration", "Performance metrics", "Resource planning"],
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security features to keep your data safe and compliant.",
      features: ["Data encryption", "Access controls", "Audit trails", "Compliance reporting"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions designed to accelerate your business growth 
              and streamline your operations across all departments.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="glass-effect rounded-2xl p-8 hover:scale-105 transition-transform"
              >
                <h3 className="text-3xl font-bold mb-4 text-primary">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact">
                  <CustomButton variant="outline" className="w-full">
                    Learn More
                  </CustomButton>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We offer tailored solutions to meet your specific business requirements. 
              Contact us to discuss your unique needs.
            </p>
            <Link to="/contact">
              <CustomButton variant="hero" size="lg">
                Contact Our Team
              </CustomButton>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;