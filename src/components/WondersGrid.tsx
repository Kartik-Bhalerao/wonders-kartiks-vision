import WonderCard from "./WonderCard";
import greatWallImage from "@/assets/great-wall.jpg";
import petraImage from "@/assets/petra.jpg";
import christRedeemerImage from "@/assets/christ-redeemer.jpg";
import machuPicchuImage from "@/assets/machu-picchu.jpg";
import chichenItzaImage from "@/assets/chichen-itza.jpg";
import colosseumImage from "@/assets/colosseum.jpg";
import tajMahalImage from "@/assets/taj-mahal.jpg";

const wonders = [
  {
    title: "Great Wall of China",
    location: "China",
    description: "A magnificent fortification system stretching over 13,000 miles, built over centuries to protect Chinese states from invasions. This architectural marvel showcases incredible engineering and human determination.",
    image: greatWallImage,
    year: "7th century BC - 1644 AD",
    civilization: "Chinese Dynasties"
  },
  {
    title: "Petra",
    location: "Jordan",
    description: "The Rose City carved into pink sandstone cliffs by the Nabataeans. This archaeological wonder features intricate facades and sophisticated water management systems that enabled a thriving desert civilization.",
    image: petraImage,
    year: "312 BC",
    civilization: "Nabataean Kingdom"
  },
  {
    title: "Christ the Redeemer",
    location: "Brazil",
    description: "An iconic Art Deco statue overlooking Rio de Janeiro from atop Corcovado mountain. Standing 98 feet tall, this symbol of Christianity and Brazilian culture welcomes millions of visitors annually.",
    image: christRedeemerImage,
    year: "1931 AD",
    civilization: "Modern Brazil"
  },
  {
    title: "Machu Picchu",
    location: "Peru",
    description: "The Lost City of the Incas, perched high in the Andes Mountains. This perfectly preserved citadel showcases sophisticated Incan architecture and agricultural terraces in breathtaking mountain scenery.",
    image: machuPicchuImage,
    year: "1450 AD",
    civilization: "Inca Empire"
  },
  {
    title: "Chichen Itza",
    location: "Mexico",
    description: "A large pre-Columbian archaeological site featuring the magnificent El Castillo pyramid. This Mayan city demonstrates advanced astronomical knowledge and serves as a testament to Mayan civilization.",
    image: chichenItzaImage,
    year: "600-1200 AD",
    civilization: "Maya Civilization"
  },
  {
    title: "Roman Colosseum",
    location: "Italy",
    description: "The largest amphitheater ever built, this iconic symbol of Imperial Rome could hold 80,000 spectators. Its innovative architecture and engineering continue to influence modern stadium design.",
    image: colosseumImage,
    year: "72-80 AD",
    civilization: "Roman Empire"
  },
  {
    title: "Taj Mahal",
    location: "India",
    description: "An ivory-white marble mausoleum built by Mughal emperor Shah Jahan for his beloved wife. This symbol of eternal love combines Persian, Islamic, and Indian architectural styles in perfect harmony.",
    image: tajMahalImage,
    year: "1632-1653 AD",
    civilization: "Mughal Empire"
  }
];

const WondersGrid = () => {
  return (
    <section id="wonders" className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 shimmer">
            The Seven Wonders
          </h2>
          <div className="golden-divider" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Each wonder tells a unique story of human achievement, artistic vision, 
            and cultural significance that has captivated the world for generations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {wonders.map((wonder, index) => (
            <div 
              key={wonder.title}
              className="fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <WonderCard {...wonder} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WondersGrid;