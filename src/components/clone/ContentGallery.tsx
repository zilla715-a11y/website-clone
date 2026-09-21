"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import type {
  GalleryCategory,
  GalleryCategoryData,
} from "@/types/leaibot";

const GALLERY_CATEGORIES: GalleryCategoryData[] = [
  {
    id: "new",
    label: "新品",
    cards: [
      {
        badge: "新品首发",
        name: "拯救者 Y9000P 2026",
        description: "i9-14900HX ｜ RTX 5060 ｜ 2.5K 240Hz 电竞屏",
        price: "¥15,098",
        image:
          "/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2/lxfd-gallery-1-1.jpg",
      },
      {
        badge: "轻薄旗舰",
        name: "YOGA Air 14c 2026",
        description: "酷睿 Ultra9 ｜ 32G/2T ｜ 2.8K OLED 触控",
        price: "¥8,999",
        image:
          "/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2/lxfd-gallery-1-2.jpg",
      },
      {
        badge: "全能之选",
        name: "小新Pad Pro 13英寸",
        description: "酷睿 Ultra5 225H ｜ 32G/1T ｜ 全能轻薄",
        price: "¥7,299",
        image:
          "/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2/lxfd-gallery-1-3.jpg",
      },
    ],
  },
  {
    id: "activities",
    label: "活动",
    cards: [
      {
        visualLabel: "618 SALE",
        visualTone: "aubergine",
        badge: "限时",
        name: "618 年中钜惠",
        description: "全场至高省 2000，下单再享 12 期免息",
        price: "省 2000",
      },
      {
        visualLabel: "EDU SEASON",
        visualTone: "lavender",
        badge: "进行中",
        name: "教育优惠季",
        description: "学生 / 教师认证，专属机型至高 9 折",
        price: "享 9 折",
      },
      {
        visualLabel: "TRADE-IN",
        visualTone: "slate",
        badge: "可叠加",
        name: "以旧换新",
        description: "旧机抵扣 + 平台补贴，至高补 800 元",
        price: "补 800",
      },
    ],
  },
  {
    id: "news",
    label: "新闻",
    cards: [
      {
        visualLabel: "LENOVO LEGION",
        visualTone: "aubergine",
        badge: "官方",
        name: "联想 2026 拯救者全系发布",
        description: "搭载新一代 AI 引擎与超频引擎，性能再进阶",
        price: "查看全文",
      },
      {
        visualLabel: "AI PC",
        visualTone: "lavender",
        badge: "行业",
        name: "联想 AI PC 出货领跑行业",
        description: "IDC 最新报告：中国 AI PC 市场份额持续第一",
        price: "查看全文",
      },
      {
        visualLabel: "5000+ STORES",
        visualTone: "slate",
        badge: "动态",
        name: "联想乐享门店破 5000 家",
        description: "线下服务网络全面升级，到店体验更进一步",
        price: "查看全文",
      },
    ],
  },
  {
    id: "cases",
    label: "案例",
    cards: [
      {
        visualLabel: "SMART CAMPUS",
        visualTone: "aubergine",
        badge: "已交付",
        name: "某重点高校机房方案",
        description: "1200 台统一部署与运维，开机即用，集中管理",
        price: "教育行业",
      },
      {
        visualLabel: "CREATIVE STUDIO",
        visualTone: "lavender",
        badge: "标杆",
        name: "设计工作室创作方案",
        description: "ThinkStation + 校色屏整体方案，效率提升 40%",
        price: "创意设计",
      },
      {
        visualLabel: "SMART RETAIL",
        visualTone: "slate",
        badge: "规模化",
        name: "连锁零售 POS 升级",
        description: "300+ 门店终端统一焕新，稳定支撑高峰交易",
        price: "零售行业",
      },
    ],
  },
];

const CATEGORY_BY_ID = new Map(
  GALLERY_CATEGORIES.map((category) => [category.id, category]),
);

export function ContentGallery() {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("new");
  const [displayedCategory, setDisplayedCategory] =
    useState<GalleryCategory>("new");
  const [isSwitching, setIsSwitching] = useState(false);
  const switchTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (switchTimerRef.current !== null) {
        clearTimeout(switchTimerRef.current);
      }
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  const selectCategory = (category: GalleryCategory) => {
    if (category === activeCategory) {
      return;
    }

    if (switchTimerRef.current !== null) {
      clearTimeout(switchTimerRef.current);
    }
    if (animationFrameRef.current !== null) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    setActiveCategory(category);
    setIsSwitching(true);
    switchTimerRef.current = setTimeout(() => {
      setDisplayedCategory(category);
      animationFrameRef.current = requestAnimationFrame(() => {
        setIsSwitching(false);
        animationFrameRef.current = null;
      });
      switchTimerRef.current = null;
    }, 180);
  };

  const gallery = CATEGORY_BY_ID.get(displayedCategory) ?? GALLERY_CATEGORIES[0];

  return (
    <section className="leaibot-gallery" aria-label="联想乐享精选内容">
      <div
        className="leaibot-tabs"
        data-active={activeCategory}
        role="tablist"
        aria-label="内容分类"
      >
        {GALLERY_CATEGORIES.map((category) => (
          <button
            key={category.id}
            className="leaibot-tab"
            type="button"
            role="tab"
            id={`leaibot-tab-${category.id}`}
            aria-controls={`leaibot-panel-${category.id}`}
            aria-selected={activeCategory === category.id}
            tabIndex={activeCategory === category.id ? 0 : -1}
            onClick={() => selectCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
        <span className="leaibot-tab-ink" aria-hidden="true" />
      </div>

      <div
        className="leaibot-gallery-grid"
        id={`leaibot-panel-${displayedCategory}`}
        role="tabpanel"
        aria-labelledby={`leaibot-tab-${displayedCategory}`}
        data-switching={String(isSwitching)}
      >
        {gallery.cards.map((card) => (
          <article className="leaibot-card" key={card.name}>
            <div
              className="leaibot-card-visual"
              data-tone={card.visualTone ?? "aubergine"}
            >
              {card.image ? (
                <Image
                  className="leaibot-card-image"
                  src={card.image}
                  alt={card.name}
                  fill
                  loading="eager"
                  sizes="(min-width: 1740px) 320px, (min-width: 1280px) 293px, 160px"
                />
              ) : null}
              {card.visualLabel ? (
                <span className="leaibot-card-visual-label">
                  {card.visualLabel}
                </span>
              ) : null}
            </div>
            <div className="leaibot-card-meta">
              <span className="leaibot-card-badge">{card.badge}</span>
              <strong className="leaibot-card-name">{card.name}</strong>
              <p className="leaibot-card-description">{card.description}</p>
              <span className="leaibot-card-foot">{card.price}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
