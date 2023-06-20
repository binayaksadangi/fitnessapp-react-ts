import Navbar from "@/scenes/Navbar";
import { useEffect, useState } from "react";
import Home from "./scenes/Home";
import { SelectedPage } from "./shared/types";
import Benifits from "./scenes/Benifits";
Benifits
function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsTopOfPage(false);
      }
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home  setSelectedPage={setSelectedPage}/>
      <Benifits  setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
