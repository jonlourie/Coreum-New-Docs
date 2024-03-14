import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Feature1Type = {
  valuePlaceholder?: string;
  label?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
  propWidth2?: CSSProperties["width"];
  propWidth3?: CSSProperties["width"];
};

const Feature1: NextPage<Feature1Type> = ({
  valuePlaceholder,
  label,
  propWidth,
  propWidth1,
  propWidth2,
  propWidth3,
}) => {
  const highlightCommandStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const label3Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  const value1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth2,
    };
  }, [propWidth2]);

  const value2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth3,
    };
  }, [propWidth3]);

  return (
    <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] text-left text-base text-primary-dim font-overline-footer mq1050:flex-wrap">
      <div className="relative w-[182px] [border:none] bg-[transparent] h-7 flex flex-row items-center justify-start box-border font-fira-code">
        <input
          className="[outline:none] py-0 px-5 font-fira-code font-light text-base text-primary-dim [border:none] w-full h-full [background:transparent] relative z-[3]"
          placeholder={valuePlaceholder}
          type="text"
        />
        <div
          className="h-7 w-3/5 rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2 box-border absolute z-[1] left-[12px] top-[0px] [pointer-events:none]"
          style={highlightCommandStyle}
        >
          <div
            className="h-7 w-[95px] relative tracking-[-0.01em] leading-[28px] font-light flex items-center"
            style={label3Style}
          >
            {label}
          </div>
        </div>
      </div>
      <div className="w-[220px] flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
        <div className="relative tracking-[-0.01em] leading-[28px]">string</div>
      </div>
      <div
        className="h-7 w-[205px] flex flex-row items-center justify-center py-0 px-3 box-border"
        style={value1Style}
      >
        <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
          --
        </div>
      </div>
      <div
        className="h-7 w-[205px] flex flex-row items-center justify-center py-0 px-3 box-border"
        style={value2Style}
      >
        <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
          --
        </div>
      </div>
    </div>
  );
};

export default Feature1;
