const steps = [
  {
    code: "S100",
    title: "원료 혼합",
    body: "마늘껍질 47~53% + 밀기울·쌀가루 10~20% + 물 33~38%",
    patent: "등록 제10-1926032호",
  },
  {
    code: "S200",
    title: "1차 발효",
    body: "초산균 접종 · 60일 발효 · 초산발효 완성",
    patent: "",
  },
  {
    code: "S300",
    title: "2차 발효",
    body: "유산균+효모 투입 · 복합 미생물 발효 · 알리신 안정화",
    patent: "등록 제10-2855417호",
  },
  {
    code: "S400",
    title: "액상 분리",
    body: "고형물 분리 · 액상 발효물 수득 · 농축·정제",
    patent: "",
  },
  {
    code: "S500",
    title: "3차 발효",
    body: "최종 발효 완성 · 알리신 안정화 · 펠릿화 가공 (75~95°C)",
    patent: "10-2023-0158218",
  },
];

export function FermentationProcess() {
  return (
    /* §3 발효 공정 — tile-dark */
    <section className="tile-dark">
      <div className="content-wrap-wide">
        <p
          className="text-caption"
          style={{ color: "var(--body-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}
        >
          CORE TECHNOLOGY
        </p>
        <h2
          className="text-display-lg"
          style={{ color: "var(--body-on-dark)", marginBottom: "12px" }}
        >
          이중발효 기술 공정
        </h2>
        <p
          className="text-lead"
          style={{ color: "var(--body-muted)", marginBottom: "48px", maxWidth: "540px" }}
        >
          마늘껍질 × 이중발효(초산균 + 유산균/효모) — 알리신 안정화 특허기술
        </p>

        {/* Desktop: horizontal */}
        <div className="ferm-desktop" style={{ display: "flex", alignItems: "stretch", gap: "0" }}>
          {steps.map((step, i) => (
            <div key={step.code} style={{ display: "flex", alignItems: "center", flex: 1 }}>
              <div
                style={{
                  flex: 1,
                  background: "var(--surface-tile-2)",
                  borderRadius: "var(--rounded-sm)",
                  padding: "20px",
                  border: "1px solid rgba(255,255,255,0.06)",
                  height: "100%",
                }}
              >
                <p
                  className="text-caption"
                  style={{ color: "var(--primary-on-dark)", marginBottom: "4px", fontVariantNumeric: "numerator" }}
                >
                  {step.code}
                </p>
                <h4
                  className="text-body-strong"
                  style={{ color: "var(--body-on-dark)", marginBottom: "8px" }}
                >
                  {step.title}
                </h4>
                <p className="text-caption" style={{ color: "var(--body-muted)", marginBottom: step.patent ? "12px" : "0" }}>
                  {step.body}
                </p>
                {step.patent && (
                  <span
                    className="text-caption"
                    style={{
                      background: "rgba(41,151,255,0.12)",
                      color: "var(--primary-on-dark)",
                      borderRadius: "var(--rounded-xs)",
                      padding: "2px 8px",
                      display: "inline-block",
                      fontSize: "11px",
                    }}
                  >
                    {step.patent}
                  </span>
                )}
              </div>
              {i < steps.length - 1 && (
                <div
                  style={{
                    flexShrink: 0,
                    padding: "0 8px",
                    color: "var(--body-muted)",
                    fontSize: "14px",
                  }}
                >
                  →
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical */}
        <div className="ferm-mobile" style={{ display: "none", flexDirection: "column", gap: "0" }}>
          {steps.map((step, i) => (
            <div key={step.code}>
              <div
                style={{
                  background: "var(--surface-tile-2)",
                  borderRadius: "var(--rounded-sm)",
                  padding: "20px",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p className="text-caption" style={{ color: "var(--primary-on-dark)", marginBottom: "4px" }}>{step.code}</p>
                <h4 className="text-body-strong" style={{ color: "var(--body-on-dark)", marginBottom: "8px" }}>{step.title}</h4>
                <p className="text-caption" style={{ color: "var(--body-muted)", marginBottom: step.patent ? "10px" : "0" }}>{step.body}</p>
                {step.patent && (
                  <span
                    className="text-caption"
                    style={{
                      background: "rgba(41,151,255,0.12)",
                      color: "var(--primary-on-dark)",
                      borderRadius: "var(--rounded-xs)",
                      padding: "2px 8px",
                      display: "inline-block",
                      fontSize: "11px",
                    }}
                  >
                    {step.patent}
                  </span>
                )}
              </div>
              {i < steps.length - 1 && (
                <div style={{ textAlign: "center", color: "var(--body-muted)", padding: "8px 0" }}>↓</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 833px) {
          .ferm-desktop { display: none !important; }
          .ferm-mobile { display: flex !important; }
        }
      `}</style>
    </section>
  );
}
