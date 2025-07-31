import { useState } from "react";
import { Header } from "./components/Navegation";
import { Sobre } from "./Pages/Sobre";
import { Jogos } from "./Pages/Jogos";
import { Projetos } from "./Pages/Projetos";

function App() {
  const sections = ["Projetos", "Sobre", "Jogos"];
  const [selectedIndex, setSelectedIndex] = useState(1);
  return (
    <>
      <Header
        sections={sections}
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      {selectedIndex === 1 && <Sobre />}
      {selectedIndex === 2 && <Jogos />}
      {selectedIndex === 0 && <Projetos />}
    </>
  );
}

export default App;
