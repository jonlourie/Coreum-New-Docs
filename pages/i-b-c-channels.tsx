import type { NextPage } from "next";
import Header from "../components/header";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import TypeLinkStateDefault from "../components/type-link-state-default";
import ContainerCard from "../components/container-card";
import BottomFooter from "../components/bottom-footer";

const IBCChannels: NextPage = () => {
  return (
    <div className="relative bg-shades-solid w-full flex flex-col items-start justify-start text-left text-13xl text-shades-light font-regular-label">
      <Header />
      <div className="w-[1441px] relative box-border h-px border-t-[1px] border-solid border-shades-dark-1" />
      <div className="w-[1440px] flex flex-row items-start justify-start">
        <div className="h-[660px] overflow-hidden flex flex-col items-end justify-start py-6 px-4 box-border relative">
          <TypeDropdownStateExpanded
            label="Overview"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <TypeDropdownStateExpanded
            label="Tutorials"
            iconArrow="/iconarrow-1.svg"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#eee"
            labelFontWeight="500"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <div className="self-stretch flex flex-col items-end justify-start py-2 pr-0 pl-4 z-[2]">
            <div className="w-[228px] box-border flex flex-col items-start justify-start py-0 pr-0 pl-2 border-l-[1px] border-solid border-shades-dark-1">
              <TypeDropdownStateExpanded
                label="Get Started"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="8px 8px 8px 12px"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="unset"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="unset"
              />
              <TypeDropdownStateExpanded
                label="Use Tokens"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="8px 8px 8px 12px"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="unset"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="unset"
              />
              <TypeDropdownStateExpanded
                label="Integrate Coreum"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="8px 8px 8px 12px"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="unset"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="unset"
              />
              <TypeDropdownStateExpanded
                label="Build Apps"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="8px 8px 8px 12px"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="unset"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="unset"
              />
              <TypeDropdownStateExpanded
                label="IBC"
                iconArrow="/iconarrow1.svg"
                typeDropdownStateExpandedPadding="8px 8px 8px 12px"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="unset"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#eee"
                labelFontWeight="500"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="unset"
              />
              <div className="self-stretch flex flex-col items-end justify-start py-2 pr-0 pl-4">
                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-2 border-l-[1px] border-solid border-shades-dark-1">
                  <TypeTextStateSelectedSiz
                    label="IBC Channels"
                    typeTextStateSelectedSizPadding="8px 12px"
                    typeTextStateSelectedSizBackgroundColor="#17191e"
                    typeTextStateSelectedSizWidth="unset"
                    typeTextStateSelectedSizBorder="unset"
                    typeTextStateSelectedSizOutline="unset"
                    typeTextStateSelectedSizHeight="unset"
                    typeTextStateSelectedSizFontFamily="unset"
                    typeTextStateSelectedSizFontWeight="unset"
                    typeTextStateSelectedSizFontSize="unset"
                    typeTextStateSelectedSizColor="unset"
                    typeTextStateSelectedSizMinWidth="unset"
                    typeTextStateSelectedSizAlignSelf="stretch"
                    labelFontWeight="500"
                    labelLineHeight="20px"
                    labelColor="#eee"
                    labelDisplay="inline-block"
                    labelWidth="unset"
                    labelPaddingRight="unset"
                    labelFlex="1"
                  />
                  <TypeTextStateSelectedSiz
                    label="IBC Transfer to Osmosis Using Keplr Wallet"
                    typeTextStateSelectedSizPadding="8px 12px"
                    typeTextStateSelectedSizBackgroundColor="unset"
                    typeTextStateSelectedSizWidth="unset"
                    typeTextStateSelectedSizBorder="unset"
                    typeTextStateSelectedSizOutline="unset"
                    typeTextStateSelectedSizHeight="unset"
                    typeTextStateSelectedSizFontFamily="unset"
                    typeTextStateSelectedSizFontWeight="unset"
                    typeTextStateSelectedSizFontSize="unset"
                    typeTextStateSelectedSizColor="unset"
                    typeTextStateSelectedSizMinWidth="unset"
                    typeTextStateSelectedSizAlignSelf="stretch"
                    labelFontWeight="unset"
                    labelLineHeight="20px"
                    labelColor="#868991"
                    labelDisplay="inline-block"
                    labelWidth="unset"
                    labelPaddingRight="unset"
                    labelFlex="1"
                  />
                  <TypeTextStateSelectedSiz
                    label="IBC Smart Contract Call Tutorial"
                    typeTextStateSelectedSizPadding="8px 12px"
                    typeTextStateSelectedSizBackgroundColor="unset"
                    typeTextStateSelectedSizWidth="unset"
                    typeTextStateSelectedSizBorder="unset"
                    typeTextStateSelectedSizOutline="unset"
                    typeTextStateSelectedSizHeight="unset"
                    typeTextStateSelectedSizFontFamily="unset"
                    typeTextStateSelectedSizFontWeight="unset"
                    typeTextStateSelectedSizFontSize="unset"
                    typeTextStateSelectedSizColor="unset"
                    typeTextStateSelectedSizMinWidth="unset"
                    typeTextStateSelectedSizAlignSelf="stretch"
                    labelFontWeight="unset"
                    labelLineHeight="20px"
                    labelColor="#868991"
                    labelDisplay="inline-block"
                    labelWidth="unset"
                    labelPaddingRight="unset"
                    labelFlex="1"
                  />
                  <TypeTextStateSelectedSiz
                    label="IBC WASM Transfer Tutorial"
                    typeTextStateSelectedSizPadding="8px 12px"
                    typeTextStateSelectedSizBackgroundColor="unset"
                    typeTextStateSelectedSizWidth="unset"
                    typeTextStateSelectedSizBorder="unset"
                    typeTextStateSelectedSizOutline="unset"
                    typeTextStateSelectedSizHeight="unset"
                    typeTextStateSelectedSizFontFamily="unset"
                    typeTextStateSelectedSizFontWeight="unset"
                    typeTextStateSelectedSizFontSize="unset"
                    typeTextStateSelectedSizColor="unset"
                    typeTextStateSelectedSizMinWidth="unset"
                    typeTextStateSelectedSizAlignSelf="stretch"
                    labelFontWeight="unset"
                    labelLineHeight="20px"
                    labelColor="#868991"
                    labelDisplay="inline-block"
                    labelWidth="unset"
                    labelPaddingRight="unset"
                    labelFlex="unset"
                  />
                  <TypeTextStateSelectedSiz
                    label="IBC Transfer Using CLI"
                    typeTextStateSelectedSizPadding="8px 12px"
                    typeTextStateSelectedSizBackgroundColor="unset"
                    typeTextStateSelectedSizWidth="unset"
                    typeTextStateSelectedSizBorder="unset"
                    typeTextStateSelectedSizOutline="unset"
                    typeTextStateSelectedSizHeight="unset"
                    typeTextStateSelectedSizFontFamily="unset"
                    typeTextStateSelectedSizFontWeight="unset"
                    typeTextStateSelectedSizFontSize="unset"
                    typeTextStateSelectedSizColor="unset"
                    typeTextStateSelectedSizMinWidth="unset"
                    typeTextStateSelectedSizAlignSelf="stretch"
                    labelFontWeight="unset"
                    labelLineHeight="20px"
                    labelColor="#868991"
                    labelDisplay="inline-block"
                    labelWidth="unset"
                    labelPaddingRight="unset"
                    labelFlex="unset"
                  />
                </div>
              </div>
            </div>
          </div>
          <TypeDropdownStateExpanded
            label="Modules"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <TypeDropdownStateExpanded
            label="Validator"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <TypeDropdownStateExpanded
            label="API"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <TypeDropdownStateExpanded
            label="Tools/Ecosystem"
            iconArrow="/iconarrow2.svg"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-3 z-[7]">
            <TypeTextStateSelectedSiz
              label="Wallets"
              typeTextStateSelectedSizPadding="8px 12px"
              typeTextStateSelectedSizBackgroundColor="unset"
              typeTextStateSelectedSizWidth="unset"
              typeTextStateSelectedSizBorder="unset"
              typeTextStateSelectedSizOutline="unset"
              typeTextStateSelectedSizHeight="unset"
              typeTextStateSelectedSizFontFamily="unset"
              typeTextStateSelectedSizFontWeight="unset"
              typeTextStateSelectedSizFontSize="unset"
              typeTextStateSelectedSizColor="unset"
              typeTextStateSelectedSizMinWidth="unset"
              typeTextStateSelectedSizAlignSelf="stretch"
              labelFontWeight="unset"
              labelLineHeight="20px"
              labelColor="#868991"
              labelDisplay="inline-block"
              labelWidth="unset"
              labelPaddingRight="unset"
              labelFlex="unset"
            />
            <TypeTextStateSelectedSiz
              label="Faucet"
              typeTextStateSelectedSizPadding="8px 12px"
              typeTextStateSelectedSizBackgroundColor="unset"
              typeTextStateSelectedSizWidth="unset"
              typeTextStateSelectedSizBorder="unset"
              typeTextStateSelectedSizOutline="unset"
              typeTextStateSelectedSizHeight="unset"
              typeTextStateSelectedSizFontFamily="unset"
              typeTextStateSelectedSizFontWeight="unset"
              typeTextStateSelectedSizFontSize="unset"
              typeTextStateSelectedSizColor="unset"
              typeTextStateSelectedSizMinWidth="unset"
              typeTextStateSelectedSizAlignSelf="stretch"
              labelFontWeight="unset"
              labelLineHeight="20px"
              labelColor="#868991"
              labelDisplay="inline-block"
              labelWidth="unset"
              labelPaddingRight="unset"
              labelFlex="unset"
            />
            <TypeTextStateSelectedSiz
              label="Block Explorer"
              typeTextStateSelectedSizPadding="8px 12px"
              typeTextStateSelectedSizBackgroundColor="unset"
              typeTextStateSelectedSizWidth="unset"
              typeTextStateSelectedSizBorder="unset"
              typeTextStateSelectedSizOutline="unset"
              typeTextStateSelectedSizHeight="unset"
              typeTextStateSelectedSizFontFamily="unset"
              typeTextStateSelectedSizFontWeight="unset"
              typeTextStateSelectedSizFontSize="unset"
              typeTextStateSelectedSizColor="unset"
              typeTextStateSelectedSizMinWidth="unset"
              typeTextStateSelectedSizAlignSelf="stretch"
              labelFontWeight="unset"
              labelLineHeight="20px"
              labelColor="#868991"
              labelDisplay="inline-block"
              labelWidth="unset"
              labelPaddingRight="unset"
              labelFlex="unset"
            />
          </div>
          <TypeDropdownStateExpanded
            label="Help"
            iconArrow="/iconarrow2.svg"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="unset"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-3 z-[9]">
            <TypeTextStateSelectedSiz
              label="FAQ"
              typeTextStateSelectedSizPadding="8px 12px"
              typeTextStateSelectedSizBackgroundColor="unset"
              typeTextStateSelectedSizWidth="unset"
              typeTextStateSelectedSizBorder="unset"
              typeTextStateSelectedSizOutline="unset"
              typeTextStateSelectedSizHeight="unset"
              typeTextStateSelectedSizFontFamily="unset"
              typeTextStateSelectedSizFontWeight="unset"
              typeTextStateSelectedSizFontSize="unset"
              typeTextStateSelectedSizColor="unset"
              typeTextStateSelectedSizMinWidth="unset"
              typeTextStateSelectedSizAlignSelf="stretch"
              labelFontWeight="unset"
              labelLineHeight="20px"
              labelColor="#868991"
              labelDisplay="inline-block"
              labelWidth="unset"
              labelPaddingRight="unset"
              labelFlex="unset"
            />
            <TypeTextStateSelectedSiz
              label="Useful Links"
              typeTextStateSelectedSizPadding="8px 12px"
              typeTextStateSelectedSizBackgroundColor="unset"
              typeTextStateSelectedSizWidth="unset"
              typeTextStateSelectedSizBorder="unset"
              typeTextStateSelectedSizOutline="unset"
              typeTextStateSelectedSizHeight="unset"
              typeTextStateSelectedSizFontFamily="unset"
              typeTextStateSelectedSizFontWeight="unset"
              typeTextStateSelectedSizFontSize="unset"
              typeTextStateSelectedSizColor="unset"
              typeTextStateSelectedSizMinWidth="unset"
              typeTextStateSelectedSizAlignSelf="stretch"
              labelFontWeight="unset"
              labelLineHeight="20px"
              labelColor="#868991"
              labelDisplay="inline-block"
              labelWidth="unset"
              labelPaddingRight="unset"
              labelFlex="unset"
            />
          </div>
          <TypeDropdownStateExpanded
            label="Bug Bounty"
            iconArrow="/iconlink-11.svg"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="4px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="unset"
          />
          <div className="w-1.5 absolute !m-[0] top-[24px] left-[265px] h-8 z-[11]">
            <div className="absolute top-[0px] left-[0px] rounded-md bg-shades-dark-2 w-1.5 h-8" />
          </div>
        </div>
        <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-shades-dark-1" />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="w-[896px] flex flex-col items-start justify-start pt-6 px-10 pb-20 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
              <div className="self-stretch relative tracking-[-0.02em] leading-[40px] font-medium text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                IBC Channels
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-base font-overline-footer">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                      <span>
                        Here is a list of our IBC Channels our relayers have
                        opened. The source of truth for active channels is the
                        Cosmos Chain Registry: 
                      </span>
                      <a
                        className="text-primary-green"
                        href="https://github.com/cosmos/chain-registry/tree/master/_IBC"
                        target="_blank"
                      >
                        <span>
                          https://github.com/cosmos/chain-registry/tree/master/_IBC
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[12px] text-lg text-primary-off-white font-regular-label">
                  <div className="w-[402px] rounded-xl [background:linear-gradient(90deg,_rgba(69,_69,_69,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[2px_0px_8px_rgba(0,_0,_0,_0.16)_inset] [backdrop-filter:blur(10px)] flex flex-row items-center justify-start p-6 box-border relative gap-[20px]">
                    <img
                      className="w-14 relative rounded-xl h-14 overflow-hidden shrink-0 z-[0]"
                      alt=""
                      src="/band-logo.svg"
                    />
                    <div className="flex-1 flex flex-col items-start justify-start gap-[8px] z-[1]">
                      <div className="self-stretch relative tracking-[-0.02em] leading-[22px] font-medium">
                        Osmosis
                      </div>
                      <TypeLinkStateDefault
                        label="Details"
                        typeLinkStateDefaultAlignSelf="stretch"
                        labelLineHeight="20px"
                        labelColor="unset"
                        labelBackground="linear-gradient(180deg, #25d695, #046c45)"
                        labelWebkitBackgroundClip="unset"
                        labelWebkitTextFillColor="unset"
                      />
                    </div>
                    <div className="w-0.5 absolute !m-[0] bottom-[23px] left-[0px] box-border h-[42px] z-[2] border-r-[1px] border-solid border-mediumseagreen-400" />
                    <div className="w-0.5 absolute !m-[0] top-[calc(50%_-_43px)] right-[-1.3px] box-border h-[42px] z-[3] border-r-[1px] border-solid border-mediumseagreen-400" />
                    <div className="w-[242px] absolute !m-[0] top-[0px] left-[23px] box-border h-0.5 z-[4] border-t-[1px] border-solid border-mediumseagreen-400" />
                    <div className="w-[242px] absolute !m-[0] right-[23px] bottom-[-1px] box-border h-0.5 z-[5] border-t-[1px] border-solid border-mediumseagreen-400" />
                  </div>
                  <ContainerCard
                    iconId="/axelar-logo.svg"
                    blockchainNetworkLogo="Axelar"
                  />
                  <ContainerCard
                    iconId="/evmos-logo.svg"
                    blockchainNetworkLogo="Evmos"
                  />
                  <ContainerCard
                    iconId="/gravity-logo.svg"
                    blockchainNetworkLogo="GravityBridge"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[896px] flex flex-row items-start justify-start p-10 box-border gap-[40px] text-xs font-overline-footer">
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-start justify-start p-4 opacity-[0]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                  PREVIOUS
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
                  Smart Contracts
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-end justify-start p-4 text-right">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                  NEXT
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
                  IBC Transfer to Osmosis Using Keplr Wallet
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-[1.5px] relative box-border opacity-[0] border-r-[1.5px] border-solid border-shades-dark-1" />
        <div className="w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border opacity-[0] text-sm">
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0 text-primary-green">
            <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
              Transfer funds with CLI
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-3">
            <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
              <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                Create multisig account and issue an asset
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-3">
            <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
              <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                Grant permission to an address to perform transactions on behalf
                of the multisig account
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-3">
            <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
              <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                Creating and managing a Multisig using a UI instead of CLI
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1441px] relative box-border h-px border-t-[1px] border-solid border-shades-dark-1" />
      <BottomFooter imageDimensionsCode="/lumina-screen@2x.png" />
    </div>
  );
};

export default IBCChannels;
