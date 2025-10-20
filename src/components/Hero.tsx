import { Check } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="font-playfair text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Komfort och lugn
            <br />
            <span className="text-primary-foreground">Njut av skönheten!</span>
          </h1>

          <div className="space-y-4 mb-8">
            {["Passion", "Kvalitet", "Komfort"].map((item, index) => (
              <div
                key={item}
                className="flex items-center space-x-3 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Check className="text-primary" size={24} />
                <span className="font-inter text-xl md:text-2xl">{item}</span>
              </div>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-md font-inter font-semibold text-lg hover:bg-primary/90 transition-all duration-300 hover:scale-105"
          >
            Boka tid
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
