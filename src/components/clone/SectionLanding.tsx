import Link from "next/link";

export interface SectionContent {
  description: string;
  eyebrow: string;
  features: readonly { description: string; title: string }[];
  title: string;
}

interface SectionLandingProps {
  content: SectionContent;
}

export function SectionLanding({ content }: SectionLandingProps) {
  return (
    <section className="leaibot-section leaibot-rise" aria-labelledby="leaibot-section-title">
      <p className="leaibot-section-eyebrow">{content.eyebrow}</p>
      <h1 id="leaibot-section-title">{content.title}</h1>
      <p className="leaibot-section-description">{content.description}</p>

      <div className="leaibot-section-grid">
        {content.features.map((feature) => (
          <article className="leaibot-section-card" key={feature.title}>
            <span aria-hidden="true">✦</span>
            <h2>{feature.title}</h2>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>

      <Link className="leaibot-back-home" href="/">
        <span aria-hidden="true">←</span>
        返回首页
      </Link>
    </section>
  );
}
