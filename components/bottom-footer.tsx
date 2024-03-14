import type { NextPage } from "next";

export type BottomFooterType = {
  imageDimensionsCode?: string;
};

const BottomFooter: NextPage<BottomFooterType> = ({ imageDimensionsCode }) => {
  return (
    <div className="w-[1440px] overflow-hidden flex flex-row items-start justify-start pt-16 px-28 pb-10 box-border relative gap-[16px] text-left text-3xs text-shades-carbon font-overline-footer">
      <img
        className="w-full absolute !m-[0] h-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-contain z-[0]"
        alt=""
        src={imageDimensionsCode}
      />
      <div className="self-stretch flex-1 flex flex-col items-start justify-between z-[1]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="w-[119px] relative h-6">
            <img
              className="absolute top-[3.2px] left-[26.2px] w-[92.8px] h-[18px]"
              alt=""
              src="/coreum-1.svg"
            />
            <img
              className="absolute top-[0px] left-[0px] w-[20.5px] h-6"
              alt=""
              src="/group-6494-1.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start gap-[24px]">
            <img className="w-6 relative h-6" alt="" src="/x-1.svg" />
            <img className="w-6 relative h-6" alt="" src="/ig-1.svg" />
            <img className="w-6 relative h-6" alt="" src="/telegram-1.svg" />
            <img
              className="w-6 relative h-6 overflow-hidden shrink-0"
              alt=""
              src="/discord-1.svg"
            />
            <img
              className="w-6 relative h-6 object-cover"
              alt=""
              src="/youtube-1@2x.png"
            />
            <img className="w-6 relative h-6" alt="" src="/medium.svg" />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start">
          <div className="relative leading-[15px]">
            © 2021 - 2024 Coreum Development Foundation Limited. All rights
            reserved
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start justify-start z-[2] text-xs">
        <div className="w-[484px] flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-row items-start justify-start">
            <div className="flex-1 flex flex-col items-start justify-start gap-[20px]">
              <div className="self-stretch relative tracking-[-0.01em] leading-[18px] uppercase font-medium">
                Products
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base text-primary-dim font-regular-label">
                <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative tracking-[-0.01em] leading-[24px]">
                    Explorer
                  </div>
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative tracking-[-0.01em] leading-[24px]">
                    ISO Simulator
                  </div>
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative tracking-[-0.01em] leading-[24px]">
                    Developer Playground
                  </div>
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
                <div className="self-stretch flex flex-row items-center justify-start gap-[2px]">
                  <div className="relative tracking-[-0.01em] leading-[24px]">
                    Whitepaper
                  </div>
                  <img
                    className="w-6 relative h-6"
                    alt=""
                    src="/iconlink-1.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomFooter;
