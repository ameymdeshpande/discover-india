import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import BackToTop from "@/components/BackToTop";
import DestinationCard from "@/components/DestinationCard";
import { MapPin, Users, Calendar, Shield, Heart, Star, Mail, Phone, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

// Import all images
import heroImage from "@/assets/hero-taj-mahal.jpg";
import keralaImage from "@/assets/kerala-backwaters.jpg";
import jaipurImage from "@/assets/jaipur-pink-city.jpg";
import goaImage from "@/assets/goa-beaches.jpg";
import himachalImage from "@/assets/himachal-mountains.jpg";
import varanasiImage from "@/assets/varanasi-ghats.jpg";
import majuliImage from "@/assets/majuli-island.jpg";
import ziroImage from "@/assets/ziro-valley.jpg";
import hampiImage from "@/assets/hampi-ruins.jpg";
import gokarnaImage from "@/assets/gokarna-beach.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Animation on scroll
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".fade-in, .slide-in-left, .slide-in-right");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const popularDestinations = [
    {
      image: heroImage,
      title: "Taj Mahal, Agra",
      description: "One of the Seven Wonders of the World, this magnificent marble mausoleum symbolizes eternal love.",
      location: "Uttar Pradesh"
    },
    {
      image: jaipurImage,
      title: "Jaipur (Pink City)",
      description: "The capital of Rajasthan, famous for its stunning palaces, forts, and vibrant markets.",
      location: "Rajasthan"
    },
    {
      image: keralaImage,
      title: "Kerala Backwaters",
      description: "Serene network of waterways perfect for houseboat cruises through coconut groves.",
      location: "Kerala"
    },
    {
      image: goaImage,
      title: "Goa Beaches",
      description: "Golden beaches, Portuguese architecture, and vibrant nightlife on India's western coast.",
      location: "Goa"
    },
    {
      image: himachalImage,
      title: "Himachal Pradesh",
      description: "Snow-capped mountains, hill stations, and adventure sports in the Himalayas.",
      location: "Himachal Pradesh"
    },
    {
      image: varanasiImage,
      title: "Varanasi Ghats",
      description: "One of the world's oldest cities, sacred to Hindus with spiritual ghats along the Ganges.",
      location: "Uttar Pradesh"
    }
  ];

  const hiddenGems = [
    {
      image: majuliImage,
      title: "Majuli Island",
      description: "World's largest river island with unique Assamese culture and traditional villages.",
      location: "Assam"
    },
    {
      image: ziroImage,
      title: "Ziro Valley",
      description: "UNESCO World Heritage site with Apatani tribe culture and pristine natural beauty.",
      location: "Arunachal Pradesh"
    },
    {
      image: hampiImage,
      title: "Hampi",
      description: "Ancient Vijayanagara empire ruins amid dramatic boulder landscapes.",
      location: "Karnataka"
    },
    {
      image: gokarnaImage,
      title: "Gokarna",
      description: "Peaceful beach destination perfect for those seeking tranquility away from crowds.",
      location: "Karnataka"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-overlay" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-poppins font-bold text-5xl md:text-7xl text-white mb-6 fade-in">
            Discover Incredible India
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed fade-in">
            From Iconic Landmarks to Hidden Gems - Experience the Rich Heritage, 
            Diverse Culture, and Breathtaking Beauty of India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in">
            <button 
              onClick={() => document.querySelector('#destinations')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-hero"
            >
              Explore Destinations
            </button>
            <button 
              onClick={() => document.querySelector('#hidden-gems')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary text-white border-white hover:bg-white hover:text-primary"
            >
              Hidden Gems
            </button>
          </div>
        </div>
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />
      </section>

      {/* About India Section */}
      <section id="about" className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 fade-in">
              About Incredible India
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in">
              India is a land of extraordinary diversity, where ancient traditions blend seamlessly with modern life. 
              From the snow-capped Himalayas to tropical beaches, from bustling cities to serene villages, 
              India offers experiences that touch the soul and create memories for a lifetime.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Rich Culture</h3>
              <p className="text-muted-foreground">5000+ years of heritage with diverse traditions, festivals, and art forms</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Diverse Landscapes</h3>
              <p className="text-muted-foreground">From mountains to beaches, deserts to forests - incredible natural beauty</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Warm People</h3>
              <p className="text-muted-foreground">Experience the legendary Indian hospitality and warmth</p>
            </div>
            
            <div className="text-center fade-in">
              <div className="w-16 h-16 bg-royal-blue/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-royal-blue" />
              </div>
              <h3 className="font-poppins font-semibold text-xl mb-3">Cuisine</h3>
              <p className="text-muted-foreground">Aromatic spices and flavors that create unforgettable culinary experiences</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations Section */}
      <section id="destinations" className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 fade-in">
              Top Tourist Destinations
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in">
              Explore India's most iconic destinations that have captivated travelers from around the world. 
              Each place tells a unique story of India's glorious past and vibrant present.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularDestinations.map((destination, index) => (
              <div key={destination.title} className="fade-in">
                <DestinationCard {...destination} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hidden Gems Section */}
      <section id="hidden-gems" className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 fade-in">
              Hidden Gems of India
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in">
              Discover India's best-kept secrets - pristine destinations off the beaten path that offer 
              authentic experiences and untouched natural beauty.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {hiddenGems.map((gem, index) => (
              <div key={gem.title} className="fade-in">
                <DestinationCard {...gem} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Travel Tips Section */}
      <section className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 fade-in">
              Travel Tips & Insights
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-xl p-8 fade-in">
              <Calendar className="w-12 h-12 text-primary mb-4" />
              <h3 className="font-poppins font-semibold text-xl mb-4">Best Time to Visit</h3>
              <p className="text-muted-foreground leading-relaxed">
                October to March offers pleasant weather for most regions. Summer (April-June) is ideal for hill stations, 
                while monsoon (July-September) brings lush greenery.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 fade-in">
              <Heart className="w-12 h-12 text-secondary mb-4" />
              <h3 className="font-poppins font-semibold text-xl mb-4">Cultural Etiquette</h3>
              <p className="text-muted-foreground leading-relaxed">
                Respect local customs, dress modestly at religious sites, remove shoes when entering homes/temples, 
                and use your right hand for eating and greetings.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 fade-in">
              <Shield className="w-12 h-12 text-accent mb-4" />
              <h3 className="font-poppins font-semibold text-xl mb-4">Safety & Health</h3>
              <p className="text-muted-foreground leading-relaxed">
                Drink bottled water, try street food cautiously, carry basic medications, 
                and keep copies of important documents. Stay aware of your surroundings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 fade-in">
              Gallery
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in">
              Immerse yourself in the visual splendor of India through our curated collection of breathtaking photographs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...popularDestinations, ...hiddenGems].map((item, index) => (
              <div 
                key={index} 
                className="relative group cursor-pointer overflow-hidden rounded-lg fade-in"
                style={{ aspectRatio: index % 3 === 0 ? '1/1' : '4/3' }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <h4 className="font-semibold">{item.title}</h4>
                    <p className="text-sm text-white/80">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding section-alt">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6 fade-in">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed fade-in">
              Planning your Indian adventure? We're here to help you create unforgettable memories. 
              Reach out to us for personalized travel recommendations.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="fade-in">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    required
                  />
                </div>
                <button type="submit" className="btn-hero w-full">
                  Send Message
                </button>
              </form>
            </div>

            <div className="fade-in">
              <div className="space-y-8">
                <div>
                  <h3 className="font-poppins font-semibold text-xl mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="w-5 h-5 text-primary" />
                      <span>info@incredibleindia.com</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="w-5 h-5 text-primary" />
                      <span>+91 98765 43210</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>New Delhi, India</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-poppins font-semibold text-xl mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <button className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Facebook className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Instagram className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Twitter className="w-5 h-5" />
                    </button>
                    <button className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                      <Youtube className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-poppins font-bold text-xl mb-4">Incredible India</h3>
              <p className="text-background/80 leading-relaxed">
                Discover the beauty, culture, and heritage of India through our comprehensive travel guide.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button onClick={() => document.querySelector('#home')?.scrollIntoView({ behavior: 'smooth' })} className="block text-background/80 hover:text-background transition-colors">Home</button>
                <button onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })} className="block text-background/80 hover:text-background transition-colors">About</button>
                <button onClick={() => document.querySelector('#destinations')?.scrollIntoView({ behavior: 'smooth' })} className="block text-background/80 hover:text-background transition-colors">Destinations</button>
                <button onClick={() => document.querySelector('#hidden-gems')?.scrollIntoView({ behavior: 'smooth' })} className="block text-background/80 hover:text-background transition-colors">Hidden Gems</button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Travel Info</h4>
              <div className="space-y-2 text-background/80">
                <p>Best Time to Visit</p>
                <p>Travel Guidelines</p>
                <p>Cultural Tips</p>
                <p>Safety Information</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Stay Connected</h4>
              <p className="text-background/80 mb-4">
                Subscribe to our newsletter for travel tips and destination updates.
              </p>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-1 px-3 py-2 rounded bg-background/10 text-background placeholder-background/60 focus:outline-none focus:bg-background/20"
                />
                <button className="px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary-glow transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/80">
              © 2024 Incredible India Tourism. All rights reserved. | Made with ❤️ for travelers worldwide.
            </p>
          </div>
        </div>
      </footer>

      <BackToTop />
    </div>
  );
};

export default Index;