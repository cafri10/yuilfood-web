import { clsx } from "clsx";
import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";

type Variant =
  | "primary"       // 블루 필 CTA (pill, Action Blue)
  | "secondary"     // 고스트 pill (투명 + 파란 테두리)
  | "dark-utility"  // 다크 배경용 유틸리티 버튼 (sm radius)
  | "pearl"         // 카드 보조 버튼 (pearl 배경, md radius)
  | "hero";         // 히어로 전용 (button-large, 큰 패딩)

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  href?: string;
}

const base = "inline-flex items-center justify-center gap-2 cursor-pointer select-none transition-all duration-150 active:scale-95";

const variants: Record<Variant, { style: React.CSSProperties; className: string }> = {
  primary: {
    className: "text-button-utility",
    style: {
      background: "var(--primary)",
      color: "#ffffff",
      borderRadius: "var(--rounded-pill)",
      padding: "11px 22px",
      border: "none",
    },
  },
  secondary: {
    className: "text-button-utility",
    style: {
      background: "transparent",
      color: "var(--primary)",
      border: "1px solid var(--primary)",
      borderRadius: "var(--rounded-pill)",
      padding: "11px 22px",
    },
  },
  "dark-utility": {
    className: "text-button-utility",
    style: {
      background: "var(--ink)",
      color: "var(--body-on-dark)",
      borderRadius: "var(--rounded-sm)",
      padding: "8px 15px",
      border: "none",
    },
  },
  pearl: {
    className: "text-caption",
    style: {
      background: "var(--surface-pearl)",
      color: "var(--ink-muted-80)",
      borderRadius: "var(--rounded-md)",
      padding: "8px 16px",
      border: "3px solid var(--divider-soft)",
    },
  },
  hero: {
    className: "text-button-large",
    style: {
      background: "var(--primary)",
      color: "#ffffff",
      borderRadius: "var(--rounded-pill)",
      padding: "14px 28px",
      border: "none",
    },
  },
};

export function Button({
  variant = "primary",
  href,
  className,
  style,
  children,
  ...props
}: ButtonProps) {
  const { style: variantStyle, className: variantClass } = variants[variant];
  const cls = clsx(base, variantClass, className);
  const mergedStyle = { ...variantStyle, ...style };

  if (href) {
    return (
      <a href={href} className={cls} style={mergedStyle}>
        {children}
      </a>
    );
  }

  return (
    <button className={cls} style={mergedStyle} {...props}>
      {children}
    </button>
  );
}
