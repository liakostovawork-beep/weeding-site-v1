import "./App.css";
import { Header } from "./sections/Header";
import { MainImage } from "./sections/MainImage";
import { Program } from "./sections/Program";
import { Dresscode } from "./sections/DressCode";
import { Gifts } from "./sections/Gifts";
import { Cause } from "./sections/Cause";
import { InfoForm } from "./sections/InfoForm";

function App() {
  return (
    <div>
      <div>
        <Header />
        <MainImage />
        <Program />
        <Dresscode />
        <Gifts />
        <Cause />
        <InfoForm />
      </div>
    </div>
  );
}

export default App;
