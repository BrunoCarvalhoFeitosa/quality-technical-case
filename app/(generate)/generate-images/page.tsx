import { redirect } from "next/navigation";
import getCurrentUser from "@/app/actions/getCurrentUser";
import getGeneratedImages from "@/app/actions/getGeneratedImages";
import { Content } from "./_components/Content";
import { PartnersSection } from "@/app/components/common/PartnersSection";

const GenerateImagesPage = async () => {
    const currentUser = await getCurrentUser();
    const generatedImages = await getGeneratedImages();

    if (!currentUser)  {
        return redirect("/sign-in");
    }

    return (
        <main>
            <Content itemsPerPage={5} generatedImages={generatedImages} />
            <PartnersSection />
        </main>
    );
};

export default GenerateImagesPage;