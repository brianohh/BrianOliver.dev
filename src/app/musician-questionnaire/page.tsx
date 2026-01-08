import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MusicianQuestionnaire from "@/components/MusicianQuestionnaire";

export const metadata: Metadata = {
  title: "Musician Website Questionnaire | Brian Oliver",
  description:
    "Fill out this questionnaire to help me understand your vision for your musician website. Let's create something amazing together.",
  openGraph: {
    title: "Musician Website Questionnaire | Brian Oliver",
    description:
      "Fill out this questionnaire to help me understand your vision for your musician website.",
    type: "website",
  },
};

export default function MusicianQuestionnairePage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <MusicianQuestionnaire />
      </main>
      <Footer />
    </>
  );
}
