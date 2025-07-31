import { Line } from "./Line";
import { IconF } from "./IconF";
import Instagram from "../assets/Icons/Sociais/instagram.svg";
import Gmail from "../assets/Icons/Sociais/gmail.svg";
import ArtStation from "../assets/Icons/Sociais/artStation.svg";
import X from "../assets/Icons/Sociais/x.svg";

const SocialArray = [
  { id: 1, icone: Instagram, name: "Instagram", link: "https://www.instagram.com/ewerton_gms" },
  { id: 2, icone: Gmail, name: "ewtgomes@gmail.com", link: null },
  { id: 3, icone: ArtStation, name: "ArtStation", link: "https://www.artstation.com/ewertonslv" },
  { id: 4, icone: X, name: "Twitter/X", link: "https://x.com/ewerton_euu" },
];

export const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center">
      <Line />
      <div className="flex flex-wrap justify-between w-full gap-4 pl-4 pr-4 mt-1">
        {SocialArray.map((social) => (
          <IconF key={social.id} icone={social.icone} name={social.name} link={social?.link} />
        ))}
      </div>
    </footer>
  );
};
