import { PageHero } from "@/components/ui/PageHero";

const skus = [
  {
    id: "SKU 01",
    name: "천지명인",
    sub: "마늘껍질 분말식초",
    desc: "마늘껍질 발효 천연 분말식초. 노벨의학상 3회 수상 초산 발효 공정 적용. 마늘향·천연성분 그대로 보존한 건강식품.",
    specs: [
      { label: "원료", value: "마늘껍질 발효 (특허 제10-1926032호)" },
      { label: "형태", value: "파우치·스틱형 간편 섭취" },
      { label: "인증", value: "ISO 22000 · FDA 등록 (수출가능)" },
      { label: "채널", value: "스마트스토어·쿠팡·로컬푸드(2026)" },
      { label: "타깃", value: "건강관심 30~50대" },
    ],
    badges: ["특허 원료", "FDA 등록", "ISO 22000"],
    active: true,
  },
  {
    id: "SKU 02",
    name: "나비잠",
    sub: "흑하랑 수면 스틱젤리",
    desc: "전남 흑하랑상추(락투신 124배) + 황칠 발효 수면 스틱젤리. 수면제 부작용 없이 자연 수면 유도. 총 매출 1.5억 달성.",
    specs: [
      { label: "원료", value: "흑하랑상추(락투신 124배) + 황칠 발효" },
      { label: "형태", value: "스틱젤리 (v2.0 황칠 추가·단맛 최소화)" },
      { label: "인증", value: "ISO 22000 · 상표등록 40-22337789" },
      { label: "채널", value: "온라인 · 유통사 · 일본 수출 계약" },
      { label: "매출", value: "총 누적 1.5억 달성 · 완판 후 추가생산" },
    ],
    badges: ["전남 농업기술원", "ISO 22000", "일본 수출 협의"],
    active: true,
  },
  {
    id: "SKU 03",
    name: "Next",
    sub: "흑하랑+식초 발포정 (예정)",
    desc: "흑하랑상추 + 마늘껍질식초 복합 발포정 — 초블레스 직접 경쟁 포지셔닝. 수면·피로 케어 2040 이너뷰티 타깃.",
    specs: [
      { label: "원료", value: "흑하랑상추 + 마늘껍질식초 복합" },
      { label: "형태", value: "발포정 — 초블레스 직접 경쟁" },
      { label: "타깃", value: "수면·피로 케어 2040 이너뷰티" },
      { label: "출시", value: "중기 1~3년 내 SKU 정형화" },
      { label: "수출", value: "베트남·말레이시아·싱가포르 우선" },
    ],
    badges: ["Coming Soon", "동남아 수출 예정"],
    active: false,
  },
];

const channels = [
  { step: "1", label: "와디즈 크라우드펀딩", desc: "B2C 외부 검증 · 나비잠 선례" },
  { step: "2", label: "자사몰 · 쿠팡", desc: "정기구독 · 리뷰 축적" },
  { step: "3", label: "동남아 수출", desc: "베트남·말레이·싱가포르 K-푸드 프리미엄" },
];

export default function WellnessPage() {
  return (
    <>
      <PageHero
        eyebrow="PRODUCT LINE — PRIVATE SECTOR"
        title="민간·포스케어 제품"
        sub="B2C·B2B 유통 채널 운영 중 — 이너뷰티 & 헬스케어 포트폴리오"
      />

      {/* SKU 3종 — tile-parchment */}
      <section className="tile-parchment">
        <div className="content-wrap-wide">
          <div className="wellness-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {skus.map((sku) => (
              <div
                key={sku.id}
                style={{
                  background: sku.active ? "var(--canvas)" : "var(--canvas-parchment)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--rounded-lg)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  opacity: sku.active ? 1 : 0.7,
                }}
              >
                <div style={{ height: "2px", background: sku.active ? "var(--primary)" : "var(--hairline)" }} />
                <div style={{ padding: "var(--space-lg)", display: "flex", flexDirection: "column", flex: 1 }}>
                  <span className="text-caption" style={{ color: "var(--ink-muted-48)", marginBottom: "8px", display: "block" }}>{sku.id}</span>
                  <h2 className="text-tagline" style={{ color: "var(--ink)", marginBottom: "4px" }}>{sku.name}</h2>
                  <p className="text-caption" style={{ color: "var(--ink-muted-48)", marginBottom: "16px" }}>{sku.sub}</p>
                  <p className="text-caption" style={{ color: "var(--ink-muted-80)", marginBottom: "24px" }}>{sku.desc}</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1, marginBottom: "20px" }}>
                    {sku.specs.map((s) => (
                      <div key={s.label} style={{ display: "flex", gap: "8px" }}>
                        <span className="text-caption" style={{ color: "var(--ink-muted-48)", flexShrink: 0, width: "40px" }}>{s.label}</span>
                        <span className="text-caption" style={{ color: "var(--ink)" }}>{s.value}</span>
                      </div>
                    ))}
                  </div>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                    {sku.badges.map((b) => (
                      <span
                        key={b}
                        className="text-caption"
                        style={{
                          border: "1px solid var(--hairline)",
                          borderRadius: "var(--rounded-pill)",
                          padding: "3px 10px",
                          color: "var(--ink-muted-48)",
                        }}
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:833px){.wellness-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* 채널 전략 — tile-light */}
      <section className="tile-light">
        <div className="content-wrap-wide">
          <h2 className="text-display-md" style={{ color: "var(--ink)", marginBottom: "8px" }}>채널 전략</h2>
          <p className="text-lead" style={{ color: "var(--ink-muted-80)", marginBottom: "32px" }}>B2C 마진율 40~60% — B2B 대비 4~6배 고마진</p>
          <div className="channel-row" style={{ display: "flex", gap: "0", alignItems: "stretch" }}>
            {channels.map((c, i) => (
              <div key={c.step} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div style={{ flex: 1, background: "var(--canvas-parchment)", border: "1px solid var(--hairline)", borderRadius: "var(--rounded-lg)", padding: "20px" }}>
                  <div style={{ width: "28px", height: "28px", borderRadius: "50%", background: "var(--primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, fontSize: "13px", marginBottom: "12px" }}>{c.step}</div>
                  <h4 className="text-body-strong" style={{ color: "var(--ink)", marginBottom: "6px" }}>{c.label}</h4>
                  <p className="text-caption" style={{ color: "var(--ink-muted-80)" }}>{c.desc}</p>
                </div>
                {i < channels.length - 1 && (
                  <div className="channel-arrow" style={{ flexShrink: 0, padding: "0 8px", color: "var(--ink-muted-48)", fontSize: "14px" }}>→</div>
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: "32px", display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="/ko/contact#sample" className="text-body transition-all active:scale-95" style={{ background: "var(--primary)", color: "#fff", borderRadius: "var(--rounded-pill)", padding: "11px 22px", textDecoration: "none" }}>구매 · 유통 문의</a>
            <a href="/ko/ir" className="text-body transition-all active:scale-95" style={{ background: "transparent", color: "var(--primary)", border: "1px solid var(--primary)", borderRadius: "var(--rounded-pill)", padding: "11px 22px", textDecoration: "none" }}>IR 자료 보기</a>
          </div>
        </div>
        <style>{`@media(max-width:833px){.channel-row{flex-direction:column!important;}.channel-arrow{display:none!important;}}`}</style>
      </section>
    </>
  );
}
