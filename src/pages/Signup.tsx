import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "@/components/ui/custom-button";
import { CustomInput } from "@/components/ui/custom-input";
import Navigation from "@/components/ui/navigation";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [selectedPlan, setSelectedPlan] = useState('starter');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const plans = [
    { id: 'starter', name: 'Starter', price: '$29/month' },
    { id: 'professional', name: 'Professional', price: '$79/month' },
    { id: 'enterprise', name: 'Enterprise', price: '$199/month' }
  ];

  const handleSignup = () => {
    console.log("Signup attempt:", { ...formData, plan: selectedPlan, terms: agreedToTerms });
    // Handle signup logic here
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 flex items-center justify-center">
        <div className="w-full max-w-lg">
          <div className="glass-effect rounded-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Create Your Account</h1>
              <p className="text-muted-foreground">
                Join thousands of teams already using SaaSFlow
              </p>
            </div>

            <div className="space-y-6">
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

              <CustomInput
                placeholder="Email Address"
                type="email"
                value={formData.email}
                onValueChange={(value) => setFormData({...formData, email: value})}
              />
              
              <CustomInput
                placeholder="Password"
                type="password"
                value={formData.password}
                onValueChange={(value) => setFormData({...formData, password: value})}
              />
              
              <CustomInput
                placeholder="Confirm Password"
                type="password"
                value={formData.confirmPassword}
                onValueChange={(value) => setFormData({...formData, confirmPassword: value})}
              />

              {/* Plan Selection */}
              <div>
                <p className="text-sm font-medium mb-3 text-foreground">Choose your plan</p>
                <div className="space-y-2">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`p-4 rounded-xl border cursor-pointer transition-all ${
                        selectedPlan === plan.id
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border hover:border-primary/50 hover:bg-accent/50'
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{plan.name}</span>
                        <span className="text-sm">{plan.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Terms Agreement */}
              <div 
                className="flex items-start cursor-pointer"
                onClick={() => setAgreedToTerms(!agreedToTerms)}
              >
                <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all mt-0.5 ${
                  agreedToTerms 
                    ? 'bg-primary border-primary' 
                    : 'border-border hover:border-primary'
                }`}>
                  {agreedToTerms && (
                    <div className="w-2 h-2 bg-white rounded-sm"></div>
                  )}
                </div>
                <p className="text-sm text-foreground leading-relaxed">
                  I agree to the{" "}
                  <button className="text-primary hover:underline">
                    Terms of Service
                  </button>
                  {" "}and{" "}
                  <button className="text-primary hover:underline">
                    Privacy Policy
                  </button>
                </p>
              </div>

              <CustomButton 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={handleSignup}
              >
                Start Free Trial
              </CustomButton>

              {/* Social Signup Alternatives */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-muted-foreground">Or sign up with</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <CustomButton variant="outline" size="lg">
                  Google
                </CustomButton>
                <CustomButton variant="outline" size="lg">
                  GitHub
                </CustomButton>
              </div>

              <p className="text-center text-sm text-muted-foreground">
                Already have an account?{" "}
                <Link to="/login" className="text-primary hover:underline font-medium">
                  Sign in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;