import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "utility" | "dark";
  accent?: boolean; // primary 액센트 바 표시 여부
}

export function Card({
  variant = "utility",
  accent = false,
  className,
  style,
  children,
  ...props
}: CardProps) {
  const baseStyle: React.CSSProperties =
    variant === "utility"
      ? {
          background: "var(--canvas)",
          border: "1px solid var(--hairline)",
          borderRadius: "var(--rounded-lg)",
          padding: "var(--space-lg)",
        }
      : {
          background: "var(--surface-tile-2)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "var(--rounded-sm)",
          padding: "var(--space-lg)",
        };

  return (
    <div
      className={clsx(className)}
      style={{ ...baseStyle, ...style }}
      {...props}
    >
      {accent && (
        <div
          style={{
            width: "32px",
            height: "2px",
            background: variant === "dark" ? "var(--primary-on-dark)" : "var(--primary)",
            marginBottom: "20px",
            borderRadius: "var(--rounded-pill)",
          }}
        />
      )}
      {children}
    </div>
  );
}
