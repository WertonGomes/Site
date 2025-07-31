import { useEffect, useRef, useState } from "react";
import Seta from "../assets/img/Seta.png";
export const Header = ({sections, setSelectedIndex, selectedIndex}) => {
 

  // const handleSelect = (name) => {

  // };

  // useEffect(() => {
  //   handleSelect(selectedIndex);
  // }, []);

  const audioRef = useRef(null);

useEffect(() => {
  audioRef.current = new Audio("/Click.wav");
  audioRef.current.volume = 0.02;
}, []);

const playAudio = () => {
  if (audioRef.current) {
    audioRef.current.currentTime = 0; // Reinicia o áudio
    audioRef.current.play();
  }
};
  const NextSelect = () => {
   playAudio()
    setSelectedIndex((prev) => (prev === sections.length - 1 ? 0 : prev + 1));


    // if (selected === "Projetos") {
    //   setSelected("Sobre");
    // } else if (selected === "Sobre") {
    //   setSelected("Jogos");
    // } else {
    //   setSelected("Projetos");
    // }
  };
  const PrevSelect = () => {
   playAudio()
      setSelectedIndex((prev) => (prev === 0 ? sections.length - 1 : prev - 1))
  };

  const left =
    sections[(selectedIndex - 1 + sections.length) % sections.length];
  const center = sections[selectedIndex];
  const right = sections[(selectedIndex + 1) % sections.length];

  return (
    <>
      <nav className="flex items-center justify-center w-full h-16 px-4">
        <ul className="relative flex items-center justify-center gap-4 text-lg">
          {/* <li>
            <button>Projetos</button>
          </li> */}
          <li className="absolute left-[-46px] flex items-center gap-2">
            <button className="text-2xl cursor-pointer" onClick={PrevSelect}>
              <img src={Seta} alt="" className="w-6" />
            </button>
          </li>
          <li className="relative flex items-center justify-between w-full gap-2 text-4xl font-medium">
            <span className="absolute text-2xl sm:opacity-50 -left-[170px]">{left}</span>

            {/* Centro (selecionado) */}
            <div className="relative font-bold">{center}</div>

            {/* Direita */}
            <div className="absolute -right-[170px] text-2xl sm:opacity-50 ">
              {right}
            </div>
          </li>

          <li className="absolute flex items-center gap-2 -right-[46px]">
            <button
              className="text-2xl rotate-180 cursor-pointer"
              onClick={NextSelect}
            >
              <img src={Seta} alt="" className="w-6" />
            </button>
          </li>
          {/* <li>
            <button>Jogos</button>
          </li> */}
        </ul>
      </nav>
    </>
  );
};
