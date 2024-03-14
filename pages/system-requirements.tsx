import type { NextPage } from "next";
import NavBar3 from "../components/nav-bar3";
import SidebarMenu5 from "../components/sidebar-menu5";
import Content1 from "../components/content1";
import Footer3 from "../components/footer3";

const SystemRequirements: NextPage = () => {
  return (
    <div className="w-full relative bg-shades-solid flex flex-col items-start justify-start tracking-[normal]">
      <NavBar3 leafNodeHeight="unset" propBorderTop="1px solid #101216" />
      <main className="self-stretch flex flex-row items-start justify-center max-w-full [row-gap:20px] text-left text-sm text-primary-green font-regular-label lg:flex-wrap lg:pl-5 lg:pr-5 lg:box-border">
        <SidebarMenu5 />
        <div className="h-[1788px] w-px relative box-border border-r-[1px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-px lg:box-border lg:border-t-[1px] lg:border-solid lg:border-shades-dark-1" />
        <section className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[580px] max-w-full shrink-0 text-left text-xs text-shades-light font-overline-footer mq750:min-w-full">
          <Content1 />
          <div className="self-stretch flex flex-row items-start justify-start p-10 box-border gap-[40px] max-w-full mq750:flex-wrap mq450:gap-[40px_20px]">
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-start justify-start p-4 box-border min-w-[291px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                  PREVIOUS
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
                  IBC Channels
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-end justify-start p-4 box-border min-w-[291px] max-w-full text-right">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                  NEXT
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
                  IBC Smart Contract Call Tutorial
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-[1788px] w-px relative box-border border-r-[1px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-px lg:box-border lg:border-t-[1px] lg:border-solid lg:border-shades-dark-1" />
        <div className="w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border">
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
              Essentials
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-2 text-shades-light">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[15px] border-l-[1px] border-solid border-shades-dark-1">
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  Mainnet
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  Testnet
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  Devnet
                </div>
              </div>
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

export default SystemRequirements;
