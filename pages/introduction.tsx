import type { NextPage } from "next";
import NavBar1 from "../components/nav-bar1";
import SidebarMenu from "../components/sidebar-menu";
import SmartContractContainer from "../components/smart-contract-container";
import TypeLinkStateDefault from "../components/type-link-state-default";
import Footer1 from "../components/footer1";

const Introduction: NextPage = () => {
  return (
    <div className="w-full relative bg-shades-solid flex flex-col items-start justify-start tracking-[normal]">
      <NavBar1 />
      <main className="self-stretch flex flex-row items-start justify-start max-w-full [row-gap:20px] text-left text-sm text-primary-green font-regular-label lg:flex-wrap lg:pl-5 lg:pr-5 lg:box-border">
        <SidebarMenu />
        <div className="h-[2424px] w-px relative box-border border-r-[1px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-px lg:box-border lg:border-t-[1px] lg:border-solid lg:border-shades-dark-1" />
        <section className="flex-1 flex flex-col items-start justify-start py-0 px-0 box-border min-w-[580px] max-w-full shrink-0 text-left text-13xl text-shades-light font-regular-label mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start pt-6 px-10 pb-20 gap-[80px] lg:pt-5 lg:pb-[34px] lg:box-border mq750:pb-[22px] mq750:box-border mq1050:gap-[40px_80px] mq450:gap-[20px_80px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] mq450:gap-[20px_40px]">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[40px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
                Introduction
              </h1>
              <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer">
                <p className="m-0">
                  <span className="font-semibold font-overline-footer text-primary-green">
                    Coreum
                  </span>
                  <span className="font-overline-footer text-shades-light">
                    {" "}
                    is a 3rd-generation layer-1 enterprise-grade blockchain
                    built to serve as a core infrastructure for decentralized
                    applications with ISO20022 compatibility, IBC
                    interoperability, and novel 
                  </span>
                  <span className="font-semibold font-overline-footer text-primary-green">
                    Smart Tokens
                  </span>
                  <span>.</span>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Coreum network guarantees elevated throughput, cost-effective
                  fees, and unparalleled scalability. WASM-based smart contracts
                  enable diverse use cases, while the low-latency, PoS network
                  propels rapid, secure, and modular applications, expediting
                  decentralized tech adoption in large-scale organizations.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  $CORE is the native token for Coreum, and is used for
                  interacting with the blockchain's various features, from the
                  consensus protocol, to the decentralised exchange, and so on.
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  <span>
                    An established usecase for a network like Coreum is the 
                  </span>
                  <span className="font-semibold font-overline-footer text-primary-green">
                    Sologenic Ecosystem
                  </span>
                  <span className="font-overline-footer text-shades-light">
                    , which currently resides on the XRP Ledger.
                  </span>
                </p>
                <p className="m-0">&nbsp;</p>
                <p className="m-0">
                  Coreum is fast, low cost, and environmentally friendly. By
                  leveraging a Bonded Proof of Stake (BPoS) consensus mechanism,
                  Coreum is not subject to the high energy costs that other
                  blockchains are criticised for. Furthermore, Coreum's
                  scalability and throughput ensure that the operation of the
                  network does not incur the exorbitant fees that hinder other
                  blockchains.
                </p>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-lg text-primary-off-white mq450:gap-[20px_40px]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-5xl">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
                  Features
                </h3>
                <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                  The ecosystem natively supports next features:
                </div>
              </div>
              <SmartContractContainer
                featureDescription="Smart Contracts"
                smartContractDefinitionTe="A Smart Contract is an executable piece of code that runs on top of the blockchain to facilitate, execute and enforce an agreement between parties without the involvement of a trusted third party."
                featureDescriptionText="Details"
              />
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                    Smart Tokens
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] text-shades-light font-overline-footer">
                    <p className="m-0">
                      <span className="font-overline-footer text-shades-light">
                        Except native token 
                      </span>
                      <span className="font-semibold font-overline-footer text-primary-off-white">
                        $COREUM
                      </span>
                      <span>
                        , Coreum Network also provides ability to create custom
                        tokens with next features:
                      </span>
                    </p>
                    <ul className="m-0 text-inherit pl-[21px]">
                      <li className="mb-0">
                        <span>Issuance (Minting)</span>
                      </li>
                      <li className="mb-0">
                        <span>Access Control List (ACL)</span>
                      </li>
                      <li className="mb-0">
                        <span>Burning</span>
                      </li>
                      <li className="mb-0">
                        <span>Freezing and Global Freezing</span>
                      </li>
                      <li className="mb-0">
                        <span>Whitelisting</span>
                      </li>
                      <li className="mb-0">
                        <span>Blacklisting</span>
                      </li>
                      <li className="mb-0">
                        <span>Burn Rate</span>
                      </li>
                      <li className="mb-0">
                        <span>Send Fee</span>
                      </li>
                      <li className="mb-0">
                        <span>
                          IBC (Inter Blockchain Communication) compatibility
                        </span>
                      </li>
                      <li>
                        <span>Smart Contract integration</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <TypeLinkStateDefault
                  label="Details"
                  typeLinkStateDefaultAlignSelf="unset"
                  labelLineHeight="20px"
                  labelColor="unset"
                  labelBackground="linear-gradient(180deg, #25d695, #046c45)"
                  labelWebkitBackgroundClip="unset"
                  labelWebkitTextFillColor="unset"
                />
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-[20px]">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                    Fee Model
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    <p className="m-0">
                      Coreum's Fee Model introduces few novel ideas into the
                      Cosmos Ecosystem, which makes the chain more resilient to
                      load pikes and also makes it simpler to interact with the
                      chain.
                    </p>
                    <ul className="m-0 font-inherit text-inherit pl-[21px]">
                      <li className="mb-0">
                        Gas is deterministic for most of the transaction types.
                        For example, if you want to transfer tokens, you know
                        how gas amount you need, without interacting with the
                        chain in any way.
                      </li>
                      <li>
                        The gas price is determined based on the load on the
                        system. This module is responsible for calculating
                        minimum gas price required by the chain based on the
                        parameters of Fee Model.
                      </li>
                    </ul>
                  </div>
                </div>
                <TypeLinkStateDefault
                  label="Details"
                  typeLinkStateDefaultAlignSelf="unset"
                  labelLineHeight="20px"
                  labelColor="unset"
                  labelBackground="linear-gradient(180deg, #25d695, #046c45)"
                  labelWebkitBackgroundClip="unset"
                  labelWebkitTextFillColor="unset"
                />
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                    Decentralised Exchange (DEX)
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    <p className="m-0">
                      The DEX supports the trading of $CORE, as well as any
                      issued assets found on Coreum.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      The DEX is native to the blockchain, enabling low-fee,
                      secure, and fast trading activities.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Moreover, any user is able to trade assets by choosing any
                      trading pair.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Check Coreum's Roadmap for DEX release date.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                    Bridges
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    <p className="m-0">
                      Bridges or Cross-chain crypto bridges are applications
                      that enable the transfer of assets between different
                      blockchains.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Coreum has Decentralized Bridge, which is provided by IBC,
                      and Centralized Bridge, which is handled by Coreum.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Check Coreum's Roadmap for Bridge release date.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start p-10 box-border gap-[40px] max-w-full text-xs font-overline-footer mq750:flex-wrap mq450:gap-[40px_20px]">
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-start justify-start p-4 box-border opacity-[0] min-w-[301px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch h-[18px] relative tracking-[-0.01em] leading-[18px] inline-block">
                  PREVIOUS
                </div>
                <div className="self-stretch h-[22px] relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green inline-block">
                  Text
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-end justify-start p-4 box-border min-w-[301px] max-w-full text-right">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                  NEXT
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
                  Smart Contracts
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="h-[2424px] w-px relative box-border border-r-[1px] border-solid border-shades-dark-1 lg:hidden lg:w-[100px] lg:h-px lg:box-border lg:border-t-[1px] lg:border-solid lg:border-shades-dark-1" />
        <div className="w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border">
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
              Introduction
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
      </main>
      <Footer1 luminaScreen="/lumina-screen11@2x.png" />
    </div>
  );
};

export default Introduction;
