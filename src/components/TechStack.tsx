import { Card } from "@/components/ui/card";
import { 
  Brain, 
  Cloud, 
  Smartphone, 
  Database,
  Cpu,
  Globe
} from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      icon: Brain,
      title: "AI & Machine Learning",
      technologies: ["OpenAI GPT API", "Rasa NLP", "TensorFlow", "Scikit-learn"],
      color: "text-primary"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      technologies: ["Flutter", "React Native", "iOS", "Android"],
      color: "text-accent"
    },
    {
      icon: Cloud,
      title: "Cloud Infrastructure",
      technologies: ["AWS/GCP", "Kubernetes", "Redis", "Docker"],
      color: "text-primary-glow"
    },
    {
      icon: Database,
      title: "Backend & Database",
      technologies: ["Node.js", "Laravel", "PostgreSQL", "MySQL"],
      color: "text-accent"
    },
    {
      icon: Cpu,
      title: "Voice & Speech",
      technologies: ["Whisper", "ElevenLabs", "Amazon Polly", "Speech Recognition"],
      color: "text-primary"
    },
    {
      icon: Globe,
      title: "Maps & Navigation",
      technologies: ["Google Maps API", "Mapbox", "PostGIS", "Real-time Tracking"],
      color: "text-primary-glow"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Built on
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Cutting-Edge </span>
            Technology
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ChikaRide leverages the latest in AI, cloud computing, and mobile technology to deliver an unparalleled ride-hailing experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {techCategories.map((category, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-card group">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-card/50 rounded-lg flex items-center justify-center border border-border/50 group-hover:border-primary/20 transition-colors">
                    <category.icon className={`w-5 h-5 ${category.color}`} />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="space-y-2">
                  {category.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Development Roadmap */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8">
            Development
            <span className="bg-gradient-accent bg-clip-text text-transparent"> Roadmap</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-card border-primary/20">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">1</span>
                </div>
                <h4 className="font-semibold text-lg">MVP Phase</h4>
                <p className="text-sm text-muted-foreground">
                  Core ride-hailing with basic Chika AI, auto-assignment, and mobile apps
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-accent/20">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-accent font-bold">2</span>
                </div>
                <h4 className="font-semibold text-lg">AI Expansion</h4>
                <p className="text-sm text-muted-foreground">
                  Advanced voice features, enroute matching, and safety monitoring
                </p>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-card border-primary-glow/20">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary-glow/20 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-primary-glow font-bold">3</span>
                </div>
                <h4 className="font-semibold text-lg">Full Scale</h4>
                <p className="text-sm text-muted-foreground">
                  Predictive analytics, multilingual AI, and continuous learning systems
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;