import Jogo from "../assets/img/jogos_fundo.png";
export const IconHab = ({
  icone,
  name,
  onClick,
  className,
  circleClassName,
  sty,
  positionImg
}) => {
  return (
    <>
      <div
        className={`${
          className ? className : null
        } flex flex-col items-center justify-center gap-2`}
        onClick={onClick ? onClick : null}
      >
        {sty && (
          <div
            className={`${circleClassName || ""} ${
              sty ? "bg-contain bg-center bg-no-repeat z-[1]" : ""
            }`}
            style={{ backgroundImage: `url(${Jogo})` }}
          >
            <div
              className={`flex items-center justify-center w-10 h-10 rounded-full ${positionImg || ""}`}
            >
              <img src={icone} alt={name} className="w-full h-full" />
            </div>
          </div>
        )}
        {!sty && (
          <div
            className={`flex items-center justify-center w-10 h-10 rounded-full`}
          >
            <img src={icone} alt={name} className="w-full h-full" />
          </div>
        )}
        <p className="text-center">{name}</p>
      </div>
    </>
  );
};
