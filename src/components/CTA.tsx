import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Mail, Smartphone } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6">
        <Card className="bg-gradient-card border-primary/20 shadow-glow p-12 text-center max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Ready to Experience the
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Future </span>
                of Mobility?
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join the waitlist to be among the first to experience ChikaRide AI. Get early access to beta testing and special launch pricing.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="hero" size="lg" className="group">
                <Mail className="w-5 h-5" />
                Join Waitlist
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="accent" size="lg">
                <Smartphone className="w-5 h-5" />
                Request Demo
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Early Access</div>
                <div className="text-sm text-muted-foreground">Beta testing program</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50% Off</div>
                <div className="text-sm text-muted-foreground">Launch pricing</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary-glow">24/7</div>
                <div className="text-sm text-muted-foreground">Priority support</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CTA;