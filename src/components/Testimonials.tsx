import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      text: "Slank in och måste säga: Första gången någon klippt mitt hår på riktigt. En fantastiskt duktig och personlig frisör. Superbemötande. Rekommenderas varmt!",
    },
    {
      text: "Amri är fantastiskt duktig! Han tar sig verkligen tiden för just dig och är både noggrann och skicklig. Kan inte rekommendera nog!",
    },
    {
      text: "Man märker att han klipper en med passion och genuint vill att sina kunder ska bli nöjda. Alla borde besöka denna underbara salong!",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16">
          Vad andra säger
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="text-primary fill-primary" size={20} />
                  ))}
                </div>
                <p className="font-inter text-foreground/90 leading-relaxed">
                  {testimonial.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
