import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FeatureType = {
  copy?: string;
  copy1?: string;
  copy2?: string;
  copy3?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
};

const Feature: NextPage<FeatureType> = ({
  copy,
  copy1,
  copy2,
  copy3,
  propWidth,
  propFlex,
}) => {
  const valueStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const copy1Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] text-left text-base text-primary-dim font-overline-footer">
      <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
        <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
          {copy}
        </div>
      </div>
      <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
        <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
          {copy1}
        </div>
      </div>
      <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
        <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
          {copy2}
        </div>
      </div>
      <div
        className="flex flex-row items-center justify-center py-0 px-6"
        style={valueStyle}
      >
        <div
          className="relative tracking-[-0.01em] leading-[28px]"
          style={copy1Style}
        >
          {copy3}
        </div>
      </div>
      <div className="w-60 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
        <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
          100+ MBPS
        </div>
      </div>
    </div>
  );
};

export default Feature;
