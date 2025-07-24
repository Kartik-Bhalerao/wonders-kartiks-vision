import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Users, MapPin, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Import images
import greatWallImage from "@/assets/great-wall.jpg";
import petraImage from "@/assets/petra.jpg";
import christRedeemerImage from "@/assets/christ-redeemer.jpg";
import machuPicchuImage from "@/assets/machu-picchu.jpg";
import chichenItzaImage from "@/assets/chichen-itza.jpg";
import colosseumImage from "@/assets/colosseum.jpg";
import tajMahalImage from "@/assets/taj-mahal.jpg";

const wondersData = {
  "great-wall": {
    title: "Great Wall of China",
    location: "China",
    image: greatWallImage,
    year: "7th century BC - 1644 AD",
    civilization: "Chinese Dynasties",
    description: "The Great Wall of China stands as one of humanity's most remarkable architectural achievements, stretching over 13,000 miles across northern China.",
    detailedInfo: {
      construction: "Built over many centuries by various Chinese dynasties, the wall we see today was largely constructed during the Ming Dynasty (1368-1644). It required the labor of millions of workers, including soldiers, peasants, and prisoners.",
      purpose: "Originally built to protect Chinese states and empires from invasions by nomadic groups from the north, the wall also served to regulate trade along the Silk Road.",
      architecture: "The wall varies in height from 15-30 feet and includes watchtowers, garrison stations, and fortresses. It's built using stones, bricks, wood, and earth.",
      significance: "Beyond its military purpose, the wall represents the unification of China and stands as a symbol of Chinese determination and engineering prowess."
    },
    facts: [
      "Contrary to popular belief, it's not visible from space with the naked eye",
      "Over 1 million people died during its construction",
      "It's not a single continuous wall but consists of multiple walls and fortifications",
      "The wall attracts over 10 million visitors annually"
    ]
  },
  "petra": {
    title: "Petra",
    location: "Jordan",
    image: petraImage,
    year: "312 BC",
    civilization: "Nabataean Kingdom",
    description: "Known as the Rose City, Petra is an archaeological marvel carved directly into pink sandstone cliffs by the ingenious Nabataean people.",
    detailedInfo: {
      construction: "The Nabataeans carved Petra directly into the rose-red sandstone cliffs around the 4th century BC. The intricate facades were carved from top to bottom with incredible precision.",
      purpose: "Petra served as the capital of the Nabataean Kingdom and was a crucial hub for trade routes connecting Arabia, Egypt, and Syria-Phoenicia.",
      architecture: "The city features elaborate tombs, temples, and a sophisticated water management system with cisterns, dams, and channels carved into the rock.",
      significance: "Petra demonstrates the Nabataeans' advanced engineering skills and their ability to create a thriving civilization in the harsh desert environment."
    },
    facts: [
      "Over 800 carved tombs and monuments exist in Petra",
      "The Treasury (Al-Khazneh) is 40 meters high and beautifully preserved",
      "Petra was lost to the Western world for over 1,000 years",
      "The site inspired the Holy Grail temple in Indiana Jones"
    ]
  },
  "christ-redeemer": {
    title: "Christ the Redeemer",
    location: "Brazil",
    image: christRedeemerImage,
    year: "1931 AD",
    civilization: "Modern Brazil",
    description: "This iconic Art Deco statue watches over Rio de Janeiro from atop Corcovado mountain, symbolizing peace and welcoming millions of visitors.",
    detailedInfo: {
      construction: "Designed by Brazilian engineer Heitor da Silva Costa and French sculptor Paul Landowski, the statue was built between 1922 and 1931.",
      purpose: "Created as a symbol of Christianity and Brazilian hospitality, representing peace and welcoming all who visit Rio de Janeiro.",
      architecture: "Standing 98 feet tall with arms spanning 92 feet, the statue is made of reinforced concrete and covered in thousands of triangular stone tiles.",
      significance: "The statue has become an international symbol of Christianity and is recognized worldwide as an icon of Rio de Janeiro and Brazil."
    },
    facts: [
      "Lightning strikes the statue about 6 times per year",
      "It weighs 635 metric tons",
      "The statue was elected one of the New Seven Wonders in 2007",
      "A railway takes visitors up the mountain to the base"
    ]
  },
  "machu-picchu": {
    title: "Machu Picchu",
    location: "Peru",
    image: machuPicchuImage,
    year: "1450 AD",
    civilization: "Inca Empire",
    description: "The Lost City of the Incas, this perfectly preserved citadel showcases sophisticated Incan architecture high in the Andes Mountains.",
    detailedInfo: {
      construction: "Built around 1450 during the reign of Inca emperor Pachacuti, the site was constructed using precisely cut stone blocks fitted together without mortar.",
      purpose: "Likely built as a royal estate for Pachacuti, it may have served as a sacred religious site and astronomical observatory.",
      architecture: "The site features over 150 buildings, including temples, residences, and agricultural terraces, all connected by a network of stone staircases.",
      significance: "Machu Picchu represents the pinnacle of Inca architectural and engineering achievement, demonstrating their mastery of mountain construction."
    },
    facts: [
      "It was never discovered by Spanish conquistadors",
      "The site was brought to international attention in 1911 by Hiram Bingham",
      "No wheels or iron tools were used in its construction",
      "The stones fit so perfectly that a knife blade cannot fit between them"
    ]
  },
  "chichen-itza": {
    title: "Chichen Itza",
    location: "Mexico",
    image: chichenItzaImage,
    year: "600-1200 AD",
    civilization: "Maya Civilization",
    description: "This large pre-Columbian archaeological site demonstrates the Maya's advanced astronomical knowledge and architectural prowess.",
    detailedInfo: {
      construction: "Built by the Maya civilization between 600-1200 AD, with the iconic El Castillo pyramid being the centerpiece of the complex.",
      purpose: "Served as a major focal point in the northern Maya lowlands and was likely a sacred site dedicated to the Maya feathered serpent deity Kukulkan.",
      architecture: "The El Castillo pyramid has 365 steps representing days of the year, and during equinoxes, shadows create the illusion of a serpent descending the stairs.",
      significance: "Chichen Itza showcases the Maya's sophisticated understanding of astronomy, mathematics, and acoustics in their architectural designs."
    },
    facts: [
      "The pyramid creates a perfect acoustic phenomenon - clap and hear a quetzal bird call",
      "Shadow effects during equinoxes were precisely calculated",
      "The Great Ball Court is the largest in Mesoamerica",
      "It was one of the largest Maya cities ever built"
    ]
  },
  "colosseum": {
    title: "Roman Colosseum",
    location: "Italy",
    image: colosseumImage,
    year: "72-80 AD",
    civilization: "Roman Empire",
    description: "The largest amphitheater ever built, this iconic symbol of Imperial Rome demonstrates the pinnacle of Roman engineering and architecture.",
    detailedInfo: {
      construction: "Built between 72-80 AD under emperors Vespasian and Titus, using travertine limestone, volcanic rock, and brick-faced concrete.",
      purpose: "Designed for gladiatorial contests and public spectacles including animal hunts, mock naval battles, and executions.",
      architecture: "Could hold 50,000-80,000 spectators across four stories, with a complex system of underground passages (hypogeum) for staging events.",
      significance: "The Colosseum introduced many architectural innovations still used today, including the use of arches and a sophisticated crowd control system."
    },
    facts: [
      "It had a retractable awning system called the velarium",
      "Over 400,000 people and 1 million animals died in the arena",
      "It remained in active use for approximately 400 years",
      "Parts of it were recycled to build other structures in Rome"
    ]
  },
  "taj-mahal": {
    title: "Taj Mahal",
    location: "India",
    image: tajMahalImage,
    year: "1632-1653 AD",
    civilization: "Mughal Empire",
    description: "An ivory-white marble mausoleum that represents the pinnacle of Mughal architecture and serves as an eternal symbol of love.",
    detailedInfo: {
      construction: "Built between 1632-1653 by Mughal emperor Shah Jahan as a tomb for his beloved wife Mumtaz Mahal, employing over 20,000 artisans.",
      purpose: "Created as a mausoleum for Mumtaz Mahal, who died during childbirth, it represents Shah Jahan's eternal love and grief.",
      architecture: "Features a perfect symmetrical design with a central dome, four minarets, and intricate inlay work using precious stones.",
      significance: "The Taj Mahal combines Persian, Islamic, and Indian architectural styles, representing the zenith of Mughal architecture."
    },
    facts: [
      "The white marble appears to change color throughout the day",
      "Over 1,000 elephants were used to transport materials",
      "The central dome is perfectly proportioned using the golden ratio",
      "It attracts over 6 million visitors annually"
    ]
  }
};

const WonderDetail = () => {
  const { wonderId } = useParams();
  const wonder = wondersData[wonderId as keyof typeof wondersData];

  if (!wonder) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Wonder Not Found</h1>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <img 
          src={wonder.image} 
          alt={wonder.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
              {wonder.title}
            </h1>
            <div className="flex items-center justify-center space-x-6 text-lg">
              <span className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                {wonder.location}
              </span>
              <span className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                {wonder.year}
              </span>
            </div>
          </div>
        </div>
        
        <Link to="/" className="absolute top-24 left-4">
          <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Wonders
          </Button>
        </Link>
      </section>

      {/* Content */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Overview */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center shimmer">Overview</h2>
            <div className="golden-divider" />
            <p className="text-lg text-muted-foreground leading-relaxed text-center">
              {wonder.description}
            </p>
          </div>

          {/* Detailed Information */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="wonder-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Users className="h-5 w-5 mr-2 text-primary" />
                  Construction
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {wonder.detailedInfo.construction}
                </p>
              </CardContent>
            </Card>

            <Card className="wonder-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Purpose
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {wonder.detailedInfo.purpose}
                </p>
              </CardContent>
            </Card>

            <Card className="wonder-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Camera className="h-5 w-5 mr-2 text-primary" />
                  Architecture
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {wonder.detailedInfo.architecture}
                </p>
              </CardContent>
            </Card>

            <Card className="wonder-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Calendar className="h-5 w-5 mr-2 text-primary" />
                  Significance
                </h3>
                <p className="text-foreground/80 leading-relaxed">
                  {wonder.detailedInfo.significance}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Fascinating Facts */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 text-center shimmer">Fascinating Facts</h2>
            <div className="golden-divider" />
            <div className="grid sm:grid-cols-2 gap-4">
              {wonder.facts.map((fact, index) => (
                <Card key={index} className="wonder-card">
                  <CardContent className="p-4">
                    <p className="text-foreground/80 leading-relaxed">• {fact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WonderDetail;