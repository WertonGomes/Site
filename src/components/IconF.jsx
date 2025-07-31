export const IconF = ({ icone, name, link }) => {
  return (
    <>
      <a href={link} target="_blank" title={name}>
        <div className="flex items-center justify-center gap-2">
          <div className="flex items-center justify-center w-5 h-5 rounded-full">
            <img src={icone} alt={name} className="w-full h-full" />
          </div>
          <p className="text-center">{name}</p>
        </div>
      </a>
    </>
  );
};
