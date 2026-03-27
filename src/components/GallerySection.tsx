import projeto1 from "@/assets/projeto-1.webp";
import projeto2 from "@/assets/projeto-2.webp";
import projeto3 from "@/assets/projeto-3.webp";
import projeto4 from "@/assets/projeto-4.jpg";
import projeto5 from "@/assets/projeto-5.jpg";
import projeto6 from "@/assets/projeto-6.jpg";

const images = [
  { src: projeto1, alt: "Projeto residencial com painéis solares visto por drone" },
  { src: projeto2, alt: "Instalação solar em cobertura urbana com vista da cidade" },
  { src: projeto3, alt: "Sistema solar residencial em telhados urbanos" },
  { src: projeto4, alt: "Projeto fotovoltaico em cobertura comercial" },
  { src: projeto5, alt: "Instalação solar em estrutura industrial vista aérea" },
  { src: projeto6, alt: "Estacionamento com cobertura de energia solar" },
];

const GallerySection = () => (
  <section id="galeria" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        Nossos Projetos
      </h2>
      <div className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3">
        {images.map((img, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-2xl shadow-md transition-shadow hover:shadow-xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
