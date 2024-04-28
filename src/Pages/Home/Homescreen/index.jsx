import AboutMe from "../AboutMe";
import HeroSection from "../HeroSection";
import MySkills from "../MySkills";
import MyPortofolio from "../MyPortofolio";
import Footer from "../Footer";

export default function Home(){
    return (
        <>
            <HeroSection />
            <MySkills />
            <AboutMe />
            <MyPortofolio />
            <Footer />
        </>
   );
}