import Cover from "../components/Cover";
import About from "../components/About";
import TeamMember from "../components/TeamMember";
import MainLayout from "../layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      <Cover />
      <About />
      <TeamMember />
    </MainLayout>
  );
}
