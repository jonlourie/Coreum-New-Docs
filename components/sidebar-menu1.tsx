import type { NextPage } from "next";
import TypeDropdownStateExpanded from "./type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "./type-text-state-selected-siz";

const SidebarMenu1: NextPage = () => {
  return (
    <div className="w-[276px] flex flex-col items-end justify-start py-6 px-4 box-border text-left text-sm text-shades-light font-regular-label mq750:pt-5 mq750:pb-5 mq750:box-border">
      <TypeDropdownStateExpanded
        label="Overview"
        iconArrow="/iconarrow-1.svg"
        typeDropdownStateExpandedPadding="12px 8px 12px 12px"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#eee"
        labelFontWeight="500"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <div className="self-stretch flex flex-col items-end justify-start py-2 pr-0 pl-4">
        <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[7px] border-l-[1px] border-solid border-shades-dark-1">
          <TypeTextStateSelectedSiz
            label="Introduction"
            typeTextStateSelectedSizPadding="8px 12px"
            typeTextStateSelectedSizBackgroundColor="unset"
            typeTextStateSelectedSizWidth="unset"
            typeTextStateSelectedSizBorder="unset"
            typeTextStateSelectedSizOutline="unset"
            typeTextStateSelectedSizHeight="unset"
            typeTextStateSelectedSizFontFamily="unset"
            typeTextStateSelectedSizFontWeight="unset"
            typeTextStateSelectedSizFontSize="unset"
            typeTextStateSelectedSizColor="unset"
            typeTextStateSelectedSizMinWidth="unset"
            typeTextStateSelectedSizAlignSelf="stretch"
            labelFontWeight="unset"
            labelLineHeight="20px"
            labelColor="#868991"
            labelDisplay="inline-block"
            labelWidth="unset"
            labelPaddingRight="unset"
            labelFlex="unset"
          />
          <TypeTextStateSelectedSiz
            typeTextStateSelectedSizPadding="8px 12px"
            typeTextStateSelectedSizBackgroundColor="#17191e"
            typeTextStateSelectedSizWidth="100%"
            typeTextStateSelectedSizBorder="none"
            typeTextStateSelectedSizOutline="none"
            typeTextStateSelectedSizHeight="36px"
            typeTextStateSelectedSizFontFamily="'Space Grotesk'"
            typeTextStateSelectedSizFontWeight="500"
            typeTextStateSelectedSizFontSize="14px"
            typeTextStateSelectedSizColor="#eee"
            typeTextStateSelectedSizMinWidth="132px"
            typeTextStateSelectedSizAlignSelf="stretch"
          />
          <TypeTextStateSelectedSiz
            label="Smart Tokens"
            typeTextStateSelectedSizPadding="8px 12px"
            typeTextStateSelectedSizBackgroundColor="unset"
            typeTextStateSelectedSizWidth="unset"
            typeTextStateSelectedSizBorder="unset"
            typeTextStateSelectedSizOutline="unset"
            typeTextStateSelectedSizHeight="unset"
            typeTextStateSelectedSizFontFamily="unset"
            typeTextStateSelectedSizFontWeight="unset"
            typeTextStateSelectedSizFontSize="unset"
            typeTextStateSelectedSizColor="unset"
            typeTextStateSelectedSizMinWidth="unset"
            typeTextStateSelectedSizAlignSelf="stretch"
            labelFontWeight="unset"
            labelLineHeight="20px"
            labelColor="#868991"
            labelDisplay="inline-block"
            labelWidth="unset"
            labelPaddingRight="unset"
            labelFlex="unset"
          />
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 pr-[42px] pl-3 gap-[2px]">
            <div className="relative tracking-[-0.01em] leading-[20px]">
              Technical Whitepaper
            </div>
            <img
              className="h-5 w-5 relative min-h-[20px]"
              alt=""
              src="/iconlink1.svg"
            />
          </div>
        </div>
      </div>
      <TypeDropdownStateExpanded
        label="Tutorials"
        iconArrow="/iconarrow-2@2x.png"
        typeDropdownStateExpandedPadding="12px 8px 12px 12px"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#868991"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <TypeDropdownStateExpanded
        label="Modules"
        iconArrow="/iconarrow-2@2x.png"
        typeDropdownStateExpandedPadding="12px 8px 12px 12px"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#868991"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <TypeDropdownStateExpanded
        label="Validator"
        iconArrow="/iconarrow-2@2x.png"
        typeDropdownStateExpandedPadding="12px 8px 12px 12px"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#868991"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <TypeDropdownStateExpanded
        label="API"
        iconArrow="/iconarrow-2@2x.png"
        typeDropdownStateExpandedPadding="12px 8px 12px 12px"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#868991"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <TypeDropdownStateExpanded
        label="Tools/Ecosystem"
        iconArrow="/iconarrow-2@2x.png"
        typeDropdownStateExpandedPadding="12px 8px 12px 12px"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#868991"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <TypeDropdownStateExpanded
        label="Help"
        iconArrow="/iconarrow-2@2x.png"
        typeDropdownStateExpandedPadding="12px 8px 12px 12px"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="20px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#868991"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
      <TypeDropdownStateExpanded
        label="Bug Bounty"
        iconArrow="/iconlink-11.svg"
        typeDropdownStateExpandedPadding="12px 8px 12px 12px"
        typeDropdownStateExpandedAlignSelf="stretch"
        typeDropdownStateExpandedGap="4px"
        typeDropdownStateExpandedBackgroundColor="unset"
        labelLineHeight="24px"
        labelColor="#868991"
        labelFontWeight="unset"
        labelFlex="unset"
        iconArrowWidth="24px"
        iconArrowHeight="24px"
        iconArrowMinHeight="24px"
      />
    </div>
  );
};

export default SidebarMenu1;
