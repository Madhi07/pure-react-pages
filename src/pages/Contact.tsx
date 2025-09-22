import { useState } from "react";
import { CustomButton } from "@/components/ui/custom-button";
import { CustomInput } from "@/components/ui/custom-input";
import Navigation from "@/components/ui/navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [selectedTopic, setSelectedTopic] = useState('');

  const topics = [
    "General Inquiry",
    "Sales Question",
    "Technical Support",
    "Partnership",
    "Feature Request"
  ];

  const handleSubmit = () => {
    console.log("Form submitted:", { ...formData, topic: selectedTopic });
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have questions about our platform? Want to schedule a demo? 
              We'd love to hear from you and help you find the perfect solution.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
              
              <div className="space-y-6">
                <CustomInput
                  placeholder="Your Name"
                  value={formData.name}
                  onValueChange={(value) => setFormData({...formData, name: value})}
                />
                
                <CustomInput
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onValueChange={(value) => setFormData({...formData, email: value})}
                />
                
                <CustomInput
                  placeholder="Company Name"
                  value={formData.company}
                  onValueChange={(value) => setFormData({...formData, company: value})}
                />

                {/* Topic Selection */}
                <div>
                  <p className="text-sm font-medium mb-3 text-foreground">What can we help you with?</p>
                  <div className="grid grid-cols-1 gap-2">
                    {topics.map((topic) => (
                      <div
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          selectedTopic === topic
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50 hover:bg-accent/50'
                        }`}
                      >
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Message Textarea Alternative */}
                <div>
                  <div
                    className="min-h-[120px] w-full rounded-xl border border-border bg-card px-4 py-3 text-sm transition-all focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 hover:border-primary/50 cursor-text glass-effect"
                    onClick={() => {
                      const input = prompt("Enter your message:");
                      if (input) setFormData({...formData, message: input});
                    }}
                  >
                    {formData.message ? (
                      <span className="text-foreground whitespace-pre-wrap">{formData.message}</span>
                    ) : (
                      <span className="text-muted-foreground">Tell us about your project or question...</span>
                    )}
                  </div>
                </div>

                <CustomButton 
                  variant="hero" 
                  size="lg" 
                  className="w-full"
                  onClick={handleSubmit}
                >
                  Send Message
                </CustomButton>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Email</h4>
                    <p className="text-muted-foreground">hello@saasflow.com</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-1">Office</h4>
                    <p className="text-muted-foreground">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6">Support Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Monday - Friday</span>
                    <span className="text-foreground">9:00 AM - 6:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Saturday</span>
                    <span className="text-foreground">10:00 AM - 4:00 PM PST</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sunday</span>
                    <span className="text-foreground">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;