import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
import { Form } from "@/app/(auth)/sign-in/_components/Form";

const SignInPage = async () => {
    const currentUser = await getCurrentUser();

    if (currentUser) {
        return redirect("/");
    }

    return (
        <Form />
    );
};

export default SignInPage;