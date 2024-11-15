import TopRightArrow from "@/public/icons/top-right-arrow";
import { cn } from "@/utils/cn";

export default function Button({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <button
      className={cn(
        "flex items-center gap-x-3 bg-wheat text-black uppercase px-4 py-3 rounded-sm transition hover:brightness-75",
        className
      )}
    >
      {text} <TopRightArrow onlyIcon />
    </button>
  );
}
