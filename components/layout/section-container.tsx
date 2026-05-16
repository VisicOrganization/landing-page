import { cn } from "@/lib/utils";
import {
  MAX_CONTENT_WIDTH,
  SECTION_HORIZONTAL_PADDING,
} from "@/lib/constants/layout";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
  /** Merged onto the inner max-width wrapper (e.g. min-h-0 max-h-full for viewport-locked sections). */
  contentClassName?: string;
  id?: string;
  as?: "section" | "div" | "footer";
};

export function SectionContainer({
  children,
  className,
  contentClassName,
  id,
  as: Component = "section",
}: SectionContainerProps) {
  return (
    <Component
      id={id}
      className={cn("w-full", SECTION_HORIZONTAL_PADDING, className)}
    >
      <div
        className={cn("mx-auto w-full", MAX_CONTENT_WIDTH, contentClassName)}
      >
        {children}
      </div>
    </Component>
  );
}
