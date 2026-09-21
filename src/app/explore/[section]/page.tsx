import { notFound } from "next/navigation";

import { LegalFooter } from "@/components/clone/LegalFooter";
import { SectionLanding, type SectionContent } from "@/components/clone/SectionLanding";
import { SiteHeader } from "@/components/clone/SiteHeader";

const sections: Record<string, SectionContent> = {
  personal: {
    eyebrow: "个人及家庭",
    title: "让智能设备更懂你的生活",
    description: "从学习、办公到家庭娱乐，按真实使用场景找到更合适的设备与服务。",
    features: [
      { title: "电脑与平板", description: "覆盖轻薄办公、游戏性能、学习创作等多种需求。" },
      { title: "会员权益", description: "模拟查看专属优惠、积分与以旧换新服务。" },
      { title: "服务支持", description: "了解保修、维修预约和常见问题处理流程。" },
    ],
  },
  "small-business": {
    eyebrow: "中小企业",
    title: "灵活可靠的企业数字化方案",
    description: "为成长型团队提供设备选型、批量采购和全周期运维建议。",
    features: [
      { title: "企业采购", description: "按人数、岗位和预算模拟生成设备采购清单。" },
      { title: "IT 运维", description: "集中了解部署、资产管理和售后支持方案。" },
      { title: "办公升级", description: "从混合办公到会议协作，规划更高效的工作环境。" },
    ],
  },
  enterprise: {
    eyebrow: "政教及大企业",
    title: "面向复杂场景的行业解决方案",
    description: "聚焦教育、政务和大型组织的安全、算力及规模化交付需求。",
    features: [
      { title: "智慧教育", description: "覆盖教学终端、实验室和数字校园应用场景。" },
      { title: "行业计算", description: "模拟了解工作站、服务器和边缘计算产品组合。" },
      { title: "安全交付", description: "展示从方案咨询到部署运维的完整服务链路。" },
    ],
  },
  brand: {
    eyebrow: "品牌",
    title: "科技，为每一种可能而生",
    description: "了解联想品牌理念、创新方向与可持续发展实践。",
    features: [
      { title: "创新科技", description: "探索个人智能、企业智能与人工智能技术趋势。" },
      { title: "品牌故事", description: "回顾持续创新与服务用户的发展历程。" },
      { title: "可持续发展", description: "关注绿色设计、循环利用与负责任的科技实践。" },
    ],
  },
};

interface ExplorePageProps {
  params: Promise<{ section: string }>;
}

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({ section }));
}

export default async function ExplorePage({ params }: ExplorePageProps) {
  const { section } = await params;
  const content = sections[section];

  if (!content) notFound();

  return (
    <main className="leaibot-clone">
      <SiteHeader />
      <div className="leaibot-stage leaibot-section-stage">
        <SectionLanding content={content} />
      </div>
      <LegalFooter />
    </main>
  );
}
