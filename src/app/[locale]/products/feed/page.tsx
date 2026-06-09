import { PageHero } from "@/components/ui/PageHero";

const hanwoo = {
  name: "천지마늘황칠",
  sub: "한우 사료첨가제",
  tag: "한우용",
  formula: [
    { label: "식초발효 마늘껍질", pct: "35%" },
    { label: "소맥피", pct: "25%" },
    { label: "미강", pct: "25%" },
    { label: "아미노프로", pct: "10%" },
    { label: "효모·유산균", pct: "5%" },
  ],
  usage: "비육후기(22개월~출하) · 500g/두/일 · 급여기간 약 8개월",
  effects: [
    { label: "1++·1+ 등급 발현율 향상", source: "공인기관 실증" },
    { label: "글루타민산(감칠맛) 증가", source: "아미노산 분석" },
    { label: "온실가스(메탄) 저감", source: "친환경 인증 가능" },
    { label: "내부기생충 박멸", source: "면역력 향상" },
  ],
};

const pork = {
  name: "천지마늘발효다",
  sub: "양돈 사료첨가제",
  tag: "양돈용",
  formula: [
    { label: "마늘껍질발효액", pct: "3~9%" },
    { label: "황칠발효액", pct: "0.5~4%" },
    { label: "미강", pct: "30~45%" },
    { label: "주정박", pct: "30~45%" },
    { label: "벤토나이트", pct: "5~20%" },
  ],
  effects: [
    { label: "암모니아 48.25%↓", source: "4농가 측정값" },
    { label: "증체율 향상 / 출하기간 단축", source: "생산성 데이터" },
    { label: "메탄(온실가스) 평균 39%↓", source: "탄소크레딧 대응" },
    { label: "1등급 출현율 증가", source: "농가 설문 실증" },
  ],
};

const procurement = [
  "조달등록 6종 보유",
  "천지마늘발효 사료첨가제(한우·양돈·PLUS 각 2종)",
  "천지마늘발효다(악취저감)",
  "유일쉘바이오(혹서기)",
];

function FormulaTable({ items }: { items: { label: string; pct: string }[] }) {
  return (
    <div style={{ borderRadius: "var(--rounded-sm)", overflow: "hidden", border: "1px solid var(--hairline)" }}>
      {items.map((item, i) => (
        <div
          key={item.label}
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 16px",
            background: i % 2 === 0 ? "var(--canvas-parchment)" : "var(--canvas)",
          }}
        >
          <span className="text-caption" style={{ color: "var(--ink)" }}>{item.label}</span>
          <span className="text-caption" style={{ color: "var(--primary)", fontWeight: 600 }}>{item.pct}</span>
        </div>
      ))}
    </div>
  );
}

function ProductCard({ product }: { product: typeof hanwoo | typeof pork }) {
  return (
    <div style={{ background: "var(--canvas)", border: "1px solid var(--hairline)", borderRadius: "var(--rounded-lg)", overflow: "hidden" }}>
      <div style={{ height: "2px", background: "var(--primary)" }} />
      <div style={{ padding: "var(--space-lg)" }}>
        <span
          className="text-caption"
          style={{
            background: "var(--primary)",
            color: "#ffffff",
            borderRadius: "var(--rounded-pill)",
            padding: "3px 12px",
            display: "inline-block",
            marginBottom: "16px",
          }}
        >
          {product.tag}
        </span>
        <h2 className="text-display-md" style={{ color: "var(--ink)", marginBottom: "4px" }}>{product.name}</h2>
        <p className="text-caption" style={{ color: "var(--ink-muted-48)", marginBottom: "24px" }}>{product.sub}</p>

        <p className="text-caption" style={{ color: "var(--ink-muted-48)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>배합비</p>
        <FormulaTable items={product.formula} />

        {"usage" in product && (
          <div style={{ marginTop: "16px" }}>
            <p className="text-caption" style={{ color: "var(--ink-muted-48)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}>급여 방법</p>
            <p className="text-caption" style={{ color: "var(--ink-muted-80)" }}>{(product as typeof hanwoo).usage}</p>
          </div>
        )}

        <p className="text-caption" style={{ color: "var(--ink-muted-48)", textTransform: "uppercase", letterSpacing: "0.08em", marginTop: "24px", marginBottom: "12px" }}>주요 효과</p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
          {product.effects.map((e) => (
            <li key={e.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px" }}>
              <span className="text-caption" style={{ color: "var(--ink)", display: "flex", gap: "8px" }}>
                <span style={{ color: "var(--primary)", flexShrink: 0 }}>●</span>
                {e.label}
              </span>
              <span className="text-caption" style={{ color: "var(--ink-muted-48)", flexShrink: 0 }}>{e.source}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function FeedPage() {
  return (
    <>
      <PageHero
        eyebrow="PRODUCT LINE — PUBLIC SECTOR"
        title="공공·축산 사료첨가제"
        sub="조달등록·B2A 납품 실적 보유 — 공인기관 실증 데이터로 검증된 천연 발효 사료첨가제"
      />

      {/* 제품 2종 — tile-parchment */}
      <section className="tile-parchment">
        <div className="content-wrap-wide">
          <div className="feed-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            <ProductCard product={hanwoo} />
            <ProductCard product={pork} />
          </div>
        </div>
        <style>{`@media(max-width:833px){.feed-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* 조달 등록 현황 — tile-dark */}
      <section className="tile-dark">
        <div className="content-wrap-wide">
          <h2 className="text-display-md" style={{ color: "var(--body-on-dark)", marginBottom: "24px" }}>조달 등록 현황</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
            {procurement.map((item) => (
              <li key={item} style={{ display: "flex", gap: "10px" }}>
                <span style={{ color: "var(--primary-on-dark)", flexShrink: 0 }}>✓</span>
                <span className="text-body" style={{ color: "var(--body-on-dark)" }}>{item}</span>
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <a href="/ko/contact#sample" className="text-body transition-all active:scale-95" style={{ background: "var(--primary)", color: "#fff", borderRadius: "var(--rounded-pill)", padding: "11px 22px", textDecoration: "none" }}>샘플 신청</a>
            <a href="/ko/contact" className="text-body transition-all active:scale-95" style={{ background: "transparent", color: "var(--primary-on-dark)", border: "1px solid var(--primary-on-dark)", borderRadius: "var(--rounded-pill)", padding: "11px 22px", textDecoration: "none" }}>기술 자료 문의</a>
          </div>
        </div>
      </section>
    </>
  );
}
