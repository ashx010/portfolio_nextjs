import { Poppins, Sigmar, Kanit } from "next/font/google";

export const PoppinsFont = Poppins({
    variable: "--font-poppins",
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

export const SigmarFont = Sigmar({
    variable: "--font-sigmar",
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});

export const KanitFont = Kanit({
    variable: "--font-kanit",
    weight: "400",
    style: "normal",
    subsets: ["latin"],
});