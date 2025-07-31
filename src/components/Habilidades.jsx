import { IconHab } from "./IconHab";
import { Line } from "./Line";
import PhotoShopIcon from "../assets/Icons/Habilidades/photoshop.svg";
import Clip from "../assets/Icons/Habilidades/clip.png";
import Github from "../assets/Icons/Habilidades/github.svg";
import Unity from "../assets/Icons/Habilidades/unity.svg";
import Unreal from "../assets/Icons/Habilidades/unreal.svg";
import Blender from "../assets/Icons/Habilidades/blender.png";


const habArray = [
    {id: 1, icone: PhotoShopIcon, name: "PhotoShop"},
    {id: 2, icone: Clip, name: "ClipStudio"},
    {id: 3, icone: Github, name: "Github"},
    {id: 4, icone: Unity, name: "Unity"},
    {id: 5, icone: Unreal, name: "Unreal"},
    {id: 6, icone: Blender, name: "Blender"},
    // {id: 7, icone: "https://example.com/icon7.svg
]
export const Habilidades = () => {
  return (
    <>
      <h2 className="mt-4 text-4xl">Habilidades</h2>
      <Line />
      <ul className="grid grid-cols-2 gap-4 mt-2 sm:grid-cols-2 md:grid-cols-3">
        {habArray.map((hab) => (
        <li key={hab.id} className="flex flex-col items-center justify-center">
            <IconHab icone={hab.icone} name={hab.name} />
        </li>
        ))}
      </ul>
    </>
  );
};
