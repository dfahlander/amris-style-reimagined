import amriPortrait from "@/assets/amri-portrait.jpeg";
import decorativePattern from "@/assets/decorative-pattern.png";

const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <img src={decorativePattern} alt="" className="h-16 w-auto opacity-60" />
        </div>

        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-4">
          Välkommen till Amri Style Salong!
        </h2>

  <div className="grid md:grid-cols-2 gap-12 items-start max-w-6xl mx-auto mt-12">
          <div className="space-y-6">
            <p className="font-inter text-lg leading-relaxed text-foreground/90">
              Välkommen till Amri Style Salong i Gamla stan, där din frisörupplevelse är mer än bara 
              ett vanligt besök – det är en passion som vi delar tillsammans. Hårsalongen drivs av 
              Amri, en engagerad frisör med över 40 års erfarenhet inom frisörbranschen.
            </p>

            <p className="font-inter text-lg leading-relaxed text-foreground/90">
              För mig är hår inte bara ett yrke, det är en konstform och en passion som jag delar med 
              mina kunder. Jag är specialiserad på att klippa, färga och designa och är alltid redo att 
              hjälpa dig att förverkliga din drömhårstil.
            </p>

            <p className="font-inter text-lg leading-relaxed text-foreground/90">
              Kvalitet är alltid i fokus för mig. Mitt mål är alltid att sätta dig som kund i fokus.
            </p>

            <p className="font-playfair text-2xl font-semibold text-primary mt-6">
              -Amri
            </p>
          </div>

          <div className="relative">
            {/* Limit portrait size and crop towards top so the face stays visible */}
            <div className="rounded-lg overflow-hidden shadow-2xl max-w-sm md:max-w-md mx-auto">
              <img
                src={amriPortrait}
                alt="Amri - Frisör med över 40 års erfarenhet"
                className="w-full h-auto max-h-[40rem] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
