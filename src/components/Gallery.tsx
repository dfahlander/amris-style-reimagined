import { useState } from "react";
import { X } from "lucide-react";
import decorativePattern from "@/assets/decorative-pattern.png";
import gallery1 from "@/assets/gallery/gallery-1.jpeg";
import gallery2 from "@/assets/gallery/gallery-2.jpeg";
import gallery3 from "@/assets/gallery/gallery-3.jpeg";
import gallery4 from "@/assets/gallery/gallery-4.jpeg";
import gallery5 from "@/assets/gallery/gallery-5.jpeg";
import gallery6 from "@/assets/gallery/gallery-6.jpeg";
import gallery7 from "@/assets/gallery/gallery-7.jpeg";
import gallery8 from "@/assets/gallery/gallery-8.jpeg";
import gallery9 from "@/assets/gallery/gallery-9.jpeg";
import gallery10 from "@/assets/gallery/gallery-10.jpeg";
import gallery11 from "@/assets/gallery/gallery-11.jpeg";
import gallery12 from "@/assets/gallery/gallery-12.jpeg";
import gallery13 from "@/assets/gallery/gallery-13.jpeg";
import gallery14 from "@/assets/gallery/gallery-14.jpeg";
import gallery15 from "@/assets/gallery/gallery-15.jpeg";
import gallery16 from "@/assets/gallery/gallery-16.jpeg";
import gallery17 from "@/assets/gallery/gallery-17.jpeg";
import gallery18 from "@/assets/gallery/gallery-18.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    gallery1, gallery2, gallery3, gallery4, gallery5, gallery6,
    gallery7, gallery8, gallery9, gallery10, gallery11, gallery12,
    gallery13, gallery14, gallery15, gallery16, gallery17, gallery18,
  ];

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-center mb-8">
          <img src={decorativePattern} alt="" className="h-16 w-auto opacity-60" />
        </div>

        <h2 className="font-playfair text-4xl md:text-5xl font-bold text-center mb-16">
          Fotogalleri
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="aspect-square overflow-hidden rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt={`Galleri bild ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Stäng"
          >
            <X size={32} />
          </button>
          <img
            src={selectedImage}
            alt="Förstorad bild"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
