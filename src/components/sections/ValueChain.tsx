const stages = [
  {
    step: "1차 산업",
    sub: "원료 조달",
    items: [
      "함평·무안·해남 마늘껍질 무상~저가 조달",
      "연간 11,000톤 폐기물 → 핵심 원재료",
      "알리신·폴리페놀·플라보노이드 풍부",
    ],
  },
  {
    step: "2차 산업",
    sub: "발효 가공",
    items: [
      "초산균 × 유산균/효모 이중발효 특허",
      "펠릿팅 75~95°C 알리신 활성 보존",
      "B2B·B2C 원료 동시 생산",
    ],
  },
  {
    step: "3차 산업",
    sub: "판매·유통",
    items: [
      "B2C: 천지명인·나비잠 (마진 40~60%)",
      "B2B: 사료첨가제 농가 직납·OEM",
      "B2A: 조달청 등록 6종 공공납품",
    ],
  },
];

export function ValueChain() {
  return (
    /* §5 밸류체인 — tile-parchment */
    <section className="tile-parchment">
      <div className="content-wrap-wide">
        <p
          className="text-caption"
          style={{ color: "var(--ink-muted-48)", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center", marginBottom: "8px" }}
        >
          6TH INDUSTRY VALUE CHAIN
        </p>
        <h2
          className="text-display-lg"
          style={{ color: "var(--ink)", textAlign: "center", marginBottom: "12px" }}
        >
          한 공정에서 세 시장을 동시에 수익화
        </h2>
        <p
          className="text-lead"
          style={{ color: "var(--ink)", textAlign: "center", marginBottom: "48px", maxWidth: "560px", margin: "0 auto 48px" }}
        >
          B2C 부산물·중간품이 B2B 사료 원료로 재활용됩니다.
          이중발효 공정 하나가 공공·민간 두 시장을 동시에 열어줍니다.
        </p>

        {/* 3단 카드 */}
        <div
          className="value-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "24px" }}
        >
          {stages.map((s, i) => (
            <div key={s.step} style={{ position: "relative" }}>
              {/* 화살표 */}
              {i < stages.length - 1 && (
                <span
                  className="value-arrow"
                  style={{
                    position: "absolute",
                    right: "-14px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    zIndex: 1,
                    width: "28px",
                    height: "28px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "50%",
                    background: "var(--canvas)",
                    border: "1px solid var(--hairline)",
                    color: "var(--ink-muted-48)",
                    fontSize: "12px",
                  }}
                >
                  →
                </span>
              )}

              <div
                style={{
                  height: "100%",
                  borderRadius: "var(--rounded-lg)",
                  border: "1px solid var(--hairline)",
                  background: "var(--canvas)",
                  borderTop: "3px solid var(--primary)",
                  overflow: "hidden",
                }}
              >
                <div style={{ padding: "var(--space-lg)" }}>
                  <p
                    className="text-caption"
                    style={{ color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "4px" }}
                  >
                    {s.step}
                  </p>
                  <h3 className="text-tagline" style={{ color: "var(--ink)", marginBottom: "16px" }}>{s.sub}</h3>
                  <ul style={{ display: "flex", flexDirection: "column", gap: "8px", listStyle: "none", padding: 0, margin: 0 }}>
                    {s.items.map((item) => (
                      <li key={item} style={{ display: "flex", gap: "8px" }}>
                        <span style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }}>✓</span>
                        <span className="text-body" style={{ color: "var(--ink)" }}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 재활용 흐름 — 다크 띠 */}
        <div
          style={{
            background: "var(--surface-tile-1)",
            borderRadius: "var(--rounded-sm)",
            padding: "16px 24px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "18px", flexShrink: 0 }}>♻️</span>
          <p className="text-body" style={{ color: "var(--body-on-dark)" }}>
            <span style={{ color: "var(--primary-on-dark)", fontWeight: 600 }}>B2C 생산 부산물·중간품</span>이
            B2B 사료첨가제 원료로 재활용 →{" "}
            <span style={{ color: "var(--body-on-dark)", fontWeight: 600 }}>이중발효 공정 하나로 공공·민간 두 시장 동시 수익화</span>
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 833px) {
          .value-grid { grid-template-columns: 1fr !important; }
          .value-arrow { display: none !important; }
        }
      `}</style>
    </section>
  );
}
