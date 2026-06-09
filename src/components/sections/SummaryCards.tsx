const cards = [
  {
    sub: "Why Now",
    title: "시대적 당위성",
    body: "축산업이 전 세계 온실가스의 16%를 차지하며, 메탄은 CO₂ 대비 21배 온난화 지수. 유일식품은 이 흐름의 직접 수혜자입니다.",
  },
  {
    sub: "Proven Tech",
    title: "검증된 기술",
    body: "메탄 39.13%↓, 암모니아 48.25%↓, ROI 430% 실증. 특허 5건 + 공인기관 분석성적서 + 함평군 MOU 4자 협약으로 신뢰성 확보.",
  },
  {
    sub: "Dual Track",
    title: "공공민간 투트랙",
    body: "공공(B2A) 정책자금이 기술을 검증하고 민간(B2B·B2C) 시장을 열어주는 선순환. 정책자금 30~50% 레버리지로 실질 다일루션 최소화.",
  },
];

export function SummaryCards() {
  return (
    /* §2 Summary — tile-parchment */
    <section className="tile-parchment">
      <div className="content-wrap-wide">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
          className="summary-grid"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              style={{
                background: "var(--canvas)",
                border: "1px solid var(--hairline)",
                borderRadius: "var(--rounded-lg)",
                padding: "var(--space-lg)",
              }}
            >
              {/* 상단 구분선 대신 primary 액센트 바 */}
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  background: "var(--primary)",
                  marginBottom: "20px",
                  borderRadius: "var(--rounded-pill)",
                }}
              />
              <p
                className="text-caption"
                style={{ color: "var(--ink-muted-48)", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.08em" }}
              >
                {card.sub}
              </p>
              <h3
                className="text-tagline"
                style={{ color: "var(--ink)", marginBottom: "12px" }}
              >
                {card.title}
              </h3>
              <p className="text-body" style={{ color: "var(--ink)" }}>
                {card.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 833px) {
          .summary-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 641px) and (max-width: 833px) {
          .summary-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
