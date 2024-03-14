import type { NextPage } from "next";
import NavBar2 from "../components/nav-bar2";
import SidebarMenu1 from "../components/sidebar-menu1";
import Content from "../components/content";
import Footer2 from "../components/footer2";

const SmartContracts: NextPage = () => {
  return (
    <div className="w-full relative bg-shades-solid flex flex-col items-start justify-start tracking-[normal]">
      <NavBar2 />
      <main className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] text-left text-sm text-primary-green font-regular-label lg:flex-wrap lg:pl-5 lg:pr-5 lg:box-border">
        <SidebarMenu1 />
        <div className="h-[2384px] w-px relative box-border border-r-[1px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-px lg:box-border lg:border-t-[1px] lg:border-solid lg:border-shades-dark-1" />
        <section className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[580px] max-w-full shrink-0 text-left text-xs text-shades-light font-overline-footer mq750:min-w-full">
          <Content />
          <div className="self-stretch flex flex-row items-start justify-start p-10 box-border gap-[40px] max-w-full mq750:flex-wrap mq450:gap-[40px_20px]">
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-start justify-start p-4 box-border min-w-[291px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                  PREVIOUS
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
                  Introduction
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-end justify-start p-4 box-border min-w-[291px] max-w-full text-right">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                  NEXT
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
                  Smart Tokens
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-[2384px] w-px relative box-border border-r-[1px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-px lg:box-border lg:border-t-[1px] lg:border-solid lg:border-shades-dark-1" />
        <div className="w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border">
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
              Smart Contracts
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-2 text-shades-light">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[15px] border-l-[1px] border-solid border-shades-dark-1">
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  CosmWasm
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[15px] border-l-[1px] border-solid border-shades-dark-1">
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  Architecture
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[15px] border-l-[1px] border-solid border-shades-dark-1">
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  Contract Flow
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[15px] border-l-[1px] border-solid border-shades-dark-1">
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  CosmWasm Module
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[15px] border-l-[1px] border-solid border-shades-dark-1">
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  Rust Language
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer2 />
    </div>
  );
};

export default SmartContracts;
