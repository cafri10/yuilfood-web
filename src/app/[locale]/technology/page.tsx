import { PageHero } from "@/components/ui/PageHero";

const patents = [
  {
    status: "등록",
    number: "제 10-1926032 호",
    title: "분말식초 및 그 제조방법",
    desc: "천연 마늘껍질 발효 초산 공정으로 만든 분말식초 제조 핵심 특허",
    date: "등록 2018.11.30",
  },
  {
    status: "등록",
    number: "제 10-2855417 호",
    title: "마늘껍질 사료 조성물 및 그 제조방법",
    desc: "마늘껍질을 이용한 사료첨가제 최신 핵심 특허 (2025년 신규 등록)",
    date: "등록 2025.09.01",
  },
  {
    status: "등록",
    number: "변경등록",
    title: "마늘껍질 발효액의 제조방법",
    desc: "3단계 발효공정 표준화 · 알리신 열안정성 확보 핵심",
    date: "변경등록",
  },
  {
    status: "심사중",
    number: "10-2023-0158218",
    title: "증체용 돼지사료 보조제",
    desc: "황칠발효액 포함 돼지 증체·면역 강화 복합 사료보조제",
    date: "출원 2023.11.15",
  },
];

const steps = [
  { code: "S100", title: "원료 혼합", body: "마늘껍질 47~53% + 밀기울·쌀가루 10~20% + 물 33~38%" },
  { code: "S200", title: "1차 발효", body: "초산균 접종 · 60일 발효 · 초산발효 완성" },
  { code: "S300", title: "2차 발효", body: "유산균+효모 투입 · 복합 미생물 발효 · 알리신 안정화" },
  { code: "S400", title: "액상 분리", body: "고형물 분리 · 액상 발효물 수득 · 농축·정제" },
  { code: "S500", title: "3차 발효", body: "최종 발효 완성 · 알리신 안정화 · 펠릿화 75~95°C" },
];

const advantages = [
  { title: "원재료 우위", body: "함평·무안·해남 산지 마늘껍질(폐기물 수준) 무상~저가 조달로 원가경쟁력 확보. 알리신·폴리페놀·플라보노이드 풍부." },
  { title: "이중발효 특허 IP", body: "초산균×유산균/효모 이중발효 공정. 알리신 열안정성 확보 특허 5건. 75~95°C 펠릿팅 공정에서도 활성 유지." },
  { title: "공인기관 데이터", body: "한국농업기술진흥원 분석 완료. 한우 글루타민산(감칠맛) 증가, 양돈 암모니아 평균 48%↓ 실증." },
  { title: "B2B·B2C 동시 생산", body: "축산 사료첨가제(B2B) 생산 부산물이 건강식품(B2C) 원료로 재활용. 이중수익 구조로 마진율 40~60% 달성." },
];

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="IP & TECHNOLOGY"
        title="특허 & 이중발효 기술 공정"
        sub="마늘껍질 × 이중발효(초산균 + 유산균/효모) — 알리신 안정화 핵심 IP"
      />

      {/* 핵심 기술 4카드 — tile-parchment */}
      <section className="tile-parchment">
        <div className="content-wrap-wide">
          <h2 className="text-display-lg" style={{ color: "var(--ink)", marginBottom: "32px" }}>핵심 기술력</h2>
          <div className="tech-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
            {advantages.map((a) => (
              <div
                key={a.title}
                style={{
                  borderLeft: "2px solid var(--primary)",
                  paddingLeft: "20px",
                  paddingTop: "4px",
                  paddingBottom: "4px",
                }}
              >
                <h3 className="text-body-strong" style={{ color: "var(--ink)", marginBottom: "8px" }}>{a.title}</h3>
                <p className="text-body" style={{ color: "var(--ink-muted-80)" }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){.tech-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* 특허 현황 — tile-dark */}
      <section className="tile-dark" id="patents">
        <div className="content-wrap-wide">
          <p className="text-caption" style={{ color: "var(--body-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>PATENTS</p>
          <h2 className="text-display-lg" style={{ color: "var(--body-on-dark)", marginBottom: "32px" }}>
            등록 3건 + 출원 1건 — 알리신 안정화 핵심 IP
          </h2>
          <div className="patent-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {patents.map((p) => (
              <div
                key={p.number}
                style={{
                  background: "var(--surface-tile-2)",
                  borderRadius: "var(--rounded-sm)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  overflow: "hidden",
                }}
              >
                {/* 상단 primary 바 — 등록은 solid, 심사중은 반투명 */}
                <div style={{ height: "2px", background: p.status === "심사중" ? "rgba(41,151,255,0.4)" : "var(--primary)" }} />
                <div style={{ padding: "20px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
                    <span
                      className="text-caption"
                      style={{
                        background: p.status === "심사중" ? "rgba(41,151,255,0.15)" : "var(--primary)",
                        color: p.status === "심사중" ? "var(--primary-on-dark)" : "#ffffff",
                        borderRadius: "var(--rounded-pill)",
                        padding: "2px 10px",
                      }}
                    >
                      {p.status}
                    </span>
                    <span
                      className="text-caption"
                      style={{
                        background: "rgba(255,255,255,0.06)",
                        color: "var(--body-muted)",
                        borderRadius: "var(--rounded-xs)",
                        padding: "2px 8px",
                        fontSize: "11px",
                        fontFamily: "monospace",
                      }}
                    >
                      {p.number}
                    </span>
                  </div>
                  <h3 className="text-body-strong" style={{ color: "var(--body-on-dark)", marginBottom: "8px" }}>{p.title}</h3>
                  <p className="text-caption" style={{ color: "var(--body-muted)", marginBottom: "12px" }}>{p.desc}</p>
                  <p className="text-caption" style={{ color: "var(--ink-muted-48)" }}>{p.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:640px){.patent-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* 이중발효 공정 — tile-light */}
      <section className="tile-light">
        <div className="content-wrap-wide">
          <h2 className="text-display-lg" style={{ color: "var(--ink)", marginBottom: "12px" }}>이중발효 3단계 공정</h2>
          <p className="text-lead" style={{ color: "var(--ink-muted-80)", marginBottom: "40px" }}>
            특허 5건 보유 · 75~95°C 펠릿팅 공정에서도 알리신 활성 유지
          </p>

          {/* desktop horizontal */}
          <div className="process-desktop" style={{ display: "flex", alignItems: "stretch", gap: "0" }}>
            {steps.map((s, i) => (
              <div key={s.code} style={{ display: "flex", alignItems: "center", flex: 1 }}>
                <div
                  style={{
                    flex: 1,
                    background: "var(--canvas-parchment)",
                    borderRadius: "var(--rounded-sm)",
                    padding: "20px",
                    border: "1px solid var(--hairline)",
                  }}
                >
                  <span
                    className="text-caption"
                    style={{
                      background: "var(--primary)",
                      color: "#ffffff",
                      borderRadius: "var(--rounded-xs)",
                      padding: "2px 8px",
                      display: "inline-block",
                      marginBottom: "12px",
                      fontSize: "11px",
                    }}
                  >
                    {s.code}
                  </span>
                  <h4 className="text-body-strong" style={{ color: "var(--ink)", marginBottom: "8px" }}>{s.title}</h4>
                  <p className="text-caption" style={{ color: "var(--ink-muted-80)" }}>{s.body}</p>
                </div>
                {i < steps.length - 1 && (
                  <span style={{ flexShrink: 0, padding: "0 8px", color: "var(--ink-muted-48)", fontSize: "14px" }}>→</span>
                )}
              </div>
            ))}
          </div>

          {/* mobile vertical */}
          <div className="process-mobile" style={{ display: "none", flexDirection: "column", gap: "0" }}>
            {steps.map((s, i) => (
              <div key={s.code}>
                <div style={{ background: "var(--canvas-parchment)", borderRadius: "var(--rounded-sm)", padding: "20px", border: "1px solid var(--hairline)" }}>
                  <span className="text-caption" style={{ background: "var(--primary)", color: "#ffffff", borderRadius: "var(--rounded-xs)", padding: "2px 8px", display: "inline-block", marginBottom: "10px", fontSize: "11px" }}>{s.code}</span>
                  <h4 className="text-body-strong" style={{ color: "var(--ink)", marginBottom: "6px" }}>{s.title}</h4>
                  <p className="text-caption" style={{ color: "var(--ink-muted-80)" }}>{s.body}</p>
                </div>
                {i < steps.length - 1 && <div style={{ textAlign: "center", color: "var(--ink-muted-48)", padding: "8px 0" }}>↓</div>}
              </div>
            ))}
          </div>
        </div>
        <style>{`@media(max-width:833px){.process-desktop{display:none!important;}.process-mobile{display:flex!important;}}`}</style>
      </section>
    </>
  );
}
