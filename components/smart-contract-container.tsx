import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import TypeLinkStateDefault from "./type-link-state-default";

export type SmartContractContainerType = {
  featureDescription?: string;
  smartContractDefinitionTe?: string;
  featureDescriptionText?: string;

  /** Style props */
  propBorderRadius?: CSSProperties["borderRadius"];
  propGap?: CSSProperties["gap"];
  propPadding?: CSSProperties["padding"];
  propGap1?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const SmartContractContainer: NextPage<SmartContractContainerType> = ({
  featureDescription,
  smartContractDefinitionTe,
  featureDescriptionText,
  propBorderRadius,
  propGap,
  propPadding,
  propGap1,
  propAlignSelf,
}) => {
  const subSectionStyle: CSSProperties = useMemo(() => {
    return {
      borderRadius: propBorderRadius,
      gap: propGap,
      padding: propPadding,
    };
  }, [propBorderRadius, propGap, propPadding]);

  const copyStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap1,
    };
  }, [propGap1]);

  const typeLinkStateDefaultStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  return (
    <div
      className="self-stretch rounded-xl flex flex-col items-start justify-start gap-[20px] text-left text-lg text-primary-off-white font-regular-label"
      style={subSectionStyle}
    >
      <div
        className="self-stretch flex flex-col items-start justify-start gap-[12px]"
        style={copyStyle}
      >
        <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
          {featureDescription}
        </div>
        <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
          {smartContractDefinitionTe}
        </div>
      </div>
      <TypeLinkStateDefault
        label="Details"
        typeLinkStateDefaultAlignSelf="unset"
        labelLineHeight="20px"
        labelColor="unset"
        labelBackground="linear-gradient(180deg, #25d695, #046c45)"
        labelWebkitBackgroundClip="unset"
        labelWebkitTextFillColor="unset"
      />
    </div>
  );
};

export default SmartContractContainer;
