import Cover from "../components/Cover";
import DeluxeSpaServices from "../components/DeluxeSpaServices";
import MainLayout from "../layout/MainLayout";
import SpaManicure from "../components/SpaManicure";
import SpecialCombo from "../components/SpecialCombo";
import DippingPowder from "../components/DippingPowder ";
import AcrylicNails from "../components/AcrylicNails";
import PinknWhite from "../components/PinknWhite";
import LightConceptGel from "../components/LightConcept";
import AdditionServices from "../components/AdditionServices";
import KidServices from "../components/KidServices";
import Santitation from "../components/Santitation";
import Map from "../components/Map";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <MainLayout>
      <Cover />
      <DeluxeSpaServices />
      <SpaManicure />
      <SpecialCombo />
      <DippingPowder />
      <AcrylicNails />
      <PinknWhite />
      {/* Ombré nails */}
      <LightConceptGel />
      <AdditionServices />
      <KidServices />
      <Santitation />
      <Map />
      <Footer />
    </MainLayout>
  );
}
