import { cn } from "@/lib/utils";

type SectionLabelProps = {
  label: string;
  className?: string;
};

export function SectionLabel({ label, className }: SectionLabelProps) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <span className="shrink-0 font-sans text-xl text-subtle">{label}</span>
      <span className="hidden h-px flex-1 bg-border sm:block" aria-hidden />
    </div>
  );
}
