import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Target, Lightbulb, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-wonder">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 hero-text">
            About This Journey
          </h1>
          <div className="golden-divider" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the passion and vision behind this digital celebration 
            of humanity's greatest architectural achievements.
          </p>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 shimmer">Created by Kartik</h2>
            <div className="golden-divider" />
          </div>
          
          <Card className="wonder-card mb-12">
            <CardContent className="p-8 text-center">
              <div className="w-32 h-32 bg-gradient-hero rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">K</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Kartik</h3>
              <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl mx-auto">
                A passionate developer and history enthusiast dedicated to bringing the wonders of our world 
                to life through innovative web experiences. This project represents a fusion of technology, 
                art, and historical appreciation, designed to inspire and educate visitors about humanity's 
                greatest architectural achievements.
              </p>
            </CardContent>
          </Card>

          {/* Mission & Vision */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="wonder-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold">Mission</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  To create an immersive digital experience that celebrates the Seven Wonders of the World, 
                  making their history, beauty, and cultural significance accessible to people around the globe 
                  through cutting-edge web design and storytelling.
                </p>
              </CardContent>
            </Card>

            <Card className="wonder-card">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Lightbulb className="h-8 w-8 text-primary mr-3" />
                  <h3 className="text-xl font-bold">Vision</h3>
                </div>
                <p className="text-foreground/80 leading-relaxed">
                  To inspire a deeper appreciation for world heritage and cultural diversity by showcasing 
                  these magnificent structures through modern technology, fostering global understanding 
                  and respect for our shared human legacy.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center shimmer">Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="wonder-card text-center">
                <CardContent className="p-6">
                  <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Passion</h4>
                  <p className="text-sm text-foreground/80">
                    Driven by love for history and architecture
                  </p>
                </CardContent>
              </Card>

              <Card className="wonder-card text-center">
                <CardContent className="p-6">
                  <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Excellence</h4>
                  <p className="text-sm text-foreground/80">
                    Committed to delivering outstanding experiences
                  </p>
                </CardContent>
              </Card>

              <Card className="wonder-card text-center">
                <CardContent className="p-6">
                  <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Innovation</h4>
                  <p className="text-sm text-foreground/80">
                    Using technology to tell ancient stories
                  </p>
                </CardContent>
              </Card>

              <Card className="wonder-card text-center">
                <CardContent className="p-6">
                  <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-bold mb-2">Purpose</h4>
                  <p className="text-sm text-foreground/80">
                    Educating and inspiring global audiences
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Technical Achievement */}
          <Card className="wonder-card">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Technical Excellence</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <h4 className="text-lg font-bold mb-2 text-primary">Modern Stack</h4>
                  <p className="text-sm text-foreground/80">
                    Built with React, TypeScript, and Tailwind CSS for optimal performance
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-primary">Responsive Design</h4>
                  <p className="text-sm text-foreground/80">
                    Perfectly optimized for all devices and screen sizes
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-2 text-primary">AI-Enhanced</h4>
                  <p className="text-sm text-foreground/80">
                    Features AI-generated imagery that captures each wonder's essence
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;