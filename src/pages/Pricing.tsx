import { CustomButton } from "@/components/ui/custom-button";
import Navigation from "@/components/ui/navigation";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "29",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 5 team members",
        "Basic analytics",
        "Standard support",
        "5GB storage",
        "Core integrations",
      ],
      popular: false,
    },
    {
      name: "Professional",
      price: "79",
      description: "Ideal for growing businesses",
      features: [
        "Up to 25 team members",
        "Advanced analytics",
        "Priority support",
        "50GB storage",
        "All integrations",
        "Custom workflows",
      ],
      popular: true,
    },
    {
      name: "Enterprise",
      price: "199",
      description: "For large organizations",
      features: [
        "Unlimited team members",
        "Business intelligence",
        "Dedicated support",
        "Unlimited storage",
        "Custom integrations",
        "Advanced security",
        "SLA guarantee",
      ],
      popular: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Simple <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect plan for your business. All plans include our core features 
              with no hidden fees or long-term commitments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`glass-effect rounded-2xl p-8 hover:scale-105 transition-transform relative ${
                  plan.popular ? 'ring-2 ring-primary glow-effect' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-4xl font-bold text-primary">${plan.price}</span>
                    <span className="text-muted-foreground ml-2">/month</span>
                  </div>
                  <p className="text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/signup">
                  <CustomButton 
                    variant={plan.popular ? "hero" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    Get Started
                  </CustomButton>
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">
              All Plans Include
            </h2>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {[
                "99.9% Uptime SLA",
                "Data Encryption",
                "API Access",
                "Mobile Apps"
              ].map((item, index) => (
                <div key={index} className="glass-effect rounded-xl p-4">
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;