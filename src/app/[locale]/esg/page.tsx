import { PageHero } from "@/components/ui/PageHero";

const esgPillars = [
  {
    label: "Environment",
    items: ["메탄 39.13% 감소", "암모니아 48.25% 감소", "농업폐기물 자원화", "탄소크레딧 연계 추진"],
  },
  {
    label: "Social",
    items: ["농가 소득 증대", "지역사회 악취 민원 해소", "6차산업 일자리 창출", "식품 안전성 향상"],
  },
  {
    label: "Governance",
    items: ["국가 R&D 수행 완료", "함평군 공인 MOU 협약", "특허 5건 IP 보유", "공인기관 분석 데이터"],
  },
];

const policies = [
  { year: "2011", title: "사료용 항생제 전면 금지", body: "사료첨가용 항생제 9종 최종 금지. 천연·발효 대체재 수요 구조적 의무화." },
  { year: "2030", title: "저메탄 사료 30% 보급", body: "농림축산식품부 — 2030년까지 한육우·젖소 사료의 30% 이상을 저메탄 사료로 교체." },
  { year: "2050", title: "농식품 탄소중립 전략", body: "정부의 탄소중립 정책 기조. 6차산업 총매출 31.1조(전년比 +7.9조). 친환경 축산 프리미엄 수요." },
];

const cases = [
  {
    source: "헤럴드경제 2023.07.01",
    title: "마늘껍질 숙성사료 먹인 함평산 축산물 시식회 개최",
    body: "유일식품·저탄소친환경축산발전연구회 주최. 함평군수·관계자 참석. 시식 결과 전 항목 우수 평가.",
  },
  {
    source: "축산신문 2023.10.18",
    title: "유일식품, 함평한우 고급육 평가회 개최",
    body: "마늘부산물 발효사료 급여 한우 시식평가 — 육즙 풍부·식감·향미 전반 우수. 함평군수·전남도 축산과장 참석.",
  },
  {
    source: "노령신문 2024.02.17",
    title: "함평군, 농업부산물 사료 개발 친환경 축산업 육성 박차",
    body: "함평군 부군수 유일식품 현장 방문. 출하체중 5.7kg↑·1등급 출현율 34%↑·악취 40%↓ 효과 확인 보도.",
  },
];

export default function ESGPage() {
  return (
    <>
      <PageHero
        eyebrow="ESG & 순환경제"
        title="마늘 부산물 → 발효 → 탄소 감축 → 선순환"
        sub="폐기물 수준의 마늘껍질을 고부가가치 자원으로 전환하는 ESG 순환 경제 모델"
      />

      {/* E·S·G 3기둥 — tile-parchment */}
      <section className="tile-parchment">
        <div className="content-wrap-wide">
          <div className="esg-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {esgPillars.map((p, i) => (
              <div
                key={p.label}
                style={{
                  background: "var(--canvas)",
                  borderRadius: "var(--rounded-lg)",
                  border: "1px solid var(--hairline)",
                  padding: "var(--space-lg)",
                }}
              >
                <div style={{ width: "32px", height: "2px", background: "var(--primary)", borderRadius: "var(--rounded-pill)", marginBottom: "20px" }} />
                <h3 className="text-tagline" style={{ color: "var(--ink)", marginBottom: "16px" }}>{p.label}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "8px" }}>
                  {p.items.map((item) => (
                    <li key={item} style={{ display: "flex", gap: "8px" }}>
                      <span style={{ color: "var(--primary)", flexShrink: 0 }}>✓</span>
                      <span className="text-body" style={{ color: "var(--ink)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:833px){.esg-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* 정책 모멘텀 — tile-dark */}
      <section className="tile-dark">
        <div className="content-wrap-wide">
          <p className="text-caption" style={{ color: "var(--body-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>POLICY MOMENTUM</p>
          <h2 className="text-display-lg" style={{ color: "var(--body-on-dark)", marginBottom: "32px" }}>
            유일식품을 필요로 하는 3가지 국가 정책
          </h2>
          <div className="policy-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
            {policies.map((pol) => (
              <div
                key={pol.year}
                style={{
                  borderRadius: "var(--rounded-sm)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  background: "rgba(255,255,255,0.04)",
                  padding: "var(--space-lg)",
                }}
              >
                <div
                  className="text-display-md"
                  style={{ color: "var(--primary-on-dark)", marginBottom: "12px", fontVariantNumeric: "numerator" }}
                >
                  {pol.year}
                </div>
                <h3 className="text-body-strong" style={{ color: "var(--body-on-dark)", marginBottom: "8px" }}>{pol.title}</h3>
                <p className="text-caption" style={{ color: "var(--body-muted)" }}>{pol.body}</p>
              </div>
            ))}
          </div>
          <p className="text-body" style={{ color: "var(--primary-on-dark)", marginTop: "32px", fontWeight: 600 }}>
            이 3가지 정책은 유일식품의 사업을 선택이 아닌 '필수'로 만듭니다.
          </p>
        </div>
        <style>{`@media(max-width:833px){.policy-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* 언론·공인 실증 — tile-light */}
      <section className="tile-light" id="cases">
        <div className="content-wrap-wide">
          <h2 className="text-display-lg" style={{ color: "var(--ink)", marginBottom: "32px" }}>언론 보도 & 공인기관 증빙</h2>
          <div className="press-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {cases.map((c) => (
              <div
                key={c.title}
                style={{
                  background: "var(--canvas-parchment)",
                  borderRadius: "var(--rounded-lg)",
                  padding: "var(--space-lg)",
                  border: "1px solid var(--hairline)",
                }}
              >
                <p className="text-caption" style={{ color: "var(--primary)", fontWeight: 600, marginBottom: "12px" }}>{c.source}</p>
                <h3 className="text-body-strong" style={{ color: "var(--ink)", marginBottom: "12px" }}>{c.title}</h3>
                <p className="text-caption" style={{ color: "var(--ink-muted-80)" }}>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:833px){.press-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  );
}
