import type { NextPage } from "next";
import NavBar4 from "../components/nav-bar4";
import SidebarMenu8 from "../components/sidebar-menu8";
import Footer4 from "../components/footer4";

const SetupNetworkVariables3: NextPage = () => {
  return (
    <div className="w-full relative bg-shades-solid flex flex-col items-start justify-start tracking-[normal]">
      <NavBar4 leafNodeHeight="64px" propBorderTop="1.5px solid #101216" />
      <main className="self-stretch flex flex-row items-start justify-center max-w-full [row-gap:20px] text-left text-sm text-primary-green font-regular-label lg:flex-wrap lg:pl-5 lg:pr-5 lg:box-border">
        <SidebarMenu8 />
        <div className="h-[930px] w-px relative box-border border-r-[1.5px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-[1.5px] lg:box-border lg:border-t-[1.5px] lg:border-solid lg:border-shades-dark-1" />
        <section className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[580px] max-w-full shrink-0 text-left text-13xl text-primary-dim font-regular-label mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start py-6 px-10 box-border min-h-[770px] max-w-full mq750:pt-5 mq750:pb-5 mq750:box-border mq1050:gap-[40px_80px] mq450:gap-[20px_80px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px_40px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[40px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
                Scalar Value Types
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start max-w-full text-base font-overline-footer mq450:gap-[20px_40px]">
                <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                  <div className="w-[812px] overflow-x-auto flex flex-col items-start justify-start gap-[12px] max-w-full">
                    <div className="w-[812px] rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
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
                    <div className="w-[812px] rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
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
                    <div className="w-[812px] rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
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
                    <div className="w-[812px] rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
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
                    <div className="w-[812px] rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
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
                    <div className="w-[812px] rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
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
                    <div className="w-[812px] rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
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
                    <div className="w-[812px] rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 box-border gap-[0px] [row-gap:20px]">
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
        <div className="h-[930px] w-px relative box-border opacity-[0] border-r-[1.5px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-[1.5px] lg:box-border lg:border-t-[1.5px] lg:border-solid lg:border-shades-dark-1" />
        <div className="h-[300px] w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border opacity-[0]">
          <div className="self-stretch h-9 rounded-lg flex flex-row items-center justify-start py-2 px-0 box-border">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              coreum/asset/nft
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-end justify-start py-0 pr-0 pl-2 text-shades-light">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 pr-0 pl-[15px] border-l-[1px] border-solid border-shades-dark-1">
              <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                  authz.proto
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                  event.proto
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                  params.proto
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                  query.proto
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                  tx.proto
                </div>
              </div>
              <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                  types.proto
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer4
        luminaScreen="/lumina-screen4@2x.png"
        propBorderTop="1.5px solid #101216"
      />
    </div>
  );
};

export default SetupNetworkVariables3;
