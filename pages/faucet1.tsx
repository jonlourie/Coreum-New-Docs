import type { NextPage } from "next";
import Header from "../components/header";
import SidebarMenuContainer from "../components/sidebar-menu-container";
import AccountGenerationContainer from "../components/account-generation-container";
import BottomFooter from "../components/bottom-footer";

const Faucet1: NextPage = () => {
  return (
    <div className="relative bg-shades-solid w-full flex flex-col items-start justify-start text-left text-base text-primary-dim font-regular-label">
      <Header />
      <div className="w-[1441px] relative box-border h-px border-t-[1px] border-solid border-shades-dark-1" />
      <div className="w-[1440px] flex flex-row items-start justify-start">
        <SidebarMenuContainer />
        <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-shades-dark-1" />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start pt-6 px-10 pb-20">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
              <div className="self-stretch relative text-13xl tracking-[-0.02em] leading-[40px] font-medium text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Faucet
              </div>
              <AccountGenerationContainer />
              <div className="w-[816px] flex flex-col items-start justify-start text-center">
                <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start p-1">
                  <div className="flex-1 rounded-md flex flex-row items-center justify-center py-3 px-0">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[20px]">
                      Mainnet
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg bg-shades-dark-2 overflow-hidden flex flex-row items-center justify-center py-3 px-0 text-primary-off-white">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[20px] font-medium">
                      Testnet
                    </div>
                  </div>
                  <div className="flex-1 rounded-md flex flex-row items-center justify-center py-3 px-0">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[20px]">
                      Devnet
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start gap-[24px] text-primary-off-white">
                <div className="w-[280px] rounded-xl [background:linear-gradient(90deg,_rgba(69,_69,_69,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[2px_0px_8px_rgba(0,_0,_0,_0.16)_inset] [backdrop-filter:blur(10px)] overflow-hidden shrink-0 flex flex-col items-start justify-center py-4 px-6 box-border relative gap-[20px]">
                  <div className="self-stretch flex flex-col items-start justify-start z-[0]">
                    <div className="w-[291px] relative tracking-[-0.02em] leading-[24px] font-medium inline-block">
                      Generate Funded Wallet
                    </div>
                  </div>
                  <div className="w-0.5 absolute !m-[0] h-[calc(100%_-_46px)] top-[35px] bottom-[11px] left-[0px] box-border z-[1] border-r-[1px] border-solid border-mediumseagreen-400" />
                  <div className="w-0.5 absolute !m-[0] h-[calc(100%_-_46px)] top-[11px] right-[-1.3px] bottom-[35px] box-border z-[2] border-r-[1px] border-solid border-mediumseagreen-400" />
                  <div className="w-[calc(100%_-_160px)] absolute !m-[0] top-[0px] right-[149px] left-[11px] box-border h-0.5 z-[3] border-t-[1px] border-solid border-mediumseagreen-400" />
                  <div className="w-[calc(100%_-_160px)] absolute !m-[0] right-[11px] bottom-[-1px] left-[149px] box-border h-0.5 z-[4] border-t-[1px] border-solid border-mediumseagreen-400" />
                  <img
                    className="w-[49.8px] absolute !m-[0] top-[calc(50%_-_28px)] right-[21.2px] h-[49.8px] object-contain z-[5]"
                    alt=""
                    src="/object-2@2x.png"
                  />
                  <img
                    className="w-[74.6px] absolute !m-[0] right-[-23.6px] bottom-[-26.6px] h-[74.6px] object-contain z-[6]"
                    alt=""
                    src="/object-1@2x.png"
                  />
                  <img
                    className="w-[25.6px] absolute !m-[0] top-[-7px] right-[7.4px] h-[25.6px] object-contain z-[7]"
                    alt=""
                    src="/object-3@2x.png"
                  />
                </div>
                <div className="relative tracking-[-0.02em] leading-[20px] text-primary-dim text-center">
                  Or
                </div>
                <div className="flex-1 flex flex-row items-start justify-start text-shades-carbon font-overline-footer">
                  <div className="flex-1 rounded-lg flex flex-row items-center justify-between py-4 pr-4 pl-5 border-[1px] border-solid border-shades-dark-3">
                    <div className="relative tracking-[-0.01em] leading-[24px] opacity-[0.65]">
                      Enter wallet address
                    </div>
                    <div className="rounded-xl [backdrop-filter:blur(10px)] flex flex-row items-center justify-start gap-[2px] text-xs">
                      <div className="relative tracking-[-0.02em] leading-[18px] uppercase font-medium text-transparent !bg-clip-text [background:linear-gradient(180deg,_#25d695,_#046c45)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                        Request Fund
                      </div>
                      <img
                        className="w-6 relative h-6 hidden"
                        alt=""
                        src="/iconlink-1.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start p-10 gap-[40px] text-xs text-shades-light font-overline-footer">
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-start justify-start p-4">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                  PREVIOUS
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
                  Wallets
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-end justify-start p-4 text-right">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                  NEXT
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
                  Block Explorers
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-[1.5px] relative box-border opacity-[0] border-r-[1.5px] border-solid border-shades-dark-1" />
        <div className="w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border opacity-[0] text-sm text-primary-green">
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
              Smart Tokens
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-3 text-shades-light">
            <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
              <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                Features
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1441px] relative box-border h-px border-t-[1px] border-solid border-shades-dark-1" />
      <BottomFooter imageDimensionsCode="/lumina-screen4@2x.png" />
    </div>
  );
};

export default Faucet1;
