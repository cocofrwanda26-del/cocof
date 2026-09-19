import ImpactStats from "@/components/sections/ImpactStats";
import Projects from "@/components/sections/Projects";
import SuccessStories from "@/components/sections/SuccessStories";

export default function ImpactsPage() {
  return (
    <div className="pt-24 min-h-screen">
      <ImpactStats />
      <Projects />
      <SuccessStories />
    </div>
  );
}
