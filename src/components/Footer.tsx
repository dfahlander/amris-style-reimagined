import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <img src={logo} alt="Amri Style Logo" className="h-16 w-auto opacity-90" />
          
          <div className="flex space-x-6">
            <a
              href="https://www.facebook.com/amrisstyle/?locale=sv_SE"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.instagram.com/amrisstyle/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>

          <div className="text-center font-inter text-sm opacity-80">
            <p>&copy; {new Date().getFullYear()} Amri Style Salong. Alla rättigheter förbehållna.</p>
            <p className="mt-2">Lilla Nygatan 13, 111 28 Stockholm | Tel: 08 21 55 15</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
