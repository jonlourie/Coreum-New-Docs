import type { NextPage } from "next";
import NavBar3 from "../components/nav-bar3";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import SitemapLink from "../components/sitemap-link";
import Footer3 from "../components/footer3";

const RunCoreumNode2: NextPage = () => {
  return (
    <div className="w-full h-[990px] relative bg-shades-solid tracking-[normal] mq1050:h-auto mq1050:min-h-[990]">
      <NavBar3 leafNodeHeight="64px" propBorderTop="1.5px solid #101216" />
      <div className="absolute top-[64px] left-[1168px] box-border w-[1.5px] h-[653.5px] opacity-[0] z-[1] border-r-[1.5px] border-solid border-shades-dark-1" />
      <section className="absolute top-[64px] left-[0px] w-full h-[652px] flex flex-row items-start justify-start max-w-full mq1050:pl-5 mq1050:pr-5 mq1050:box-border mq450:h-auto">
        <div className="w-[276px] flex flex-col items-end justify-start py-6 px-4 box-border mq1050:hidden">
          <TypeDropdownStateExpanded
            label="Overview"
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
            iconArrow="/iconarrow-1.svg"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="#17191e"
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
                label="Fungible Tokens"
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
                label="Non-Fungible Tokens"
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
                label="Deterministic Gas"
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
                label="Fee Model"
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
                label="Cosmos Non-Fungible Tokens"
                typeTextStateSelectedSizPadding="8px 13px 8px 12px"
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
            </div>
          </div>
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
        <div className="self-stretch w-px relative box-border border-r-[1.5px] border-solid border-shades-dark-1 mq1050:hidden" />
        <SitemapLink />
      </section>
      <Footer3
        luminaScreen="/lumina-screen10@2x.png"
        propBorderTop="1.5px solid #101216"
      />
    </div>
  );
};

export default RunCoreumNode2;
