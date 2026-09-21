import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "联想乐享 PC 端首页全屏对话模板",
  description: "联想乐享全屏对话与内容推荐体验",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
