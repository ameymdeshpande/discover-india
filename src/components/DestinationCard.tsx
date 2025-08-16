interface DestinationCardProps {
  image: string;
  title: string;
  description: string;
  location?: string;
}

const DestinationCard = ({ image, title, description, location }: DestinationCardProps) => {
  return (
    <div className="destination-card group cursor-pointer">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {location && (
          <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {location}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="font-poppins font-semibold text-xl mb-3 text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        <button className="btn-secondary">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default DestinationCard;