const certs = [
  { label: "ISO 22000", year: "2022" },
  { label: "FDA 등록", year: "2023" },
  { label: "장영실상", year: "2021" },
  { label: "6차산업 인증", year: "2021" },
  { label: "벤처기업", year: "2025" },
  { label: "특허 5건", year: "등록/출원" },
  { label: "조달청 등록", year: "2023" },
  { label: "사료제조업", year: "2023" },
];

const partners = [
  "함평군청", "팜스코", "CJ퓨리나", "태흥축산", "함평축협", "광주전남 식자재협동조합",
];

const press = ["헤럴드경제", "축산신문", "노령신문"];

export function CertLogos() {
  return (
    /* §8 인증·파트너 — tile-parchment */
    <section className="tile-parchment">
      <div className="content-wrap-wide">
        <h2
          className="text-display-lg"
          style={{ color: "var(--ink)", marginBottom: "8px" }}
        >
          인증과 수상
        </h2>
        <p
          className="text-lead"
          style={{ color: "var(--ink-muted-80)", marginBottom: "40px" }}
        >
          데이터와 공인기관이 증명하는 기술 신뢰도
        </p>

        <div
          className="cert-grid"
          style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "12px", marginBottom: "40px" }}
        >
          {certs.map((c) => (
            <div
              key={c.label}
              style={{
                background: "var(--canvas)",
                border: "1px solid var(--hairline)",
                borderRadius: "var(--rounded-lg)",
                padding: "16px",
                textAlign: "center",
              }}
            >
              <p className="text-body-strong" style={{ color: "var(--ink)", marginBottom: "4px" }}>{c.label}</p>
              <p className="text-caption" style={{ color: "var(--ink-muted-48)" }}>{c.year}</p>
            </div>
          ))}
        </div>

        <div
          className="cert-bottom"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}
        >
          <div>
            <p
              className="text-caption"
              style={{ color: "var(--ink-muted-48)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}
            >
              신뢰하는 파트너
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {partners.map((p) => (
                <span
                  key={p}
                  className="text-caption"
                  style={{
                    border: "1px solid var(--hairline)",
                    borderRadius: "var(--rounded-pill)",
                    padding: "5px 14px",
                    color: "var(--ink)",
                    background: "var(--canvas)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
          <div>
            <p
              className="text-caption"
              style={{ color: "var(--ink-muted-48)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}
            >
              언론 보도
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
              {press.map((p) => (
                <span
                  key={p}
                  className="text-caption"
                  style={{
                    border: "1px solid var(--hairline)",
                    borderRadius: "var(--rounded-pill)",
                    padding: "5px 14px",
                    color: "var(--ink)",
                    background: "var(--canvas)",
                  }}
                >
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 833px) {
          .cert-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .cert-bottom { grid-template-columns: 1fr !important; gap: 24px !important; }
        }
      `}</style>
    </section>
  );
}
