import { PageHero } from "@/components/ui/PageHero";

const timeline = [
  { year: "2019", event: "유일식품 설립 / 함평군 마늘껍질 발효사료 연구 시작" },
  { year: "2020", event: "특허 출원 — 마늘껍질 발효액 제조방법 (3단계 공정)" },
  { year: "2021", event: "함평군 MOU 체결 / 조달청 등록 6종 완료" },
  { year: "2022", event: "국가 R&D 과제 수행 완료 / 한국농업기술진흥원 공인 분석" },
  { year: "2023", event: "나비잠(흑하랑 수면 스틱젤리) 출시 · 누적매출 1.5억 / 언론보도 3건" },
  { year: "2024", event: "천지명인(마늘껍질 분말식초) 스마트스토어·쿠팡 출시 / 일본 수출 협의 착수" },
  { year: "2025", event: "특허 제10-2855417호 신규 등록 / 투자유치 IR 본격화" },
];

const certifications = [
  { label: "특허 등록", value: "3건", sub: "알리신 안정화 핵심 IP" },
  { label: "특허 출원", value: "1건", sub: "증체용 양돈사료 보조제" },
  { label: "ISO 22000", value: "인증", sub: "식품안전경영 국제인증" },
  { label: "FDA 등록", value: "완료", sub: "수출 적격 인증" },
  { label: "조달청 등록", value: "7건", sub: "B2A 납품 자격" },
  { label: "MOU", value: "함평군", sub: "지자체 공인 협약" },
];

const members = [
  { role: "대표이사", name: "이성범", desc: "함평에서 4대째 이어온 발효 전문 기업 창업 · 마늘껍질 발효사료 세계 최초 개발 · 국가 R&D 책임" },
  { role: "연구소장", name: "김현섭", desc: "서울대 영양학 박사 · 축산과학원 젖소사양 연구사 · 한우사양 연구관 · 낙농과장 역임 · 녹아사료자원연구소 대표" },
  { role: "기술이사", name: "승종원", desc: "순천대 농학석사 · 고급육 품평회 심사위원 · 한우 고급육 경진대회 심사위원 · 축산물품질인증원 광주전남지원장" },
  { role: "사업본부장", name: "백승우", desc: "아주대 공학석사 · 유일식품 생산관리 총괄 · B2A·B2B 채널 영업 담당" },
];

const advisors = [
  { name: "차태원", org: "그린피드 대표" },
  { name: "김상길", org: "삼손목장 대표" },
  { name: "나형규", org: "천혜목장 대표" },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="COMPANY"
        title="(주)유일식품"
        sub="마늘껍질 발효 기술로 축산 환경과 건강식품 시장을 동시에 혁신하는 6차산업 기업"
      />

      {/* 회사 소개 — tile-light */}
      <section className="tile-light">
        <div className="content-wrap-wide">
          <div className="about-intro" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}>
            <div>
              <p className="text-caption" style={{ color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "12px" }}>ABOUT US</p>
              <h2 className="text-display-lg" style={{ color: "var(--ink)", marginBottom: "24px" }}>
                폐기물을 자원으로,<br />농촌을 미래 산업으로
              </h2>
              <p className="text-body" style={{ color: "var(--ink)", marginBottom: "16px" }}>
                유일식품은 전남 함평군을 기반으로, 연간 수만 톤씩 버려지는 마늘껍질을
                이중발효 특허 기술로 고부가가치 자원으로 전환합니다.
              </p>
              <p className="text-body" style={{ color: "var(--ink)", marginBottom: "16px" }}>
                축산 농가의 온실가스 감축 의무화, 항생제 금지, 6차산업 육성이라는
                3가지 국가 정책이 맞닿는 지점에서 사업을 전개하고 있습니다.
              </p>
              <p className="text-body" style={{ color: "var(--ink)" }}>
                B2A(조달) · B2B(축산) · B2C(건강식품)의 3중 수익 구조로
                매출 변동성을 최소화하며 지속 성장합니다.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {certifications.map((c) => (
                <div
                  key={c.label}
                  style={{
                    background: "var(--canvas-parchment)",
                    borderRadius: "var(--rounded-lg)",
                    padding: "20px",
                    border: "1px solid var(--hairline)",
                  }}
                >
                  <div className="text-display-md" style={{ color: "var(--primary)", marginBottom: "4px", fontVariantNumeric: "numerator" }}>{c.value}</div>
                  <div className="text-body-strong" style={{ color: "var(--ink)", marginBottom: "4px" }}>{c.label}</div>
                  <div className="text-caption" style={{ color: "var(--ink-muted-48)" }}>{c.sub}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`@media(max-width:833px){.about-intro{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* 연혁 — tile-dark */}
      <section className="tile-dark" id="history">
        <div className="content-wrap-wide">
          <p className="text-caption" style={{ color: "var(--body-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>HISTORY</p>
          <h2 className="text-display-lg" style={{ color: "var(--body-on-dark)", marginBottom: "40px" }}>연혁</h2>
          <div style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: "72px", top: 0, bottom: 0, width: "1px", background: "rgba(255,255,255,0.08)" }} className="timeline-line" />
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              {timeline.map((t) => (
                <div key={t.year} style={{ display: "flex", gap: "24px", alignItems: "flex-start" }}>
                  <div className="text-body-strong" style={{ color: "var(--primary-on-dark)", flexShrink: 0, width: "48px", textAlign: "right", fontVariantNumeric: "numerator" }}>
                    {t.year}
                  </div>
                  <div className="timeline-dot" style={{ flexShrink: 0, paddingTop: "4px" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", background: "var(--primary)", position: "relative", zIndex: 1 }} />
                  </div>
                  <p className="text-body" style={{ color: "var(--body-on-dark)" }}>{t.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <style>{`
          @media(max-width:833px){.timeline-line{display:none!important;}.timeline-dot{display:none!important;}}
        `}</style>
      </section>

      {/* 팀 — tile-parchment */}
      <section className="tile-parchment" id="team">
        <div className="content-wrap-wide">
          <p className="text-caption" style={{ color: "var(--ink-muted-48)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>TEAM</p>
          <h2 className="text-display-lg" style={{ color: "var(--ink)", marginBottom: "32px" }}>경영진</h2>
          <div className="team-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px", marginBottom: "48px" }}>
            {members.map((m) => (
              <div
                key={m.role}
                style={{
                  background: "var(--canvas)",
                  borderRadius: "var(--rounded-lg)",
                  padding: "var(--space-lg)",
                  border: "1px solid var(--hairline)",
                }}
              >
                <p className="text-caption" style={{ color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "8px" }}>{m.role}</p>
                <h3 className="text-tagline" style={{ color: "var(--ink)", marginBottom: "12px" }}>{m.name}</h3>
                <p className="text-caption" style={{ color: "var(--ink-muted-80)" }}>{m.desc}</p>
              </div>
            ))}
          </div>

          <p className="text-caption" style={{ color: "var(--ink-muted-48)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: "16px" }}>ADVISORY</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {advisors.map((a) => (
              <div
                key={a.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "var(--canvas)",
                  border: "1px solid var(--hairline)",
                  borderRadius: "var(--rounded-pill)",
                  padding: "6px 16px",
                }}
              >
                <span className="text-body-strong" style={{ color: "var(--ink)" }}>{a.name}</span>
                <span className="text-caption" style={{ color: "var(--ink-muted-48)" }}>{a.org}</span>
              </div>
            ))}
            <div style={{ display: "flex", alignItems: "center", background: "var(--canvas)", border: "1px solid var(--hairline)", borderRadius: "var(--rounded-pill)", padding: "6px 16px" }}>
              <span className="text-body-strong" style={{ color: "var(--ink)" }}>저메탄친환경한우산업발전연구회</span>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:833px){.team-grid{grid-template-columns:1fr 1fr!important;}}@media(max-width:419px){.team-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>

      {/* 오시는 길 — tile-light */}
      <section className="tile-light" id="map">
        <div className="content-wrap-wide">
          <h2 className="text-display-md" style={{ color: "var(--ink)", marginBottom: "24px" }}>오시는 길</h2>
          <div className="map-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                { icon: "📍", text: "전남 함평군 엄다면 곤재로 326-16" },
                { icon: "📞", text: "061-894-8998" },
                { icon: "🚗", text: "서울 → 함평: 광주-함평고속도로 이용, 약 3시간 30분" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", gap: "12px" }}>
                  <span style={{ flexShrink: 0 }}>{item.icon}</span>
                  <span className="text-body" style={{ color: "var(--ink)" }}>{item.text}</span>
                </div>
              ))}
            </div>
            <div
              style={{
                borderRadius: "var(--rounded-lg)",
                border: "1px solid var(--hairline)",
                background: "var(--canvas-parchment)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "160px",
              }}
            >
              <p className="text-caption" style={{ color: "var(--ink-muted-48)" }}>지도 영역 — 추후 Kakao Map API 연동</p>
            </div>
          </div>
        </div>
        <style>{`@media(max-width:833px){.map-grid{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  );
}
