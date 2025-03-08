import Header from "./header/page";
import Section from "./section/page";
import Plan from "./plan/page";
import Cards from "./cards/page";
import Contact from "./contact/page";
import Footer from "./footer/page";

export default function Home() {
  return (
    <>
      <Header />
      <Section />
      <Plan />
      <Cards />
      <Contact />
      <Footer />
    </>
  );
}
