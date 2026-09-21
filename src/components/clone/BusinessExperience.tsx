"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const sharedAssetRoot = "/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2";
const businessAssetRoot = "/sites/p0-leaibot-cn-a9b751a9/business";

const navigation = [
  { href: "/", label: "首页" },
  { href: "/explore/personal", label: "个人及家庭" },
  { href: "/b-chat", label: "中小企业" },
  { href: "/explore/enterprise", label: "政教及大企业" },
  { href: "/explore/brand", label: "品牌" },
] as const;

const prompts = [
  "我要企业批量采购",
  "我要企业认证享专享价",
  "我要对公开票和账期",
  "我要找商用电脑",
  "我要查售后和上门服务",
] as const;

const scenes = [
  {
    background: "scene-bg-1.jpg",
    description: "从日常协作到多任务处理，以稳定性能与灵活部署支撑团队高效运转。",
    eyebrow: "ThinkPad T14 2025",
    label: "高效办公",
    products: [
      { image: "scene-thinkpad-t14.jpg", label: "商务笔记本", name: "ThinkPad" },
      { image: "scene-thinkbook.jpg", label: "固定工位", name: "ThinkBook" },
      { image: "scene-thinkcentre.jpg", label: "办公保障", name: "ThinkCentre" },
    ],
    title: "高效办公 灵活成长",
  },
  {
    background: "scene-bg-2.jpg",
    description: "轻薄设备与便携配件默契协同，让差旅办公随时保持高效与从容。",
    eyebrow: "移动办公组合",
    label: "移动差旅",
    products: [
      { image: "scene-thinkpad-x.jpg", label: "轻薄商务本", name: "ThinkPad X" },
      { image: "scene-power-bank.jpg", label: "随行供电", name: "移动电源" },
      { image: "scene-dock.jpg", label: "灵活扩展", name: "扩展坞" },
    ],
    title: "轻装出发 随时在线",
  },
  {
    background: "scene-bg-3.jpg",
    description: "以专业工作站、精准显示和强劲算力，承载设计创意与复杂任务。",
    eyebrow: "专业创作方案",
    label: "专业设计",
    products: [
      { image: "scene-thinkpad-p.jpg", label: "移动工作站", name: "ThinkPad P" },
      { image: "scene-thinkstation.jpg", label: "专业主机", name: "ThinkStation" },
      { image: "scene-thinkvision.jpg", label: "专业显示", name: "ThinkVision" },
    ],
    title: "专业性能 灵感尽释",
  },
  {
    background: "scene-bg-4.jpg",
    description: "从智能会议到内容共享，打通远程沟通与团队协作的每个环节。",
    eyebrow: "ThinkSmart 会议协作方案",
    label: "会议协作",
    products: [
      { image: "scene-thinksmart.jpg", label: "会议终端", name: "ThinkSmart" },
      { image: "scene-thinkvision.jpg", label: "内容显示", name: "ThinkVision" },
      { image: "scene-headset.jpg", label: "音视频外设", name: "耳麦" },
    ],
    title: "会议协作 沟通无界",
  },
  {
    background: "scene-bg-5.jpg",
    description: "面向成长型团队，以可靠设备组合兼顾预算、效率与后续扩展。",
    eyebrow: "企业成长设备方案",
    label: "成长型团队",
    products: [
      { image: "scene-yangtian.jpg", label: "可靠商用", name: "扬天" },
      { image: "scene-thinkbook.jpg", label: "团队办公", name: "ThinkBook" },
      { image: "scene-thinkcentre.jpg", label: "稳定部署", name: "ThinkCentre" },
    ],
    title: "稳健起步 持续成长",
  },
] as const;

const productFloors = [
  {
    title: "ThinkPad",
    products: [
      { image: "thinkpad-t14.jpg", name: "联想 ThinkPad T14", price: "¥ 11,799 起" },
      { image: "thinkpad-x1-carbon.jpg", name: "联想 ThinkPad X1 Carbon Aura", price: "¥ 17,799 起" },
      { image: "thinkpad-x13.jpg", name: "联想 ThinkPad X13", price: "¥ 12,499 起" },
      { image: "thinkpad-t14p.jpg", name: "联想 ThinkPad T14p", price: "¥ 19,999 起" },
    ],
  },
  {
    title: "ThinkBook",
    products: [
      { image: "thinkbook-16.jpg", name: "联想 ThinkBook 16", price: "¥ 8,499 起" },
      { image: "thinkbook-14.jpg", name: "联想 ThinkBook 14", price: "¥ 8,499 起" },
      { image: "thinkbook-14-plus.jpg", name: "联想 ThinkBook 14+", price: "¥ 10,299 起" },
      { image: "thinkbook-16-plus.jpg", name: "联想 ThinkBook 16+", price: "¥ 12,999 起" },
    ],
  },
  {
    title: "扬天",
    products: [
      { image: "yangtian-v15.jpg", name: "联想扬天 V15", price: "¥ 4,999 起" },
      { image: "yangtian-m4000q.jpg", name: "联想扬天 M4000q", price: "¥ 4,999 起" },
      { image: "yangtian-v14.jpg", name: "联想扬天 V14", price: "¥ 5,999 起" },
    ],
  },
  {
    title: "办公",
    products: [
      { image: "thinkvision-s24.jpg", name: "联想 ThinkVision S24-4e", price: "¥ 549 起" },
      { image: "thinkvision-t24v.jpg", name: "ThinkVision T24v-30", price: "¥ 1,599 起" },
      { image: "thinkvision-s27.jpg", name: "联想 ThinkVision S27-4e", price: "¥ 769 起" },
      { image: "thinkvision-p27h.jpg", name: "ThinkVision P27h-30", price: "¥ 1,999 起" },
    ],
  },
] as const;

export function BusinessExperience() {
  const [activeScene, setActiveScene] = useState(0);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isReasoning, setIsReasoning] = useState(true);
  const scene = scenes[activeScene];

  const sendMessage = () => {
    const value = input.trim();
    if (!value) return;
    setMessage(`已收到“${value}”。这是本地模拟咨询，你可以继续浏览右侧企业产品与场景方案。`);
    setInput("");
  };

  return (
    <main className="business-clone">
      <header className="business-header">
        <Link className="business-logo" href="/" aria-label="新建对话并返回首页">
          <Image src={`${sharedAssetRoot}/logo-full-red.png`} alt="联想乐享" width={190} height={51} priority />
        </Link>

        <nav className="business-navigation" data-open={isNavOpen} aria-label="主导航">
          <button type="button" onClick={() => setIsNavOpen((open) => !open)} aria-expanded={isNavOpen}>
            <span className="business-nav-collapsed-label">中小企业：新对话</span>
            <span className="business-nav-expanded-label">开启新对话</span>
            <span className="business-nav-caret" aria-hidden="true" />
          </button>
          <div className="business-navigation-menu">
            {navigation.map((item) => (
              <Link href={item.href} key={item.href} data-active={item.href === "/b-chat"}>
                {item.label}
              </Link>
            ))}
          </div>
        </nav>

        <div className="business-header-actions" aria-label="快捷入口">
          <button type="button" aria-label="订单">
            <Image src={`${sharedAssetRoot}/mall-orders.svg`} alt="" width={20} height={20} />
          </button>
          <button type="button" aria-label="账号">
            <Image src={`${sharedAssetRoot}/mall-account.svg`} alt="" width={20} height={20} />
          </button>
        </div>
      </header>

      <div className="business-shell">
        <aside className="business-assistant" aria-label="联想乐享 AI 助手">
          <div className="business-assistant-tools">
            <button type="button" aria-label="新建对话" onClick={() => setMessage("")}>＋</button>
            <button type="button" className="business-switch"><span aria-hidden="true">⇄</span> 换位</button>
          </div>

          <section className="business-assistant-welcome">
            <h1><span>我是</span>联想乐享</h1>
            <p>有任何问题随时告诉我</p>
            <div className="business-quick-list">
              {prompts.map((prompt) => (
                <button type="button" key={prompt} onClick={() => setInput(prompt)}>
                  <span>{prompt}</span><span aria-hidden="true">→</span>
                </button>
              ))}
            </div>
            {message ? <p className="business-simulated-reply" role="status">{message}</p> : null}
          </section>

          <div className="business-composer-area">
            <div className="business-shortcuts">
              <button type="button">♧ 客服</button>
              <button type="button">▣ 咨询热线</button>
              <button type="button">♔ 企业认证</button>
              <button type="button">♧ 职场认证</button>
            </div>
            <div className="business-composer">
              <textarea
                aria-label="输入问题"
                placeholder="推荐一款适合我的笔记本电脑"
                rows={2}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" && !event.shiftKey) {
                    event.preventDefault();
                    sendMessage();
                  }
                }}
              />
              <div>
                <button
                  type="button"
                  className="business-reasoning"
                  aria-pressed={isReasoning}
                  onClick={() => setIsReasoning((enabled) => !enabled)}
                >
                  ⌘ 深度思考(自动)
                </button>
                <span />
                <button type="button" className="business-image-button" aria-label="添加图片">▧</button>
                <button type="button" className="business-send-button" aria-label="发送" onClick={sendMessage}>↑</button>
              </div>
            </div>
          </div>
        </aside>

        <section className="business-content" aria-label="导购内容">
          <article
            className="business-scene"
            style={{ backgroundImage: `url(${businessAssetRoot}/${scene.background})` }}
          >
            <div className="business-scene-copy">
              <span>{scene.label}</span>
              <p>{scene.eyebrow}</p>
              <h2>{scene.title}</h2>
              <p>{scene.description}</p>
            </div>

            <div className="business-scene-products">
              {scene.products.map((product) => (
                <button type="button" key={product.name}>
                  <span className="business-scene-product-image">
                    <Image src={`${businessAssetRoot}/${product.image}`} alt={product.name} fill sizes="220px" />
                  </span>
                  <strong>{product.label}</strong>
                  <small>{product.name}</small>
                </button>
              ))}
            </div>

            <div className="business-scene-tabs" role="tablist" aria-label="场景轮播进度">
              {scenes.map((item, index) => (
                <button
                  type="button"
                  role="tab"
                  aria-selected={index === activeScene}
                  key={item.label}
                  onClick={() => setActiveScene(index)}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </article>

          <div className="business-floors">
            {productFloors.map((floor) => (
              <section className="business-floor" key={floor.title} aria-label={floor.title}>
                <div className="business-floor-heading">
                  <h2>{floor.title}</h2>
                  <button type="button">↻ 换一换</button>
                </div>
                <div className="business-product-grid">
                  {floor.products.map((product) => (
                    <button type="button" className="business-product-card" key={product.name}>
                      <span className="business-product-image">
                        <Image src={`${businessAssetRoot}/${product.image}`} alt={product.name} fill sizes="320px" />
                      </span>
                      <strong>{product.name}</strong>
                      <small>{product.price}</small>
                    </button>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
