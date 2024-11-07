import Hero from "./_components/Hero/Hero";
import Logos from "./_components/Logos/Logos";
import Services from "./_components/Services/Services";
import Testimonials from "./_components/Testimonials/Testimonials";
import WorkExperience from "./_components/WorkExperience/WorkExperience";
import WorkSteps from "./_components/WorkSteps/WorkSteps";

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
};
