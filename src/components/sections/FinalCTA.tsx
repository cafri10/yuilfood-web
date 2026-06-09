export function FinalCTA() {
  return (
    /* §9 최종 CTA — tile-dark */
    <section className="tile-dark" style={{ textAlign: "center" }}>
      <div className="content-wrap">
        {/* 인용 */}
        <blockquote
          style={{
            background: "var(--surface-tile-2)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "var(--rounded-sm)",
            padding: "32px",
            marginBottom: "48px",
            textAlign: "left",
          }}
        >
          <p
            className="text-lead"
            style={{ color: "var(--body-on-dark)", marginBottom: "16px", fontStyle: "normal" }}
          >
            "유일식품의 발효사료를 도입한 후 출하기간이 단축되고
            악취 민원이 사라졌습니다."
          </p>
          <cite
            className="text-caption"
            style={{ color: "var(--body-muted)", fontStyle: "normal" }}
          >
            함평군 농가 대표 / 4개 농가 실증 확인
          </cite>
        </blockquote>

        {/* CTA 헤드라인 */}
        <h2
          className="text-hero-display"
          style={{ color: "var(--body-on-dark)", marginBottom: "16px" }}
        >
          지금 시작하세요
        </h2>
        <p
          className="text-lead"
          style={{ color: "var(--body-muted)", marginBottom: "40px" }}
        >
          거래처·투자자·정책 파트너 모두 환영합니다
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "12px" }}>
          <a
            href="/ko/contact#sample"
            className="text-body transition-all active:scale-95"
            style={{
              background: "var(--primary)",
              color: "#ffffff",
              borderRadius: "var(--rounded-pill)",
              padding: "11px 22px",
              textDecoration: "none",
            }}
          >
            샘플 신청 →
          </a>
          <a
            href="/ko/ir"
            className="text-body transition-all active:scale-95"
            style={{
              background: "transparent",
              color: "var(--primary-on-dark)",
              border: "1px solid var(--primary-on-dark)",
              borderRadius: "var(--rounded-pill)",
              padding: "11px 22px",
              textDecoration: "none",
            }}
          >
            IR 자료 다운로드
          </a>
          <a
            href="/ko/contact"
            className="text-body transition-all active:scale-95"
            style={{
              background: "transparent",
              color: "var(--primary-on-dark)",
              border: "1px solid var(--primary-on-dark)",
              borderRadius: "var(--rounded-pill)",
              padding: "11px 22px",
              textDecoration: "none",
            }}
          >
            정책 협력 문의
          </a>
        </div>
      </div>
    </section>
  );
}
