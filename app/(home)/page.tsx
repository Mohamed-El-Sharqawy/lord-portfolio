import Hero from "./_components/Hero/Hero";
import Logos from "./_components/Logos/Logos";
import Services from "./_components/Services/Services";
import Testimonials from "./_components/Testimonials/Testimonials";
import WorkExperience from "./_components/WorkExperience/WorkExperience";
import WorkSteps from "./_components/WorkSteps/WorkSteps";

// meta
export const metadata = {
  title: "Home | Mohamed El-Sharqawy",
  description:
    "I'm a full-stack developer with a passion for creating beautiful and functional websites and applications.",
  keywords:
    "full-stack developer, web developer, software engineer, react developer, next.js developer, node.js developer, python developer, django developer, flask developer, sql developer, no-sql developer, database developer, web design, web development, software development, web design and development, web design and development services, web design and development company, web design and development agency, web design and development solutions, web design and development projects, web design and development services, web design and development company, web design and development agency, web design and development solutions, web design and development projects",
  robots: "index, follow",
  author: "Mohamed El-Sharqawy",
  viewport: "width=device-width, initial-scale=1",
  creator: "Mohamed El-Sharqawy",
  openGraph: {
    title: "Home | Mohamed El-Sharqawy",
    description:
      "I'm a full-stack developer with a passion for creating beautiful and functional websites and applications.",
    url: "https://mohamed-elsharqawy.vercel.app",
    siteName: "Mohamed El-Sharqawy",
    images: [
      {
        url: "/og.png",
      },
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Logos />
      <Services />
      <WorkExperience />
      <WorkSteps />
      <Testimonials />
    </>
  );
}
