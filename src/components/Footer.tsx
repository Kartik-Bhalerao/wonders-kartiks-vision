const Footer = () => {
  return (
    <footer className="bg-gradient-overlay text-white py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4 hero-text">Seven Wonders of the World</h3>
          <div className="golden-divider" />
          <p className="text-white/80 mb-6">
            A journey through humanity's greatest architectural achievements
          </p>
        </div>
        
        <div className="border-t border-white/20 pt-8">
          <p className="text-white/60 mb-2">
            Created with ❤️ by <span className="text-primary font-semibold">Kartik</span>
          </p>
          <p className="text-sm text-white/40">
            Celebrating the wonders that unite our world through their beauty and history
          </p>
        </div>
        
        {/* Decorative elements */}
        <div className="flex justify-center space-x-8 mt-8 opacity-30">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
          <div className="w-2 h-2 bg-primary-glow rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;