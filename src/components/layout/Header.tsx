"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "기술·특허", href: "/ko/technology" },
  { label: "제품", href: "/ko/products" },
  { label: "ESG", href: "/ko/esg" },
  { label: "회사소개", href: "/ko/about" },
  { label: "IR", href: "/ko/ir" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{ background: "var(--surface-black)" }}
      className="sticky top-0 z-50 w-full"
    >
      {/* Global Nav — 44px, 검정 배경 */}
      <div className="mx-auto max-w-[1440px] px-6 flex items-center justify-between"
        style={{ height: "44px" }}>

        {/* Logo */}
        <Link
          href="/ko"
          className="text-nav-link font-semibold"
          style={{ color: "var(--body-on-dark)", textDecoration: "none" }}
        >
          유일식품
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center" style={{ gap: "20px" }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-nav-link transition-opacity hover:opacity-70"
              style={{ color: "var(--body-on-dark)", textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop right — 검색 + 문의 */}
        <div className="hidden lg:flex items-center" style={{ gap: "20px" }}>
          {/* 검색 아이콘 */}
          <button
            aria-label="검색"
            className="transition-opacity hover:opacity-70"
            style={{ color: "var(--body-on-dark)", background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1.2"/>
              <line x1="10.7" y1="10.7" x2="14" y2="14" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
          </button>
          {/* 문의 링크 */}
          <Link
            href="/ko/contact"
            className="text-nav-link transition-opacity hover:opacity-70"
            style={{ color: "var(--body-on-dark)", textDecoration: "none" }}
          >
            문의하기
          </Link>
          {/* 샘플 신청 CTA */}
          <Link
            href="/ko/contact#sample"
            className="text-button-utility transition-all active:scale-95"
            style={{
              background: "var(--primary)",
              color: "#ffffff",
              borderRadius: "var(--rounded-pill)",
              padding: "5px 14px",
              textDecoration: "none",
              whiteSpace: "nowrap",
            }}
          >
            샘플 신청
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden transition-opacity hover:opacity-70"
          style={{ color: "var(--body-on-dark)", background: "none", border: "none", cursor: "pointer", padding: "4px" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="1" x2="18" y2="1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line y1="6" x2="18" y2="6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <line y1="11" x2="18" y2="11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="lg:hidden flex flex-col"
          style={{
            background: "var(--surface-black)",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "16px 24px 20px",
            gap: "0",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body transition-opacity hover:opacity-70"
              style={{
                color: "var(--body-on-dark)",
                textDecoration: "none",
                padding: "10px 0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                display: "block",
              }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginTop: "16px" }}>
            <Link
              href="/ko/contact"
              className="text-body"
              style={{
                color: "var(--body-on-dark)",
                textDecoration: "none",
                padding: "10px 0",
                display: "block",
              }}
            >
              문의하기
            </Link>
            <Link
              href="/ko/contact#sample"
              className="text-button-utility text-center transition-all active:scale-95"
              style={{
                background: "var(--primary)",
                color: "#ffffff",
                borderRadius: "var(--rounded-pill)",
                padding: "11px 22px",
                textDecoration: "none",
                display: "block",
              }}
            >
              샘플 신청
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
