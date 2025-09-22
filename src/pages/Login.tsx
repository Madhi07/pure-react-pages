import { useState } from "react";
import { Link } from "react-router-dom";
import { CustomButton } from "@/components/ui/custom-button";
import { CustomInput } from "@/components/ui/custom-input";
import Navigation from "@/components/ui/navigation";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });

  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    console.log("Login attempt:", credentials);
    // Handle login logic here
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-24 pb-20 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="glass-effect rounded-2xl p-8">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
              <p className="text-muted-foreground">
                Sign in to your SaaSFlow account
              </p>
            </div>

            <div className="space-y-6">
              <CustomInput
                placeholder="Email Address"
                type="email"
                value={credentials.email}
                onValueChange={(value) => setCredentials({...credentials, email: value})}
              />
              
              <CustomInput
                placeholder="Password"
                type="password"
                value={credentials.password}
                onValueChange={(value) => setCredentials({...credentials, password: value})}
              />

              {/* Remember Me Toggle */}
              <div className="flex items-center justify-between">
                <div 
                  className="flex items-center cursor-pointer"
                  onClick={() => setRememberMe(!rememberMe)}
                >
                  <div className={`w-5 h-5 rounded border-2 mr-3 flex items-center justify-center transition-all ${
                    rememberMe 
                      ? 'bg-primary border-primary' 
                      : 'border-border hover:border-primary'
                  }`}>
                    {rememberMe && (
                      <div className="w-2 h-2 bg-white rounded-sm"></div>
                    )}
                  </div>
                  <span className="text-sm text-foreground">Remember me</span>
                </div>
                
                <button className="text-sm text-primary hover:underline">
                  Forgot password?
                </button>
              </div>

              <CustomButton 
                variant="hero" 
                size="lg" 
                className="w-full"
                onClick={handleLogin}
              >
                Sign In
              </CustomButton>

              {/* Social Login Alternatives */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-card text-muted-foreground">Or continue with</span>
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
                Don't have an account?{" "}
                <Link to="/signup" className="text-primary hover:underline font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;