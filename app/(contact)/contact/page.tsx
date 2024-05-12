import { Hero } from "@/app/components/common/Hero";
import { Form } from "./_components/Form";
import { PartnersSection } from "@/app/components/common/PartnersSection";

const ContactPage = () => {
    return (
        <main>
            <Hero
                title="Entre em contato conosco"
                description="Descreva brevemente o motivo do seu contato, seja para tirar alguma dúvida ou para contratar nossos serviços."
            />
            <Form />
            <PartnersSection />
        </main>
    );
};

export default ContactPage;