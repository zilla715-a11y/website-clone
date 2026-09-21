import { Composer } from "@/components/clone/Composer";
import { ContentGallery } from "@/components/clone/ContentGallery";
import { HeroIntro } from "@/components/clone/HeroIntro";
import { LegalFooter } from "@/components/clone/LegalFooter";
import { SiteHeader } from "@/components/clone/SiteHeader";

export default function Home() {
  return (
    <main className="leaibot-clone">
      <SiteHeader />
      <div className="leaibot-stage">
        <HeroIntro />
        <Composer />
        <ContentGallery />
      </div>
      <LegalFooter />
    </main>
  );
}
