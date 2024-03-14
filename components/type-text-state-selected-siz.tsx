import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TypeTextStateSelectedSizType = {
  label?: string;

  /** Style props */
  typeTextStateSelectedSizPadding?: CSSProperties["padding"];
  typeTextStateSelectedSizBackgroundColor?: CSSProperties["backgroundColor"];
  typeTextStateSelectedSizWidth?: CSSProperties["width"];
  typeTextStateSelectedSizBorder?: CSSProperties["border"];
  typeTextStateSelectedSizOutline?: CSSProperties["outline"];
  typeTextStateSelectedSizHeight?: CSSProperties["height"];
  typeTextStateSelectedSizFontFamily?: CSSProperties["fontFamily"];
  typeTextStateSelectedSizFontWeight?: CSSProperties["fontWeight"];
  typeTextStateSelectedSizFontSize?: CSSProperties["fontSize"];
  typeTextStateSelectedSizColor?: CSSProperties["color"];
  typeTextStateSelectedSizMinWidth?: CSSProperties["minWidth"];
  typeTextStateSelectedSizAlignSelf?: CSSProperties["alignSelf"];
  labelFontWeight?: CSSProperties["fontWeight"];
  labelLineHeight?: CSSProperties["lineHeight"];
  labelColor?: CSSProperties["color"];
  labelDisplay?: CSSProperties["display"];
  labelWidth?: CSSProperties["width"];
  labelPaddingRight?: CSSProperties["paddingRight"];
  labelFlex?: CSSProperties["flex"];
};

const TypeTextStateSelectedSiz: NextPage<TypeTextStateSelectedSizType> = ({
  label = "Button Text",
  typeTextStateSelectedSizPadding,
  typeTextStateSelectedSizBackgroundColor,
  typeTextStateSelectedSizWidth,
  typeTextStateSelectedSizBorder,
  typeTextStateSelectedSizOutline,
  typeTextStateSelectedSizHeight,
  typeTextStateSelectedSizFontFamily,
  typeTextStateSelectedSizFontWeight,
  typeTextStateSelectedSizFontSize,
  typeTextStateSelectedSizColor,
  typeTextStateSelectedSizMinWidth,
  typeTextStateSelectedSizAlignSelf,
  labelFontWeight,
  labelLineHeight,
  labelColor,
  labelDisplay,
  labelWidth,
  labelPaddingRight,
  labelFlex,
}) => {
  const typeTextStateSelectedSizStyle: CSSProperties = useMemo(() => {
    return {
      padding: typeTextStateSelectedSizPadding,
      backgroundColor: typeTextStateSelectedSizBackgroundColor,
      width: typeTextStateSelectedSizWidth,
      border: typeTextStateSelectedSizBorder,
      outline: typeTextStateSelectedSizOutline,
      height: typeTextStateSelectedSizHeight,
      fontFamily: typeTextStateSelectedSizFontFamily,
      fontWeight: typeTextStateSelectedSizFontWeight,
      fontSize: typeTextStateSelectedSizFontSize,
      color: typeTextStateSelectedSizColor,
      minWidth: typeTextStateSelectedSizMinWidth,
      alignSelf: typeTextStateSelectedSizAlignSelf,
    };
  }, [
    typeTextStateSelectedSizPadding,
    typeTextStateSelectedSizBackgroundColor,
    typeTextStateSelectedSizWidth,
    typeTextStateSelectedSizBorder,
    typeTextStateSelectedSizOutline,
    typeTextStateSelectedSizHeight,
    typeTextStateSelectedSizFontFamily,
    typeTextStateSelectedSizFontWeight,
    typeTextStateSelectedSizFontSize,
    typeTextStateSelectedSizColor,
    typeTextStateSelectedSizMinWidth,
    typeTextStateSelectedSizAlignSelf,
  ]);

  const label1Style: CSSProperties = useMemo(() => {
    return {
      fontWeight: labelFontWeight,
      lineHeight: labelLineHeight,
      color: labelColor,
      display: labelDisplay,
      width: labelWidth,
      paddingRight: labelPaddingRight,
      flex: labelFlex,
    };
  }, [
    labelFontWeight,
    labelLineHeight,
    labelColor,
    labelDisplay,
    labelWidth,
    labelPaddingRight,
    labelFlex,
  ]);

  return (
    <div
      className="rounded-lg bg-shades-dark-2 flex flex-row items-center justify-start p-3 box-border text-left text-base text-primary-off-white font-regular-label self-stretch"
      style={typeTextStateSelectedSizStyle}
    >
      <div
        className="relative tracking-[-0.01em] leading-[24px] font-medium"
        style={label1Style}
      >
        {label}
      </div>
    </div>
  );
};

export default TypeTextStateSelectedSiz;
