import Image from "next/image";

function HomePage() {
  return (
    <section className="h-full lg:h-[calc(100vh-5rem)] max-w-4xl xl:max-w-6xl mx-auto flex flex-col lg:flex-row justify-center items-center">
      <div className="mx-[10%] mt-10 md:mt-16 lg:mt-0 lg:mx-0 lg:w-[60%] lg:mr-7">
        <h1 className="text-5xl lg:text-6xl w-full font-bold">
          ¡Encontrá o Publicá Trabajos Fácilmente en Alberti!
        </h1>
        <div>
          <p className="my-2 lg:my-4 text-lg">
            Registrate gratis y accedé a cientos de changas en tu zona. Desde
            trabajos de albañilería, jardinería, limpieza, hasta soporte técnico
            y diseño gráfico.
          </p>
          <ul className="ml-2 mt-1">
            <li>✅ Armá tu perfil en minutos</li>
            <li>✅ Mostrá tus habilidades y proyectos</li>
            <li>✅ Recibí ofertas directamente</li>
          </ul>
        </div>

        <button className="inline-flex mt-3 py-4 px-6 items-center justify-center overflow-hidden rounded-md border border-black bg-transparent font-medium text-black transition-all duration-100 [box-shadow:7px_7px_rgb(185_255_102)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(185_255_102)]">
          Más información
        </button>
      </div>
      <Image
        src={"/header-illustration.webp"}
        width={600}
        height={500}
        alt="Ilustración"
        className="w-[400px] h-[300px] mt-5 lg:mt-0 lg:h-auto lg:w-[40%]"
      />
    </section>
  );
}

export default HomePage;
