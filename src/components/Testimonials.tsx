import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import GoogleBadge from "./GoogleBadge";

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
                {/* Google Reviews badge: using reusable GoogleBadge component */}
                <div className="flex items-center justify-between mb-4">
                  <GoogleBadge href="https://www.google.com/search?sa=X&sca_esv=d338bcc5c49f5d6d&rlz=1C5CHFA_enSE1124SE1124&hl=sv-SE&tbm=lcl&sxsrf=AE3TifMJuCApu4YY3zdMDZ1OHyoZWtFPag:1760947372997&q=Amris+style+Recensioner&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxIxNDI3MjUyNDCyNDM0NzYwN7C0sNjAyPiKUdwxtyizWKG4pDInVSEoNTk1rzgzPy-1aBErLhkA6vxyGk8AAAA&rldimm=12725210296173070988&ved=2ahUKEwjW24qVqLKQAxWTFBAIHQtIMTcQ9fQKegQIRhAF&biw=1512&bih=804&dpr=2#lkt=LocalPoiReviews" />

                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="text-yellow-400 fill-yellow-400" size={14} />
                    ))}
                  </div>
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
