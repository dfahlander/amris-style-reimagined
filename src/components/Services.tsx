import decorativePattern from "@/assets/decorative-pattern.png";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    { name: "Klippning", price: "530 kr" },
    { name: "Kort hår Maskin", price: "430 kr" },
    { name: "Barnklippning", price: "300 kr" },
    { name: "Färg", price: "1000 kr" },
    { name: "Slingor", price: "1200 kr" },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <img src={decorativePattern} alt="" className="h-16 w-auto opacity-60" />
        </div>

        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16">
          Behandlingar
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <Card key={service.name} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8 text-center">
                <h3 className="font-playfair text-2xl font-semibold mb-4 text-foreground">
                  {service.name}
                </h3>
                <p className="font-inter text-3xl font-bold text-primary">
                  {service.price}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
