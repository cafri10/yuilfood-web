const b2bProducts = [
  {
    name: "천지마늘황칠",
    sub: "한우 사료첨가제",
    points: ["1++·1+ 등급 발현율 향상 공인기관 실증", "글루타민산(감칠맛) 증가", "온실가스(메탄) 저감"],
    href: "/ko/products/feed",
    cta: "기술 자료 보기",
  },
  {
    name: "천지마늘발효다",
    sub: "양돈 사료첨가제",
    points: ["암모니아 48.25%↓ 4농가 측정값", "증체율 향상 / 출하기간 단축", "메탄(온실가스) 평균 39%↓"],
    href: "/ko/products/feed",
    cta: "샘플 신청",
  },
];

const b2cProducts = [
  {
    name: "천지명인",
    sub: "분말식초 시리즈",
    points: ["마늘껍질 발효 특허 원료", "FDA 해외수출 가능(미국·홍콩)", "로컬푸드 입점 예정(2026)"],
    href: "/ko/products/wellness",
    cta: "구매하러 가기 →",
  },
  {
    name: "나비잠",
    sub: "수면 스틱젤리",
    points: ["전남 농업기술원 특허 상용화 계약", "ISO 22000 인증 생산", "누적 매출 1.5억 달성"],
    href: "/ko/products/wellness",
    cta: "구매하러 가기 →",
  },
];

function ProductCard({
  name,
  sub,
  points,
  href,
  cta,
}: {
  name: string;
  sub: string;
  points: string[];
  href: string;
  cta: string;
}) {
  return (
    <div
      style={{
        background: "var(--canvas)",
        border: "1px solid var(--hairline)",
        borderRadius: "var(--rounded-lg)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* 이미지 플레이스홀더 */}
      <div
        style={{
          width: "100%",
          height: "140px",
          background: "var(--canvas-parchment)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <span className="text-caption" style={{ color: "var(--ink-muted-48)" }}>{name}</span>
      </div>

      <div style={{ padding: "var(--space-lg)", display: "flex", flexDirection: "column", flex: 1 }}>
        <h4 className="text-body-strong" style={{ color: "var(--ink)", marginBottom: "4px" }}>{name}</h4>
        <p className="text-caption" style={{ color: "var(--ink-muted-48)", marginBottom: "16px" }}>{sub}</p>
        <ul style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1, marginBottom: "20px", listStyle: "none", padding: 0, margin: "0 0 20px 0" }}>
          {points.map((p) => (
            <li key={p} style={{ display: "flex", gap: "8px" }}>
              <span style={{ color: "var(--primary)", flexShrink: 0, marginTop: "2px" }}>●</span>
              <span className="text-caption" style={{ color: "var(--ink)" }}>{p}</span>
            </li>
          ))}
        </ul>
        <a
          href={href}
          className="text-caption transition-opacity hover:opacity-70"
          style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600 }}
        >
          {cta}
        </a>
      </div>
    </div>
  );
}

export function ProductLines() {
  return (
    /* §4 제품 라인 — tile-light */
    <section className="tile-light">
      <div className="content-wrap-wide">
        <div className="product-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
          {/* B2B */}
          <div>
            <div style={{ marginBottom: "24px" }}>
              <p
                className="text-caption"
                style={{ color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}
              >
                B2A · B2B
              </p>
              <h3 className="text-display-md" style={{ color: "var(--ink)" }}>공공·축산 사료첨가제</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {b2bProducts.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </div>

          {/* B2C */}
          <div>
            <div style={{ marginBottom: "24px" }}>
              <p
                className="text-caption"
                style={{ color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "6px" }}
              >
                B2C
              </p>
              <h3 className="text-display-md" style={{ color: "var(--ink)" }}>민간·포스케어 제품</h3>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              {b2cProducts.map((p) => (
                <ProductCard key={p.name} {...p} />
              ))}
            </div>
          </div>
        </div>

        <p
          className="text-body"
          style={{ textAlign: "center", color: "var(--ink-muted-80)", marginTop: "40px" }}
        >
          두 시장이 한 발효 공정에서 동시에 수익화됩니다 — 6차산업 밸류체인
        </p>
      </div>

      <style>{`
        @media (max-width: 833px) {
          .product-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </section>
  );
}
