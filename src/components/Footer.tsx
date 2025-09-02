import { Bot, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">ChikaRide AI</span>
            </div>
            <p className="text-muted-foreground">
              The future of intelligent mobility, powered by AI assistant Chika.
            </p>
          </div>

          {/* Platform */}
          <div className="space-y-4">
            <h3 className="font-semibold">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Riders</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Drivers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Fleet Operators</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API Documentation</a></li>
            </ul>
          </div>

          {/* AI Features */}
          <div className="space-y-4">
            <h3 className="font-semibold">AI Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Chika Assistant</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Voice Commands</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Smart Routing</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Predictive Analytics</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>hello@chikaride.ai</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ChikaRide AI. All rights reserved. Powered by intelligent technology.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;