import { Hero } from "@/app/components/common/Hero";
import { OurHistorySection } from "./_components/OurHistorySection";
import { OurMissionSection } from "./_components/OurMissionSection";
import { OurValuesSection } from "./_components/OurValuesSection";
import { PartnersSection } from "@/app/components/common/PartnersSection";

const ContactPage = async () => {
    return (
        <main>
            <Hero
                title="Sobre nós"
                description="Conheça mais sobre nossa história, missão, valores e as ferramentas que já produzimos."
            />
            <OurHistorySection />
            <OurMissionSection />
            <OurValuesSection />
            <PartnersSection />
        </main>
    );
};

export default ContactPage;