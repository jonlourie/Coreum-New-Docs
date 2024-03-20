import type { NextPage } from "next";

export type CardType = {
  metaverseApplications?: string;
  title?: string;
  description?: string;
};

const Card: NextPage<CardType> = ({
  metaverseApplications,
  title,
  description,
}) => {
  return (
    <div className="flex-[0.9114] rounded-2xl bg-shades-pitch flex flex-col items-start justify-start pt-[1.5rem] px-[1.5rem] pb-[2rem] box-border gap-[1.5rem] min-w-[7.375rem] text-left text-[1rem] text-primary-dim font-regular-label">
      <img
        className="w-[3rem] h-[3rem] relative"
        loading="lazy"
        alt=""
        src={metaverseApplications}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[0.5rem]">
        <div className="relative tracking-[-0.02em] leading-[1.5rem] font-medium">
          {title}
        </div>
        <div className="self-stretch relative text-[0.875rem] tracking-[-0.01em] leading-[1.313rem] font-overline-footer text-shades-carbon">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
