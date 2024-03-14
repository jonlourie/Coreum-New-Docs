import type { NextPage } from "next";
import TypeDropdownStateExpanded from "./type-dropdown-state-expanded";

const Header: NextPage = () => {
  return (
    <div className="w-[1440px] flex flex-row items-center justify-between py-3 px-6 box-border text-left text-sm text-shades-carbon font-overline-footer">
      <div className="flex flex-row items-center justify-start">
        <div className="w-[133.3px] relative h-5">
          <div className="absolute h-[91.5%] w-full top-[4%] right-[0%] bottom-[4.5%] left-[0%]">
            <img
              className="absolute h-[66.67%] w-[27.16%] top-[21.86%] right-[0%] bottom-[11.48%] left-[72.84%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/docs.svg"
            />
            <img
              className="absolute h-[74.86%] w-[53.19%] top-[13.66%] right-[31.81%] bottom-[11.48%] left-[15%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/coreum.svg"
            />
            <img
              className="absolute h-full w-[11.7%] top-[0%] right-[88.3%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full"
              alt=""
              src="/group-6494.svg"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center justify-end gap-[12px]">
        <TypeDropdownStateExpanded
          label="Join Coreum"
          iconArrow="/iconarrow.svg"
          typeDropdownStateExpandedPadding="8px 8px 8px 12px"
          typeDropdownStateExpandedAlignSelf="unset"
          typeDropdownStateExpandedGap="unset"
          typeDropdownStateExpandedBackgroundColor="unset"
          labelLineHeight="20px"
          labelColor="#868991"
          labelFontWeight="unset"
          labelFlex="unset"
          iconArrowWidth="20px"
          iconArrowHeight="20px"
          iconArrowMinHeight="unset"
        />
        <div className="w-px relative box-border h-[25px] border-r-[1px] border-solid border-shades-dark-1" />
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/githubmark-1.svg"
        />
        <img className="w-8 relative h-8" alt="" src="/x.svg" />
        <img className="w-8 relative h-8" alt="" src="/ig.svg" />
        <img className="w-8 relative h-8" alt="" src="/telegram.svg" />
        <img
          className="w-8 relative h-8 overflow-hidden shrink-0"
          alt=""
          src="/discord.svg"
        />
        <img
          className="w-8 relative h-8 object-cover"
          alt=""
          src="/youtube@2x.png"
        />
        <div className="w-px relative box-border h-[25px] border-r-[1px] border-solid border-shades-dark-1" />
        <div className="w-40 rounded-lg bg-shades-dark-1 overflow-hidden shrink-0 flex flex-row items-center justify-start py-2.5 px-4 box-border gap-[10px]">
          <img
            className="w-5 relative h-5 overflow-hidden shrink-0"
            alt=""
            src="/iconsearch.svg"
          />
          <div className="relative tracking-[-0.01em] leading-[20px]">
            Search
          </div>
        </div>
        <div className="w-px relative box-border h-[25px] border-r-[1px] border-solid border-shades-dark-1" />
        <div className="rounded-lg bg-shades-dark-1 overflow-hidden flex flex-row items-start justify-start p-1">
          <div className="rounded-3xl flex flex-row items-start justify-start p-2">
            <img className="w-4 relative h-4" alt="" src="/iconsun.svg" />
          </div>
          <div className="rounded-md [background:linear-gradient(180deg,_#25d695,_#046c45)] flex flex-row items-start justify-start p-2">
            <img className="w-4 relative h-4" alt="" src="/iconmoon.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
