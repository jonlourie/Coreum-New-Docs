import type { NextPage } from "next";

export type Footer1Type = {
  luminaScreen?: string;
};

const Footer1: NextPage<Footer1Type> = ({ luminaScreen }) => {
  return (
    <footer className="self-stretch overflow-hidden flex flex-row items-end justify-center py-10 px-5 box-border relative gap-[16px] min-h-[274px] max-w-full text-left text-3xs text-shades-carbon font-overline-footer lg:flex-wrap">
      <div className="h-px w-[1441px] relative box-border hidden max-w-full z-[0] border-t-[1px] border-solid border-shades-dark-1" />
      <img
        className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src={luminaScreen}
      />
      <div className="w-[716px] flex flex-col items-start justify-start gap-[83px] min-w-[716px] max-w-full z-[1] lg:flex-1 mq1050:min-w-full mq450:gap-[41px_83px]">
        <div className="w-[264px] flex flex-col items-start justify-start gap-[24px]">
          <div className="w-[119px] flex flex-row items-end justify-start gap-[5.7000000000000455px]">
            <img
              className="h-6 w-[20.5px] relative"
              alt=""
              src="/group-6494-1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[2.7999999999992724px]">
              <img
                className="self-stretch h-[18px] relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/coreum-1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/x-1.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/ig-1.svg"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/telegram-1.svg"
            />
            <img
              className="h-6 w-6 relative overflow-hidden shrink-0 min-h-[24px]"
              loading="lazy"
              alt=""
              src="/discord-1.svg"
            />
            <img
              className="h-6 w-6 relative object-cover min-h-[24px]"
              loading="lazy"
              alt=""
              src="/youtube-1@2x.png"
            />
            <img
              className="h-6 w-6 relative min-h-[24px]"
              loading="lazy"
              alt=""
              src="/medium.svg"
            />
          </div>
        </div>
        <div className="relative leading-[15px] inline-block max-w-full">
          © 2021 - 2024 Coreum Development Foundation Limited. All rights
          reserved
        </div>
      </div>
      <div className="w-[484px] flex flex-col items-start justify-start min-w-[484px] max-w-full z-[1] text-xs lg:flex-1 mq750:gap-[80px_160px] mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full mq750:gap-[24px_48px]">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full">
              <div className="self-stretch relative tracking-[-0.01em] leading-[18px] uppercase font-medium">
                Products
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base text-primary-dim font-regular-label">
                <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative tracking-[-0.01em] leading-[24px]">
                    Explorer
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative tracking-[-0.01em] leading-[24px]">
                    ISO Simulator
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative tracking-[-0.01em] leading-[24px]">
                    Developer Playground
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative tracking-[-0.01em] leading-[24px]">
                    Whitepaper
                  </div>
                  <img
                    className="h-6 w-6 relative min-h-[24px]"
                    loading="lazy"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
