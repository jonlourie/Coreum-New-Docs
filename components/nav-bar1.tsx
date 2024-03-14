import type { NextPage } from "next";
import TypeDropdownStateExpanded from "./type-dropdown-state-expanded";

const NavBar1: NextPage = () => {
  return (
    <header className="self-stretch flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border gap-[12px] max-w-full">
      <div className="self-stretch flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
          <div className="w-[133.3px] flex flex-col items-start justify-start pt-[10.800000000000182px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-row items-end justify-start gap-[5.2999999999999545px]">
              <img
                className="h-[18.3px] w-[15.6px] relative min-h-[18px]"
                alt=""
                src="/group-6494.svg"
              />
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[2.100000000000364px]">
                <img
                  className="self-stretch h-[13.7px] relative max-w-full overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/coreum.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[2.0000000000009095px]">
                <img
                  className="w-[36.2px] h-[12.2px] relative"
                  alt=""
                  src="/docs.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[679px] flex flex-row items-start justify-start gap-[12px] max-w-full mq750:flex-wrap">
            <div className="flex-1 flex flex-row items-start justify-center gap-[12px] max-w-full mq750:flex-wrap mq750:min-w-full">
              <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
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
                  iconArrowMinHeight="20px"
                />
              </div>
              <div className="h-8 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                <div className="w-px h-6 relative box-border border-r-[1px] border-solid border-shades-dark-1" />
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-8 h-8 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/githubmark-1.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-8 h-8 relative"
                  loading="lazy"
                  alt=""
                  src="/x.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-8 h-8 relative"
                  loading="lazy"
                  alt=""
                  src="/ig.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-8 h-8 relative"
                  loading="lazy"
                  alt=""
                  src="/telegram.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-8 h-8 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/discord.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <img
                  className="w-8 h-8 relative object-cover"
                  loading="lazy"
                  alt=""
                  src="/youtube@2x.png"
                />
              </div>
              <div className="h-8 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                <div className="w-px h-6 relative box-border border-r-[1px] border-solid border-shades-dark-1" />
              </div>
              <div className="flex-1 rounded-lg bg-shades-dark-1 overflow-hidden flex flex-row items-start justify-start py-2.5 px-4 box-border gap-[10px] min-w-[64px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  alt=""
                  src="/iconsearch.svg"
                />
                <input
                  className="w-11 [border:none] [outline:none] font-overline-footer text-sm bg-[transparent] h-5 relative tracking-[-0.01em] leading-[20px] text-shades-carbon text-left inline-block p-0"
                  placeholder="Search"
                  type="text"
                />
              </div>
              <div className="h-8 flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
                <div className="w-px h-6 relative box-border border-r-[1px] border-solid border-shades-dark-1" />
              </div>
            </div>
            <div className="rounded-lg bg-shades-dark-1 overflow-hidden flex flex-row items-start justify-start p-1">
              <div className="h-8 w-8 rounded-3xl flex flex-row items-start justify-start p-2 box-border">
                <img className="h-4 w-4 relative" alt="" src="/iconsun.svg" />
              </div>
              <div className="rounded-md [background:linear-gradient(180deg,_#25d695,_#046c45)] flex flex-row items-start justify-start p-2">
                <img className="h-4 w-4 relative" alt="" src="/iconmoon.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-shades-dark-1" />
    </header>
  );
};

export default NavBar1;
