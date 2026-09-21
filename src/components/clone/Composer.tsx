"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
} from "react";

const ASSET_ROOT = "/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2";
const MAX_TEXTAREA_HEIGHT = 148;

const MORE_OPTIONS = ["门店查询", "职场认证", "服务预约"] as const;

export function Composer() {
  const [message, setMessage] = useState("");
  const [isReasoningEnabled, setIsReasoningEnabled] = useState(true);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const moreRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resizeTextarea = useCallback(() => {
    const textarea = textareaRef.current;

    if (!textarea) {
      return;
    }

    textarea.style.height = "auto";
    textarea.style.height = `${Math.min(textarea.scrollHeight, MAX_TEXTAREA_HEIGHT)}px`;
  }, []);

  useEffect(() => {
    if (!isMoreOpen) {
      return;
    }

    const handlePointerDown = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !moreRef.current?.contains(event.target)
      ) {
        setIsMoreOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMoreOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMoreOpen]);

  const handleMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(event.target.value);
    resizeTextarea();
  };

  const handleSend = () => {
    if (!message.trim()) {
      return;
    }

    setMessage("");
    requestAnimationFrame(resizeTextarea);
    textareaRef.current?.focus();
  };

  return (
    <div className="leaibot-dock">
      <div className="leaibot-composer">
        <textarea
          ref={textareaRef}
          className="leaibot-textarea"
          aria-label="输入消息"
          placeholder="推荐笔记本电脑"
          rows={1}
          value={message}
          onChange={handleMessageChange}
        />

        <div className="leaibot-composer-actions">
          <div className="leaibot-action-group">
            <button
              className="leaibot-control"
              type="button"
              aria-label="切换深度思考"
              aria-pressed={isReasoningEnabled}
              onClick={() => setIsReasoningEnabled((enabled) => !enabled)}
            >
              <Image
                className="leaibot-control-icon"
                src={`${ASSET_ROOT}/composer-reasoning.svg`}
                alt=""
                aria-hidden="true"
                width={14}
                height={14}
              />
              深度思考
            </button>

            <div className="leaibot-scope-group">
              <button className="leaibot-control" type="button">
                解决方案
              </button>
              <button className="leaibot-control" type="button">
                商品导购
              </button>

              <div className="leaibot-more" ref={moreRef}>
                <button
                  className="leaibot-control leaibot-more-button"
                  type="button"
                  aria-label="更多服务"
                  aria-haspopup="menu"
                  aria-expanded={isMoreOpen}
                  onClick={() => setIsMoreOpen((open) => !open)}
                >
                  更多
                </button>

                {isMoreOpen ? (
                  <div className="leaibot-more-menu" role="menu">
                    {MORE_OPTIONS.map((option) => (
                      <button
                        className="leaibot-control"
                        type="button"
                        role="menuitem"
                        key={option}
                        onClick={() => setIsMoreOpen(false)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div className="leaibot-composer-right">
            <button
              className="leaibot-image-button"
              type="button"
              aria-label="添加图片"
            >
              <Image
                className="leaibot-square-icon"
                src={`${ASSET_ROOT}/composer-image.svg`}
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
              />
            </button>
            <button
              className="leaibot-send-button"
              type="button"
              aria-label="发送消息"
              disabled={!message.trim()}
              onClick={handleSend}
            >
              <Image
                className="leaibot-square-icon"
                src={`${ASSET_ROOT}/composer-send.svg`}
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
