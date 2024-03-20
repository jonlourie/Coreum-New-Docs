import type { NextPage } from "next";

const Footer: NextPage = () => {
  return (
    <footer className="self-stretch flex flex-row items-end justify-center py-[2.5rem] px-[1.25rem] box-border relative gap-[1rem] min-h-[17.125rem] max-w-full text-left text-[0.625rem] text-shades-carbon font-overline-footer lg:flex-wrap">
      <img
        className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-contain"
        alt=""
        src="/lumina-screen@2x.png"
      />
      <div className="w-[44.75rem] flex flex-col items-start justify-start gap-[5.188rem] min-w-[44.75rem] max-w-full z-[1] lg:flex-1 mq1050:min-w-full mq450:gap-[2.563rem_5.188rem]">
        <div className="w-[16.5rem] flex flex-col items-start justify-start gap-[1.5rem]">
          <div className="w-[7.438rem] flex flex-row items-end justify-start gap-[0.356rem]">
            <img
              className="h-[1.5rem] w-[1.281rem] relative"
              alt=""
              src="/group-6494-1.svg"
            />
            <div className="flex-1 flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.175rem]">
              <img
                className="self-stretch h-[1.125rem] relative max-w-full overflow-hidden shrink-0"
                alt=""
                src="/coreum-1.svg"
              />
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between gap-[1.25rem]">
            <img
              className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
              alt=""
              src="/x-1.svg"
            />
            <img
              className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
              alt=""
              src="/ig-1.svg"
            />
            <img
              className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
              alt=""
              src="/telegram-1.svg"
            />
            <img
              className="h-[1.5rem] w-[1.5rem] relative overflow-hidden shrink-0 min-h-[1.5rem]"
              alt=""
              src="/discord-1.svg"
            />
            <img
              className="h-[1.5rem] w-[1.5rem] relative object-cover min-h-[1.5rem]"
              alt=""
              src="/youtube-1@2x.png"
            />
            <img
              className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
              loading="lazy"
              alt=""
              src="/medium.svg"
            />
          </div>
        </div>
        <div className="relative leading-[0.938rem] inline-block max-w-full">
          © 2021 - 2024 Coreum Development Foundation Limited. All rights
          reserved
        </div>
      </div>
      <div className="w-[30.25rem] flex flex-col items-start justify-start min-w-[30.25rem] max-w-full z-[1] text-[0.75rem] lg:flex-1 mq750:gap-[5rem_10rem] mq750:min-w-full">
        <div className="self-stretch flex flex-col items-start justify-start max-w-full mq750:gap-[1.5rem_3rem]">
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.25rem] max-w-full">
              <div className="self-stretch relative tracking-[-0.01em] leading-[1.125rem] uppercase font-medium">
                Products
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] text-[1rem] text-primary-dim font-regular-label">
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.125rem]">
                  <div className="relative tracking-[-0.01em] leading-[1.5rem]">
                    Explorer
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.125rem]">
                  <div className="relative tracking-[-0.01em] leading-[1.5rem]">
                    ISO Simulator
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.125rem]">
                  <div className="relative tracking-[-0.01em] leading-[1.5rem]">
                    Developer Playground
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[0.125rem]">
                  <div className="relative tracking-[-0.01em] leading-[1.5rem]">
                    Whitepaper
                  </div>
                  <img
                    className="h-[1.5rem] w-[1.5rem] relative min-h-[1.5rem]"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        className="h-[3.5rem] w-[3.5rem] absolute !m-[0] top-[-1rem] right-[1.5rem] rounded-21xl z-[2]"
        loading="lazy"
        alt=""
        src="/frame-42540.svg"
      />
    </footer>
  );
};

export default Footer;
