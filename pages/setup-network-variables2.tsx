import type { NextPage } from "next";
import NavBar4 from "../components/nav-bar4";
import SidebarMenu7 from "../components/sidebar-menu7";
import Footer4 from "../components/footer4";

const SetupNetworkVariables2: NextPage = () => {
  return (
    <div className="w-full relative bg-shades-solid flex flex-col items-start justify-start tracking-[normal]">
      <NavBar4 leafNodeHeight="64px" propBorderTop="1.5px solid #101216" />
      <main className="self-stretch flex flex-row items-start justify-center [row-gap:20px] max-w-full text-left text-sm text-primary-green font-regular-label lg:flex-wrap lg:pl-5 lg:pr-5 lg:box-border">
        <SidebarMenu7 />
        <div className="h-[2972px] w-px relative box-border border-r-[1.5px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-[1.5px] lg:box-border lg:border-t-[1.5px] lg:border-solid lg:border-shades-dark-1" />
        <section className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[580px] max-w-full shrink-0 text-left text-13xl text-primary-off-white font-regular-label mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start pt-6 px-10 pb-20 box-border gap-[80px] max-w-full lg:pt-5 lg:pb-[34px] lg:box-border mq750:pb-[22px] mq750:box-border mq1050:gap-[40px_80px] mq450:gap-[20px_80px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px_40px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[40px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
                coreum/asset/nft
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-lg mq450:gap-[20px_40px]">
                <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                  <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
                    authz.proto
                  </h3>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                  <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                        NFTIdentifier
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-base text-primary-dim font-overline-footer">
                    <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
                      <div className="w-[116px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                        <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                          Field
                        </div>
                      </div>
                      <div className="w-[68px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                        <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                          Type
                        </div>
                      </div>
                      <div className="w-[91px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                        <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                          Label
                        </div>
                      </div>
                      <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                        <div className="flex-1 relative tracking-[-0.02em] leading-[22px] inline-block max-w-full">
                          Description
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 box-border [row-gap:20px] max-w-full gap-[0px] mq1050:flex-wrap">
                      <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                        <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                          <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                            class_id
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                        <div className="relative tracking-[-0.01em] leading-[28px]">
                          string
                        </div>
                      </div>
                      <div className="h-7 w-[91px] flex flex-row items-center justify-start py-0 px-3 box-border">
                        <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                          repeated
                        </div>
                      </div>
                      <div className="w-[537px] flex flex-row items-center justify-center py-0 px-3 box-border max-w-full">
                        <div className="flex-1 relative tracking-[-0.01em] leading-[28px] inline-block max-w-full">
                          class_id defines the unique identifier of the nft
                          classification, similar to the contract address of
                          ERC721
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                      <div className="w-[116px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                        <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                          <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                            id
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                        <div className="relative tracking-[-0.01em] leading-[28px]">
                          string
                        </div>
                      </div>
                      <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                        <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                          repeated
                        </div>
                      </div>
                      <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                        <div className="flex-1 relative tracking-[-0.01em] leading-[28px] inline-block max-w-full">
                          id defines the unique identification of nft
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                  <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                      <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                        SendAuthorization
                      </div>
                      <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                        SendAuthorization allows the grantee to send specific
                        NFTs from the granter's account.
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-base text-shades-carbon">
                    <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                      <div className="w-[78px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                        <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                          Field
                        </div>
                      </div>
                      <div className="w-[121px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                        <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                          Type
                        </div>
                      </div>
                      <div className="w-[91px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                        <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                          Label
                        </div>
                      </div>
                      <div className="w-[522px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_290px)]">
                        <div className="flex-1 relative tracking-[-0.02em] leading-[22px] inline-block max-w-full">
                          Description
                        </div>
                      </div>
                    </div>
                    <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px] text-primary-dim font-overline-footer">
                      <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                        <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                          <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                            nfts
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                        <div className="relative tracking-[-0.01em] leading-[28px]">
                          NFTIdentifier
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start py-0 px-3">
                        <div className="relative tracking-[-0.01em] leading-[28px]">
                          repeated
                        </div>
                      </div>
                      <div className="w-[522px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_290px)]">
                        <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                          staking_params defines staking parameters of the
                          module.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full text-lg mq450:gap-[20px_40px]">
              <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
                  event.proto
                </h3>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                      EventAddedToClassWhitelist
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-base text-primary-dim font-overline-footer">
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
                    <div className="w-[116px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Field
                      </div>
                    </div>
                    <div className="w-[68px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Type
                      </div>
                    </div>
                    <div className="w-[91px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Label
                      </div>
                    </div>
                    <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px] inline-block max-w-full">
                        Description
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          class_id
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        class_id defines the unique id
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="flex flex-row items-center justify-start py-0 pr-[21px] pl-3 font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          account
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                      EventAddedToWhitelist
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-base text-primary-dim font-overline-footer">
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
                    <div className="w-[116px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Field
                      </div>
                    </div>
                    <div className="w-[68px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Type
                      </div>
                    </div>
                    <div className="w-[91px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Label
                      </div>
                    </div>
                    <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px] inline-block max-w-full">
                        Description
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          class_id
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        class_id defines the unique id
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="w-[116px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          id
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        class_id defines the unique id
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="flex flex-row items-center justify-start py-0 pr-[21px] pl-3 font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          account
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                      EventClassFrozen
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-base text-primary-dim font-overline-footer">
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
                    <div className="w-[116px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Field
                      </div>
                    </div>
                    <div className="w-[68px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Type
                      </div>
                    </div>
                    <div className="w-[91px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Label
                      </div>
                    </div>
                    <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px] inline-block max-w-full">
                        Description
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          class_id
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        class_id defines the unique id
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="flex flex-row items-center justify-start py-0 pr-[21px] pl-3 font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          account
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                      EventClassIssued
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-base text-primary-dim font-overline-footer">
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
                    <div className="w-[154px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Field
                      </div>
                    </div>
                    <div className="w-[119px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Type
                      </div>
                    </div>
                    <div className="w-[91px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Label
                      </div>
                    </div>
                    <div className="w-[448px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_364px)]">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px] inline-block max-w-full">
                        Description
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="w-[154px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          id
                        </div>
                      </div>
                    </div>
                    <div className="w-[119px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[448px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_364px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="w-[154px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          issuer
                        </div>
                      </div>
                    </div>
                    <div className="w-[119px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[448px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_364px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="w-[154px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          symbol
                        </div>
                      </div>
                    </div>
                    <div className="w-[119px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[448px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_364px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="w-[154px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          name
                        </div>
                      </div>
                    </div>
                    <div className="w-[119px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[448px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_364px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="flex flex-row items-center justify-start py-0 pr-[22px] pl-3 font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          description
                        </div>
                      </div>
                    </div>
                    <div className="w-[119px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[448px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_364px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="w-[154px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          uri
                        </div>
                      </div>
                    </div>
                    <div className="w-[119px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[448px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_364px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 box-border [row-gap:20px] max-w-full gap-[0px] mq1050:flex-wrap">
                    <div className="relative w-[154px] [border:none] bg-[transparent] h-7 flex flex-row items-center justify-start box-border font-fira-code">
                      <input
                        className="[outline:none] py-0 px-5 font-fira-code font-light text-base text-primary-dim [border:none] w-full h-full [background:transparent] relative z-[3]"
                        placeholder="features"
                        type="text"
                      />
                      <div className="h-7 w-[59%] rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2 box-border absolute z-[1] left-[12px] top-[0px] [pointer-events:none]">
                        <div className="h-7 w-[76px] relative tracking-[-0.01em] leading-[28px] font-light flex items-center">
                          features
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        ClassFeature
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 px-3">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[448px] flex flex-row items-center justify-center py-0 px-3 box-border max-w-full">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          royalty_rate
                        </div>
                      </div>
                    </div>
                    <div className="w-[119px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[448px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_364px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        class_id defines the unique id
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                      EventClassUnfrozen
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-base text-primary-dim font-overline-footer">
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
                    <div className="w-[116px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Field
                      </div>
                    </div>
                    <div className="w-[68px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Type
                      </div>
                    </div>
                    <div className="w-[91px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                        Label
                      </div>
                    </div>
                    <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                      <div className="flex-1 relative tracking-[-0.02em] leading-[22px] inline-block max-w-full">
                        Description
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="flex flex-row items-center justify-start py-0 px-3 font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          class_id
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        class_id defines the unique id
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border max-w-full gap-[0px] [row-gap:20px]">
                    <div className="flex flex-row items-center justify-start py-0 pr-[21px] pl-3 font-fira-code">
                      <div className="rounded bg-shades-dark-2 flex flex-row items-center justify-start py-0 px-2">
                        <div className="relative tracking-[-0.01em] leading-[28px] font-light">
                          account
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start py-0 px-3 text-primary-green">
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        string
                      </div>
                    </div>
                    <div className="h-7 w-[91px] shrink-0 flex flex-row items-center justify-start py-0 px-3 box-border">
                      <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[28px] opacity-[0]">
                        repeated
                      </div>
                    </div>
                    <div className="w-[537px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border max-w-[calc(100%_-_275px)]">
                      <div className="h-7 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block opacity-[0] max-w-full">
                        id defines the unique identification of nft
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start p-10 box-border gap-[40px] max-w-full text-xs text-shades-light font-overline-footer mq750:flex-wrap mq450:gap-[40px_20px]">
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
        <div className="h-[2972px] w-px relative box-border border-r-[1.5px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-[1.5px] lg:box-border lg:border-t-[1.5px] lg:border-solid lg:border-shades-dark-1" />
        <div className="w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border">
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
              coreum/asset/nft
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-2 text-shades-light">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[15px] border-l-[1px] border-solid border-shades-dark-1">
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  authz.proto
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  event.proto
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  params.proto
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  query.proto
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  tx.proto
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  types.proto
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer4
        luminaScreen="/lumina-screen7@2x.png"
        propBorderTop="1.5px solid #101216"
      />
    </div>
  );
};

export default SetupNetworkVariables2;
