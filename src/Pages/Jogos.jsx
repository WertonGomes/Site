import { Line } from "../components/Line";
import { IconHab } from "../components/IconHab";
import { useState } from "react";
import { Footer } from "../components/Footer";
import { Lista_Jogos } from "../lib/Lista_jogos";

export const Jogos = () => {
  
  const [open, setOpen] = useState(false);
  const [selectedGame, setSelectedGame] = useState("");
  const handleOpen = (link) => {
    setSelectedGame(link);
    return setOpen(!open);
  };

  //    useEffect(() => {
  //   if (!open) return;

  //   const iframe = document.getElementById("iframe");
  //   if (!iframe) return;

  //   const iframeWindow = iframe.contentWindow;
  //   const iframeDocument = iframe.contentDocument || iframeWindow?.document;

  //   const footer = iframeDocument?.querySelector("#unity-footer");
  //   if (footer) {
  //     footer.style.display = "none";
  //   }
  // }, [open]);
  const chunkedGames = [];
  for (let i = 0; i < Lista_Jogos.length; i += 4) {
    chunkedGames.push(Lista_Jogos.slice(i, i + 4));
  }

  return (
    <>
      <main className="h-[calc(100%-64px)] pt-8 pr-14 pl-14 relative">
        {chunkedGames.map((grupo, index) => (
          <div key={index} className="relative w-full h-full mb-6">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {grupo.map((item) => (
                <div key={item.id}>
                  <IconHab
                    onClick={() => handleOpen(item.link)}
                    icone={item.imagem}
                    name={item.name}
                    className={"cursor-pointer relative"}
                    circleClassName={"!h-[117px] !w-[117px] relative z-4"}
                    sty={true}
                    positionImg={"w-[86px] h-[86px] mx-[10px] my-[13px]"}
                  />
                </div>
              ))}
            </div>

            <div className="w-full mt-4">
              <Line />
            </div>
            <div className="absolute w-full bottom-2">
              <Footer />
            </div>
          </div>
        ))}
      </main>

      <>
        {open && (
          <div className="fixed top-0 bottom-0 left-0 right-0  z-[900] bg-opacity-40 backdrop-blur-2xl">
            <div
              className="absolute right-3.5 text-2xl top-2.5 text-amber-50 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              X
            </div>
            <div className="flex items-center justify-center w-full h-full">
              <div className="w-full h-full">
                <iframe
                  width={"100%"}
                  height={"100%"}
                  className="w-full h-full"
                  allowFullScreen
                  aria-autocomplete="inline"
                  src={selectedGame}
                  title="Jogo"
                ></iframe>
              </div>
            </div>
          </div>
        )}
      </>
    </>
  );
};
