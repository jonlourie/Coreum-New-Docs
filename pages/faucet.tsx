import type { NextPage } from "next";
import Header from "../components/header";
import SidebarMenuContainer from "../components/sidebar-menu-container";
import AccountGenerationContainer from "../components/account-generation-container";
import BottomFooter from "../components/bottom-footer";

const Faucet: NextPage = () => {
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
                  <div className="flex-1 rounded-lg bg-shades-dark-2 overflow-hidden flex flex-row items-center justify-center py-3 px-0 text-primary-off-white">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[20px] font-medium">
                      Mainnet
                    </div>
                  </div>
                  <div className="flex-1 rounded-md flex flex-row items-center justify-center py-3 px-0">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[20px]">
                      Testnet
                    </div>
                  </div>
                  <div className="w-px relative box-border h-[37px] border-r-[1px] border-solid border-shades-dark-2" />
                  <div className="flex-1 rounded-md flex flex-row items-center justify-center py-3 px-0">
                    <div className="flex-1 relative tracking-[-0.02em] leading-[20px]">
                      Devnet
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-shades-light font-overline-footer">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                      <p className="m-0">
                        <span className="font-overline-footer">
                          <span className="text-shades-light">
                            You can generate your address at
                          </span>
                          <span className="text-primary-green"> </span>
                        </span>
                        <span className="text-primary-green">
                          <span className="font-semibold font-overline-footer">
                            wallet page
                          </span>
                        </span>
                        <span className="font-overline-footer text-shades-light">
                          , and you can find the list of Coreum Markets 
                        </span>
                        <span className="font-semibold font-overline-footer text-primary-green">
                          here
                        </span>
                        <span>.</span>
                      </p>
                      <p className="m-0">&nbsp;</p>
                      <p className="m-0">
                        Note: Check if EX supports withdrawal into Coreum
                        Network beforehand.
                      </p>
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

export default Faucet;
