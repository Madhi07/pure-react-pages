import { useState } from "react";
import { CustomButton } from "@/components/ui/custom-button";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomSelect } from "@/components/ui/custom-select";
import Navigation from "@/components/ui/navigation";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    jobTitle: '',
    company: '',
    companySize: '',
    message: ''
  });

  const [selectedTopic, setSelectedTopic] = useState('');
  const [selectedSource, setSelectedSource] = useState('');
  const [selectedBudget, setSelectedBudget] = useState('');
  const [selectedUrgency, setSelectedUrgency] = useState('');
  const [preferredContact, setPreferredContact] = useState('');

  const topicOptions = [
    { value: "general", label: "General Inquiry" },
    { value: "sales", label: "Sales & Pricing" },
    { value: "support", label: "Technical Support" },
    { value: "partnership", label: "Partnership Opportunity" },
    { value: "feature", label: "Feature Request" },
    { value: "demo", label: "Demo Request" }
  ];

  const companySizeOptions = [
    { value: "1-10", label: "1-10 employees" },
    { value: "11-50", label: "11-50 employees" },
    { value: "51-200", label: "51-200 employees" },
    { value: "201-1000", label: "201-1000 employees" },
    { value: "1000+", label: "1000+ employees" }
  ];

  const budgetOptions = [
    { value: "under-5k", label: "Under $5,000" },
    { value: "5k-15k", label: "$5,000 - $15,000" },
    { value: "15k-50k", label: "$15,000 - $50,000" },
    { value: "50k-100k", label: "$50,000 - $100,000" },
    { value: "over-100k", label: "Over $100,000" }
  ];

  const urgencyOptions = [
    { value: "exploring", label: "Just exploring" },
    { value: "3-months", label: "Within 3 months" },
    { value: "1-month", label: "Within 1 month" },
    { value: "asap", label: "ASAP" }
  ];

  const contactMethodOptions = [
    { value: "email", label: "Email" },
    { value: "phone", label: "Phone call" },
    { value: "video", label: "Video call" },
    { value: "in-person", label: "In-person meeting" }
  ];

  const sourceOptions = [
    { value: "google", label: "Google search" },
    { value: "social", label: "Social media" },
    { value: "referral", label: "Referral" },
    { value: "event", label: "Industry event" },
    { value: "partner", label: "Partner recommendation" },
    { value: "ad", label: "Advertisement" },
    { value: "other", label: "Other" }
  ];

  const handleSubmit = () => {
    console.log("Form submitted:", { 
      ...formData, 
      topic: selectedTopic,
      companySize: formData.companySize,
      source: selectedSource,
      budget: selectedBudget,
      urgency: selectedUrgency,
      preferredContact: preferredContact
    });
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
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <CustomInput
                    placeholder="First Name"
                    value={formData.firstName}
                    onValueChange={(value) => setFormData({...formData, firstName: value})}
                  />
                  <CustomInput
                    placeholder="Last Name"
                    value={formData.lastName}
                    onValueChange={(value) => setFormData({...formData, lastName: value})}
                  />
                </div>
                
                {/* Contact Information */}
                <CustomInput
                  placeholder="Email Address"
                  type="email"
                  value={formData.email}
                  onValueChange={(value) => setFormData({...formData, email: value})}
                />
                
                <CustomInput
                  placeholder="Phone Number"
                  value={formData.phone}
                  onValueChange={(value) => setFormData({...formData, phone: value})}
                />

                {/* Professional Information */}
                <div className="grid grid-cols-2 gap-4">
                  <CustomInput
                    placeholder="Job Title"
                    value={formData.jobTitle}
                    onValueChange={(value) => setFormData({...formData, jobTitle: value})}
                  />
                  <CustomInput
                    placeholder="Company Name"
                    value={formData.company}
                    onValueChange={(value) => setFormData({...formData, company: value})}
                  />
                </div>

                {/* Company Size Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 text-foreground block">Company Size</label>
                  <CustomSelect
                    placeholder="Select company size"
                    options={companySizeOptions}
                    value={formData.companySize}
                    onChange={(e) => setFormData({...formData, companySize: e.target.value})}
                  />
                </div>

                {/* Topic Selection */}
                <div>
                  <label className="text-sm font-medium mb-3 text-foreground block">What can we help you with?</label>
                  <CustomSelect
                    placeholder="Select inquiry type"
                    options={topicOptions}
                    value={selectedTopic}
                    onChange={(e) => setSelectedTopic(e.target.value)}
                  />
                </div>

                {/* Budget Range (show only for sales inquiries) */}
                {(selectedTopic === 'sales' || selectedTopic === 'demo') && (
                  <div>
                    <label className="text-sm font-medium mb-3 text-foreground block">Budget Range (Annual)</label>
                    <CustomSelect
                      placeholder="Select budget range"
                      options={budgetOptions}
                      value={selectedBudget}
                      onChange={(e) => setSelectedBudget(e.target.value)}
                    />
                  </div>
                )}

                {/* Timeline/Urgency */}
                <div>
                  <label className="text-sm font-medium mb-3 text-foreground block">Timeline</label>
                  <CustomSelect
                    placeholder="Select timeline"
                    options={urgencyOptions}
                    value={selectedUrgency}
                    onChange={(e) => setSelectedUrgency(e.target.value)}
                  />
                </div>

                {/* How did you hear about us */}
                <div>
                  <label className="text-sm font-medium mb-3 text-foreground block">How did you hear about us?</label>
                  <CustomSelect
                    placeholder="Select source"
                    options={sourceOptions}
                    value={selectedSource}
                    onChange={(e) => setSelectedSource(e.target.value)}
                  />
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="text-sm font-medium mb-3 text-foreground block">Preferred Contact Method</label>
                  <CustomSelect
                    placeholder="Select contact method"
                    options={contactMethodOptions}
                    value={preferredContact}
                    onChange={(e) => setPreferredContact(e.target.value)}
                  />
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