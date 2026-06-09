import { PageHero } from "@/components/ui/PageHero";

const executiveSummary = [
  {
    label: "시장 기회",
    value: "필수 수요",
    body: "항생제 전면 금지(2011) · 저메탄 사료 30% 의무화(2030) · 탄소중립(2050) — 3개 국가 정책이 수요를 구조적으로 의무화",
  },
  {
    label: "검증된 기술",
    value: "공인 실증",
    body: "특허 3건 등록 · 국가 R&D 완료 · 한국농업기술진흥원 분석 · 암모니아 48%↓ · 메탄 39%↓ · 1등급 출현율 34%↑",
  },
  {
    label: "수익 구조",
    value: "3중 채널",
    body: "B2A(조달 6종 등록) + B2B(축산농가 직납) + B2C(건강식품 마진율 40~60%) — 매출 변동성 최소화",
  },
];

const revenueModel = [
  {
    channel: "B2A",
    name: "조달·정부납품",
    margin: "15~25%",
    desc: "조달등록 6종 · 지자체·공공기관 직납 · 가격 안정성 높음",
    status: "운영 중",
  },
  {
    channel: "B2B",
    name: "축산농가 직납",
    margin: "20~35%",
    desc: "함평·무안·해남 한우·양돈 농가 · 반복 구매 · 실증 데이터 기반 영업",
    status: "운영 중",
  },
  {
    channel: "B2C",
    name: "건강식품 직판",
    margin: "40~60%",
    desc: "천지명인 식초 · 나비잠 수면젤리 · 스마트스토어·쿠팡 · 일본 수출 협의",
    status: "성장 중",
  },
];

const roadmap = [
  {
    phase: "Phase 1",
    period: "2025–2026",
    title: "국내 시장 안착",
    items: [
      "B2C 채널 정기구독 전환율 20% 달성",
      "조달 납품 거래처 +10개 확대",
      "나비잠 v2.0 황칠 추가 리뉴얼 출시",
      "로컬푸드 매장 2026 입점",
    ],
  },
  {
    phase: "Phase 2",
    period: "2026–2027",
    title: "수출 본격화",
    items: [
      "일본 수출 계약 클로징 · 초도 물량 납품",
      "베트남·말레이시아·싱가포르 K-푸드 채널 개척",
      "흑하랑+식초 발포정(SKU 03) 출시",
      "탄소크레딧 발행 연계 추진",
    ],
  },
  {
    phase: "Phase 3",
    period: "2028+",
    title: "플랫폼 확장",
    items: [
      "마늘껍질 원료 → 지역 농가 네트워크 확대",
      "OEM·기술 라이선스 수익 추가",
      "코스닥 상장 준비 (목표)",
      "농업폐기물 자원화 풀-사이클 플랫폼",
    ],
  },
];

const keyMetrics = [
  { label: "메탄 감축", value: "39%↓", sub: "양돈 4농가 실측" },
  { label: "암모니아 감축", value: "48%↓", sub: "공인기관 분석" },
  { label: "1등급 출현율", value: "34%↑", sub: "출하체중 +5.7kg" },
  { label: "B2C 마진율", value: "40~60%", sub: "B2B 대비 4~6배" },
  { label: "누적 매출", value: "1.5억+", sub: "나비잠 단일 SKU" },
  { label: "특허 IP", value: "3건+", sub: "출원 포함 4건" },
];

export default function IRPage() {
  return (
    <>
      <PageHero
        eyebrow="INVESTOR RELATIONS"
        title="투자 제안"
        sub="국가 정책이 만드는 필수 수요 × 공인 기술 × 3중 수익 구조 — 2026 시리즈A 준비 중"
      />

      {/* Executive Summary — tile-parchment */}
      <section className="tile-parchment">
        <div className="content-wrap-wide">
          <p className="text-caption" style={{ color: "var(--ink-muted-48)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>EXECUTIVE SUMMARY</p>
          <h2 className="text-display-lg" style={{ color: "var(--ink)", marginBottom: "32px" }}>왜 지금 유일식품인가</h2>
          <div className="ir-summary" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {executiveSummary.map((s) => (
              <div
                key={s.label}
                style={{
                  background: "var(--canvas)",
                  borderRadius: "var(--rounded-lg)",
                  border: "1px solid var(--hairline)",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "2px", background: "var(--primary)" }} />
                <div style={{ padding: "var(--space-lg)" }}>
                  <p className="text-caption" style={{ color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>{s.label}</p>
                  <p className="text-tagline" style={{ color: "var(--ink)", marginBottom: "12px" }}>{s.value}</p>
                  <p className="text-caption" style={{ color: "var(--ink-muted-80)" }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:833px){.ir-summary{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* 핵심 지표 — tile-dark */}
      <section className="tile-dark">
        <div className="content-wrap-wide">
          <h2 className="text-display-lg" style={{ color: "var(--body-on-dark)", marginBottom: "32px" }}>검증된 핵심 지표</h2>
          <div className="ir-metrics" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {keyMetrics.map((m) => (
              <div
                key={m.label}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: "var(--rounded-lg)",
                  padding: "20px",
                }}
              >
                <div className="text-display-md" style={{ color: "var(--primary-on-dark)", marginBottom: "4px", fontVariantNumeric: "numerator" }}>{m.value}</div>
                <div className="text-body-strong" style={{ color: "var(--body-on-dark)", marginBottom: "4px" }}>{m.label}</div>
                <div className="text-caption" style={{ color: "var(--body-muted)" }}>{m.sub}</div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:833px){.ir-metrics{grid-template-columns:1fr 1fr!important;}}`}</style>
      </section>

      {/* 수익 모델 — tile-light */}
      <section className="tile-light">
        <div className="content-wrap-wide">
          <h2 className="text-display-lg" style={{ color: "var(--ink)", marginBottom: "8px" }}>3중 수익 구조</h2>
          <p className="text-lead" style={{ color: "var(--ink-muted-80)", marginBottom: "32px" }}>채널 다각화로 경기 변동에 강한 매출 포트폴리오</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {revenueModel.map((r) => (
              <div
                key={r.channel}
                style={{
                  background: "var(--canvas-parchment)",
                  borderRadius: "var(--rounded-lg)",
                  border: "1px solid var(--hairline)",
                  padding: "var(--space-lg)",
                  display: "flex",
                  alignItems: "center",
                  gap: "24px",
                  flexWrap: "wrap",
                }}
              >
                <div style={{ flexShrink: 0, width: "48px" }}>
                  <span className="text-caption" style={{ color: "var(--ink-muted-48)", textTransform: "uppercase", fontWeight: 600 }}>{r.channel}</span>
                </div>
                <div style={{ flex: 1, minWidth: "200px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "4px" }}>
                    <h3 className="text-body-strong" style={{ color: "var(--ink)" }}>{r.name}</h3>
                    <span
                      className="text-caption"
                      style={{
                        background: "var(--primary)",
                        color: "#ffffff",
                        borderRadius: "var(--rounded-pill)",
                        padding: "2px 10px",
                      }}
                    >
                      {r.status}
                    </span>
                  </div>
                  <p className="text-caption" style={{ color: "var(--ink-muted-80)" }}>{r.desc}</p>
                </div>
                <div style={{ flexShrink: 0, textAlign: "right" }}>
                  <div className="text-display-md" style={{ color: "var(--primary)", fontVariantNumeric: "numerator" }}>{r.margin}</div>
                  <div className="text-caption" style={{ color: "var(--ink-muted-48)" }}>마진율</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 로드맵 — tile-parchment */}
      <section className="tile-parchment">
        <div className="content-wrap-wide">
          <h2 className="text-display-lg" style={{ color: "var(--ink)", marginBottom: "32px" }}>성장 로드맵</h2>
          <div className="roadmap-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {roadmap.map((r, i) => (
              <div
                key={r.phase}
                style={{
                  background: "var(--canvas)",
                  borderRadius: "var(--rounded-lg)",
                  border: "1px solid var(--hairline)",
                  overflow: "hidden",
                }}
              >
                <div style={{ height: "2px", background: "var(--primary)", opacity: 1 - i * 0.25 }} />
                <div style={{ padding: "var(--space-lg)" }}>
                  <p className="text-caption" style={{ color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}>{r.phase}</p>
                  <p className="text-caption" style={{ color: "var(--ink-muted-48)", marginBottom: "12px" }}>{r.period}</p>
                  <h3 className="text-tagline" style={{ color: "var(--ink)", marginBottom: "16px" }}>{r.title}</h3>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                    {r.items.map((item) => (
                      <li key={item} style={{ display: "flex", gap: "8px" }}>
                        <span style={{ color: "var(--primary)", flexShrink: 0 }}>→</span>
                        <span className="text-caption" style={{ color: "var(--ink-muted-80)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:833px){.roadmap-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* IR 자료 요청 CTA — tile-dark */}
      <section className="tile-dark" style={{ textAlign: "center" }}>
        <div className="content-wrap">
          <h2 className="text-hero-display" style={{ color: "var(--body-on-dark)", marginBottom: "16px" }}>IR 자료 요청</h2>
          <p className="text-lead" style={{ color: "var(--body-muted)", marginBottom: "40px" }}>
            상세 사업계획서 · 재무 모델 · 기술 문서는 NDA 체결 후 제공합니다.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
            {[
              { label: "IR 자료 요청", href: "/ko/contact#ir", primary: true },
              { label: "투자 미팅 신청", href: "/ko/contact", primary: true },
              { label: "특허 현황 보기", href: "/ko/technology#patents", primary: false },
            ].map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                className="text-body transition-all active:scale-95"
                style={{
                  background: btn.primary ? "var(--primary)" : "transparent",
                  color: btn.primary ? "#ffffff" : "var(--primary-on-dark)",
                  border: btn.primary ? "none" : "1px solid var(--primary-on-dark)",
                  borderRadius: "var(--rounded-pill)",
                  padding: "11px 22px",
                  textDecoration: "none",
                }}
              >
                {btn.label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
