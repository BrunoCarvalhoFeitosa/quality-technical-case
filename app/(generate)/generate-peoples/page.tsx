import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getGeneratedPeoples from "@/app/actions/getGeneratedPeoples";
import { Content } from "./_components/Content";
import { PartnersSection } from "@/app/components/common/PartnersSection";

const GeneratePeoplesPage = async () => {
    const currentUser = await getCurrentUser();
    const generatedPeoples = await getGeneratedPeoples();

    if (!currentUser)  {
        return redirect("/sign-in");
    }

    return (
        <main>
            <Content itemsPerPage={5} generatedPeoples={generatedPeoples} />
            <PartnersSection />
        </main>
    );
};

export default GeneratePeoplesPage;