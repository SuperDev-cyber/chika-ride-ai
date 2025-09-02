import { Card } from "@/components/ui/card";
import { 
  Bot, 
  MapPin, 
  Shield, 
  Zap, 
  Users, 
  BarChart3,
  MessageSquare,
  Route,
  Brain
} from "lucide-react";

const Features = () => {
  const riderFeatures = [
    {
      icon: Bot,
      title: "Chika AI Assistant",
      description: "Ask natural questions like 'When will I arrive?' and get instant, intelligent responses."
    },
    {
      icon: MapPin,
      title: "Smart Location",
      description: "AI-powered pickup point optimization and real-time ETA predictions."
    },
    {
      icon: Shield,
      title: "Safety First",
      description: "AI monitoring, SOS alerts, and ride sharing with emergency contacts."
    }
  ];

  const driverFeatures = [
    {
      icon: Zap,
      title: "Intelligent Job Matching",
      description: "Auto-assign, enroute matching, and back-to-back job optimization."
    },
    {
      icon: MessageSquare,
      title: "Voice Commands",
      description: "Hands-free communication with voice-to-text and AI assistance."
    },
    {
      icon: Route,
      title: "Smart Routing",
      description: "AI suggests optimal routes considering traffic, safety, and earnings."
    }
  ];

  const adminFeatures = [
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "AI-powered demand forecasting and fleet optimization insights."
    },
    {
      icon: Users,
      title: "Fleet Management",
      description: "Intelligent driver allocation and performance monitoring."
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "AI models that improve over time with every ride and interaction."
    }
  ];

  const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
    <Card className="p-6 bg-gradient-card border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-card group">
      <div className="space-y-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </Card>
  );

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            AI-Powered Features for
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Everyone</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chika AI transforms the ride-hailing experience for riders, drivers, and operators with intelligent automation and conversational interfaces.
          </p>
        </div>

        <div className="space-y-16">
          {/* Riders */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-accent bg-clip-text text-transparent">For Riders</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {riderFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          {/* Drivers */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-primary bg-clip-text text-transparent">For Drivers</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {driverFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          {/* Admins */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-center">
              <span className="bg-gradient-accent bg-clip-text text-transparent">For Operators</span>
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {adminFeatures.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;