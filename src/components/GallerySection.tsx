import projetoAntigo1 from "@/assets/projeto-1.webp";
import projetoAntigo2 from "@/assets/projeto-2.webp";
import projetoAntigo3 from "@/assets/projeto-3.webp";
import projetoAntigo4 from "@/assets/projeto-antigo-4.jpg";
import projetoAntigo5 from "@/assets/projeto-antigo-5.jpg";
import projetoAntigo6 from "@/assets/projeto-antigo-6.jpg";
import projeto1 from "@/assets/projeto-1.jpg";
import projeto2 from "@/assets/projeto-2.jpg";
import projeto3 from "@/assets/projeto-3.jpg";
import projeto4 from "@/assets/projeto-4.jpg";
import projeto5 from "@/assets/projeto-5.jpg";
import projeto6 from "@/assets/projeto-6.jpg";
import projeto7 from "@/assets/projeto-7.jpg";
import projeto8 from "@/assets/projeto-8.jpg";
import projeto9 from "@/assets/projeto-9.jpg";

const images = [
  { src: projetoAntigo1, alt: "Projeto residencial com paineis solares visto por drone" },
  { src: projetoAntigo2, alt: "Instalacao solar em cobertura urbana com vista da cidade" },
  { src: projetoAntigo3, alt: "Sistema solar residencial em telhados urbanos" },
  { src: projetoAntigo4, alt: "Projeto fotovoltaico em cobertura comercial" },
  { src: projetoAntigo5, alt: "Instalacao solar em estrutura industrial vista aerea" },
  { src: projetoAntigo6, alt: "Estacionamento com cobertura de energia solar" },
  { src: projeto1, alt: "Projeto solar residencial com cobertura completa visto por drone" },
  { src: projeto2, alt: "Equipe realizando instalacao de paineis solares em telhado" },
  { src: projeto3, alt: "Sistema fotovoltaico residencial em cobertura plana" },
  { src: projeto4, alt: "Projeto solar residencial em telhado inclinado" },
  { src: projeto5, alt: "Sistema solar em cobertura com vista para area de lazer" },
  { src: projeto6, alt: "Projeto fotovoltaico em ampla cobertura comercial" },
  { src: projeto7, alt: "Sistema solar instalado em cobertura urbana proxima ao centro" },
  { src: projeto8, alt: "Projeto solar residencial moderno em loteamento" },
  { src: projeto9, alt: "Projeto solar industrial com vista aerea ampla" },
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
            className="break-inside-avoid aspect-[4/3] overflow-hidden rounded-2xl shadow-md transition-shadow hover:shadow-xl"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
              decoding="async"
              width={960}
              height={640}
            />
          </div>
        ))}
      </div>
      <div className="mt-12 rounded-[2rem] bg-gradient-to-b from-transparent via-primary/5 to-transparent px-6 py-10 text-center">
        <p className="projects-fade-in text-3xl font-black tracking-tight text-[#5ea81f] md:text-4xl">
          +500 Projetos Realizados
        </p>
      </div>
    </div>
  </section>
);

export default GallerySection;
