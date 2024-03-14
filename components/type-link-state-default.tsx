import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TypeLinkStateDefaultType = {
  label?: string;

  /** Style props */
  typeLinkStateDefaultAlignSelf?: CSSProperties["alignSelf"];
  labelLineHeight?: CSSProperties["lineHeight"];
  labelColor?: CSSProperties["color"];
  labelBackground?: CSSProperties["background"];
  labelWebkitBackgroundClip?: CSSProperties["webkitBackgroundClip"];
  labelWebkitTextFillColor?: CSSProperties["webkitTextFillColor"];
};

const TypeLinkStateDefault: NextPage<TypeLinkStateDefaultType> = ({
  label = "Label",
  typeLinkStateDefaultAlignSelf,
  labelLineHeight,
  labelColor,
  labelBackground,
  labelWebkitBackgroundClip,
  labelWebkitTextFillColor,
}) => {
  const typeLinkStateDefaultStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: typeLinkStateDefaultAlignSelf,
    };
  }, [typeLinkStateDefaultAlignSelf]);

  const label2Style: CSSProperties = useMemo(() => {
    return {
      lineHeight: labelLineHeight,
      color: labelColor,
      background: labelBackground,
      webkitBackgroundClip: labelWebkitBackgroundClip,
      webkitTextFillColor: labelWebkitTextFillColor,
    };
  }, [
    labelLineHeight,
    labelColor,
    labelBackground,
    labelWebkitBackgroundClip,
    labelWebkitTextFillColor,
  ]);

  return (
    <div
      className="rounded-xl [backdrop-filter:blur(10px)] flex flex-row items-start justify-start gap-[4px] text-left text-base text-primary-off-white font-overline-footer"
      style={typeLinkStateDefaultStyle}
    >
      <div
        className="relative tracking-[-0.02em] leading-[24px] uppercase font-medium"
        style={label2Style}
      >
        {label}
      </div>
      <img className="w-6 relative h-6" alt="" src="/iconlink-1.svg" />
    </div>
  );
};

export default TypeLinkStateDefault;
