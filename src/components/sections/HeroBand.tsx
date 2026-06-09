"use client";

import { useEffect, useRef, useState } from "react";

const badges = ["ISO 22000", "FDA 인증", "장영실상", "특허 5건"];

function useBarAnimate(pct: number) {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        requestAnimationFrame(() => setWidth(pct));
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pct]);
  return { width, ref };
}

function AnimatedBar({ label, pct }: { label: string; pct: number }) {
  const { width, ref } = useBarAnimate(pct);
  return (
    <div ref={ref}>
      <div className="flex justify-between text-caption mb-1" style={{ color: "var(--body-muted)" }}>
        <span>{label}</span>
        <span>{pct}%↓</span>
      </div>
      <div className="h-1 overflow-hidden" style={{ background: "rgba(255,255,255,0.1)", borderRadius: "var(--rounded-pill)" }}>
        <div
          style={{
            height: "100%",
            width: `${width}%`,
            background: "var(--primary-on-dark)",
            borderRadius: "var(--rounded-pill)",
            transition: "width 1.2s cubic-bezier(0.4,0,0.2,1)",
          }}
        />
      </div>
    </div>
  );
}

export function HeroBand() {
  return (
    /* §1 히어로 — tile-light (흰 배경, 그래디언트 없음) */
    <section className="tile-light">
      <div className="content-wrap-wide">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
          className="lg-grid"
        >
          {/* ── Left: Text ── */}
          <div>
            <h1
              className="text-hero-display"
              style={{ color: "var(--ink)", marginBottom: "24px", whiteSpace: "pre-line" }}
            >
              {"마늘껍질 하나가\n세상을 바꿉니다"}
            </h1>

            <p
              className="text-lead"
              style={{ color: "var(--ink)", marginBottom: "32px", maxWidth: "480px" }}
            >
              발효기술 × ESG 순환경제 × 공공민간 투트랙
              <br />
              B2A·B2B·B2C 일체형 ESG 기술 기업
            </p>

            {/* CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginBottom: "40px" }}>
              <a
                href="/ko/contact#sample"
                className="text-button-large transition-all active:scale-95"
                style={{
                  background: "var(--primary)",
                  color: "#ffffff",
                  borderRadius: "var(--rounded-pill)",
                  padding: "14px 28px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                샘플 신청 →
              </a>
              <a
                href="/ko/technology"
                className="text-body transition-all active:scale-95"
                style={{
                  background: "transparent",
                  color: "var(--primary)",
                  border: "1px solid var(--primary)",
                  borderRadius: "var(--rounded-pill)",
                  padding: "14px 28px",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                }}
              >
                기술 자료 보기
              </a>
            </div>

            {/* Badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {badges.map((b) => (
                <span
                  key={b}
                  className="text-fine-print"
                  style={{
                    color: "var(--ink-muted-48)",
                    border: "1px solid var(--hairline)",
                    borderRadius: "var(--rounded-sm)",
                    padding: "4px 12px",
                    background: "var(--canvas)",
                  }}
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: Dashboard (다크 타일, 유일한 shadow-content 적용) ── */}
          <div>
            <div
              className="shadow-content"
              style={{
                background: "var(--surface-tile-1)",
                borderRadius: "var(--rounded-lg)",
                padding: "24px",
                color: "var(--body-on-dark)",
              }}
            >
              {/* Header bar */}
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "20px" }}>
                <span className="text-fine-print" style={{ color: "var(--body-muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>실증 성과 대시보드</span>
              </div>

              {/* Stat grid */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px", marginBottom: "20px" }}>
                {[
                  { label: "메탄 저감", val: "39%↓" },
                  { label: "암모니아 저감", val: "48%↓" },
                  { label: "ROI 실증", val: "430%" },
                  { label: "누적 매출", val: "1.5억+" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      borderRadius: "var(--rounded-sm)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      padding: "12px",
                    }}
                  >
                    <div className="text-caption" style={{ color: "var(--body-muted)", marginBottom: "4px" }}>{item.label}</div>
                    <div className="text-display-md" style={{ color: "var(--primary-on-dark)", fontFamily: "\"JetBrains Mono\", ui-monospace, monospace" }}>{item.val}</div>
                  </div>
                ))}
              </div>

              {/* Progress bars */}
              <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "16px" }}>
                {[
                  { label: "암모니아", pct: 48 },
                  { label: "메탄(CH₄)", pct: 39 },
                  { label: "황화수소", pct: 18 },
                ].map((bar) => (
                  <AnimatedBar key={bar.label} label={bar.label} pct={bar.pct} />
                ))}
              </div>

              <p className="text-caption" style={{ color: "var(--body-muted)" }}>
                출처: 2024 함평군 양돈 실증사업 / 한국농업기술진흥원
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 모바일 그리드 대응 */}
      <style>{`
        @media (max-width: 833px) {
          .lg-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
