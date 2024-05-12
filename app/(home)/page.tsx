import { HeroSection } from "./_components/HeroSection";
import { TestimonialsSection } from "./_components/TestimonialsSection";
import { HowItWorksSection } from "./_components/HowItWorksSection";
import { OptimizeWorkSection } from "./_components/OptimizeWorkSection";
import { PartnersSection } from "../components/common/PartnersSection";

const HomePage = () => {
    return (
        <main>
            <HeroSection />
            <OptimizeWorkSection />
            <HowItWorksSection />
            <TestimonialsSection />
            <PartnersSection />
        </main>
    );
};

export default HomePage;