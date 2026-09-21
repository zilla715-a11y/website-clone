"use client";

import { useEffect, useRef, useState } from "react";

import { Composer } from "@/components/clone/Composer";
import { ContentGallery } from "@/components/clone/ContentGallery";
import { HeroIntro } from "@/components/clone/HeroIntro";

interface ConversationMessage {
  content: string;
  id: number;
  role: "assistant" | "user";
}

interface SimulatedReply {
  content: string;
  suggestions: string[];
}

const defaultSuggestions = ["预算 6000 元怎么选？", "适合办公的轻薄本", "附近门店怎么查询？"];

function includesAny(text: string, words: string[]) {
  return words.some((word) => text.includes(word));
}

function createSimulatedReply(query: string, mode: string, reasoning: boolean): SimulatedReply {
  const text = query.toLowerCase();
  const reasoningNote = reasoning ? "我按用途、性能和预算综合分析了一下。" : "我先给你一个简明建议。";

  if (includesAny(text, ["y9000p", "拯救者", "游戏", "电竞"])) {
    return {
      content: `${reasoningNote}\n\n拯救者 Y9000P 2026 更适合游戏、三维设计和视频渲染。页面展示的配置为 i9-14900HX、RTX 5060 和 2.5K 240Hz 电竞屏。\n\n选购时建议优先确认显卡功耗、内存容量和售后服务；如果主要是办公或经常出差，轻薄机型会更合适。`,
      suggestions: ["和 YOGA Air 14c 对比", "预算 10000 元怎么选？", "适合大学生吗？"],
    };
  }

  if (includesAny(text, ["yoga", "轻薄", "办公", "出差"])) {
    return {
      content: `${reasoningNote}\n\nYOGA Air 14c 2026 偏向轻薄办公和移动创作，页面展示的配置为酷睿 Ultra 9、32GB 内存、2TB 存储和 2.8K OLED 触控屏。\n\n如果你经常携带电脑、重视屏幕和续航，它会比游戏本更合适；如果需要高强度游戏或三维渲染，则建议选择独立显卡机型。`,
      suggestions: ["适合剪辑视频吗？", "与拯救者对比", "学生优惠怎么申请？"],
    };
  }

  if (includesAny(text, ["pad", "平板", "小新"])) {
    return {
      content: `${reasoningNote}\n\n小新 Pad Pro 13 英寸更适合影音娱乐、学习笔记和轻办公。购买前建议确认是否需要键盘、手写笔和蜂窝网络，并根据常用软件选择合适的存储容量。`,
      suggestions: ["适合上网课吗？", "需要买手写笔吗？", "对比轻薄笔记本"],
    };
  }

  if (includesAny(text, ["学生", "教师", "教育", "优惠"])) {
    return {
      content: `${reasoningNote}\n\n教育优惠通常需要完成学生或教师身份认证。你可以准备学校名称、有效证件或在读信息，认证通过后再查看教育专享机型与价格。\n\n这是模拟页面，不会收集或上传你的真实身份材料。`,
      suggestions: ["推荐学生笔记本", "预算 6000 元", "认证需要什么材料？"],
    };
  }

  if (includesAny(text, ["职场", "认证", "企业"])) {
    return {
      content: `${reasoningNote}\n\n职场认证通常用于解锁企业员工专享权益。真实流程一般需要企业邮箱或在职证明；这个演示版本只模拟咨询流程，不会要求你提交个人资料。`,
      suggestions: ["企业采购方案", "办公电脑推荐", "如何保护个人信息？"],
    };
  }

  if (includesAny(text, ["门店", "附近", "地址", "线下"])) {
    return {
      content: `${reasoningNote}\n\n你可以告诉我所在城市和大致区域，我会演示门店筛选流程。例如输入“北京市海淀区”或“上海市浦东新区”。\n\n本地模拟不会读取你的定位，也不会上传位置信息。`,
      suggestions: ["北京市海淀区", "上海市浦东新区", "门店可以现场体验吗？"],
    };
  }

  if (includesAny(text, ["维修", "服务", "保修", "预约"])) {
    return {
      content: `${reasoningNote}\n\n建议先准备设备型号、序列号和故障现象，再选择在线诊断、到店维修或上门服务。这个模拟版本可以演示咨询步骤，但不会真正创建服务工单。`,
      suggestions: ["电脑无法开机", "查询保修期限", "预约到店维修"],
    };
  }

  if (includesAny(text, ["预算", "元", "价格", "便宜"])) {
    return {
      content: `${reasoningNote}\n\n选购时可以先按预算分三档：5000 元以内侧重日常学习办公；5000–8000 元可以兼顾性能与便携；8000 元以上可重点考虑高性能游戏、专业创作或高端轻薄体验。\n\n再告诉我你的主要用途，我可以继续缩小范围。`,
      suggestions: ["主要用于办公", "主要用于游戏", "主要用于设计剪辑"],
    };
  }

  return {
    content: `${reasoningNote}\n\n你当前选择的是“${mode}”模式。我可以模拟回答产品推荐、教育优惠、职场认证、门店查询和服务预约等问题。\n\n请补充预算、主要用途或所在城市，我会给出更具体的建议。`,
    suggestions: defaultSuggestions,
  };
}

export function CloneExperience() {
  const [messages, setMessages] = useState<ConversationMessage[]>([]);
  const [suggestions, setSuggestions] = useState(defaultSuggestions);
  const [isThinking, setIsThinking] = useState(false);
  const nextIdRef = useRef(1);
  const replyTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const threadEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    threadEndRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }, [messages, isThinking]);

  useEffect(() => {
    return () => {
      if (replyTimerRef.current) clearTimeout(replyTimerRef.current);
    };
  }, []);

  const sendMessage = (message: string, mode = "商品导购", reasoning = true) => {
    const trimmedMessage = message.trim();
    if (!trimmedMessage || isThinking) return;

    setMessages((current) => [
      ...current,
      { id: nextIdRef.current++, role: "user", content: trimmedMessage },
    ]);
    setIsThinking(true);

    const reply = createSimulatedReply(trimmedMessage, mode, reasoning);
    replyTimerRef.current = setTimeout(() => {
      setMessages((current) => [
        ...current,
        { id: nextIdRef.current++, role: "assistant", content: reply.content },
      ]);
      setSuggestions(reply.suggestions);
      setIsThinking(false);
      replyTimerRef.current = null;
    }, reasoning ? 900 : 450);
  };

  const resetConversation = () => {
    if (replyTimerRef.current) clearTimeout(replyTimerRef.current);
    replyTimerRef.current = null;
    setMessages([]);
    setSuggestions(defaultSuggestions);
    setIsThinking(false);
  };

  if (messages.length === 0 && !isThinking) {
    return (
      <>
        <HeroIntro />
        <Composer onSend={sendMessage} />
        <ContentGallery onCardSelect={(prompt) => sendMessage(prompt)} />
      </>
    );
  }

  return (
    <section className="leaibot-chat-shell" aria-label="模拟乐享助手对话">
      <header className="leaibot-chat-toolbar">
        <div>
          <strong>乐享助手</strong>
          <span>本地模拟 · 不会上传你的输入</span>
        </div>
        <button type="button" onClick={resetConversation}>开启新对话</button>
      </header>

      <div className="leaibot-chat-thread" aria-live="polite">
        {messages.map((message) => (
          <article className="leaibot-message" data-role={message.role} key={message.id}>
            <span className="leaibot-message-author">
              {message.role === "assistant" ? "乐享助手" : "你"}
            </span>
            <p>{message.content}</p>
          </article>
        ))}

        {isThinking ? (
          <div className="leaibot-thinking" role="status" aria-label="助手正在思考">
            <span />
            <span />
            <span />
          </div>
        ) : null}

        {!isThinking && messages.at(-1)?.role === "assistant" ? (
          <div className="leaibot-suggestions" aria-label="快捷追问">
            {suggestions.map((suggestion) => (
              <button type="button" key={suggestion} onClick={() => sendMessage(suggestion)}>
                {suggestion}
              </button>
            ))}
          </div>
        ) : null}
        <div ref={threadEndRef} />
      </div>

      <div className="leaibot-chat-composer">
        <Composer disabled={isThinking} onSend={sendMessage} />
      </div>
    </section>
  );
}
