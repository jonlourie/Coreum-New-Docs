import type { NextPage } from "next";
import NavBar3 from "../components/nav-bar3";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import Content2 from "../components/content2";
import Footer3 from "../components/footer3";

const SmartContracts1: NextPage = () => {
  return (
    <div className="w-full relative bg-shades-solid flex flex-col items-start justify-start tracking-[normal]">
      <NavBar3 leafNodeHeight="unset" propBorderTop="1px solid #101216" />
      <main className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] text-left text-sm text-primary-green font-regular-label lg:flex-wrap lg:pl-5 lg:pr-5 lg:box-border">
        <div className="w-[276px] flex flex-col items-end justify-start py-6 px-4 box-border mq750:pt-5 mq750:pb-5 mq750:box-border">
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
                typeTextStateSelectedSizBackgroundColor="#17191e"
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
                labelFontWeight="500"
                labelLineHeight="20px"
                labelColor="#eee"
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
        <div className="h-[2384px] w-px relative box-border border-r-[1px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-px lg:box-border lg:border-t-[1px] lg:border-solid lg:border-shades-dark-1" />
        <section className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[580px] max-w-full shrink-0 text-left text-xs text-shades-light font-overline-footer mq750:min-w-full">
          <Content2 />
          <div className="self-stretch flex flex-row items-start justify-start p-10 box-border gap-[40px] max-w-full mq750:flex-wrap mq450:gap-[40px_20px]">
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-start justify-start p-4 box-border min-w-[291px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                  PREVIOUS
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
                  Coreum Fungible Token
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-end justify-start p-4 box-border min-w-[291px] max-w-full text-right">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                  NEXT
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
                  Coreum Deterministic Gas
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-[2384px] w-px relative box-border border-r-[1px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-px lg:box-border lg:border-t-[1px] lg:border-solid lg:border-shades-dark-1" />
        <div className="w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border">
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
              Non-Fungible Tokens
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-2 text-shades-light">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[15px] border-l-[1px] border-solid border-shades-dark-1">
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  Interaction with NFT Module, Introducing WNFT Module
                </div>
              </div>
              <input
                className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-9 rounded-lg flex flex-row items-center justify-start py-2 px-0 box-border font-regular-label text-sm text-shades-light min-w-[130px]"
                placeholder="Token Features"
                type="text"
              />
            </div>
          </div>
        </div>
      </main>
      <Footer3
        luminaScreen="/lumina-screen6@2x.png"
        propBorderTop="1px solid #101216"
      />
    </div>
  );
};

export default SmartContracts1;
