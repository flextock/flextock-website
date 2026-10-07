type FlextockArrowProps = {
  size?: number;
  className?: string;
};

/** Directional mark derived from the Flextock greater-than / X brand shape. */
export function FlextockArrow({ size = 16, className }: FlextockArrowProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M5.2 2.4L11.4 8L5.2 13.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
    </svg>
  );
}
