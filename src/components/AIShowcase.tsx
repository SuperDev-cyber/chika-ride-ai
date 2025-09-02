import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Mic, MessageCircle, BarChart3 } from "lucide-react";
import aiNetwork from "@/assets/ai-network.jpg";
import driverAi from "@/assets/driver-ai.jpg";

const AIShowcase = () => {
  const aiCapabilities = [
    {
      icon: Bot,
      title: "Auto Assignment",
      description: "AI optimizes driver-rider matching based on proximity, traffic, and preferences.",
      color: "text-primary"
    },
    {
      icon: Mic,
      title: "Voice Interface",
      description: "Natural language processing enables hands-free operation for drivers.",
      color: "text-accent"
    },
    {
      icon: MessageCircle,
      title: "Conversational AI",
      description: "Chika understands context and provides intelligent responses to complex queries.",
      color: "text-primary-glow"
    },
    {
      icon: BarChart3,
      title: "Predictive Analytics",
      description: "Machine learning models forecast demand patterns and optimize fleet deployment.",
      color: "text-accent"
    }
  ];

  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent font-semibold">
                <Bot className="w-5 h-5" />
                <span>Chika AI Engine</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Meet Your
                <span className="bg-gradient-primary bg-clip-text text-transparent"> AI Companion</span>
              </h2>
              <p className="text-xl text-muted-foreground">
                Chika isn't just an assistant—it's an intelligent system that learns, adapts, and optimizes every aspect of your mobility experience.
              </p>
            </div>

            <div className="space-y-6">
              {aiCapabilities.map((capability, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-card/50 rounded-lg flex items-center justify-center border border-border/50">
                    <capability.icon className={`w-5 h-5 ${capability.color}`} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold text-lg">{capability.title}</h3>
                    <p className="text-muted-foreground">{capability.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="accent" size="lg">
              Explore AI Features
            </Button>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative">
              <img 
                src={aiNetwork}
                alt="AI Network Visualization"
                className="w-full rounded-2xl shadow-glow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent rounded-2xl"></div>
            </div>
            
            {/* Floating cards */}
            <Card className="absolute -bottom-8 -left-8 p-4 bg-gradient-card border-primary/20 shadow-glow">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold">Chika</div>
                  <div className="text-sm text-muted-foreground">Online & Learning</div>
                </div>
              </div>
            </Card>

            <Card className="absolute -top-4 -right-4 p-3 bg-gradient-card border-accent/20 shadow-accent">
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">99.9%</div>
                <div className="text-xs text-muted-foreground">AI Accuracy</div>
              </div>
            </Card>
          </div>
        </div>

        {/* Driver AI Section */}
        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">
          <div className="lg:order-2 space-y-6">
            <h3 className="text-3xl font-bold">
              Voice-First
              <span className="bg-gradient-accent bg-clip-text text-transparent"> Driver Experience</span>
            </h3>
            <p className="text-lg text-muted-foreground">
              Drivers can interact with Chika using natural voice commands, keeping their hands on the wheel and eyes on the road while staying connected to the platform.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mic className="w-5 h-5 text-accent" />
                <span>"Chika, any jobs on my route?"</span>
              </div>
              <div className="flex items-center gap-3">
                <Mic className="w-5 h-5 text-accent" />
                <span>"How much have I earned today?"</span>
              </div>
              <div className="flex items-center gap-3">
                <Mic className="w-5 h-5 text-accent" />
                <span>"Show me the safest route home"</span>
              </div>
            </div>
          </div>
          
          <div className="lg:order-1">
            <img 
              src={driverAi}
              alt="Driver using AI voice commands"
              className="w-full rounded-2xl shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIShowcase;