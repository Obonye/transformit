import HeroSection from "@/components/herosection";
import ValueProps from "@/components/valueprop";
import ServicesGrid from "@/components/services";
import Services2 from "@/components/services2";
import Testimonials from "@/components/Testimonials";
import TrustedBy from "@/components/trusted_by";
import ThirdSection from "@/components/third_section";

export default function Home() {
  return (
    <>
      <HeroSection />

      <section id="value-hub">
        <ValueProps />
      </section>
      <section>
        <TrustedBy />
      </section>

      <section id="services2">
        <Services2 />
      </section>
      <section id="process">
        <Testimonials />
      </section>

      <section id="about">
        <ThirdSection />
      </section>
    </>
  );
}
