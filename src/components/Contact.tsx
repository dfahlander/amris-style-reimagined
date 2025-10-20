import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16">
          Kontakta oss
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <Phone className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-inter font-semibold text-lg mb-1">Telefon</h3>
                  <a href="tel:08215515" className="text-foreground/80 hover:text-primary transition-colors">
                    08 21 55 15
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-inter font-semibold text-lg mb-1">Email</h3>
                  <a
                    href="mailto:amrisstyle@gmail.com"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    amrisstyle@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-inter font-semibold text-lg mb-1">Adress</h3>
                  <p className="text-foreground/80">
                    Lilla Nygatan 13
                    <br />
                    111 28 Stockholm
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-primary mt-1" size={24} />
                <div>
                  <h3 className="font-inter font-semibold text-lg mb-1">Öppettider</h3>
                  <div className="text-foreground/80 space-y-1">
                    <p>Måndag: 12:00 - 18:00</p>
                    <p>Tisdag-Lördag: 11:30 - 19:00</p>
                    <p>Söndag: 13:00 - 16:00</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <h3 className="font-inter font-semibold text-lg mb-3">Följ oss</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://www.facebook.com/amrisstyle/?locale=sv_SE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={28} />
                  </a>
                  <a
                    href="https://www.instagram.com/amrisstyle/?hl=en"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={28} />
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="rounded-lg overflow-hidden shadow-lg h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2035.3756892385685!2d18.06367731606896!3d59.32554391663893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e251f93ee5%3A0xeb1f279bf7ff6d6d!2sLilla%20Nygatan%2013%2C%20111%2028%20Stockholm!5e0!3m2!1sen!2sse!4v1640000000000!5m2!1sen!2sse"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Amri Style Salong karta"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
