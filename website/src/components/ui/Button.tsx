import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  to?: string;
  children: React.ReactNode;
}

const variants = {
  primary:
    "bg-linear-to-l from-rose-deep to-rose text-cream hover:shadow-lg hover:shadow-rose/30",
  secondary:
    "bg-linear-to-l from-gold to-gold-light text-burgundy hover:shadow-lg hover:shadow-gold/30",
  outline:
    "border-2 border-gold/50 text-gold hover:bg-gold/10 hover:border-gold",
  ghost: "text-cream/80 hover:text-cream hover:bg-white/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  to,
  className,
  children,
  type = "button",
  onClick,
  ...props
}: ButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300 cursor-pointer hover:scale-[1.03] active:scale-[0.97]",
    variants[variant],
    sizes[size],
    className
  );

  if (to) {
    return (
      <Link
        to={to}
        className={classes}
        onClick={
          onClick
            ? (e) => onClick(e as unknown as React.MouseEvent<HTMLButtonElement>)
            : undefined
        }
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
