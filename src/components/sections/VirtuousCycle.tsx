const cycleSteps = [
  { num: "1", label: "공공 정책자금\n기술 검증" },
  { num: "2", label: "실증 데이터\n공인 확보" },
  { num: "3", label: "민간 시장\n진입 신뢰" },
  { num: "4", label: "매출·탄소크레딧\n수익 창출" },
  { num: "5", label: "추가 R&D\n정책 협력 강화" },
  { num: "6", label: "정책 확산\n전국 표준화" },
];

export function VirtuousCycle() {
  return (
    /* §6 선순환 — tile-dark-2 (연속 다크 타일 미세 분리) */
    <section className="tile-dark-2">
      <div className="content-wrap-wide">
        <p
          className="text-caption"
          style={{ color: "var(--body-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}
        >
          VIRTUOUS CYCLE
        </p>
        <h2
          className="text-display-lg"
          style={{ color: "var(--body-on-dark)", marginBottom: "12px" }}
        >
          공공이 민간을 열고,<br /> 민간이 공공을 강화한다
        </h2>
        <p
          className="text-lead"
          style={{ color: "var(--body-muted)", marginBottom: "48px", maxWidth: "600px" }}
        >
          투트랙이 만드는 자기강화 선순환 — 경쟁사 4곳 누구도 갖지 못한 구조
        </p>

        {/* 6-step grid */}
        <div
          className="cycle-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px", marginBottom: "40px" }}
        >
          {cycleSteps.map((step, i) => (
            <div
              key={step.num}
              style={{
                position: "relative",
                borderRadius: "var(--rounded-sm)",
                border: "1px solid rgba(255,255,255,0.08)",
                padding: "20px",
                background: "rgba(255,255,255,0.04)",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "var(--primary)",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "13px",
                  marginBottom: "12px",
                }}
              >
                {step.num}
              </div>
              <p
                className="text-body"
                style={{ color: "var(--body-on-dark)", whiteSpace: "pre-line" }}
              >
                {step.label}
              </p>
              {i < cycleSteps.length - 1 && (
                <span
                  className="cycle-arrow"
                  style={{
                    position: "absolute",
                    top: "20px",
                    right: "12px",
                    color: "var(--body-muted)",
                    fontSize: "12px",
                  }}
                >
                  {i === 2 ? "↓" : "→"}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* 인용 */}
        <blockquote
          style={{
            borderLeft: "2px solid var(--primary)",
            paddingLeft: "24px",
          }}
        >
          <p
            className="text-display-md"
            style={{ color: "var(--body-on-dark)", marginBottom: "12px", fontStyle: "normal" }}
          >
            "공공 트랙이 기술을 검증하고 비용을 분담하는 동안,
            민간 트랙은 매출과 브랜드를 쌓습니다."
          </p>
          <cite className="text-caption" style={{ color: "var(--body-muted)", fontStyle: "normal" }}>
            유일식품 투자자 제안서, 2026 IR
          </cite>
        </blockquote>
      </div>

      <style>{`
        @media (max-width: 833px) {
          .cycle-grid { grid-template-columns: 1fr 1fr !important; }
          .cycle-arrow { display: none !important; }
        }
        @media (max-width: 419px) {
          .cycle-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
