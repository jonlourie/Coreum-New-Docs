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
    <div className="flex-[0.9114] rounded-2xl bg-shades-pitch flex flex-col items-start justify-start pt-6 px-6 pb-8 box-border gap-[24px] min-w-[118px] text-left text-base text-primary-dim font-regular-label">
      <img
        className="w-12 h-12 relative"
        loading="lazy"
        alt=""
        src={metaverseApplications}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
          {title}
        </div>
        <div className="self-stretch relative text-sm tracking-[-0.01em] leading-[21px] font-overline-footer text-shades-carbon">
          {description}
        </div>
      </div>
    </div>
  );
};

export default Card;
