import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wonders.jpg";

const Hero = () => {
  const scrollToWonders = () => {
    document.getElementById('wonders')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Seven Wonders of the World" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text">
            Seven Wonders
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white/90">
            of the World
          </h2>
          
          <div className="golden-divider" />
          
          <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            Embark on a journey through time and marvel at humanity's greatest architectural achievements. 
            Discover the stories, mysteries, and beauty of these magnificent wonders.
          </p>
          
          <Button 
            onClick={scrollToWonders}
            size="lg"
            className="bg-primary hover:bg-primary-glow text-primary-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg animate-glow"
          >
            Explore Wonders
          </Button>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-8 h-8 border-2 border-primary rounded-full animate-float opacity-30" />
        <div className="absolute bottom-32 right-20 w-6 h-6 border-2 border-primary-glow rounded-full animate-float opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute top-40 right-32 w-4 h-4 bg-primary rounded-full animate-float opacity-50" style={{ animationDelay: '4s' }} />
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;