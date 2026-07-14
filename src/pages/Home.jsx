import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import InfoBoxes from "../components/InfoBoxes/InfoBoxes";
import PaymentBanner from "../components/PaymentBanner/PaymentBanner";
import Specialities from "../components/Specialities/Specialities";
import Pricing from "../components/Pricing/Pricing";
import EyelashServices from "../components/EyelashServices/EyelashServices";
import TrainingCourses from "../components/TrainingCourses/TrainingCourses";
import AboutUs from "../components/AboutUs/AboutUs";
import ServicesGallery from "../components/ServicesGallery/ServicesGallery";
import BeforeAfter from "../components/BeforeAfter/BeforeAfter";
import Marquee from "../components/Marquee/Marquee";
import FAQ from "../components/FAQ/FAQ";
import Footer from "../components/Footer/Footer";
import ChatWidget from "../components/ChatWidget/ChatWidget";

function Home({ onNavigate }) {
    return (
        <div className="homepage-container">
            <Header currentPage="home" onNavigate={onNavigate} />
            <Hero />
            <PaymentBanner />
            <Specialities />
            <Pricing />
            <EyelashServices />
            <TrainingCourses />
            <AboutUs />
            <ServicesGallery />
            <BeforeAfter />
            <Marquee />
            <FAQ />
            <InfoBoxes />
            <Footer onNavigate={onNavigate} />
            <ChatWidget />
        </div>
    );
}

export default Home;