import type { Metadata } from "next";
import getCurrentUser from "./actions/getCurrentUser";
import { ClientSideHydration } from "./components/common/ClientSideHydration";
import { Header } from "./components/common/Header";
import { Footer } from "./components/common/Footer";
import { ToastContainer } from "react-toastify";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "QualitIA",
    description: "Generated by create next app",
    authors: {
        name: "Bruno Carvalho Feitosa",
        url: "https://br.linkedin.com/in/bruno-carvalho-feitosa"
    },
    icons: {
        icon: "./favicon/favicon.ico",
        shortcut: "./favicon/favicon.ico"
    }
};

export default async function RootLayout({ children }: Readonly<{
  children: React.ReactNode;
}>) {
    const currentUser = await getCurrentUser();
    
    return (
        <html lang="pt-BR">
            <body className={inter.className}>
                <ClientSideHydration>
                    <Header currentUser={currentUser} />
                    {children}
                    <Footer />
                    <ToastContainer toastStyle={{ width: "100%" }} />
                </ClientSideHydration>
            </body>
        </html>
    );
};