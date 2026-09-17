import Image from "next/image";

type VisualPlaceholderProps = {
  src?: string | null;
  alt: string;
  label: string;
  note: string;
  className?: string;
};

export function VisualPlaceholder({
  src,
  alt,
  label,
  note,
  className = "",
}: VisualPlaceholderProps) {
  if (src) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 40vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col justify-between border border-dashed border-flextock-line bg-flextock-panel p-4 ${className}`}
    >
      <p className="text-[0.65rem] font-medium uppercase tracking-[0.16em] text-flextock-neon">
        {label}
      </p>
      <p className="mt-6 max-w-[14rem] text-sm leading-6 text-flextock-muted">
        {note}
      </p>
    </div>
  );
}
