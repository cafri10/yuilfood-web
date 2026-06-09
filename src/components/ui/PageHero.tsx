interface PageHeroProps {
  eyebrow?: string;
  title: string;
  sub?: string;
  dark?: boolean; // true면 다크 타일, false(기본)면 라이트 타일
}

export function PageHero({
  eyebrow,
  title,
  sub,
  dark = false,
}: PageHeroProps) {
  return (
    /* 서브페이지 히어로 — 그래디언트 없음, 타일 배경 */
    <section
      style={{
        background: dark ? "var(--surface-tile-1)" : "var(--canvas)",
        paddingTop: "var(--space-section)",
        paddingBottom: "var(--space-section)",
      }}
    >
      <div className="content-wrap">
        {eyebrow && (
          <p
            className="text-caption"
            style={{
              color: dark ? "var(--primary-on-dark)" : "var(--primary)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: "12px",
            }}
          >
            {eyebrow}
          </p>
        )}
        <h1
          className="text-hero-display"
          style={{
            color: dark ? "var(--body-on-dark)" : "var(--ink)",
            marginBottom: sub ? "16px" : "0",
            maxWidth: "720px",
          }}
        >
          {title}
        </h1>
        {sub && (
          <p
            className="text-lead"
            style={{
              color: dark ? "var(--body-muted)" : "var(--ink-muted-80)",
              maxWidth: "560px",
            }}
          >
            {sub}
          </p>
        )}
      </div>
    </section>
  );
}
