import { redirect } from "next/navigation";

import { CloneExperience } from "@/components/clone/CloneExperience";
import { LegalFooter } from "@/components/clone/LegalFooter";
import { SiteHeader } from "@/components/clone/SiteHeader";

interface ChatPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

function readFirst(value: string | string[] | undefined) {
  return Array.isArray(value) ? value[0] : value;
}

export default async function ChatPage({ searchParams }: ChatPageProps) {
  const params = await searchParams;
  const message = readFirst(params.message)?.trim();

  if (!message) redirect("/");

  const mode = readFirst(params.mode) || "商品导购";
  const reasoning = readFirst(params.reasoning) !== "0";

  return (
    <main className="leaibot-clone">
      <SiteHeader />
      <div className="leaibot-stage">
        <CloneExperience
          initialMessage={message}
          initialMode={mode}
          initialReasoning={reasoning}
        />
      </div>
      <LegalFooter />
    </main>
  );
}
