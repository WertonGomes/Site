import FotoFundo from "../assets/img/foto_fundo.png";
// import Foto from "../assets/img/Foto.png";
import { Line } from "../components/Line";
import { Footer } from "../components/Footer";
import { Habilidades } from "../components/Habilidades";
import { Experiencia } from "../components/Experiencia";

export const Sobre = () => {
  return (
    <>
      <main className="flex flex-col gap-5 p-1 mt-5 sm:p-2 md:flex-row">
        <div className="flex-1">
          <div
            className="relative h-[100%] w-[440px] bg-contain bg-center bg-no-repeat z-[9999] overflow-hidden hidden lg:block"
            style={{ backgroundImage: `url(${FotoFundo})` }}
          >
            {/* <div className="absolute w-[65%] h-[73.555%] top-[50.5px] left-[72px] bottom-0 right-0">
              <img src={Foto} className="object-cover w-full h-full" />
            </div> */}
            <div className="absolute lg:bottom-[37px] md:bottom-[27%] px-[5.4vw] w-full">
              <div className="flex justify-between">
                <p className="text-2xl">Ewerton</p>
                <p className="text-2xl">2025</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col p-8">
          <div className="flex flex-col gap-9 md:flex-row">
            <div className="flex-1/2">
              <div className="text-start">
                <h1 className="text-4xl">Oi!</h1>
              </div>
              <div className="mt-9">
                <p className="text-lg text-justify">
                  Meu nome é Ewerton sou artista 2D/3D, ilustrador, animador 2D
                  e designer de personagens com uma queda por mundos imaginários
                  e narrativas inusitadas. Também atuo como desenvolvedor de
                  jogos e programador em C#, o que me permite transformar ideias
                  em experiências interativas. Gosto de criar histórias e
                  frequentemente sou surpreendido por ideias aleatórias que
                  acabam virando projetos onde aplico tudo o que sei — e aprendo
                  ainda mais no processo.
                </p>
              </div>

              <Line />

              <div className="mt-4">
                <div className="flex flex-col items-start">
                  <h2 className="text-4xl">Formação</h2>
                  <div className="text-justify mt-9">
                    UNIFACISA – Centro Universitário: 2019 – 2022 <br />
                    <span>Tecnólogo em Jogos Digitais</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4 mt-4 flex-1/3">
              <Habilidades />
              <Experiencia />
            </div>
          </div>

          <Footer />
        </div>
      </main>
    </>
  );
};
