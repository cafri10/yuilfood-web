import { PageHero } from "@/components/ui/PageHero";

const categories = [
  {
    tag: "PUBLIC SECTOR",
    title: "공공·축산 사료첨가제",
    sub: "B2A 조달등록 6종 · B2B 축산농가 직납",
    desc: "이중발효 특허 기술로 만든 천연 사료첨가제. 한우 1등급 출현율 34%↑, 양돈 암모니아 48%↓, 메탄 39%↓ 공인 실증 완료.",
    items: [
      { name: "천지마늘황칠", sub: "한우 사료첨가제" },
      { name: "천지마늘발효다", sub: "양돈 사료첨가제" },
    ],
    href: "/ko/products/feed",
    btnLabel: "사료첨가제 상세보기",
  },
  {
    tag: "PRIVATE SECTOR",
    title: "민간·포스케어 제품",
    sub: "B2C 마진율 40~60% · 온라인 유통 + 수출",
    desc: "마늘껍질 발효와 전남 특산 원료를 결합한 건강식품 라인. 총 누적매출 1.5억 달성, 일본 수출 협의 중.",
    items: [
      { name: "천지명인", sub: "마늘껍질 분말식초" },
      { name: "나비잠", sub: "흑하랑 수면 스틱젤리" },
    ],
    href: "/ko/products/wellness",
    btnLabel: "포스케어 상세보기",
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="PRODUCTS"
        title="제품 라인업"
        sub="마늘껍질 이중발효 기술이 만드는 두 가지 제품군 — 축산 B2A·B2B + 건강식품 B2C"
      />

      {/* 제품 카테고리 — tile-parchment */}
      <section className="tile-parchment">
        <div className="content-wrap-wide">
          <div className="products-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {categories.map((cat) => (
              <div
                key={cat.tag}
                style={{
                  background: "var(--canvas)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--rounded-lg)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {/* 상단 primary 바 */}
                <div style={{ height: "3px", background: "var(--primary)" }} />
                <div style={{ padding: "32px", display: "flex", flexDirection: "column", flex: 1 }}>
                  <p className="text-caption" style={{ color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>{cat.tag}</p>
                  <h2 className="text-display-md" style={{ color: "var(--ink)", marginBottom: "4px" }}>{cat.title}</h2>
                  <p className="text-caption" style={{ color: "var(--ink-muted-48)", marginBottom: "16px" }}>{cat.sub}</p>
                  <p className="text-body" style={{ color: "var(--ink)", marginBottom: "24px" }}>{cat.desc}</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "32px", flex: 1 }}>
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "12px",
                          padding: "12px 16px",
                          background: "var(--canvas-parchment)",
                          borderRadius: "var(--rounded-sm)",
                          border: "1px solid var(--hairline)",
                        }}
                      >
                        <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--primary)", flexShrink: 0 }} />
                        <span className="text-body-strong" style={{ color: "var(--ink)" }}>{item.name}</span>
                        <span className="text-caption" style={{ color: "var(--ink-muted-48)" }}>{item.sub}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={cat.href}
                    className="text-button-utility transition-all active:scale-95"
                    style={{
                      background: "var(--primary)",
                      color: "#ffffff",
                      borderRadius: "var(--rounded-pill)",
                      padding: "11px 22px",
                      textDecoration: "none",
                      display: "inline-flex",
                      alignItems: "center",
                      alignSelf: "flex-start",
                    }}
                  >
                    {cat.btnLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:833px){.products-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* 기술 연결 배너 — tile-dark */}
      <section className="tile-dark">
        <div className="content-wrap-wide">
          <div className="tech-banner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "24px" }}>
            <div>
              <h3 className="text-display-md" style={{ color: "var(--body-on-dark)", marginBottom: "8px" }}>
                모든 제품의 근간 — 이중발효 특허 기술
              </h3>
              <p className="text-body" style={{ color: "var(--body-muted)" }}>
                특허 3건 등록 · 초산균 × 유산균/효모 이중발효 · 알리신 열안정성 확보
              </p>
            </div>
            <a
              href="/ko/technology"
              className="text-button-utility transition-all active:scale-95"
              style={{
                flexShrink: 0,
                background: "transparent",
                color: "var(--primary-on-dark)",
                border: "1px solid var(--primary-on-dark)",
                borderRadius: "var(--rounded-pill)",
                padding: "11px 22px",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              기술 상세보기
            </a>
          </div>
        </div>
        <style>{`@media(max-width:640px){.tech-banner{flex-direction:column!important;align-items:flex-start!important;}}`}</style>
      </section>
    </>
  );
}
