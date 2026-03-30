import projeto1 from "@/assets/projeto-1.jpg";
import projeto2 from "@/assets/projeto-2.jpg";
import projeto3 from "@/assets/projeto-3.jpg";
import projeto4 from "@/assets/projeto-4.jpg";
import projeto5 from "@/assets/projeto-5.jpg";
import projeto6 from "@/assets/projeto-6.jpg";
import projeto7 from "@/assets/projeto-7.jpg";
import projeto8 from "@/assets/projeto-8.jpg";

const images = [
  { src: projeto1, alt: "Projeto solar residencial com cobertura completa visto por drone" },
  { src: projeto2, alt: "Equipe realizando instalacao de paineis solares em telhado" },
  { src: projeto3, alt: "Sistema fotovoltaico residencial em cobertura plana" },
  { src: projeto4, alt: "Projeto solar residencial em telhado inclinado" },
  { src: projeto5, alt: "Sistema solar em cobertura com vista para area de lazer" },
  { src: projeto6, alt: "Projeto fotovoltaico em ampla cobertura comercial" },
  { src: projeto7, alt: "Sistema solar instalado em cobertura urbana proxima ao centro" },
  { src: projeto8, alt: "Projeto solar residencial moderno em loteamento" },
];

const GallerySection = () => (
  <section id="galeria" className="py-20">
    <div className="container mx-auto px-4">
      <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
        Nossos Projetos
      </h2>
      <div className="columns-1 gap-4 space-y-4 sm:columns-2 xl:columns-3">
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
              width={960}
              height={640}
            />
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-[2rem] bg-gradient-to-b from-transparent via-primary/5 to-transparent px-6 py-10 text-center">
        <p className="text-3xl font-black tracking-tight text-[#5ea81f] md:text-4xl">
          +500 Projetos Realizados
        </p>
      </div>
    </div>
  </section>
);

export default GallerySection;
