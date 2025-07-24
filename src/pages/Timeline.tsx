import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin, Users } from "lucide-react";

const Timeline = () => {
  const [selectedEra, setSelectedEra] = useState("all");

  const timelineData = [
    {
      period: "Ancient Era",
      timeRange: "7th century BC - 5th century AD",
      era: "ancient",
      events: [
        {
          year: "7th century BC",
          title: "Great Wall Construction Begins",
          location: "China",
          description: "Early fortifications built by various Chinese states during the Warring States period.",
          civilization: "Chinese Dynasties"
        },
        {
          year: "312 BC",
          title: "Petra Founded",
          location: "Jordan",
          description: "The Nabataeans establish their capital city, carving magnificent structures into rose-red cliffs.",
          civilization: "Nabataean Kingdom"
        },
        {
          year: "72-80 AD",
          title: "Colosseum Built",
          location: "Rome, Italy",
          description: "The Flavian Amphitheatre constructed under emperors Vespasian and Titus.",
          civilization: "Roman Empire"
        }
      ]
    },
    {
      period: "Medieval Era",
      timeRange: "600 - 1500 AD",
      era: "medieval",
      events: [
        {
          year: "600-1200 AD",
          title: "Chichen Itza Flourishes",
          location: "Mexico",
          description: "Maya civilization builds this magnificent ceremonial center with advanced astronomical knowledge.",
          civilization: "Maya Civilization"
        },
        {
          year: "1450 AD",
          title: "Machu Picchu Constructed",
          location: "Peru",
          description: "Inca emperor Pachacuti builds this mountain citadel as a royal estate and sacred site.",
          civilization: "Inca Empire"
        },
        {
          year: "1632-1653 AD",
          title: "Taj Mahal Built",
          location: "India",
          description: "Shah Jahan creates this marble mausoleum as an eternal symbol of love for his wife Mumtaz Mahal.",
          civilization: "Mughal Empire"
        }
      ]
    },
    {
      period: "Modern Era",
      timeRange: "1900 - Present",
      era: "modern",
      events: [
        {
          year: "1922-1931",
          title: "Christ the Redeemer Built",
          location: "Brazil",
          description: "Art Deco statue constructed atop Corcovado mountain as a symbol of Christianity and Brazilian hospitality.",
          civilization: "Modern Brazil"
        },
        {
          year: "2007",
          title: "New Seven Wonders Chosen",
          location: "Global",
          description: "Worldwide poll determines the New Seven Wonders of the World through millions of votes.",
          civilization: "Global Civilization"
        }
      ]
    }
  ];

  const filteredData = selectedEra === "all" 
    ? timelineData 
    : timelineData.filter(era => era.era === selectedEra);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-wonder">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 hero-text">
            Journey Through Time
          </h1>
          <div className="golden-divider" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the fascinating timeline of how these magnificent wonders came to be, 
            spanning over 2,000 years of human achievement and architectural brilliance.
          </p>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="py-8 px-4 border-b border-border">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {["all", "ancient", "medieval", "modern"].map((era) => (
              <button
                key={era}
                onClick={() => setSelectedEra(era)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedEra === era
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                }`}
              >
                {era === "all" ? "All Eras" : `${era.charAt(0).toUpperCase()}${era.slice(1)} Era`}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {filteredData.map((era, eraIndex) => (
            <div key={era.period} className="mb-16 last:mb-0">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2 shimmer">{era.period}</h2>
                <p className="text-muted-foreground">{era.timeRange}</p>
              </div>
              
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-hero rounded-full" />
                
                {era.events.map((event, eventIndex) => (
                  <div 
                    key={`${era.period}-${eventIndex}`}
                    className={`relative flex items-center mb-12 ${
                      eventIndex % 2 === 0 ? "justify-start" : "justify-end"
                    }`}
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full border-4 border-background shadow-lg animate-glow" />
                    
                    {/* Event Card */}
                    <div className={`w-5/12 ${eventIndex % 2 === 0 ? "pr-8" : "pl-8"}`}>
                      <Card className="wonder-card">
                        <CardContent className="p-6">
                          <div className="mb-4">
                            <div className="text-2xl font-bold text-primary mb-2">{event.year}</div>
                            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                            <div className="flex items-center text-sm text-muted-foreground mb-3">
                              <MapPin className="h-4 w-4 mr-1" />
                              {event.location}
                            </div>
                          </div>
                          <p className="text-foreground/80 leading-relaxed mb-4">
                            {event.description}
                          </p>
                          <div className="flex items-center text-sm text-primary font-medium">
                            <Users className="h-4 w-4 mr-1" />
                            {event.civilization}
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Timeline;