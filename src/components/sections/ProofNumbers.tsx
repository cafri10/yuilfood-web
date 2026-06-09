const stats = [
  { value: "39.13%↓", label: "메탄 저감", sub: "양돈 4농가 실측" },
  { value: "48.25%↓", label: "암모니아 저감", sub: "함평군 공인기관" },
  { value: "430%", label: "ROI 실증", sub: "투자 2억 → 편익 10.6억" },
];

export function ProofNumbers() {
  return (
    /* §7 데이터 — tile-dark */
    <section className="tile-dark">
      <div className="content-wrap-wide">
        <p
          className="text-caption"
          style={{ color: "var(--body-muted)", textTransform: "uppercase", letterSpacing: "0.08em", textAlign: "center", marginBottom: "8px" }}
        >
          PROVEN PERFORMANCE
        </p>
        <h2
          className="text-display-lg"
          style={{ color: "var(--body-on-dark)", textAlign: "center", marginBottom: "48px" }}
        >
          숫자로 증명된 성과
        </h2>

        <div
          className="proof-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px", marginBottom: "32px" }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              style={{
                textAlign: "center",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "var(--rounded-lg)",
                padding: "var(--space-lg)",
                background: "var(--surface-tile-2)",
              }}
            >
              <p
                className="text-display-md"
                style={{ color: "var(--primary-on-dark)", marginBottom: "6px", fontFamily: "\"JetBrains Mono\", ui-monospace, monospace" }}
              >
                {s.value}
              </p>
              <p className="text-body-strong" style={{ color: "var(--body-on-dark)", marginBottom: "4px" }}>
                {s.label}
              </p>
              <p className="text-caption" style={{ color: "var(--body-muted)" }}>{s.sub}</p>
            </div>
          ))}
        </div>

        <p
          className="text-caption"
          style={{ color: "var(--body-muted)", textAlign: "center" }}
        >
          출처: 2024 함평군 양돈생산성 향상 및 악취저감 실증시범사업 최종보고서 · 한국농업기술진흥원 분석성적서
        </p>
      </div>

      <style>{`
        @media (max-width: 833px) {
          .proof-grid { grid-template-columns: 1fr 1fr 1fr !important; }
        }
        @media (max-width: 419px) {
          .proof-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
