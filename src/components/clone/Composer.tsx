"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent as ReactKeyboardEvent,
} from "react";

const ASSET_ROOT = "/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2";
const MAX_TEXTAREA_HEIGHT = 148;

const MORE_OPTIONS = ["门店查询", "职场认证", "服务预约"] as const;

interface ComposerProps {
  disabled?: boolean;
  onSend?: (message: string, mode: string, reasoning: boolean) => void;
}

export function Composer({ disabled = false, onSend }: ComposerProps) {
  const [message, setMessage] = useState("");
  const [isReasoningEnabled, setIsReasoningEnabled] = useState(true);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [activeMode, setActiveMode] = useState("解决方案");
  const [attachmentName, setAttachmentName] = useState("");
  const moreRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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
    const trimmedMessage = message.trim();

    if (!trimmedMessage || disabled) {
      return;
    }

    onSend?.(trimmedMessage, activeMode, isReasoningEnabled);
    setMessage("");
    setAttachmentName("");
    requestAnimationFrame(resizeTextarea);
    textareaRef.current?.focus();
  };

  const handleKeyDown = (event: ReactKeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      handleSend();
    }
  };

  const selectMode = (mode: string) => {
    setActiveMode(mode);
    setIsMoreOpen(false);
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
          disabled={disabled}
          onChange={handleMessageChange}
          onKeyDown={handleKeyDown}
        />

        {attachmentName ? (
          <div className="leaibot-attachment" role="status">
            已选择图片：{attachmentName}
            <button type="button" onClick={() => setAttachmentName("")} aria-label="移除图片">
              ×
            </button>
          </div>
        ) : null}

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
              <button
                className="leaibot-control"
                type="button"
                aria-pressed={activeMode === "解决方案"}
                onClick={() => selectMode("解决方案")}
              >
                解决方案
              </button>
              <button
                className="leaibot-control"
                type="button"
                aria-pressed={activeMode === "商品导购"}
                onClick={() => selectMode("商品导购")}
              >
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
                        role="menuitemradio"
                        key={option}
                        aria-checked={activeMode === option}
                        onClick={() => selectMode(option)}
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
              onClick={() => fileInputRef.current?.click()}
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
            <input
              ref={fileInputRef}
              className="leaibot-file-input"
              type="file"
              accept="image/*"
              tabIndex={-1}
              onChange={(event) => setAttachmentName(event.target.files?.[0]?.name ?? "")}
            />
            <button
              className="leaibot-send-button"
              type="button"
              aria-label="发送消息"
              disabled={!message.trim() || disabled}
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
