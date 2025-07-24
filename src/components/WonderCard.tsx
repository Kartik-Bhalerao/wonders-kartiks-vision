import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

interface WonderCardProps {
  title: string;
  location: string;
  description: string;
  image: string;
  year?: string;
  civilization?: string;
  wonderId: string;
}

const WonderCard = ({ title, location, description, image, year, civilization, wonderId }: WonderCardProps) => {
  return (
    <Link to={`/wonder/${wonderId}`} className="block">
      <Card className="wonder-card group cursor-pointer overflow-hidden bg-gradient-wonder border-border/50">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
          {year && <p className="text-sm font-medium">{year}</p>}
          {civilization && <p className="text-xs opacity-80">{civilization}</p>}
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3 flex items-center">
          <span className="mr-2">📍</span>
          {location}
        </p>
        <p className="text-sm text-foreground/80 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
    </Link>
  );
};

export default WonderCard;