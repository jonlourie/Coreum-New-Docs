import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TypeDropdownStateExpandedType = {
  label?: string;
  iconArrow?: string;

  /** Style props */
  typeDropdownStateExpandedPadding?: CSSProperties["padding"];
  typeDropdownStateExpandedAlignSelf?: CSSProperties["alignSelf"];
  typeDropdownStateExpandedGap?: CSSProperties["gap"];
  typeDropdownStateExpandedBackgroundColor?: CSSProperties["backgroundColor"];
  labelLineHeight?: CSSProperties["lineHeight"];
  labelColor?: CSSProperties["color"];
  labelFontWeight?: CSSProperties["fontWeight"];
  labelFlex?: CSSProperties["flex"];
  iconArrowWidth?: CSSProperties["width"];
  iconArrowHeight?: CSSProperties["height"];
  iconArrowMinHeight?: CSSProperties["minHeight"];
};

const TypeDropdownStateExpanded: NextPage<TypeDropdownStateExpandedType> = ({
  label = "Button Text",
  iconArrow,
  typeDropdownStateExpandedPadding,
  typeDropdownStateExpandedAlignSelf,
  typeDropdownStateExpandedGap,
  typeDropdownStateExpandedBackgroundColor,
  labelLineHeight,
  labelColor,
  labelFontWeight,
  labelFlex,
  iconArrowWidth,
  iconArrowHeight,
  iconArrowMinHeight,
}) => {
  const typeDropdownStateExpandedStyle: CSSProperties = useMemo(() => {
    return {
      padding: typeDropdownStateExpandedPadding,
      alignSelf: typeDropdownStateExpandedAlignSelf,
      gap: typeDropdownStateExpandedGap,
      backgroundColor: typeDropdownStateExpandedBackgroundColor,
    };
  }, [
    typeDropdownStateExpandedPadding,
    typeDropdownStateExpandedAlignSelf,
    typeDropdownStateExpandedGap,
    typeDropdownStateExpandedBackgroundColor,
  ]);

  const labelStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: labelLineHeight,
      color: labelColor,
      fontWeight: labelFontWeight,
      flex: labelFlex,
    };
  }, [labelLineHeight, labelColor, labelFontWeight, labelFlex]);

  const iconArrowStyle: CSSProperties = useMemo(() => {
    return {
      width: iconArrowWidth,
      height: iconArrowHeight,
      minHeight: iconArrowMinHeight,
    };
  }, [iconArrowWidth, iconArrowHeight, iconArrowMinHeight]);

  return (
    <div
      className="rounded-lg flex flex-row items-center justify-between py-3 pr-2 pl-3 box-border text-left text-base text-shades-light font-regular-label"
      style={typeDropdownStateExpandedStyle}
    >
      <div
        className="relative tracking-[-0.01em] leading-[24px]"
        style={labelStyle}
      >
        {label}
      </div>
      <img
        className="w-6 relative h-6"
        alt=""
        src={iconArrow}
        style={iconArrowStyle}
      />
    </div>
  );
};

export default TypeDropdownStateExpanded;
