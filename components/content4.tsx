import type { NextPage } from "next";
import Feature1 from "./feature1";

const Content4: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start pt-6 px-10 pb-20 box-border gap-[80px] max-w-full text-left text-lg text-primary-off-white font-regular-label lg:pt-5 lg:pb-[34px] lg:box-border mq750:pb-5 mq750:box-border mq1050:gap-[40px_80px] mq1050:pb-[22px] mq1050:box-border mq450:gap-[20px_80px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-13xl mq450:gap-[20px_40px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[40px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
          coreum/asset/ft
        </h1>
        <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-lg mq450:gap-[20px_40px]">
          <div className="self-stretch flex flex-col items-start justify-start text-5xl">
            <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
              authz.proto
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                  BurnAuthorization
                </div>
                <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                  BurnAuthorization allows the grantee to burn up to burn_limit
                  coin from the granter's account.
                </div>
              </div>
            </div>
            <div className="self-stretch h-[126px] flex flex-col items-start justify-start gap-[12px] text-base text-shades-carbon">
              <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px]">
                <div className="w-[135px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                    Field
                  </div>
                </div>
                <div className="w-[220px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                    Type
                  </div>
                </div>
                <div className="w-[229px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                    Label
                  </div>
                </div>
                <div className="w-[230px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                    Description
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] text-primary-dim font-overline-footer">
                <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                  <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                    <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                      burn_limit
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                  <div className="relative tracking-[-0.01em] leading-[28px]">
                    cosmos.base.v1beta1.Coin
                  </div>
                </div>
                <div className="w-[229px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                  <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                    repeated
                  </div>
                </div>
                <div className="self-stretch w-[230px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                  <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                    --
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                  MintAuthorization
                </div>
                <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                  MintAuthorization allows the grantee to mint up to mint_limit
                  coin from the granter's account.
                </div>
              </div>
            </div>
            <div className="self-stretch h-[126px] flex flex-col items-start justify-start gap-[12px] text-base text-shades-carbon">
              <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px]">
                <div className="w-[135px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                    Field
                  </div>
                </div>
                <div className="w-[220px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                    Type
                  </div>
                </div>
                <div className="w-[229px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                    Label
                  </div>
                </div>
                <div className="w-[230px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                  <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                    Description
                  </div>
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] text-primary-dim font-overline-footer">
                <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                  <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                    <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                      mint_limit
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                  <div className="relative tracking-[-0.01em] leading-[28px]">
                    cosmos.base.v1beta1.Coin
                  </div>
                </div>
                <div className="w-[229px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                  <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                    repeated
                  </div>
                </div>
                <div className="self-stretch w-[230px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                  <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                    --
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq450:gap-[20px_40px]">
        <div className="self-stretch flex flex-col items-start justify-start text-5xl">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
            event.proto
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                EventFrozenAmountChanged
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base text-primary-dim font-overline-footer">
            <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
              <div className="w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Field
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Type
                </div>
              </div>
              <div className="w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Label
                </div>
              </div>
              <div className="w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Description
                </div>
              </div>
            </div>
            <Feature1 valuePlaceholder="burn_limit" label="burn_limit" />
            <div className="self-stretch h-[60px] rounded-xl bg-shades-pitch overflow-x-auto shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
              <div className="w-[182px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    denom
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch h-[60px] rounded-xl bg-shades-pitch overflow-x-auto shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
              <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    previous_amount
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch h-[60px] rounded-xl bg-shades-pitch overflow-x-auto shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
              <div className="flex flex-row items-center justify-start py-0 pr-[21px] pl-3 font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    current_amount
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                EventIssued
              </div>
              <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                EventIssued is emitted on MsgIssue.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base text-primary-dim font-overline-footer">
            <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
              <div className="w-[229px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Field
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Type
                </div>
              </div>
              <div className="w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Label
                </div>
              </div>
              <div className="w-[183px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Description
                </div>
              </div>
            </div>
            <div className="self-stretch h-[60px] rounded-xl bg-shades-pitch overflow-x-auto shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
              <div className="w-[229px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    denom
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[183px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch h-[60px] rounded-xl bg-shades-pitch overflow-x-auto shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
              <div className="w-[229px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    issuer
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[183px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch h-[60px] rounded-xl bg-shades-pitch overflow-x-auto shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
              <div className="w-[229px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    symbol
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[183px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch h-[60px] rounded-xl bg-shades-pitch overflow-x-auto shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
              <div className="w-[229px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                <button className="cursor-pointer [border:none] py-0 px-2 bg-shades-dark-2 rounded flex flex-row items-center justify-start hover:bg-darkslategray-100">
                  <div className="relative text-base tracking-[-0.01em] leading-[28px] font-light font-fira-code text-primary-dim text-left">
                    submit
                  </div>
                </button>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[183px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch h-[60px] rounded-xl bg-shades-pitch overflow-x-auto shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
              <div className="w-[229px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    precision
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-[11px] box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  uint32
                </div>
              </div>
              <div className="self-stretch w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[183px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <Feature1
              valuePlaceholder="initial_amount"
              label="initial_amount"
              propWidth="65%"
              propWidth1="133px"
              propWidth2="182px"
              propWidth3="183px"
            />
            <Feature1
              valuePlaceholder="description"
              label="description"
              propWidth="52%"
              propWidth1="104px"
              propWidth2="182px"
              propWidth3="183px"
            />
            <div className="self-stretch h-[60px] rounded-xl bg-shades-pitch overflow-x-auto shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
              <div className="w-[229px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    features
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  Feature
                </div>
              </div>
              <div className="w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                  repeated
                </div>
              </div>
              <div className="self-stretch w-[183px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch h-[60px] rounded-xl bg-shades-pitch overflow-x-auto shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
              <div className="w-[229px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    burn_rate
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[183px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch h-[60px] rounded-xl bg-shades-pitch overflow-x-auto shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
              <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    send_commission_rate
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[183px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch h-[60px] rounded-xl bg-shades-pitch overflow-x-auto shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
              <div className="w-[229px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    uri
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[183px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch h-[60px] rounded-xl bg-shades-pitch overflow-x-auto shrink-0 flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
              <div className="w-[229px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    uri_hash
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[183px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[388px] flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                EventWhitelistedAmountChanged
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12px] text-base text-primary-dim font-overline-footer">
            <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
              <div className="w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Field
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Type
                </div>
              </div>
              <div className="w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Label
                </div>
              </div>
              <div className="w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Description
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px]">
              <div className="w-[182px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    account
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px]">
              <div className="w-[182px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    denom
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px]">
              <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    previous_amount
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px]">
              <div className="flex flex-row items-center justify-start py-0 pr-[21px] pl-3 font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    current_amount
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px_40px]">
        <div className="self-stretch flex flex-col items-start justify-start text-5xl">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
            genesis.proto
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
          <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                Balance
              </div>
              <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                Balance defines an account address and balance pair used module
                genesis genesis state.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-base text-primary-dim font-overline-footer">
            <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
              <div className="w-[107px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Field
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Type
                </div>
              </div>
              <div className="w-[91px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Label
                </div>
              </div>
              <div className="w-[394px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_418px)]">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px] inline-block max-w-full">
                  Description
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
              <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    address
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="w-[394px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_418px)]">
                <div className="flex-1 relative tracking-[-0.01em] leading-[28px] inline-block max-w-full">
                  address is the address of the balance holder
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 box-border [row-gap:20px] max-w-full gap-[0px] mq1050:flex-wrap">
              <div className="flex flex-row items-center justify-start py-0 pr-[31px] pl-3 font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    coins
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  cosmos.base.v1beta1.Coin
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-0 px-3">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  repeated
                </div>
              </div>
              <div className="w-[394px] flex flex-row items-center justify-center py-0 px-[11px] box-border max-w-full">
                <div className="flex-1 relative tracking-[-0.01em] leading-[28px] inline-block max-w-full">
                  coins defines the different coins this balance holds
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
              <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                GenesisState
              </div>
              <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                GenesisState defines the module genesis state.
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-base text-primary-dim font-overline-footer">
            <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
              <div className="w-[248px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Field
                </div>
              </div>
              <div className="w-[195px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Type
                </div>
              </div>
              <div className="w-[91px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Label
                </div>
              </div>
              <div className="w-[278px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Description
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] mq1050:flex-wrap">
              <div className="w-[248px] flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    params
                  </div>
                </div>
              </div>
              <div className="w-[195px] flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  Params
                </div>
              </div>
              <div className="h-7 w-[91px] flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="w-[278px] flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                  params defines all the parameters of the module
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] mq1050:flex-wrap">
              <div className="w-[248px] flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    tokens
                  </div>
                </div>
              </div>
              <div className="w-[195px] flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  Tokens
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-0 px-3">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  repeated
                </div>
              </div>
              <div className="w-[278px] flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                  tokens keep the fungible token state
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] mq1050:flex-wrap">
              <div className="relative w-[248px] [border:none] bg-[transparent] h-[68px] flex flex-row items-center justify-start box-border font-fira-code">
                <input
                  className="[outline:none] p-5 font-fira-code font-light text-base text-primary-dim [border:none] w-full h-full [background:transparent] relative z-[3]"
                  placeholder="frozen_balances"
                  type="text"
                />
                <div className="h-7 w-[63%] rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2 box-border absolute z-[1] left-[12px] top-[20px] [pointer-events:none]">
                  <div className="h-7 w-[142px] relative tracking-[-0.01em] leading-[28px] font-light flex items-center">
                    frozen_balances
                  </div>
                </div>
              </div>
              <div className="w-[195px] flex flex-row items-center justify-start py-5 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  Balance
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-5 px-3">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  repeated
                </div>
              </div>
              <div className="w-[278px] flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                  dfrozen_balances contains the frozen balances on all of the
                  accounts
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] mq1050:flex-wrap">
              <div className="flex flex-row items-center justify-start py-5 pr-[31px] pl-3 font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    whitelisted_balances
                  </div>
                </div>
              </div>
              <div className="w-[195px] flex flex-row items-center justify-start py-5 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  Balance
                </div>
              </div>
              <div className="flex flex-row items-center justify-center py-5 px-3">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  repeated
                </div>
              </div>
              <div className="w-[278px] flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                  whitelisted_balances contains the whitelisted balances on all
                  of the accounts
                </div>
              </div>
            </div>
            <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] mq1050:flex-wrap">
              <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    pending_token_upgrades
                  </div>
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  PendingTokenUpgrade
                </div>
              </div>
              <div className="flex flex-row items-center justify-start py-0 px-3">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  repeated
                </div>
              </div>
              <div className="w-[278px] flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                  pending_token_upgrades contains pending token upgrades.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch h-[244px] flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start">
              <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                PendingTokenUpgrade
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[12px] text-base text-primary-dim font-overline-footer">
            <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
              <div className="w-[182px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Field
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Type
                </div>
              </div>
              <div className="w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Label
                </div>
              </div>
              <div className="w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                  Description
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px]">
              <div className="w-[182px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    denom
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  string
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px]">
              <div className="w-[182px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                  <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                    version
                  </div>
                </div>
              </div>
              <div className="w-[220px] shrink-0 flex flex-row items-center justify-start py-0 px-[11px] box-border text-primary-green">
                <div className="relative tracking-[-0.01em] leading-[28px]">
                  uint32
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
              <div className="self-stretch w-[205px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                  --
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content4;
