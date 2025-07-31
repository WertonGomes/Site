import { Line } from "./Line";

export const Experiencia = () => {
  return (
    <div className="flex flex-col items-start justify-center gap-4 p-4">
      <div className="flex items-center justify-center w-full">
        <h2 className="mt-4 text-4xl">Experiência</h2>
      </div>
      <Line />
      <p className="text-lg text-justify">
        2023 - Atualmente <br />
        FDS GAMES SA <br />
        Indie Game DEV
      </p>
      {/* Add your experience content here */}
    </div>
  );
};
