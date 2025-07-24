import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Filter, Grid, List } from "lucide-react";

// Import images
import greatWallImage from "@/assets/great-wall.jpg";
import petraImage from "@/assets/petra.jpg";
import christRedeemerImage from "@/assets/christ-redeemer.jpg";
import machuPicchuImage from "@/assets/machu-picchu.jpg";
import chichenItzaImage from "@/assets/chichen-itza.jpg";
import colosseumImage from "@/assets/colosseum.jpg";
import tajMahalImage from "@/assets/taj-mahal.jpg";
import heroImage from "@/assets/hero-wonders.jpg";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  const galleryItems = [
    {
      title: "Seven Wonders Montage",
      image: heroImage,
      category: "overview",
      description: "A stunning compilation showcasing all seven wonders in their magnificent glory."
    },
    {
      title: "Great Wall Majesty",
      image: greatWallImage,
      category: "architecture",
      description: "The serpentine wall winds through misty mountains, showcasing ancient Chinese engineering."
    },
    {
      title: "Petra's Rose Glory",
      image: petraImage,
      category: "architecture",
      description: "The Treasury emerges from rose-red cliffs, a testament to Nabataean artistry."
    },
    {
      title: "Christ's Embrace",
      image: christRedeemerImage,
      category: "modern",
      description: "The Art Deco statue watches over Rio, arms spread in eternal welcome."
    },
    {
      title: "Machu Picchu Mystique",
      image: machuPicchuImage,
      category: "landscape",
      description: "Ancient Incan terraces blend harmoniously with the dramatic Andes peaks."
    },
    {
      title: "Mayan Precision",
      image: chichenItzaImage,
      category: "architecture",
      description: "El Castillo pyramid demonstrates the Maya's sophisticated astronomical knowledge."
    },
    {
      title: "Roman Grandeur",
      image: colosseumImage,
      category: "architecture",
      description: "The mighty amphitheater stands as an eternal symbol of Roman engineering prowess."
    },
    {
      title: "Taj's Eternal Love",
      image: tajMahalImage,
      category: "architecture",
      description: "Pristine marble reflects the sky, embodying Shah Jahan's undying devotion."
    }
  ];

  const categories = [
    { id: "all", name: "All Images" },
    { id: "architecture", name: "Architecture" },
    { id: "landscape", name: "Landscapes" },
    { id: "modern", name: "Modern" },
    { id: "overview", name: "Overview" }
  ];

  const filteredItems = selectedCategory === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-wonder">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 hero-text">
            Visual Gallery
          </h1>
          <div className="golden-divider" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Immerse yourself in breathtaking imagery that captures the essence, beauty, 
            and grandeur of the Seven Wonders of the World.
          </p>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8 px-4 border-b border-border">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category.id)}
                  className="transition-all duration-300"
                >
                  <Filter className="h-4 w-4 mr-2" />
                  {category.name}
                </Button>
              ))}
            </div>
            
            {/* View Toggle */}
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          {viewMode === "grid" ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="wonder-card group overflow-hidden cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                      <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {filteredItems.map((item, index) => (
                <Card 
                  key={index} 
                  className="wonder-card overflow-hidden"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <CardContent className="md:w-2/3 p-6">
                      <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                      <p className="text-foreground/80 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Gallery;