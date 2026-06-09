const footerCols = [
  {
    title: "제품·기술",
    links: [
      { label: "기술과 특허", href: "/ko/technology" },
      { label: "사료첨가제", href: "/ko/products/feed" },
      { label: "포스케어", href: "/ko/products/wellness" },
      { label: "특허·성적서", href: "/ko/technology#patents" },
    ],
  },
  {
    title: "회사소개",
    links: [
      { label: "회사소개", href: "/ko/about" },
      { label: "연혁", href: "/ko/about#history" },
      { label: "인증·수상", href: "/ko/about#certs" },
      { label: "오시는 길", href: "/ko/about#map" },
    ],
  },
  {
    title: "ESG·정책",
    links: [
      { label: "ESG 리포트", href: "/ko/esg" },
      { label: "탄소크레딧", href: "/ko/esg#carbon" },
      { label: "함평 실증", href: "/ko/esg#cases" },
    ],
  },
  {
    title: "문의·지원",
    links: [
      { label: "거래처 문의", href: "/ko/contact" },
      { label: "샘플 신청", href: "/ko/contact#sample" },
      { label: "IR 문서", href: "/ko/ir" },
      { label: "채용", href: "/ko/about#careers" },
    ],
  },
];

export function Footer() {
  return (
    /* 푸터 — canvas-parchment, 의도적 고밀도 */
    <footer style={{ background: "var(--canvas-parchment)", marginTop: "auto" }}>
      <div
        className="content-wrap-wide"
        style={{ paddingTop: "64px", paddingBottom: "64px" }}
      >
        {/* 상단: 브랜드 + 링크 컬럼 */}
        <div
          className="footer-grid"
          style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr 1fr", gap: "32px", marginBottom: "48px" }}
        >
          {/* 브랜드 컬럼 */}
          <div>
            <p
              className="text-body-strong"
              style={{ color: "var(--ink)", marginBottom: "8px" }}
            >
              유일식품
            </p>
            <p
              className="text-body"
              style={{ color: "var(--ink-muted-80)", lineHeight: 1.6 }}
            >
              발효기술로<br />ESG를 추구합니다
            </p>
          </div>

          {footerCols.map((col) => (
            <div key={col.title}>
              {/* 컬럼 헤딩 — caption-strong */}
              <p
                className="text-caption-strong"
                style={{ color: "var(--ink)", marginBottom: "8px" }}
              >
                {col.title}
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-dense-link transition-opacity hover:opacity-60"
                      style={{
                        color: "var(--ink-muted-80)",
                        textDecoration: "none",
                        display: "block",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 하단: 주소 + 저작권 */}
        <div
          style={{
            borderTop: "1px solid var(--hairline)",
            paddingTop: "24px",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "8px",
          }}
        >
          <p className="text-fine-print" style={{ color: "var(--ink-muted-48)" }}>
            전남 함평군 엄다면 곤재로 326-16 &nbsp;·&nbsp; 사업자 809-86-01434
          </p>
          <p className="text-fine-print" style={{ color: "var(--ink-muted-48)" }}>
            © 2026 (주)유일식품. All rights reserved.
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 833px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 419px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
