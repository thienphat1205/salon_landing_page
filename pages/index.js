import Cover from "../components/Cover";
import Pedicure from "../components/Pedicure";
import MainLayout from "../layout/MainLayout";
import Manicure from "../components/Manicure";
import DippingPowder from "../components/DippingPowder";
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
      <Pedicure />
      <DippingPowder />
      <Manicure />
      <AcrylicNails />
      <PinknWhite />
      <KidServices />
      <AdditionServices />
      <LightConceptGel />
      <Santitation />
      <Map />
      <Footer />
    </MainLayout>
  );
}
