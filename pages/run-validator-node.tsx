import type { NextPage } from "next";
import NavBar3 from "../components/nav-bar3";
import SidebarMenu4 from "../components/sidebar-menu4";
import CoreumLogoFrameShape from "../components/coreum-logo-frame-shape";
import Footer3 from "../components/footer3";

const RunValidatorNode: NextPage = () => {
  return (
    <div className="w-full h-[1670px] relative bg-shades-solid tracking-[normal] mq1050:h-auto mq1050:min-h-[1670]">
      <NavBar3 leafNodeHeight="unset" propBorderTop="1px solid #101216" />
      <div className="absolute top-[64px] left-[1168px] box-border w-[1.5px] h-[1333.5px] opacity-[0] z-[2] border-r-[1.5px] border-solid border-shades-dark-1" />
      <main className="absolute top-[64px] left-[0px] flex flex-row items-start justify-start max-w-full w-full mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
        <SidebarMenu4 />
        <div className="h-[1332px] w-px relative box-border border-r-[1px] border-solid border-shades-dark-1 mq1050:hidden" />
        <section className="flex-1 flex flex-col items-start justify-start gap-[80px] max-w-[calc(100%_-_277px)] shrink-0 text-left text-xs text-shades-light font-overline-footer lg:gap-[40px_80px] mq750:gap-[20px_80px] mq1050:max-w-full">
          <CoreumLogoFrameShape />
          <div className="w-[896px] flex flex-row flex-wrap items-start justify-start p-10 box-border gap-[40px] max-w-full z-[1] mq450:gap-[20px]">
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
      </main>
      <Footer3
        luminaScreen="/lumina-screen5@2x.png"
        propBorderTop="1px solid #101216"
      />
    </div>
  );
};

export default RunValidatorNode;
