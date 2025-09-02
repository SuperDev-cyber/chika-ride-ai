import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, Smartphone, Zap } from "lucide-react";
import heroPhone from "@/assets/hero-phone.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-glow"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent font-semibold">
                <Bot className="w-5 h-5" />
                <span>Powered by Chika AI</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                The Future of
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Smart </span>
                Mobility
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg">
                Experience next-generation ride-hailing with Chika, your AI assistant that thinks, learns, and optimizes every journey.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" className="group">
                Get Early Access
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="ai" size="lg">
                <Smartphone className="w-5 h-5" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Faster Matching</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">AI Assistant</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-glow">100%</div>
                <div className="text-sm text-muted-foreground">Smart Routes</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:pl-12">
            <div className="relative">
              <img 
                src={heroPhone}
                alt="ChikaRide AI App Interface"
                className="w-full max-w-md mx-auto rounded-3xl shadow-glow animate-float"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-accent">
                <Zap className="w-4 h-4 inline mr-1" />
                AI Powered
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;