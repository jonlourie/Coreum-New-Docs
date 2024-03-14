import type { NextPage } from "next";
import NavBar1 from "../components/nav-bar1";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import Card2 from "../components/card2";
import Card1 from "../components/card1";
import Footer1 from "../components/footer1";

const RunCoreumNode: NextPage = () => {
  return (
    <div className="w-full relative bg-shades-solid flex flex-col items-start justify-start tracking-[normal]">
      <NavBar1 />
      <main className="self-stretch flex flex-row items-start justify-start max-w-full mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
        <div className="w-[276px] overflow-hidden shrink-0 flex flex-col items-end justify-start py-6 pr-1.5 pl-[26px] box-border relative mq1050:hidden mq1050:pt-5 mq1050:pb-5 mq1050:box-border">
          <TypeDropdownStateExpanded
            label="Overview"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <TypeDropdownStateExpanded
            label="Tutorials"
            iconArrow="/iconarrow-1.svg"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="#17191e"
            labelLineHeight="24px"
            labelColor="#eee"
            labelFontWeight="500"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <div className="self-stretch flex flex-col items-end justify-start py-2 pr-0 pl-4">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[7px] border-l-[1px] border-solid border-shades-dark-1">
              <TypeDropdownStateExpanded
                label="Get Started"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="8px 8px 8px 12px"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="20px"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="20px"
              />
              <TypeDropdownStateExpanded
                label="Use Tokens"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="8px 8px 8px 12px"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="20px"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="20px"
              />
              <TypeDropdownStateExpanded
                label="Integrate Coreum"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="8px 8px 8px 12px"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="20px"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="20px"
              />
              <TypeDropdownStateExpanded
                label="Build Apps"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="8px 8px 8px 12px"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="20px"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="20px"
              />
              <TypeDropdownStateExpanded
                label="IBC"
                iconArrow="/iconarrow-3@2x.png"
                typeDropdownStateExpandedPadding="8px 8px 8px 12px"
                typeDropdownStateExpandedAlignSelf="stretch"
                typeDropdownStateExpandedGap="20px"
                typeDropdownStateExpandedBackgroundColor="unset"
                labelLineHeight="20px"
                labelColor="#868991"
                labelFontWeight="unset"
                labelFlex="unset"
                iconArrowWidth="20px"
                iconArrowHeight="20px"
                iconArrowMinHeight="20px"
              />
              <div className="self-stretch flex flex-col items-end justify-start py-2 pr-0 pl-4">
                <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-[7px] border-l-[1px] border-solid border-shades-dark-1">
                  <TypeTextStateSelectedSiz
                    label="IBC Channels"
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
                    labelDisplay="flex"
                    labelWidth="106px"
                    labelPaddingRight="20px"
                    labelFlex="unset"
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
                    typeTextStateSelectedSizPadding="8px 8px 8px 12px"
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
                    typeTextStateSelectedSizAlignSelf="unset"
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
                    typeTextStateSelectedSizPadding="8px 41px 8px 12px"
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
                    typeTextStateSelectedSizAlignSelf="unset"
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
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <TypeDropdownStateExpanded
            label="Validator"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <TypeDropdownStateExpanded
            label="API"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <TypeDropdownStateExpanded
            label="Tools/Ecosystem"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
          <TypeDropdownStateExpanded
            label="Help"
            iconArrow="/iconarrow-2@2x.png"
            typeDropdownStateExpandedPadding="12px 8px 12px 12px"
            typeDropdownStateExpandedAlignSelf="stretch"
            typeDropdownStateExpandedGap="20px"
            typeDropdownStateExpandedBackgroundColor="unset"
            labelLineHeight="24px"
            labelColor="#868991"
            labelFontWeight="unset"
            labelFlex="unset"
            iconArrowWidth="24px"
            iconArrowHeight="24px"
            iconArrowMinHeight="24px"
          />
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
            iconArrowMinHeight="24px"
          />
          <div className="w-1.5 h-8 absolute !m-[0] top-[25px] left-[264px]">
            <div className="absolute top-[0px] left-[0px] rounded-md bg-shades-dark-2 w-full h-full" />
          </div>
        </div>
        <div className="h-[2846px] flex flex-row items-start justify-start mq1050:hidden">
          <div className="self-stretch w-px relative box-border opacity-[0] border-r-[1.5px] border-solid border-shades-dark-1" />
          <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-shades-dark-1" />
        </div>
        <section className="flex-1 flex flex-col items-start justify-start gap-[80px] max-w-[calc(100%_-_276px)] text-left text-5xl text-primary-off-white font-regular-label lg:gap-[40px_80px] mq750:gap-[20px_80px] mq1050:max-w-full">
          <div className="self-stretch flex flex-row items-start justify-end py-0 pr-0 pl-10 box-border max-w-full text-base text-shades-light">
            <div className="w-[1124px] flex flex-row flex-wrap items-start justify-start gap-[36px] max-w-full mq750:gap-[18px]">
              <div className="flex-1 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border max-w-full mq750:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px_40px]">
                  <h1 className="m-0 self-stretch relative text-13xl tracking-[-0.02em] leading-[40px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
                    Coreum Tutorials
                  </h1>
                  <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full text-5xl text-primary-off-white">
                    <h3 className="m-0 w-[149px] relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit inline-block whitespace-nowrap box-border pr-5 mq450:text-lgi mq450:leading-[24px]">
                      Get started
                    </h3>
                    <div className="self-stretch h-[156px] flex flex-row flex-wrap items-start justify-start relative gap-[12px_4px] max-w-full mq450:h-auto mq450:min-h-[156]">
                      <Card2 />
                      <input
                        className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[0px] left-[414px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
                        placeholder="Set up CLI Network Variables"
                        type="text"
                      />
                      <input
                        className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[84px] left-[0px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
                        placeholder="Install cored"
                        type="text"
                      />
                    </div>
                  </div>
                  <Card1 cLILogo="/cli-logo.svg" cLI="CLI:" />
                  <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full font-overline-footer">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[8px] mq450:flex-wrap">
                      <div className="h-9 w-9 relative overflow-hidden shrink-0">
                        <img
                          className="absolute h-3/6 w-full top-[25%] right-[0%] bottom-[25%] left-[0%] max-w-full overflow-hidden max-h-full object-cover"
                          loading="lazy"
                          alt=""
                          src="/image-25@2x.png"
                        />
                      </div>
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        Golang:
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[12px_8px] min-h-[156px] max-w-full">
                      <input
                        className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
                        placeholder="Transfer funds with Golang"
                        type="text"
                      />
                      <input
                        className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
                        placeholder="Create and manage my first FT with Golang"
                        type="text"
                      />
                      <button className="cursor-pointer [border:none] p-6 bg-shades-pitch w-[402px] rounded-xl flex flex-col items-start justify-start box-border max-w-full">
                        <div className="self-stretch flex flex-col items-start justify-start max-w-full">
                          <div className="relative text-base tracking-[-0.02em] leading-[24px] font-medium font-regular-label text-primary-dim text-left inline-block max-w-full">
                            Create and manage my first NFT with Golang
                          </div>
                        </div>
                      </button>
                    </div>
                  </div>
                  <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full font-overline-footer">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[8px] mq450:flex-wrap">
                      <img
                        className="h-9 w-9 relative overflow-hidden shrink-0 object-cover"
                        loading="lazy"
                        alt=""
                        src="/cli-logo-1@2x.png"
                      />
                      <div className="relative tracking-[-0.01em] leading-[28px]">
                        TS/JS:
                      </div>
                    </div>
                    <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[12px_8px] min-h-[180px] max-w-full">
                      <input
                        className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
                        placeholder="Transfer funds with Typescript"
                        type="text"
                      />
                      <input
                        className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
                        placeholder="Using CosmJS"
                        type="text"
                      />
                      <input
                        className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-24 rounded-xl flex flex-col items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim max-w-full"
                        placeholder="Using coreum-js - js sdk to interact with Coreum network"
                        type="text"
                      />
                    </div>
                  </div>
                  <Card1
                    cLILogo="/cli-logo-2.svg"
                    cLI="WASM:"
                    ledgerNanoWithCLISupportA="Using CosmJS with WASM contracts"
                    propWidth="unset"
                    propWidth4="354px"
                  />
                </div>
              </div>
              <div className="h-[272px] w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border opacity-[0] z-[1] text-sm">
                <div className="self-stretch h-9 rounded-lg flex flex-row items-center justify-start py-2 px-0 box-border text-primary-green">
                  <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                    Transfer funds with CLI
                  </div>
                </div>
                <div className="self-stretch h-14 flex flex-col items-start justify-start py-0 px-3 box-border">
                  <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
                    <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                      Create multisig account and issue an asset
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-col items-start justify-start py-0 px-3">
                  <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
                    <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                      Grant permission to an address to perform transactions on
                      behalf of the multisig account
                    </div>
                  </div>
                </div>
                <div className="self-stretch h-14 flex flex-col items-start justify-start py-0 px-3 box-border">
                  <div className="self-stretch flex-1 rounded-lg flex flex-row items-center justify-start py-2 px-0">
                    <div className="self-stretch flex-1 relative tracking-[-0.01em] leading-[20px] flex items-center">
                      Creating and managing a Multisig using a UI instead of CLI
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[896px] flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
            <div className="flex-1 rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
                Use Tokens
              </h3>
              <form className="m-0 self-stretch h-60 flex flex-row flex-wrap items-start justify-start relative gap-[12px_4px] max-w-full mq450:h-auto mq450:min-h-[240]">
                <button className="cursor-pointer [border:none] pt-px pb-0 pr-3 pl-px bg-[transparent] w-[402px] !m-[0] absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(90deg,_rgba(69,_69,_69,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[2px_0px_8px_rgba(0,_0,_0,_0.16)_inset] [backdrop-filter:blur(10px)] flex flex-col items-end justify-start box-border gap-[11.5px] min-h-[72px] max-w-full">
                  <div className="self-stretch h-0 flex flex-row items-start justify-start py-0 px-[11px] box-border">
                    <div className="h-0.5 w-60 relative box-border border-t-[1px] border-solid border-mediumseagreen-400" />
                  </div>
                  <div className="mr-[-12.300000000000182px] w-[401.3px] flex flex-row items-start justify-start gap-[23.65000000000009px] max-w-[103%] shrink-0 mq450:flex-wrap">
                    <div className="h-12 flex flex-col items-start justify-start pt-6 px-0 pb-0 box-border">
                      <div className="w-0.5 h-6 relative box-border border-r-[1px] border-solid border-mediumseagreen-400" />
                    </div>
                    <div className="flex-1 flex flex-col items-start justify-start pt-3 px-0 pb-0 box-border min-w-[230px] max-w-full">
                      <div className="self-stretch relative text-base tracking-[-0.02em] leading-[24px] font-medium font-regular-label text-primary-off-white text-left">
                        Create and manage my first FT with CLI
                      </div>
                    </div>
                    <div className="h-6 w-0.5 relative box-border border-r-[1px] border-solid border-mediumseagreen-400" />
                  </div>
                  <div className="w-60 h-0.5 absolute !m-[0] right-[10px] bottom-[-2px] box-border border-t-[1px] border-solid border-mediumseagreen-400" />
                </button>
                <input
                  className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[0px] left-[414px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
                  placeholder="Create and manage my first FT with Golang"
                  type="text"
                />
                <input
                  className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[84px] left-[0px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
                  placeholder="Create and manage my first NFT with CLI"
                  type="text"
                />
                <button className="cursor-pointer [border:none] py-6 pr-[49px] pl-6 bg-shades-pitch !m-[0] absolute top-[84px] left-[414px] rounded-xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-darkslategray-200">
                  <div className="relative text-base tracking-[-0.02em] leading-[24px] font-medium font-regular-label text-primary-dim text-left">
                    Create and manage my first NFT with Golang
                  </div>
                </button>
                <input
                  className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[168px] left-[0px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
                  placeholder="Smart FT with WASM"
                  type="text"
                />
                <input
                  className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[168px] left-[414px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
                  placeholder="Create and send FT with coreum-js"
                  type="text"
                />
              </form>
            </div>
          </div>
          <div className="w-[896px] flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
            <div className="flex-1 rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
                Integrate Coreum
              </h3>
              <div className="self-stretch h-[156px] flex flex-row flex-wrap items-start justify-start relative gap-[12px_4px] max-w-full mq450:h-auto mq450:min-h-[156]">
                <Card2 />
                <input
                  className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[0px] left-[414px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
                  placeholder="Wallet integration"
                  type="text"
                />
                <input
                  className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[84px] left-[0px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
                  placeholder="Explorer API - Beta"
                  type="text"
                />
                <input
                  className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[84px] left-[414px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
                  placeholder="Gas Price"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="w-[896px] flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
            <div className="flex-1 rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
                Build Apps
              </h3>
              <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 pr-2 pl-0 box-border gap-[12px_4px] max-w-full text-base text-primary-dim">
                <div className="flex-1 rounded-xl [background:linear-gradient(90deg,_rgba(69,_69,_69,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[2px_0px_8px_rgba(0,_0,_0,_0.16)_inset] [backdrop-filter:blur(10px)] flex flex-row items-start justify-start pt-px pb-0 pr-0 pl-px box-border gap-[11.650000000000093px] min-w-[161px] max-w-full mq450:flex-wrap mq450:pr-px mq450:pb-px mq450:box-border">
                  <div className="h-[59px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border">
                    <div className="w-0.5 h-6 relative box-border border-r-[1px] border-solid border-mediumseagreen-400" />
                  </div>
                  <div className="h-[71px] flex-1 flex flex-col items-start justify-start gap-[23.5px] min-w-[246px] max-w-full">
                    <div className="w-60 h-0.5 relative box-border border-t-[1px] border-solid border-mediumseagreen-400" />
                    <input
                      className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-6 flex flex-row items-start justify-start py-0 px-3 box-border font-regular-label font-medium text-base text-primary-off-white min-w-[227px]"
                      placeholder="Web app"
                      type="text"
                    />
                    <div className="self-stretch h-0 flex flex-row items-start justify-end">
                      <div className="h-0.5 w-60 relative box-border border-t-[1px] border-solid border-mediumseagreen-400" />
                    </div>
                  </div>
                  <div className="h-[35px] w-[-0.3px] flex flex-col items-start justify-start pt-[11px] pb-0 px-0 box-border">
                    <div className="w-0.5 h-6 relative box-border border-r-[1px] border-solid border-mediumseagreen-400" />
                  </div>
                </div>
                <div className="flex-[0.8828] rounded-xl bg-shades-pitch flex flex-row items-start justify-start p-6 box-border min-w-[161px] max-w-full">
                  <div className="relative tracking-[-0.02em] leading-[24px] font-medium">
                    AMM
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[896px] flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
            <div className="flex-1 rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full">
              <h3 className="m-0 relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
                IBC
              </h3>
              <div className="self-stretch h-60 flex flex-row flex-wrap items-start justify-start relative gap-[12px_4px] max-w-full mq450:h-auto mq450:min-h-[240]">
                <Card2 />
                <input
                  className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[0px] left-[414px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
                  placeholder="IBC User Tutorials"
                  type="text"
                />
                <input
                  className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[84px] left-[0px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
                  placeholder="IBC WASM Transfer Tutorial"
                  type="text"
                />
                <input
                  className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[84px] left-[414px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
                  placeholder="IBC CLI Tutorial"
                  type="text"
                />
                <input
                  className="w-[402px] [border:none] [outline:none] bg-shades-pitch h-[72px] !m-[0] absolute top-[168px] left-[0px] rounded-xl flex flex-row items-start justify-start p-6 box-border font-regular-label font-medium text-base text-primary-dim"
                  placeholder="IBC Contracts Tutorial"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="w-[896px] flex flex-row flex-wrap items-start justify-start p-10 box-border gap-[40px] max-w-full z-[1] text-xs text-shades-light font-overline-footer mq450:gap-[20px]">
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-start justify-start p-4 box-border opacity-[0] min-w-[301px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch h-[18px] relative tracking-[-0.01em] leading-[18px] inline-block">
                  PREVIOUS
                </div>
                <div className="self-stretch h-[22px] relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green inline-block">
                  Smart Contracts
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-end justify-start p-4 box-border min-w-[301px] max-w-full text-right">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                  NEXT
                </div>
                <div className="relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
                  IBC Transfer to Osmosis Using Keplr Wallet
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer1 luminaScreen="/lumina-screen2@2x.png" />
    </div>
  );
};

export default RunCoreumNode;
