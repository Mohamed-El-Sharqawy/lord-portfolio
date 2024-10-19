import TopRightArrow from "@/public/icons/top-right-arrow";

interface ServiceProps {
  title: string;
  description: string;
  index: number;
}

export default function SingleService({ title, description, index }: ServiceProps) {
  return (
    <div className="p-12 bg-wheat/5 border border-wheat/15 w-[445.33px] rounded-sm opacity-0">
      <span className="text-wheat/60">0{index + 1}</span>
      <h2 className="text-wheat mt-1 mb-2 text-2xl">{title}</h2>
      <p className="mb-8 text-wheat/60 max-w-[350px] leading-7">{description}</p>
      <TopRightArrow />
    </div>
  );
}
