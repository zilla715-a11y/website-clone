"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const assetRoot = "/sites/p0-leaibot-cn-a9b751a9/root-8a5edab2";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/explore/personal", label: "个人及家庭" },
  { href: "/b-chat", label: "中小企业" },
  { href: "/explore/enterprise", label: "政教及大企业" },
  { href: "/explore/brand", label: "品牌" },
] as const;

type PopoverName = "orders" | "account" | null;

export function SiteHeader() {
  const pathname = usePathname();
  const headerRef = useRef<HTMLElement>(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activePopover, setActivePopover] = useState<PopoverName>(null);

  useEffect(() => {
    const closeOnOutsidePress = (event: PointerEvent) => {
      if (event.target instanceof Node && !headerRef.current?.contains(event.target)) {
        setIsNavOpen(false);
        setActivePopover(null);
      }
    };

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsNavOpen(false);
        setActivePopover(null);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsidePress);
    document.addEventListener("keydown", closeOnEscape);

    return () => {
      document.removeEventListener("pointerdown", closeOnOutsidePress);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  const togglePopover = (popover: Exclude<PopoverName, null>) => {
    setActivePopover((current) => (current === popover ? null : popover));
  };

  return (
    <header ref={headerRef} className="leaibot-header leaibot-fade">
      <Link
        className="leaibot-logo"
        href="/"
        aria-label="联想乐享首页"
      >
        <Image
          className="leaibot-logo-image"
          src={`${assetRoot}/logo-full-red.png`}
          alt="联想乐享"
          width={112}
          height={30}
          priority
        />
      </Link>

      <nav className="leaibot-nav" data-open={isNavOpen} aria-label="主导航">
        <button
          className="leaibot-nav-current"
          type="button"
          aria-expanded={isNavOpen}
          aria-controls="leaibot-primary-navigation"
          onClick={() => setIsNavOpen((current) => !current)}
        >
          开启新对话
        </button>

        <div className="leaibot-nav-links" id="leaibot-primary-navigation">
          {navItems.map((item) => (
            <Link
              className="leaibot-nav-link"
              data-active={pathname === item.href}
              href={item.href}
              key={item.href}
              onClick={() => setIsNavOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>

      <div className="leaibot-actions">
        <button
          className="leaibot-icon-button"
          type="button"
          aria-label="我的订单"
          aria-expanded={activePopover === "orders"}
          aria-controls="leaibot-orders-popover"
          onClick={() => togglePopover("orders")}
        >
          <Image
            className="leaibot-action-icon"
            src={`${assetRoot}/mall-orders.svg`}
            alt=""
            width={18}
            height={18}
          />
        </button>

        <button
          className="leaibot-icon-button"
          type="button"
          aria-label="个人中心"
          aria-expanded={activePopover === "account"}
          aria-controls="leaibot-account-popover"
          onClick={() => togglePopover("account")}
        >
          <Image
            className="leaibot-action-icon"
            src={`${assetRoot}/mall-account.svg`}
            alt=""
            width={18}
            height={18}
          />
        </button>

        {activePopover === "orders" ? (
          <div className="leaibot-popover" id="leaibot-orders-popover" role="status">
            暂无订单
          </div>
        ) : null}

        {activePopover === "account" ? (
          <div className="leaibot-popover" id="leaibot-account-popover" role="status">
            登录后查看个人中心
          </div>
        ) : null}
      </div>
    </header>
  );
}
