"use client";

import { useState } from "react";
import { PageHero } from "@/components/ui/PageHero";

type FormType = "sample" | "ir" | "general";

interface FormData {
  name: string;
  company: string;
  phone: string;
  email: string;
  type: FormType;
  product: string;
  message: string;
}

const initialForm: FormData = {
  name: "", company: "", phone: "", email: "",
  type: "sample", product: "", message: "",
};

const formTypes: { value: FormType; label: string }[] = [
  { value: "sample", label: "샘플 신청" },
  { value: "ir", label: "IR 자료 요청" },
  { value: "general", label: "일반 문의" },
];

const productOptions = [
  "천지마늘황칠 (한우용 사료첨가제)",
  "천지마늘발효다 (양돈용 사료첨가제)",
  "천지명인 (마늘껍질 분말식초)",
  "나비잠 (흑하랑 수면 스틱젤리)",
  "기타 / 미정",
];

function validate(data: FormData): Partial<Record<keyof FormData, string>> {
  const errors: Partial<Record<keyof FormData, string>> = {};
  if (!data.name.trim()) errors.name = "이름을 입력해주세요.";
  if (!data.email.trim()) errors.email = "이메일을 입력해주세요.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = "올바른 이메일 형식이 아닙니다.";
  if (!data.phone.trim()) errors.phone = "연락처를 입력해주세요.";
  if (data.type === "sample" && !data.product) errors.product = "제품을 선택해주세요.";
  if (!data.message.trim()) errors.message = "문의 내용을 입력해주세요.";
  return errors;
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 16px",
  borderRadius: "var(--rounded-pill)",
  border: "1px solid var(--hairline)",
  background: "var(--canvas)",
  color: "var(--ink)",
  fontSize: "17px",
  lineHeight: "1.47",
  letterSpacing: "-0.374px",
  outline: "none",
  boxSizing: "border-box",
};

function Field({ label, value, onChange, error, placeholder, type = "text" }: {
  label: string; value: string; onChange: (v: string) => void;
  error?: string; placeholder?: string; type?: string;
}) {
  return (
    <div>
      <label className="text-caption-strong" style={{ color: "var(--ink)", display: "block", marginBottom: "8px" }}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        style={{ ...inputStyle, borderColor: error ? "#ef4444" : "var(--hairline)" }}
      />
      {error && <p className="text-caption" style={{ color: "#ef4444", marginTop: "4px" }}>{error}</p>}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(form);
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    console.log("[Contact Form Submit]", form);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <>
        <PageHero eyebrow="CONTACT" title="문의가 접수되었습니다" sub="영업일 1~2일 내에 담당자가 연락드립니다. 감사합니다." />
        <section className="tile-light" style={{ textAlign: "center" }}>
          <div className="content-wrap">
            <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: "var(--primary)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", margin: "0 auto 24px" }}>✓</div>
            <h2 className="text-display-md" style={{ color: "var(--ink)", marginBottom: "16px" }}>접수 완료</h2>
            <p className="text-body" style={{ color: "var(--ink-muted-80)", marginBottom: "32px" }}>
              <strong>{form.name}</strong>님의 <strong>{formTypes.find((t) => t.value === form.type)?.label}</strong> 접수가 완료되었습니다.<br />
              이메일 <strong>{form.email}</strong>로 확인 안내를 드립니다.
            </p>
            <button
              onClick={() => { setForm(initialForm); setSubmitted(false); }}
              className="text-body transition-all active:scale-95"
              style={{ background: "none", border: "none", color: "var(--primary)", textDecoration: "underline", cursor: "pointer" }}
            >
              추가 문의하기
            </button>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero eyebrow="CONTACT" title="문의하기" sub="샘플 신청 · IR 자료 요청 · 일반 문의 — 영업일 1~2일 내 응답" />

      <section className="tile-light">
        <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 var(--space-lg)" }}>
          <form onSubmit={handleSubmit} noValidate style={{ display: "flex", flexDirection: "column", gap: "24px" }}>

            {/* 문의 유형 */}
            <div>
              <label className="text-caption-strong" style={{ color: "var(--ink)", display: "block", marginBottom: "12px" }}>문의 유형</label>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {formTypes.map((t) => (
                  <button
                    key={t.value}
                    type="button"
                    onClick={() => handleChange("type", t.value)}
                    className="text-caption transition-all active:scale-95"
                    style={{
                      padding: "8px 18px",
                      borderRadius: "var(--rounded-pill)",
                      border: form.type === t.value ? "none" : "1px solid var(--hairline)",
                      background: form.type === t.value ? "var(--primary)" : "var(--canvas)",
                      color: form.type === t.value ? "#ffffff" : "var(--ink)",
                      cursor: "pointer",
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 이름 + 회사 */}
            <div className="contact-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <Field label="이름 *" value={form.name} onChange={(v) => handleChange("name", v)} error={errors.name} placeholder="홍길동" />
              <Field label="회사 / 농장명" value={form.company} onChange={(v) => handleChange("company", v)} placeholder="(주)유일축산" />
            </div>

            {/* 연락처 + 이메일 */}
            <div className="contact-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
              <Field label="연락처 *" value={form.phone} onChange={(v) => handleChange("phone", v)} error={errors.phone} placeholder="010-0000-0000" type="tel" />
              <Field label="이메일 *" value={form.email} onChange={(v) => handleChange("email", v)} error={errors.email} placeholder="example@email.com" type="email" />
            </div>

            {/* 제품 선택 */}
            {form.type === "sample" && (
              <div>
                <label className="text-caption-strong" style={{ color: "var(--ink)", display: "block", marginBottom: "8px" }}>신청 제품 *</label>
                <select
                  value={form.product}
                  onChange={(e) => handleChange("product", e.target.value)}
                  style={{ ...inputStyle, borderColor: errors.product ? "#ef4444" : "var(--hairline)", borderRadius: "var(--rounded-sm)" }}
                >
                  <option value="">제품을 선택해주세요</option>
                  {productOptions.map((p) => <option key={p} value={p}>{p}</option>)}
                </select>
                {errors.product && <p className="text-caption" style={{ color: "#ef4444", marginTop: "4px" }}>{errors.product}</p>}
              </div>
            )}

            {/* 문의 내용 */}
            <div>
              <label className="text-caption-strong" style={{ color: "var(--ink)", display: "block", marginBottom: "8px" }}>문의 내용 *</label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                rows={5}
                placeholder={
                  form.type === "sample" ? "농장 규모, 두수, 사육 단계 등을 함께 적어주시면 빠른 상담이 가능합니다."
                  : form.type === "ir" ? "투자 검토 목적, 펀드/기관명, 미팅 희망 일정 등을 적어주세요."
                  : "문의 내용을 자유롭게 작성해주세요."
                }
                style={{ ...inputStyle, resize: "none", borderRadius: "var(--rounded-sm)", borderColor: errors.message ? "#ef4444" : "var(--hairline)" }}
              />
              {errors.message && <p className="text-caption" style={{ color: "#ef4444", marginTop: "4px" }}>{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="text-body transition-all active:scale-95"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "var(--rounded-pill)",
                background: "var(--primary)",
                color: "#ffffff",
                border: "none",
                cursor: "pointer",
                fontWeight: 600,
              }}
            >
              {formTypes.find((t) => t.value === form.type)?.label} 보내기
            </button>

            <p className="text-caption" style={{ color: "var(--ink-muted-48)", textAlign: "center" }}>
              제출된 정보는 문의 답변 목적으로만 사용됩니다.
            </p>
          </form>
        </div>
        <style>{`@media(max-width:640px){.contact-row{grid-template-columns:1fr!important;}}`}</style>
      </section>
    </>
  );
}
