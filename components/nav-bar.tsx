import type { NextPage } from "next";
import TypeDropdownStateExpanded from "./type-dropdown-state-expanded";

const NavBar: NextPage = () => {
  return (
    <header className="self-stretch flex flex-row items-start justify-between py-[0.75rem] px-[1.5rem] box-border max-w-full gap-[1.25rem]">
      <div className="w-[8.331rem] flex flex-col items-start justify-start pt-[0.675rem] px-[0rem] pb-[0rem] box-border">
        <div className="self-stretch flex flex-row items-end justify-start gap-[0.331rem]">
          <img
            className="h-[1.144rem] w-[0.975rem] relative min-h-[1.125rem]"
            alt=""
            src="/group-6494.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.131rem]">
            <img
              className="self-stretch h-[0.856rem] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/coreum.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.125rem]">
            <img
              className="w-[2.263rem] h-[0.763rem] relative"
              loading="lazy"
              alt=""
              src="/docs.svg"
            />
          </div>
        </div>
      </div>
      <div className="w-[42.438rem] flex flex-row items-start justify-start gap-[0.75rem] max-w-full">
        <div className="flex-1 flex flex-row items-start justify-start gap-[0.75rem] max-w-full">
          <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
            <TypeDropdownStateExpanded
              label="Join Coreum"
              iconArrow="/iconarrow.svg"
              typeDropdownStateExpandedPadding="0.5rem 0.5rem 0.5rem 0.75rem"
              typeDropdownStateExpandedAlignSelf="unset"
              typeDropdownStateExpandedGap="unset"
              typeDropdownStateExpandedBackgroundColor="unset"
              labelLineHeight="1.25rem"
              labelColor="#868991"
              labelFontWeight="unset"
              labelFlex="unset"
              iconArrowWidth="1.25rem"
              iconArrowHeight="1.25rem"
              iconArrowMinHeight="1.25rem"
            />
          </div>
          <div className="h-[2rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
            <div className="w-[0.063rem] h-[1.563rem] relative box-border border-r-[1px] border-solid border-shades-dark-1" />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[2rem] h-[2rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/githubmark-1.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[2rem] h-[2rem] relative"
              loading="lazy"
              alt=""
              src="/x.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[2rem] h-[2rem] relative"
              loading="lazy"
              alt=""
              src="/ig.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[2rem] h-[2rem] relative"
              loading="lazy"
              alt=""
              src="/telegram.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[2rem] h-[2rem] relative overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/discord.svg"
            />
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <img
              className="w-[2rem] h-[2rem] relative object-cover"
              loading="lazy"
              alt=""
              src="/youtube@2x.png"
            />
          </div>
          <div className="h-[2rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
            <div className="w-[0.063rem] h-[1.563rem] relative box-border border-r-[1px] border-solid border-shades-dark-1" />
          </div>
          <div className="flex-1 rounded-lg bg-shades-dark-1 overflow-hidden flex flex-row items-start justify-start py-[0.625rem] px-[1rem] gap-[0.625rem]">
            <img
              className="h-[1.25rem] w-[1.25rem] relative overflow-hidden shrink-0 min-h-[1.25rem]"
              alt=""
              src="/iconsearch.svg"
            />
            <input
              className="w-[2.75rem] [border:none] [outline:none] font-overline-footer text-[0.875rem] bg-[transparent] h-[1.25rem] relative tracking-[-0.01em] leading-[1.25rem] text-shades-carbon text-left inline-block p-0"
              placeholder="Search"
              type="text"
            />
          </div>
          <div className="h-[2rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
            <div className="w-[0.063rem] h-[1.563rem] relative box-border border-r-[1px] border-solid border-shades-dark-1" />
          </div>
        </div>
        <div className="rounded-lg bg-shades-dark-1 overflow-hidden flex flex-row items-start justify-start p-[0.25rem]">
          <div className="h-[2rem] w-[2rem] rounded-3xl flex flex-row items-start justify-start p-[0.5rem] box-border">
            <img
              className="h-[1rem] w-[1rem] relative"
              alt=""
              src="/iconsun.svg"
            />
          </div>
          <div className="rounded-md [background:linear-gradient(180deg,_#25d695,_#046c45)] flex flex-row items-start justify-start p-[0.5rem]">
            <img
              className="h-[1rem] w-[1rem] relative"
              alt=""
              src="/iconmoon.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
