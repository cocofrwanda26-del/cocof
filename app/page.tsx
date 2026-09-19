import Hero from "@/components/sections/Hero";
import HomeAbout from "@/components/sections/HomeAbout";
import HomeFeaturedPrograms from "@/components/sections/HomeFeaturedPrograms";
import HomeEnterprise from "@/components/sections/HomeEnterprise";
import SuccessStories from "@/components/sections/SuccessStories";
import PartnerMarquee from "@/components/sections/PartnerMarquee";
import PartnerCTA from "@/components/sections/PartnerCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeAbout />
      <HomeFeaturedPrograms />
      <HomeEnterprise />
      <SuccessStories />
      <PartnerMarquee />
      <PartnerCTA />
    </>
  );
}
