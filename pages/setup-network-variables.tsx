import type { NextPage } from "next";
import NavBar4 from "../components/nav-bar4";
import SidebarMenu6 from "../components/sidebar-menu6";
import Footer4 from "../components/footer4";

const SetupNetworkVariables: NextPage = () => {
  return (
    <div className="w-full relative bg-shades-solid flex flex-col items-start justify-start tracking-[normal]">
      <NavBar4 />
      <main className="self-stretch flex flex-row items-start justify-center max-w-full [row-gap:20px] text-left text-sm text-shades-light font-regular-label lg:flex-wrap lg:pl-5 lg:pr-5 lg:box-border">
        <SidebarMenu6 />
        <div className="h-[2106px] w-px relative box-border border-r-[1px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-px lg:box-border lg:border-t-[1px] lg:border-solid lg:border-shades-dark-1" />
        <section className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[580px] max-w-full shrink-0 text-left text-13xl text-shades-light font-regular-label mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start pt-6 px-10 pb-20 box-border gap-[80px] max-w-full lg:pt-5 lg:pb-[52px] lg:box-border mq750:pb-[22px] mq750:box-border mq1050:gap-[40px_80px] mq1050:pb-[34px] mq1050:box-border mq450:gap-[20px_80px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq450:gap-[20px_40px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[40px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
                Setup Network Variables
              </h1>
              <div className="self-stretch flex flex-col items-start justify-start text-base font-overline-footer mq450:gap-[20px_40px]">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                    <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                      This document describes the command to set up the
                      environment depending on the type of network you want to
                      use.
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-primary-dim">
                      <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] text-shades-carbon font-regular-label">
                        <div className="w-[148px] shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border text-center">
                          <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                            -
                          </div>
                        </div>
                        <div className="w-[167px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                            mainnet
                          </div>
                        </div>
                        <div className="w-[167px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                            testnet
                          </div>
                        </div>
                        <div className="w-[167px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                            devnet
                          </div>
                        </div>
                        <div className="w-[167px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                            znet (localnet)
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px]">
                        <div className="w-[148px] shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border text-shades-carbon font-regular-label">
                          <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                            Chain ID
                          </div>
                        </div>
                        <div className="flex flex-row items-center justify-center py-0 px-3">
                          <div className="relative tracking-[-0.01em] leading-[28px]">
                            coreum-mainnet-1
                          </div>
                        </div>
                        <div className="w-[167px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            coreum-testnet-1
                          </div>
                        </div>
                        <div className="w-[167px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            coreum-devnet-1
                          </div>
                        </div>
                        <div className="w-[167px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            coreum-devnet-1
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-xl bg-shades-pitch overflow-x-auto flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px]">
                        <div className="w-[148px] shrink-0 flex flex-row items-center justify-center py-0 px-6 box-border text-shades-carbon font-regular-label">
                          <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                            Denom
                          </div>
                        </div>
                        <div className="w-[167px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            ucore
                          </div>
                        </div>
                        <div className="w-[167px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            utestcore
                          </div>
                        </div>
                        <div className="w-[167px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            udevcore
                          </div>
                        </div>
                        <div className="w-[167px] shrink-0 flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            udevcore
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] mq1050:flex-wrap">
                        <div className="w-[148px] flex flex-row items-center justify-center py-5 px-6 box-border text-shades-carbon font-regular-label">
                          <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                            RPC URL
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            https://full-node.mainnet-1.coreum.dev:26657
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <a
                            className="flex-1 relative tracking-[-0.01em] leading-[28px] text-[inherit] [text-decoration:none]"
                            href="https://full-node.testnet-1.coreum.dev:26657"
                            target="_blank"
                          >
                            https://full-node.testnet-1.coreum.dev:26657
                          </a>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            https://full-node.devnet-1.coreum.dev:26657
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="h-14 flex-1 relative tracking-[-0.01em] leading-[28px] inline-block">
                            http://localhost:26657
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] mq1050:flex-wrap">
                        <div className="w-[148px] flex flex-row items-center justify-center py-0 px-6 box-border text-shades-carbon font-regular-label">
                          <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                            Cosmosvisor Version
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            v1.5.0
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            v1.5.0
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            v1.5.0
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            v1.5.0
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] mq1050:flex-wrap">
                        <div className="w-[148px] flex flex-row items-center justify-center py-0 px-[22px] box-border text-shades-carbon font-regular-label">
                          <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                            Cored Version
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-5 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            v2.0.2
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-5 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            v3.0.0
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            <span>You can find the link to binary at </span>
                            <span className="font-semibold text-primary-green">
                              this page
                            </span>
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            Already installed via crust
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] mq1050:flex-wrap">
                        <div className="w-[148px] flex flex-row items-center justify-center py-0 px-6 box-border text-shades-carbon font-regular-label">
                          <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                            Upgrade Name
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            <span>{`Check the Name column `}</span>
                            <span className="font-semibold text-primary-green">
                              here
                            </span>
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            <span>{`Check the Name column `}</span>
                            <span className="font-semibold text-primary-green">
                              here
                            </span>
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            genesis
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            genesis
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-between py-4 px-0 gap-[0px] [row-gap:20px] mq1050:flex-wrap">
                        <div className="w-[148px] flex flex-row items-center justify-center py-5 px-6 box-border text-shades-carbon font-regular-label">
                          <div className="flex-1 relative tracking-[-0.02em] leading-[22px]">
                            State Sync Servers
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-5 px-3 box-border">
                          <div className="h-[196px] flex-1 relative tracking-[-0.01em] leading-[28px] inline-block">
                            https://full-node-californium.mainnet-1.coreum.dev:26657,https://full-node-curium.mainnet-1.coreum.dev:26657
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-0 px-3 box-border">
                          <div className="h-[252px] flex-1 relative tracking-[-0.01em] leading-[28px] inline-block">
                            https://full-node-eris.testnet-1.coreum.dev:26657,https://full-node-pluto.testnet-1.coreum.dev:26657,https://full-node-nickel.testnet-1.coreum.dev:26657
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-5 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            Not supported
                          </div>
                        </div>
                        <div className="w-[167px] flex flex-row items-center justify-center py-5 px-3 box-border">
                          <div className="flex-1 relative tracking-[-0.01em] leading-[28px]">
                            Not supported
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start max-w-full text-base font-overline-footer mq450:gap-[20px_40px]">
              <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                    <ul className="m-0 font-inherit text-inherit pl-[21px]">
                      <li className="mb-0">
                        ⚠️ Keep in mind, that our Public RPC Node is stable, but
                        there is always a risk of DDoS attacks, and if you build
                        your own product(wallet, etc), it is recommended to rely
                        on your own RPC Node.
                      </li>
                      <li className="mb-0">
                        ⚠️ Also, having own RPC node is recommended if you
                        frequently query the Node(for instance, for indexing),
                        since we have rate limiting there.
                      </li>
                      <li>
                        Set the chain env variables with the values
                        corresponding to the network you want to connect to,
                        from the table above.
                      </li>
                    </ul>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center text-sm text-shades-carbon font-fira-code">
                    <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start relative gap-[12px] max-w-full mq750:flex-wrap">
                      <div className="flex flex-row items-start justify-start p-4">
                        <div className="w-[17px] relative tracking-[-0.01em] leading-[24px] inline-block">
                          <p className="m-0">1</p>
                          <p className="m-0">2</p>
                          <p className="m-0">3</p>
                          <p className="m-0">4</p>
                          <p className="m-0">5</p>
                          <p className="m-0">6</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">7</p>
                          <p className="m-0">8</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">9</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">10</p>
                          <p className="m-0">11</p>
                        </div>
                      </div>
                      <img
                        className="h-[368px] w-0 relative min-h-[368px]"
                        loading="lazy"
                        alt=""
                        src="/divider11.svg"
                      />
                      <div className="flex-1 overflow-hidden flex flex-row items-start justify-start p-4 box-border min-w-[483px] max-w-full text-left text-primary-dim mq750:min-w-full">
                        <div className="w-[1074px] relative tracking-[-0.01em] leading-[24px] inline-block max-w-[151%] shrink-0">
                          <p className="m-0">{`export COREUM_CHAIN_ID="{Chain ID}"`}</p>
                          <p className="m-0">{`export COREUM_DENOM="{Denom}"`}</p>
                          <p className="m-0">{`export COREUM_NODE="{RPC URL}"`}</p>
                          <p className="m-0">{`export COREUM_COSMOVISOR_VERSION="{Cosmovisor version}"`}</p>
                          <p className="m-0">{`export COREUM_VERSION="{Cored version}"`}</p>
                          <p className="m-0">{`export UPGRADE_NAME="{Upgrade name}"`}</p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            export
                            COREUM_CHAIN_ID_ARGS="--chain-id=$COREUM_CHAIN_ID"
                          </p>
                          <p className="m-0">
                            export COREUM_NODE_ARGS="--node=$COREUM_NODE"
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            export COREUM_HOME=$HOME/.core/"$COREUM_CHAIN_ID"
                          </p>
                          <p className="m-0">&nbsp;</p>
                          <p className="m-0">
                            export COREUM_BINARY_NAME=$(arch | sed
                            s/aarch64/cored-linux-arm64/ | sed
                            s/x86_64/cored-linux-amd64/)
                          </p>
                          <p className="m-0">
                            export
                            COSMOVISOR_TAR_NAME=cosmovisor-$COREUM_COSMOVISOR_VERSION-linux-$(arch
                            | sed s/aarch64/arm64/ | sed s/x86_64/amd64/).tar.gz
                          </p>
                        </div>
                      </div>
                      <img
                        className="h-[calc(100%_-_362px)] w-[720px] absolute !m-[0] top-[354px] bottom-[8px] left-[80px] max-h-full object-contain z-[1]"
                        loading="lazy"
                        alt=""
                        src="/scrollbar@2x.png"
                      />
                    </div>
                  </div>
                  <div className="self-stretch h-[82px] rounded-lg bg-orange box-border flex flex-col items-start justify-start py-4 px-3.5 text-xs text-primary-yellow border-l-[4px] border-solid border-primary-yellow">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px] shrink-0">
                      <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                        Attention
                      </div>
                      <div className="self-stretch relative text-base tracking-[-0.02em] leading-[24px] font-medium font-regular-label">
                        Set those variables globally so it is automatically set
                        after starting a new terminal session.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start p-10 box-border gap-[40px] max-w-full text-xs font-overline-footer mq750:flex-wrap mq450:gap-[40px_20px]">
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
        <div className="h-[2106px] w-px relative box-border opacity-[0] border-r-[1.5px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-[1.5px] lg:box-border lg:border-t-[1.5px] lg:border-solid lg:border-shades-dark-1" />
        <div className="h-48 w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border opacity-[0]">
          <div className="self-stretch flex-[0.5556] rounded-lg flex flex-row items-center justify-start py-2 px-0 text-primary-green">
            <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
              Essentials
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-3">
            <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
              <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                Mainnet
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-3">
            <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
              <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                Testnet
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-3">
            <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
              <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                Devnet
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer4 luminaScreen="/lumina-screen7@2x.png" />
    </div>
  );
};

export default SetupNetworkVariables;
