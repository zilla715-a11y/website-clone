import { CloneExperience } from "@/components/clone/CloneExperience";
import { LegalFooter } from "@/components/clone/LegalFooter";
import { SiteHeader } from "@/components/clone/SiteHeader";

export default function Home() {
  return (
    <main className="leaibot-clone">
      <SiteHeader />
      <div className="leaibot-stage">
        <CloneExperience />
      </div>
      <LegalFooter />
    </main>
  );
}
