import type { NextPage } from "next";
import Feature from "./feature";

const Content1: NextPage = () => {
  return (
    <div className="w-[896px] overflow-x-auto flex flex-col items-start justify-start pt-6 px-10 pb-20 box-border gap-[80px] max-w-full text-left text-5xl text-primary-off-white font-regular-label lg:pt-5 lg:pb-[52px] lg:box-border mq1050:gap-[40px_80px] mq1050:pb-[34px] mq1050:box-border mq450:gap-[20px_80px] mq450:pb-[22px] mq450:box-border">
      <div className="w-[816px] flex flex-col items-start justify-start gap-[40px] text-13xl">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[40px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
          System Requirements
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start text-5xl">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
              Mainnet
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-base text-primary-yellow font-overline-footer">
              <div className="self-stretch rounded-lg bg-orange flex flex-col items-start justify-start py-4 px-3.5 text-xs border-l-[4px] border-solid border-primary-yellow">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                    Warning
                  </div>
                  <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label">
                    Use only SSD or NVMe hard drives, directly attached to the
                    motherboard.
                  </div>
                </div>
              </div>
              <div className="self-stretch relative tracking-[-0.01em] leading-[28px] text-shades-light">
                <p className="m-0">
                  Recommended requirement - to use a dedicated bare-metal server
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  If you use Cloud Computing Instance, ensure that your SSD disk
                  is directly attached to the motherboard. Otherwise, you might
                  experience IO delay and risk to be jailed of not signing
                  blocks.
                </p>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-shades-carbon font-regular-label">
                <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px]">
                  <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      Node Type
                    </div>
                  </div>
                  <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      Cores
                    </div>
                  </div>
                  <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      RAM
                    </div>
                  </div>
                  <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      Storage
                    </div>
                  </div>
                  <div className="w-60 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      Internet Connection
                    </div>
                  </div>
                </div>
                <Feature
                  copy="Validator"
                  copy1="8"
                  copy2="64GB"
                  copy3="500GB - 2TB"
                />
                <Feature
                  copy="Full"
                  copy1="4"
                  copy2="32GB"
                  copy3="2TB"
                  propWidth="144px"
                  propFlex="1"
                />
                <Feature
                  copy="Default"
                  copy1="4"
                  copy2="32GB"
                  copy3="1TB"
                  propWidth="144px"
                  propFlex="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[816px] flex flex-col items-start justify-start gap-[12px]">
        <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
          Testnet
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start text-base text-shades-carbon">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px]">
              <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Node Type
                </div>
              </div>
              <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Cores
                </div>
              </div>
              <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  RAM
                </div>
              </div>
              <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Storage
                </div>
              </div>
              <div className="w-60 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Internet Connection
                </div>
              </div>
            </div>
            <Feature
              copy="Validator"
              copy1="2"
              copy2="16GB"
              copy3="500GB"
              propWidth="144px"
              propFlex="1"
            />
            <Feature
              copy="Full"
              copy1="2"
              copy2="16GB"
              copy3="500GB"
              propWidth="144px"
              propFlex="1"
            />
            <Feature
              copy="Default"
              copy1="2"
              copy2="16GB"
              copy3="500GB"
              propWidth="144px"
              propFlex="1"
            />
          </div>
        </div>
      </div>
      <div className="w-[816px] flex flex-col items-start justify-start">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
              Devnet
            </h3>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-base text-shades-light font-overline-footer">
              <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                <p className="m-0">
                  To ease maintenance efforts, we decided to support only amd64
                  architecture.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Also, we recommend you using testnet, since it is more stable.
                </p>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-shades-carbon font-regular-label">
                <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px]">
                  <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      Node Type
                    </div>
                  </div>
                  <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      Cores
                    </div>
                  </div>
                  <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      RAM
                    </div>
                  </div>
                  <div className="w-36 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      Storage
                    </div>
                  </div>
                  <div className="w-60 shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                      Internet Connection
                    </div>
                  </div>
                </div>
                <Feature
                  copy="Validator"
                  copy1="2"
                  copy2="16GB"
                  copy3="100GB"
                  propWidth="144px"
                  propFlex="1"
                />
                <Feature
                  copy="Full"
                  copy1="2"
                  copy2="16GB"
                  copy3="100GB"
                  propWidth="144px"
                  propFlex="1"
                />
                <Feature
                  copy="Default"
                  copy1="2"
                  copy2="16GB"
                  copy3="100GB"
                  propWidth="144px"
                  propFlex="1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
