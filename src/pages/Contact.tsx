import { useState } from "react";
import { CustomButton } from "@/components/ui/custom-button";
import { CustomInput } from "@/components/ui/custom-input";
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

  const topics = [
    "General Inquiry",
    "Sales & Pricing",
    "Technical Support",
    "Partnership Opportunity",
    "Feature Request",
    "Demo Request"
  ];

  const companySizes = [
    "1-10 employees",
    "11-50 employees", 
    "51-200 employees",
    "201-1000 employees",
    "1000+ employees"
  ];

  const budgetRanges = [
    "Under $5,000",
    "$5,000 - $15,000",
    "$15,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000"
  ];

  const urgencyOptions = [
    "Just exploring",
    "Within 3 months",
    "Within 1 month",
    "ASAP"
  ];

  const contactMethods = [
    "Email",
    "Phone call",
    "Video call",
    "In-person meeting"
  ];

  const sourceOptions = [
    "Google search",
    "Social media",
    "Referral",
    "Industry event",
    "Partner recommendation",
    "Advertisement",
    "Other"
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
                  <p className="text-sm font-medium mb-3 text-foreground">Company Size</p>
                  <div className="grid grid-cols-1 gap-2">
                    {companySizes.map((size) => (
                      <div
                        key={size}
                        onClick={() => setFormData({...formData, companySize: size})}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          formData.companySize === size
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50 hover:bg-accent/50'
                        }`}
                      >
                        {size}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Topic Selection */}
                <div>
                  <p className="text-sm font-medium mb-3 text-foreground">What can we help you with?</p>
                  <div className="grid grid-cols-2 gap-2">
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

                {/* Budget Range (show only for sales inquiries) */}
                {(selectedTopic === 'Sales & Pricing' || selectedTopic === 'Demo Request') && (
                  <div>
                    <p className="text-sm font-medium mb-3 text-foreground">Budget Range (Annual)</p>
                    <div className="grid grid-cols-2 gap-2">
                      {budgetRanges.map((budget) => (
                        <div
                          key={budget}
                          onClick={() => setSelectedBudget(budget)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all ${
                            selectedBudget === budget
                              ? 'border-primary bg-primary/10 text-primary'
                              : 'border-border hover:border-primary/50 hover:bg-accent/50'
                          }`}
                        >
                          {budget}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Timeline/Urgency */}
                <div>
                  <p className="text-sm font-medium mb-3 text-foreground">Timeline</p>
                  <div className="grid grid-cols-2 gap-2">
                    {urgencyOptions.map((urgency) => (
                      <div
                        key={urgency}
                        onClick={() => setSelectedUrgency(urgency)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          selectedUrgency === urgency
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50 hover:bg-accent/50'
                        }`}
                      >
                        {urgency}
                      </div>
                    ))}
                  </div>
                </div>

                {/* How did you hear about us */}
                <div>
                  <p className="text-sm font-medium mb-3 text-foreground">How did you hear about us?</p>
                  <div className="grid grid-cols-2 gap-2">
                    {sourceOptions.map((source) => (
                      <div
                        key={source}
                        onClick={() => setSelectedSource(source)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          selectedSource === source
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50 hover:bg-accent/50'
                        }`}
                      >
                        {source}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <p className="text-sm font-medium mb-3 text-foreground">Preferred Contact Method</p>
                  <div className="grid grid-cols-2 gap-2">
                    {contactMethods.map((method) => (
                      <div
                        key={method}
                        onClick={() => setPreferredContact(method)}
                        className={`p-3 rounded-xl border cursor-pointer transition-all ${
                          preferredContact === method
                            ? 'border-primary bg-primary/10 text-primary'
                            : 'border-border hover:border-primary/50 hover:bg-accent/50'
                        }`}
                      >
                        {method}
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