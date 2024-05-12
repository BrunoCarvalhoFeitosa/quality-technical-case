import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";
import { Form } from "@/app/(auth)/sign-up/_components/Form";

const SignUpPage = async () => {
    const currentUser = await getCurrentUser();

    if (currentUser) {
        return redirect("/");
    }

    return (
        <Form />
    );
};

export default SignUpPage;