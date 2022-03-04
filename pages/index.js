import Cover from "../components/Cover";
import DeluxeSpaServices from "../components/DeluxeSpaServices";
import MainLayout from "../layout/MainLayout";
import SpaManicure from "../components/SpaManicure";
import SpecialCombo from "../components/SpecialCombo";
import DippingPowder from "../components/DippingPowder ";

export default function Home() {
  return (
    <MainLayout>
      <Cover />
      <DeluxeSpaServices />
      <SpaManicure />
      <SpecialCombo />
      <DippingPowder />
    </MainLayout>
  );
}
