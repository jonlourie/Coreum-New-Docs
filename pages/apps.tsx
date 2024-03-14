import type { NextPage } from "next";
import Header from "../components/header";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import SmartContractContainer from "../components/smart-contract-container";
import FinancialInstitutionContainer from "../components/financial-institution-container";
import ISOConfirmationContainer from "../components/i-s-o-confirmation-container";
import BottomFooter from "../components/bottom-footer";

const Apps: NextPage = () => {
  return (
    <div className="relative bg-shades-solid w-full flex flex-col items-start justify-start text-left text-13xl text-shades-light font-regular-label">
      <Header />
      <div className="w-[1441px] relative box-border h-px border-t-[1px] border-solid border-shades-dark-1" />
      <div className="w-[1440px] flex flex-row items-start justify-start">
        <div className="w-[276px] h-[660px] overflow-hidden shrink-0 flex flex-col items-end justify-start py-6 px-4 box-border relative">
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
          <TypeTextStateSelectedSiz
            label="Apps"
            typeTextStateSelectedSizPadding="12px"
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
            labelFontWeight="unset"
            labelLineHeight="24px"
            labelColor="#eee"
            labelDisplay="inline-block"
            labelWidth="unset"
            labelPaddingRight="unset"
            labelFlex="unset"
          />
          <TypeDropdownStateExpanded
            label="Help"
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
          <div className="w-1.5 absolute !m-[0] top-[24px] left-[265px] h-8 z-[9]">
            <div className="absolute top-[0px] left-[0px] rounded-md bg-shades-dark-2 w-1.5 h-8" />
          </div>
        </div>
        <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-shades-dark-1" />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start pt-6 px-10 pb-20">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
              <div className="self-stretch relative tracking-[-0.02em] leading-[40px] font-medium text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Coreum Tools
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-base font-overline-footer">
                <div className="self-stretch flex flex-col items-start justify-start">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                      Here is a list of our tools that was developed for our
                      developers in the community
                    </div>
                  </div>
                </div>
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[12px] text-6xs-1 text-off-white-f3">
                  <div className="w-[400px] rounded-xl [background:linear-gradient(90deg,_rgba(69,_69,_69,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[2px_0px_8px_rgba(0,_0,_0,_0.16)_inset] [backdrop-filter:blur(10px)] overflow-hidden shrink-0 flex flex-col items-start justify-start relative">
                    <div className="self-stretch relative bg-shades-night h-60 overflow-hidden shrink-0 z-[0]">
                      <div className="absolute top-[40px] left-[40px] w-[624.8px] h-[495.9px]">
                        <img
                          className="absolute top-[0px] left-[0px] w-[38.9px] h-[495.9px]"
                          alt=""
                          src="/left-navigation.svg"
                        />
                        <div className="absolute top-[0px] left-[38.9px] w-[585.9px] h-[490.6px]">
                          <div className="absolute top-[120.2px] left-[7.5px] w-[191.8px] h-[125px] text-shades-light">
                            <div className="absolute top-[0px] left-[0px] rounded-10xs [background:linear-gradient(90deg,_#1d222c,_#161a1f_69.31%)] shadow-[-0.8px_0px_3.33px_rgba(0,_0,_0,_0.16)_inset] box-border w-[192.9px] h-[126.1px] border-[0.6px] border-solid border-gray-400" />
                            <div className="absolute top-[61.1px] left-[0px] box-border w-[192.2px] h-[0.4px] border-t-[0.4px] border-solid border-dark-3" />
                            <div className="absolute top-[68.1px] left-[7px] w-[151.1px] h-[50.3px]">
                              <div className="absolute top-[0px] left-[0px] w-[29px] h-[21.9px]">
                                <div className="absolute top-[0px] left-[0px] leading-[9.17px]">
                                  Validators
                                </div>
                                <div className="absolute top-[10.9px] left-[0px] text-6xs leading-[10.49px] font-semibold text-off-white-f3">
                                  100
                                </div>
                              </div>
                              <div className="absolute top-[28.4px] left-[0px] w-10 h-[21.9px]">
                                <div className="absolute top-[0px] left-[0px] leading-[9.17px]">
                                  Voting Power
                                </div>
                                <div className="absolute top-[10.9px] left-[0px] text-6xs leading-[10.49px] font-semibold text-off-white-f3">
                                  164,882,263
                                </div>
                              </div>
                              <div className="absolute top-[0px] left-[96.1px] w-[46px] h-[21.9px]">
                                <div className="absolute top-[0px] left-[0px] leading-[9.17px]">
                                  Voting Power %
                                </div>
                                <div className="absolute top-[10.9px] left-[0px] text-6xs leading-[10.49px] font-semibold text-off-white-f3">
                                  99.99%
                                </div>
                              </div>
                              <div className="absolute top-[28.4px] left-[96.1px] w-[55px] h-[21.9px]">
                                <div className="absolute top-[0px] left-[0px] leading-[9.17px]">
                                  Total Voting Power
                                </div>
                                <div className="absolute top-[10.9px] left-[0px] text-6xs leading-[10.49px] font-semibold text-off-white-f3">
                                  164,882,297
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[7px] left-[7px] text-4xs-7 leading-[13.11px] font-semibold text-white">
                              Online Voting Power
                            </div>
                            <div className="absolute top-[27.1px] left-[7px] w-[178.1px] h-[27.4px] text-right text-off-white-f3">
                              <img
                                className="absolute top-[0px] left-[0px] w-[177.8px] h-[9.6px]"
                                alt=""
                                src="/group-8516.svg"
                              />
                              <div className="absolute top-[11.3px] left-[0px] w-[178.1px] h-4">
                                <div className="absolute top-[4.8px] left-[120.1px] leading-[9.17px]">
                                  <span>
                                    <span className="font-semibold">
                                      272,513.54
                                    </span>
                                  </span>
                                  <span className="text-[4.4px] text-shades-carbon">
                                    <span>{` `}</span>
                                    <span>/ 500,000.00</span>
                                  </span>
                                </div>
                                <div className="absolute top-[0px] left-[0px] text-[10.5px] leading-[15.73px] font-semibold text-primary-green text-left [text-shadow:0px_0px_1.75px_rgba(37,_214,_149,_0.4)]">
                                  99.99%
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-[120.2px] left-[204.5px] w-[191.8px] h-[125px] text-7xs-2">
                            <div className="absolute top-[0px] left-[0px] rounded-10xs [background:linear-gradient(90deg,_#1d222c,_#161a1f_69.31%)] shadow-[-0.8px_0px_3.33px_rgba(0,_0,_0,_0.16)_inset] box-border w-[192.9px] h-[126.1px] border-[0.6px] border-solid border-gray-400" />
                            <img
                              className="absolute top-[27.1px] left-[64.7px] w-[62.5px] h-[62.5px]"
                              alt=""
                              src="/frame-6053.svg"
                            />
                            <div className="absolute top-[96.5px] left-[7px] w-14 h-[21.9px] text-6xs">
                              <div className="absolute top-[10.9px] left-[0px] leading-[10.49px]">
                                <span className="font-semibold">{`834,608,353 `}</span>
                                <span className="text-7xs-2 font-medium">
                                  CORE
                                </span>
                              </div>
                              <div className="absolute top-[0px] left-[0px] w-[40.6px] h-2.5 text-6xs-1 text-shades-light">
                                <div className="absolute top-[0px] left-[9.6px] leading-[9.17px]">
                                  Unbonded
                                </div>
                                <div className="absolute top-[0.9px] left-[0px] rounded-[50%] [background:linear-gradient(225deg,_#25d695,_#179b69)] w-[7px] h-[7px]" />
                              </div>
                            </div>
                            <div className="absolute top-[96.5px] left-[103.1px] w-14 h-[21.9px] text-6xs-1 text-shades-light">
                              <div className="absolute top-[0px] left-[0px] w-[32.6px] h-2.5">
                                <div className="absolute top-[0px] left-[9.6px] leading-[9.17px]">
                                  Bonded
                                </div>
                                <div className="absolute top-[0.9px] left-[0px] rounded-[50%] [background:linear-gradient(-45deg,_#01327a,_#004dc2_99%)] w-[7px] h-[7px]" />
                              </div>
                              <div className="absolute top-[10.9px] left-[0px] leading-[10.49px] text-off-white-f3 text-6xs">
                                <span className="font-semibold">{`164,882,297 `}</span>
                                <span className="text-7xs-2 font-medium">
                                  CORE
                                </span>
                              </div>
                            </div>
                            <div className="absolute top-[7px] left-[7px] text-4xs-7 leading-[13.11px] font-semibold text-white">
                              Tokenomics
                            </div>
                            <div className="absolute top-[74.7px] left-[127.2px] w-[20.1px] h-[11.4px] text-primary-green">
                              <div className="relative w-[20.1px] h-[11.4px] opacity-[0.25] flex items-center justify-center">
                                <img
                                  className="w-full h-full object-contain absolute left-[0px] top-[0px] [transform:scale(2.533)]"
                                  alt=""
                                  src="/union.svg"
                                />
                              </div>
                              <div className="absolute top-[1.7px] left-[7px] leading-[7.86px] font-medium [text-shadow:0px_0px_0.87px_rgba(37,_214,_149,_0.48)]">
                                75%
                              </div>
                            </div>
                            <div className="absolute top-[27.1px] left-[44.6px] w-[20.1px] h-[11.4px] text-dodgerblue">
                              <img
                                className="relative w-[20.1px] h-[11.4px] object-contain opacity-[0.5]"
                                alt=""
                                src="/union1@2x.png"
                              />
                              <div className="absolute top-[1.7px] left-[2.6px] leading-[7.86px] font-medium [text-shadow:0px_0px_0.87px_rgba(51,_121,_226,_0.48)]">
                                25%
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-[149.4px] left-[394.1px] w-[191.8px] h-[125px] text-shades-light">
                            <div className="absolute top-[0px] left-[0px] rounded-[1.75px] bg-dimgray-100 w-[191.8px] h-[125px]" />
                            <div className="absolute top-[96.6px] left-[6.9px] w-5 h-[21.9px]">
                              <div className="absolute top-[0px] left-[0px] leading-[9.17px]">
                                Height
                              </div>
                              <div className="absolute top-[10.9px] left-[0px] text-6xs leading-[10.49px] font-semibold text-off-white-f3">
                                961
                              </div>
                            </div>
                            <div className="absolute top-[96.6px] left-[103.1px] w-[75.4px] h-[21.9px]">
                              <div className="absolute top-[0px] left-[0px] leading-[9.17px]">
                                Proposer
                              </div>
                              <div className="absolute top-[10.9px] left-[0.4px] w-[75px] h-[11px] text-6xs text-yellow">
                                <div className="absolute top-[0px] left-[14px] leading-[10.49px]">
                                  Rockaway Blockc...
                                </div>
                                <img
                                  className="absolute top-[0px] left-[0px] rounded-[10.49px] w-[10.5px] h-[10.5px] object-cover"
                                  alt=""
                                  src="/profile-pic@2x.png"
                                />
                              </div>
                            </div>
                            <div className="absolute top-[7px] left-[6.9px] text-4xs-7 leading-[13.11px] font-semibold text-white">
                              Consensus
                            </div>
                            <div className="absolute top-[27.1px] left-[64.6px] w-[62.5px] h-[62.5px] overflow-hidden text-[7.9px] text-primary-green">
                              <img
                                className="absolute h-[82.88%] w-[82.88%] top-[6.4%] right-[6.56%] bottom-[10.72%] left-[10.56%] max-w-full overflow-hidden max-h-full"
                                alt=""
                                src="/group-8897.svg"
                              />
                              <div className="absolute top-[calc(50%_-_10.25px)] left-[calc(50%_-_11.55px)] leading-[11.8px] font-semibold [text-shadow:0px_0px_1.75px_rgba(37,_214,_149,_0.4)]">
                                Step 1
                              </div>
                              <div className="absolute top-[calc(50%_+_2.35px)] left-[calc(50%_-_9.85px)] text-7xs-2 leading-[7.86px] text-light-1">
                                Round 1
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-[279.6px] left-[0px] w-[290.3px] h-[211px] text-yellow">
                            <div className="absolute top-[0px] left-[0px] rounded-[1.75px] bg-shades-dark-3 w-[290.3px] h-[211px]" />
                            <img
                              className="absolute top-[27.1px] left-[0px] w-[290.3px] h-[21.8px]"
                              alt=""
                              src="/header-background.svg"
                            />
                            <div className="absolute top-[34.1px] left-[258px] w-[25.7px] h-[170.8px] text-right text-off-white-f3">
                              <div className="absolute top-[160.8px] left-[0px] leading-[9.17px]">
                                11m ago
                              </div>
                              <div className="absolute top-[137.6px] left-[0px] leading-[9.17px]">
                                12m ago
                              </div>
                              <div className="absolute top-[114.5px] left-[0px] leading-[9.17px]">
                                11m ago
                              </div>
                              <div className="absolute top-[91.3px] left-[0px] leading-[9.17px]">
                                10m ago
                              </div>
                              <div className="absolute top-[68.1px] left-[3.5px] leading-[9.17px]">
                                2m ago
                              </div>
                              <div className="absolute top-[45px] left-[3.5px] leading-[9.17px]">
                                1m ago
                              </div>
                              <div className="absolute top-[21.8px] left-[6.1px] leading-[9.17px]">
                                9s ago
                              </div>
                              <div className="absolute top-[0px] left-[12.6px] text-7xs-2 leading-[7.86px] uppercase text-grey-9">
                                Time
                              </div>
                            </div>
                            <div className="absolute top-[34.1px] left-[228.5px] w-[9.7px] h-[170.8px] text-right text-off-white-f3">
                              <div className="absolute top-[160.8px] left-[5.7px] leading-[9.17px]">
                                0
                              </div>
                              <div className="absolute top-[137.6px] left-[5.7px] leading-[9.17px]">
                                0
                              </div>
                              <div className="absolute top-[114.5px] left-[5.7px] leading-[9.17px]">
                                0
                              </div>
                              <div className="absolute top-[91.3px] left-[5.7px] leading-[9.17px]">
                                0
                              </div>
                              <div className="absolute top-[68.1px] left-[5.7px] leading-[9.17px]">
                                0
                              </div>
                              <div className="absolute top-[45px] left-[5.7px] leading-[9.17px]">
                                0
                              </div>
                              <div className="absolute top-[21.8px] left-[5.7px] leading-[9.17px]">
                                0
                              </div>
                              <div className="absolute top-[0px] left-[0px] text-7xs-2 leading-[7.86px] uppercase text-grey-9 text-left">
                                Txs
                              </div>
                            </div>
                            <div className="absolute top-[34.1px] left-[148.5px] w-[47px] h-[170.8px] text-off-white-f3">
                              <div className="absolute top-[160.8px] left-[0px] leading-[9.17px]">
                                {" "}
                                270AA7...6B6B4
                              </div>
                              <div className="absolute top-[137.6px] left-[0px] leading-[9.17px]">
                                498D1A...7F1B0
                              </div>
                              <div className="absolute top-[114.5px] left-[0px] leading-[9.17px]">
                                B672CF...D8206
                              </div>
                              <div className="absolute top-[91.3px] left-[0px] leading-[9.17px]">
                                6D7DD0...E6C4A
                              </div>
                              <div className="absolute top-[68.1px] left-[0px] leading-[9.17px]">
                                A95F46...A0603
                              </div>
                              <div className="absolute top-[45px] left-[0px] leading-[9.17px]">
                                8C7BD2...56941
                              </div>
                              <div className="absolute top-[21.8px] left-[0px] leading-[9.17px]">
                                6F2A68...8EEF7
                              </div>
                              <div className="absolute top-[0px] left-[0px] text-7xs-2 leading-[7.86px] uppercase text-grey-9">
                                Hash
                              </div>
                            </div>
                            <div className="absolute top-[194.9px] left-[52.4px] w-[29.2px] h-2.5">
                              <div className="absolute top-[0px] left-[12.2px] leading-[9.17px]">
                                AI Art
                              </div>
                              <img
                                className="absolute top-[0px] left-[0px] w-[8.7px] h-[8.7px] object-cover"
                                alt=""
                                src="/profile-pic1@2x.png"
                              />
                            </div>
                            <div className="absolute top-[171.7px] left-[52.4px] w-[55.2px] h-2.5">
                              <div className="absolute top-[0px] left-[0px] w-[55.2px] h-2.5">
                                <div className="absolute top-[0px] left-[12.2px] leading-[9.17px]">
                                  Hacker Drawer
                                </div>
                                <img
                                  className="absolute top-[0px] left-[0px] w-[8.7px] h-[8.7px] object-cover"
                                  alt=""
                                  src="/mask-group@2x.png"
                                />
                              </div>
                            </div>
                            <div className="absolute top-[148.6px] left-[52.4px] w-[46.2px] h-2.5">
                              <div className="absolute top-[0px] left-[12.2px] leading-[9.17px]">
                                GreeK_GOD
                              </div>
                              <img
                                className="absolute top-[0px] left-[0px] w-[8.7px] h-[8.7px] object-contain"
                                alt=""
                                src="/profile-pic2@2x.png"
                              />
                            </div>
                            <div className="absolute top-[125.4px] left-[52.4px] w-[67.2px] h-2.5">
                              <div className="absolute top-[0px] left-[12.2px] leading-[9.17px]">
                                Modern Art of Th...
                              </div>
                              <img
                                className="absolute top-[0px] left-[0px] w-[8.7px] h-[8.7px] object-cover"
                                alt=""
                                src="/profile-pic3@2x.png"
                              />
                            </div>
                            <div className="absolute top-[102.2px] left-[52.4px] w-[53.2px] h-2.5">
                              <div className="absolute top-[0px] left-[12.2px] leading-[9.17px]">
                                Abstractiozzzz
                              </div>
                              <img
                                className="absolute top-[0px] left-[0px] w-[8.7px] h-[8.7px] object-cover"
                                alt=""
                                src="/profile-pic4@2x.png"
                              />
                            </div>
                            <div className="absolute top-[79.1px] left-[52.4px] w-[46.2px] h-2.5">
                              <div className="absolute top-[0px] left-[12.2px] leading-[9.17px]">
                                Our_GalaxY
                              </div>
                              <img
                                className="absolute top-[0px] left-[0px] w-[8.7px] h-[8.7px] object-cover"
                                alt=""
                                src="/profile-pic5@2x.png"
                              />
                            </div>
                            <div className="absolute top-[55.9px] left-[52.4px] w-[66.2px] h-2.5">
                              <div className="absolute top-[0px] left-[12.2px] leading-[9.17px]">
                                Rockaway Blockc...
                              </div>
                              <img
                                className="absolute top-[0px] left-[0px] rounded-[10.49px] w-[8.7px] h-[8.7px] object-cover"
                                alt=""
                                src="/profile-pic6@2x.png"
                              />
                            </div>
                            <div className="absolute top-[34.1px] left-[52.4px] text-7xs-2 leading-[7.86px] uppercase text-grey-9">
                              Proposer
                            </div>
                            <div className="absolute top-[34.1px] left-[7px] w-5 h-[170.8px]">
                              <div className="absolute top-[160.8px] left-[0px] leading-[9.17px]">
                                1092
                              </div>
                              <div className="absolute top-[137.6px] left-[0px] leading-[9.17px]">
                                1091
                              </div>
                              <div className="absolute top-[114.5px] left-[0px] leading-[9.17px]">
                                1092
                              </div>
                              <div className="absolute top-[91.3px] left-[0px] leading-[9.17px]">
                                1093
                              </div>
                              <div className="absolute top-[68.1px] left-[0px] leading-[9.17px]">
                                1094
                              </div>
                              <div className="absolute top-[45px] left-[0px] leading-[9.17px]">
                                1095
                              </div>
                              <div className="absolute top-[21.8px] left-[0px] leading-[9.17px]">
                                1096
                              </div>
                              <div className="absolute top-[0px] left-[0px] text-7xs-2 leading-[7.86px] uppercase text-grey-9">
                                Height
                              </div>
                            </div>
                            <div className="absolute top-[187.9px] left-[0px] box-border w-[290.8px] h-[0.4px] border-t-[0.4px] border-solid border-gray-100" />
                            <div className="absolute top-[164.7px] left-[0px] box-border w-[290.8px] h-[0.4px] border-t-[0.4px] border-solid border-gray-100" />
                            <div className="absolute top-[141.6px] left-[0px] box-border w-[290.8px] h-[0.4px] border-t-[0.4px] border-solid border-gray-100" />
                            <div className="absolute top-[118.4px] left-[0px] box-border w-[290.8px] h-[0.4px] border-t-[0.4px] border-solid border-gray-100" />
                            <div className="absolute top-[95.3px] left-[0px] box-border w-[290.8px] h-[0.4px] border-t-[0.4px] border-solid border-gray-100" />
                            <div className="absolute top-[72.1px] left-[0px] box-border w-[290.8px] h-[0.4px] border-t-[0.4px] border-solid border-gray-100" />
                            <div className="absolute top-[11.4px] left-[255.8px] text-7xs-2 leading-[7.86px] font-semibold text-primary-green text-right">{`View All >>`}</div>
                            <div className="absolute top-[7px] left-[7px] text-4xs-7 leading-[13.11px] font-semibold text-white">
                              Latest Blocks
                            </div>
                          </div>
                          <div className="absolute top-[279.6px] left-[295.5px] w-[290.3px] h-[211px] text-right">
                            <div className="absolute top-[0px] left-[0px] rounded-[1.75px] bg-shades-dark-3 w-[290.3px] h-[211px]" />
                            <img
                              className="absolute top-[56.4px] left-[6.8px] w-[8.7px] h-[8.7px]"
                              alt=""
                              src="/icon-successful.svg"
                            />
                            <img
                              className="absolute top-[148.8px] left-[6.8px] w-[8.7px] h-[8.7px]"
                              alt=""
                              src="/icon-successful1.svg"
                            />
                            <img
                              className="absolute top-[79.3px] left-[6.8px] w-[8.7px] h-[8.7px]"
                              alt=""
                              src="/icon-successful2.svg"
                            />
                            <img
                              className="absolute top-[171.9px] left-[6.8px] w-[8.7px] h-[8.7px]"
                              alt=""
                              src="/icon-successful3.svg"
                            />
                            <img
                              className="absolute top-[102.5px] left-[6.8px] w-[8.7px] h-[8.7px]"
                              alt=""
                              src="/icon-successful4.svg"
                            />
                            <img
                              className="absolute top-[195.1px] left-[6.8px] w-[8.7px] h-[8.7px]"
                              alt=""
                              src="/icon-successful5.svg"
                            />
                            <img
                              className="absolute top-[125.6px] left-[6.8px] w-[8.7px] h-[8.7px]"
                              alt=""
                              src="/icon-successful6.svg"
                            />
                            <div className="absolute top-[187.9px] left-[0px] box-border w-[290.8px] h-[0.4px] border-t-[0.4px] border-solid border-gray-100" />
                            <div className="absolute top-[164.7px] left-[0px] box-border w-[290.8px] h-[0.4px] border-t-[0.4px] border-solid border-gray-100" />
                            <div className="absolute top-[141.6px] left-[0px] box-border w-[290.8px] h-[0.4px] border-t-[0.4px] border-solid border-gray-100" />
                            <div className="absolute top-[118.4px] left-[0px] box-border w-[290.8px] h-[0.4px] border-t-[0.4px] border-solid border-gray-100" />
                            <div className="absolute top-[95.3px] left-[0px] box-border w-[290.8px] h-[0.4px] border-t-[0.4px] border-solid border-gray-100" />
                            <div className="absolute top-[72.1px] left-[0px] box-border w-[290.8px] h-[0.4px] border-t-[0.4px] border-solid border-gray-100" />
                            <img
                              className="absolute top-[27.1px] left-[0px] w-[290.3px] h-[21.8px]"
                              alt=""
                              src="/header-background.svg"
                            />
                            <div className="absolute top-[34.1px] left-[258px] w-[25.7px] h-[170.8px]">
                              <div className="absolute top-[160.8px] left-[0px] leading-[9.17px]">
                                35m ago
                              </div>
                              <div className="absolute top-[137.6px] left-[0px] leading-[9.17px]">
                                32m ago
                              </div>
                              <div className="absolute top-[114.5px] left-[0px] leading-[9.17px]">
                                31m ago
                              </div>
                              <div className="absolute top-[91.3px] left-[0px] leading-[9.17px]">
                                30m ago
                              </div>
                              <div className="absolute top-[68.1px] left-[0px] leading-[9.17px]">
                                21m ago
                              </div>
                              <div className="absolute top-[45px] left-[0px] leading-[9.17px]">
                                17m ago
                              </div>
                              <div className="absolute top-[21.8px] left-[0px] leading-[9.17px]">
                                15m ago
                              </div>
                              <div className="absolute top-[0px] left-[12.7px] text-7xs-2 leading-[7.86px] uppercase text-grey-9">
                                Time
                              </div>
                            </div>
                            <div className="absolute top-[34.1px] left-[205.6px] w-[26.1px] h-[170.8px]">
                              <div className="absolute top-[160.8px] left-[0px] leading-[9.17px]">
                                <span>{`XXX `}</span>
                                <span className="text-7xs-2">CORE</span>
                              </div>
                              <div className="absolute top-[137.6px] left-[0px] leading-[9.17px]">
                                <span>{`XXX `}</span>
                                <span className="text-7xs-2">CORE</span>
                              </div>
                              <div className="absolute top-[114.5px] left-[0px] leading-[9.17px]">
                                <span>{`XXX `}</span>
                                <span className="text-7xs-2">CORE</span>
                              </div>
                              <div className="absolute top-[91.3px] left-[0px] leading-[9.17px]">
                                <span>{`XXX `}</span>
                                <span className="text-7xs-2">CORE</span>
                              </div>
                              <div className="absolute top-[68.1px] left-[0px] leading-[9.17px]">
                                <span>{`XXX `}</span>
                                <span className="text-7xs-2">CORE</span>
                              </div>
                              <div className="absolute top-[45px] left-[0px] leading-[9.17px]">
                                <span>{`XXX `}</span>
                                <span className="text-7xs-2">CORE</span>
                              </div>
                              <div className="absolute top-[21.8px] left-[0px] leading-[9.17px]">
                                <span>{`XXX `}</span>
                                <span className="text-7xs-2">CORE</span>
                              </div>
                              <div className="absolute top-[0px] left-[3.1px] text-7xs-2 leading-[7.86px] uppercase text-grey-9">
                                Amount
                              </div>
                            </div>
                            <div className="absolute top-[34.1px] left-[69.9px] w-[82px] h-[170.8px] text-left text-yellow">
                              <div className="absolute top-[160.8px] left-[0px] leading-[9.17px]">
                                118C0DDCC7A5D80...2DD94{" "}
                              </div>
                              <div className="absolute top-[137.6px] left-[0px] leading-[9.17px]">
                                44BC8E9CE704D6E...83DDD{" "}
                              </div>
                              <div className="absolute top-[114.5px] left-[0px] leading-[9.17px]">
                                6FE2CC540D952FE...0DE6C{" "}
                              </div>
                              <div className="absolute top-[91.3px] left-[0px] leading-[9.17px]">
                                C81639115354A37...A4522{" "}
                              </div>
                              <div className="absolute top-[68.1px] left-[0px] leading-[9.17px]">
                                8990BCBF652C6DB...E2822
                              </div>
                              <div className="absolute top-[45px] left-[0px] leading-[9.17px]">
                                EFA60D747EB5D78...13666
                              </div>
                              <div className="absolute top-[21.8px] left-[0px] leading-[9.17px]">
                                F9E5D3218498934...1E163
                              </div>
                              <div className="absolute top-[0px] left-[0px] text-7xs-2 leading-[7.86px] uppercase text-grey-9">
                                Hash
                              </div>
                            </div>
                            <div className="absolute top-[34.1px] left-[19.3px] w-5 h-[170.8px] text-left text-yellow">
                              <div className="absolute top-[160.8px] left-[0px] leading-[9.17px]">
                                977
                              </div>
                              <div className="absolute top-[137.6px] left-[0px] leading-[9.17px]">
                                978
                              </div>
                              <div className="absolute top-[114.5px] left-[0px] leading-[9.17px]">
                                979
                              </div>
                              <div className="absolute top-[91.3px] left-[0px] leading-[9.17px]">
                                980
                              </div>
                              <div className="absolute top-[68.1px] left-[0px] leading-[9.17px]">
                                981
                              </div>
                              <div className="absolute top-[45px] left-[0px] leading-[9.17px]">
                                982
                              </div>
                              <div className="absolute top-[21.8px] left-[0px] leading-[9.17px]">
                                983
                              </div>
                              <div className="absolute top-[0px] left-[0px] text-7xs-2 leading-[7.86px] uppercase text-grey-9">
                                Height
                              </div>
                            </div>
                            <div className="absolute top-[11.4px] left-[255.8px] text-7xs-2 leading-[7.86px] font-semibold text-primary-green">{`View All >>`}</div>
                            <div className="absolute top-[7px] left-[7.2px] text-4xs-7 leading-[13.11px] font-semibold text-white text-left">
                              Latest Transactions
                            </div>
                          </div>
                          <div className="absolute top-[0px] left-[7.5px] w-[388.8px] h-[112.7px] text-shades-light">
                            <div className="absolute top-[0px] left-[0px] rounded-10xs [background:linear-gradient(90deg,_#1d222c,_#161a1f_69.31%)] shadow-[-0.8px_0px_3.33px_rgba(0,_0,_0,_0.16)_inset] box-border w-[390px] h-[113.8px] border-[0.6px] border-solid border-gray-400" />
                            <div className="absolute top-[27.1px] left-[194.4px] box-border w-[0.4px] h-[78.6px] border-r-[0.4px] border-solid border-dark-3" />
                            <div className="absolute top-[27.1px] left-[204px] w-[162.1px] h-[78.7px]">
                              <div className="absolute top-[0px] left-[0px] w-10 h-[21.9px]">
                                <div className="absolute top-[0px] left-[0px] leading-[9.17px]">
                                  Market Cap
                                </div>
                                <div className="absolute top-[10.9px] left-[0px] text-6xs leading-[10.49px] font-semibold text-off-white-f3">
                                  $27,594,411
                                </div>
                              </div>
                              <div className="absolute top-[0px] left-[96.1px] w-[30px] h-[21.9px]">
                                <div className="absolute top-[0px] left-[0px] leading-[9.17px]">
                                  24h Vol
                                </div>
                                <div className="absolute top-[10.9px] left-[0px] text-6xs leading-[10.49px] font-semibold text-off-white-f3">
                                  $120,980
                                </div>
                              </div>
                              <div className="absolute top-[28.4px] left-[96.1px] w-[66px] h-[21.9px]">
                                <div className="absolute top-[0px] left-[0px] leading-[9.17px]">
                                  Supply
                                </div>
                                <div className="absolute top-[10.9px] left-[0px] leading-[10.49px] font-semibold text-off-white-f3 text-6xs">
                                  <span>{`100,000,000.00 `}</span>
                                  <span className="text-7xs-2">CORE</span>
                                </div>
                              </div>
                              <div className="absolute top-[56.8px] left-[96.1px] w-[21px] h-[21.9px]">
                                <div className="absolute top-[0px] left-[0px] leading-[9.17px]">
                                  APR%
                                </div>
                                <div className="absolute top-[10.9px] left-[0px] text-6xs leading-[10.49px] font-semibold text-off-white-f3">
                                  0.00%
                                </div>
                              </div>
                              <div className="absolute top-[28.4px] left-[0px] w-12 h-[21.9px]">
                                <div className="absolute top-[0px] left-[0px] leading-[9.17px]">
                                  Community Pool
                                </div>
                                <div className="absolute top-[10.9px] left-[0px] text-6xs leading-[10.49px] font-semibold text-off-white-f3">
                                  0
                                </div>
                              </div>
                              <div className="absolute top-[56.8px] left-[0px] w-[25px] h-[21.9px]">
                                <div className="absolute top-[0px] left-[0px] leading-[9.17px]">
                                  Inflation
                                </div>
                                <div className="absolute top-[10.9px] left-[0px] text-6xs leading-[10.49px] font-semibold text-off-white-f3">
                                  0
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[27.1px] left-[7px] w-[177.7px] h-[78.3px] text-right text-7xs-2 text-shades-carbon">
                              <div className="absolute top-[0px] left-[164.7px] w-[13px] h-[52.1px]">
                                <div className="absolute top-[0px] left-[0px] leading-[7.86px]">
                                  0.650
                                </div>
                                <div className="absolute top-[14.8px] left-[0px] leading-[7.86px]">
                                  0.600
                                </div>
                                <div className="absolute top-[29.3px] left-[0px] leading-[7.86px]">
                                  0.550
                                </div>
                                <div className="absolute top-[44.1px] left-[0px] leading-[7.86px]">
                                  0.500
                                </div>
                              </div>
                              <div className="absolute top-[0.4px] left-[0px] w-[161.2px] h-[77.9px] text-left">
                                <img
                                  className="absolute top-[0px] left-[0px] w-[161.2px] h-[66.4px] overflow-hidden object-cover"
                                  alt=""
                                  src="/main-graph@2x.png"
                                />
                                <div className="absolute top-[69.9px] left-[0px] w-[105.7px] h-2">
                                  <div className="absolute top-[0px] left-[0px] leading-[7.86px]">
                                    08:05
                                  </div>
                                  <div className="absolute top-[0px] left-[30.6px] leading-[7.86px]">
                                    08:10
                                  </div>
                                  <div className="absolute top-[0px] left-[61.1px] leading-[7.86px]">
                                    08:15
                                  </div>
                                  <div className="absolute top-[0px] left-[91.7px] leading-[7.86px]">
                                    08:20
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="absolute top-[7px] left-[7px] w-[123.6px] h-3.5 text-6xs text-white">
                              <div className="absolute top-[2.2px] left-[0px] w-[41px] h-[11px]">
                                <div className="absolute top-[0px] left-[14px] leading-[10.49px] capitalize font-medium">
                                  Coreum
                                </div>
                                <img
                                  className="absolute top-[0px] left-[0px] w-[10.5px] h-[10.5px] overflow-hidden"
                                  alt=""
                                  src="/original.svg"
                                />
                              </div>
                              <div className="absolute top-[0px] left-[65.1px] w-[58.5px] h-3.5 text-4xs-7">
                                <div className="absolute top-[0px] left-[0px] leading-[13.11px] font-semibold [text-shadow:0px_0px_1.75px_rgba(255,_255,_255,_0.4)]">
                                  $0.5405
                                </div>
                                <div className="absolute top-[1.7px] left-[35.4px] w-[23.2px] h-[9.6px] text-7xs-2 text-primary-green">
                                  <div className="absolute top-[0px] left-[0px] rounded-[1.75px] bg-primary-green w-[23.2px] h-[9.6px] opacity-[0.1]" />
                                  <div className="absolute top-[0.9px] left-[2.6px] leading-[7.86px] font-medium">
                                    +1.24%
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="absolute top-[31.5px] left-[394.1px] w-[191.8px] h-[34.1px]">
                            <div className="absolute top-[0px] left-[0px] rounded-[1.75px] [background:linear-gradient(110.16deg,_rgba(37,_214,_149,_0.15),_rgba(37,_214,_149,_0.05))] [backdrop-filter:blur(4.37px)] w-[191.8px] h-[34.1px]" />
                            <div className="absolute top-[13.5px] left-[6.9px] leading-[9.17px]">
                              Latest Block
                            </div>
                            <div className="absolute top-[10.4px] left-[147.2px] text-4xs-7 leading-[13.11px] font-semibold text-primary-green [text-shadow:0px_0px_1.75px_rgba(37,_214,_149,_0.4)]">
                              $120,980
                            </div>
                          </div>
                          <div className="absolute top-[70.8px] left-[394.1px] w-[191.8px] h-[34.1px]">
                            <div className="absolute top-[0px] left-[0px] rounded-[1.75px] [background:linear-gradient(110.16deg,_rgba(37,_214,_149,_0.15),_rgba(37,_214,_149,_0.05))] [backdrop-filter:blur(4.37px)] w-[191.8px] h-[34.1px]" />
                            <div className="absolute top-[13.5px] left-[6.9px] leading-[9.17px]">
                              Average Block Time
                            </div>
                            <div className="absolute top-[10.5px] left-[160.7px] text-4xs-7 leading-[13.11px] font-semibold text-primary-green [text-shadow:0px_0px_1.75px_rgba(37,_214,_149,_0.4)]">
                              6.72 s
                            </div>
                          </div>
                          <div className="absolute top-[110.1px] left-[394.1px] w-[191.8px] h-[34.1px]">
                            <div className="absolute top-[0px] left-[0px] rounded-[1.75px] [background:linear-gradient(110.16deg,_rgba(37,_214,_149,_0.15),_rgba(37,_214,_149,_0.05))] [backdrop-filter:blur(4.37px)] w-[191.8px] h-[34.1px]" />
                            <div className="absolute top-[13.5px] left-[6.9px] leading-[9.17px]">
                              Active Validators
                            </div>
                            <div className="absolute top-[13.5px] left-[169.9px] leading-[9.17px] font-medium text-light-1 text-right">
                              / 143
                            </div>
                            <div className="absolute top-[10.5px] left-[152.9px] text-4xs-7 leading-[13.11px] font-semibold text-primary-green [text-shadow:0px_0px_1.75px_rgba(37,_214,_149,_0.4)]">
                              100
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SmartContractContainer
                      featureDescription="Explorer"
                      smartContractDefinitionTe="Track all transactions and accounts on the network."
                      featureDescriptionText="Try Explorer"
                      propBorderRadius="unset"
                      propGap="24px"
                      propPadding="24px"
                      propGap1="8px"
                      propAlignSelf="stretch"
                    />
                    <div className="w-0.5 absolute !m-[0] bottom-[23px] left-[0px] box-border h-[242px] z-[2] border-r-[1px] border-solid border-mediumseagreen-400" />
                    <div className="w-0.5 absolute !m-[0] right-[-1.3px] bottom-[397px] box-border h-[242px] z-[3] border-r-[1px] border-solid border-mediumseagreen-400" />
                    <div className="w-[242px] absolute !m-[0] top-[0px] left-[23px] box-border h-0.5 z-[4] border-t-[1px] border-solid border-mediumseagreen-400" />
                    <div className="w-[242px] absolute !m-[0] right-[23px] bottom-[-1px] box-border h-0.5 z-[5] border-t-[1px] border-solid border-mediumseagreen-400" />
                  </div>
                  <div className="w-[400px] rounded-xl bg-shades-pitch overflow-hidden shrink-0 flex flex-col items-start justify-start">
                    <img
                      className="self-stretch relative max-w-full overflow-hidden h-60 shrink-0 object-cover"
                      alt=""
                      src="/img@2x.png"
                    />
                    <SmartContractContainer
                      featureDescription="Faucet"
                      smartContractDefinitionTe="Fund your testnet and devnet account for testing purposes."
                      featureDescriptionText="Open Faucet"
                      propBorderRadius="unset"
                      propGap="24px"
                      propPadding="24px"
                      propGap1="8px"
                      propAlignSelf="stretch"
                    />
                  </div>
                  <div className="w-[400px] rounded-xl bg-shades-pitch overflow-hidden shrink-0 flex flex-col items-start justify-start text-7xs-3 text-shades-light">
                    <div className="self-stretch relative bg-shades-night h-60 overflow-hidden shrink-0">
                      <div className="absolute top-[39.4px] left-[39.4px] rounded-10xs [background:linear-gradient(90deg,_#1d222c,_#161a1f_69.31%)] shadow-[-0.8px_0px_3.33px_rgba(0,_0,_0,_0.16)_inset] box-border w-[541.9px] h-[351px] overflow-hidden border-[0.6px] border-solid border-gray-400">
                        <img
                          className="absolute top-[162.4px] left-[0px] w-[187.5px] h-[187.5px] opacity-[0.35]"
                          alt=""
                          src="/frame-10200.svg"
                        />
                        <img
                          className="absolute top-[60.4px] left-[30px] rounded-[3.75px] w-[480.8px] h-[244.1px] object-cover"
                          alt=""
                          src="/screenshot-20231120-at-421-2@2x.png"
                        />
                        <img
                          className="absolute top-[11.3px] left-[15px] w-[44.6px] h-[9px]"
                          alt=""
                          src="/logo.svg"
                        />
                        <div className="absolute top-[9px] left-[460.1px] w-[65.6px] h-[13.5px] text-shades-dark-2">
                          <div className="absolute top-[0px] left-[0px] rounded-10xs [background:linear-gradient(225deg,_#25d695,_#179b69)] flex flex-row items-center justify-center py-[3px] pr-[9px] pl-[8.25px] gap-[3px]">
                            <img
                              className="w-[6.4px] relative h-[6.4px] overflow-hidden shrink-0 object-cover"
                              alt=""
                              src="/iconwallet1@2x.png"
                            />
                            <div className="relative leading-[7.5px] font-semibold">
                              Connect Wallet
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-[37.5px] left-[30px] rounded-10xs bg-gray-200 w-60 h-[13.9px] flex flex-row items-center justify-between text-center text-grey-9">
                          <div className="flex-1 relative h-[13.9px] text-left text-primary-green">
                            <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-10xs bg-mediumseagreen-300 flex flex-row items-center justify-center py-[3px] px-0 box-border gap-[2.25px]">
                              <img
                                className="w-1.5 relative h-1.5 overflow-hidden shrink-0"
                                alt=""
                                src="/icon-proposals.svg"
                              />
                              <div className="relative tracking-[-0.01em] leading-[7.88px] font-medium">
                                contract.rs
                              </div>
                            </div>
                          </div>
                          <img
                            className="w-0 relative h-[9.4px] object-contain hidden"
                            alt=""
                            src="/divider6.svg"
                          />
                          <div className="flex-1 relative h-[13.9px]">
                            <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-10xs flex flex-row items-center justify-center py-[3px] px-0 box-border gap-[2.25px]">
                              <img
                                className="w-1.5 relative h-1.5 overflow-hidden shrink-0"
                                alt=""
                                src="/icon-proposals1.svg"
                              />
                              <div className="relative tracking-[-0.01em] leading-[7.88px]">
                                state.rs
                              </div>
                            </div>
                          </div>
                          <img
                            className="w-[0.4px] relative max-w-full overflow-hidden h-[9.4px] object-contain"
                            alt=""
                            src="/divider7.svg"
                          />
                          <div className="flex-1 relative h-[13.9px]">
                            <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-10xs flex flex-row items-center justify-center py-[3px] px-0 box-border gap-[2.25px]">
                              <img
                                className="w-1.5 relative h-1.5 overflow-hidden shrink-0"
                                alt=""
                                src="/icon-proposals2.svg"
                              />
                              <div className="relative tracking-[-0.01em] leading-[7.88px]">
                                msg.rs
                              </div>
                            </div>
                          </div>
                          <img
                            className="w-[0.4px] relative max-w-full overflow-hidden h-[9.4px] object-contain"
                            alt=""
                            src="/divider7.svg"
                          />
                          <div className="flex-1 relative h-[13.9px]">
                            <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-10xs flex flex-row items-center justify-center py-[3px] px-0 box-border gap-[2.25px]">
                              <img
                                className="w-1.5 relative h-1.5 overflow-hidden shrink-0"
                                alt=""
                                src="/icon-proposals1.svg"
                              />
                              <div className="relative tracking-[-0.01em] leading-[7.88px]">
                                ilb.rs
                              </div>
                            </div>
                          </div>
                          <img
                            className="w-[0.4px] relative max-w-full overflow-hidden h-[9.4px] object-contain"
                            alt=""
                            src="/divider7.svg"
                          />
                          <div className="flex-1 relative h-[13.9px]">
                            <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-10xs flex flex-row items-center justify-center py-[3px] px-0 box-border gap-[2.25px]">
                              <img
                                className="w-1.5 relative h-1.5 overflow-hidden shrink-0"
                                alt=""
                                src="/icon-proposals2.svg"
                              />
                              <div className="relative tracking-[-0.01em] leading-[7.88px]">
                                Cargo.toml
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-[37.5px] left-[450.8px] w-[60px] h-[13.9px] text-white">
                          <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-10xs bg-mediumseagreen-200 box-border flex flex-row items-center justify-between py-[3px] pr-[3.75px] pl-[4.5px] border-[0.4px] border-solid border-primary-green">
                            <div className="relative leading-[7.88px] font-medium">
                              Smart Token
                            </div>
                            <img
                              className="w-[7.5px] relative h-[7.5px] object-contain"
                              alt=""
                              src="/iconarrow-inactive@2x.png"
                            />
                          </div>
                        </div>
                        <div className="absolute top-[313.5px] left-[calc(50%_-_111.79px)] flex flex-row items-start justify-start gap-[9px] text-center">
                          <div className="w-[37.5px] flex flex-col items-center justify-start gap-[1.5px]">
                            <div className="w-[18px] relative h-[18px]">
                              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm-5 bg-dark-3 flex flex-row items-center justify-start">
                                <img
                                  className="w-2 absolute !m-[0] top-[calc(50%_-_4px)] left-[calc(50%_-_4px)] h-2 object-cover z-[0]"
                                  alt=""
                                  src="/icon1@2x.png"
                                />
                              </div>
                            </div>
                            <div className="relative leading-[7.88px]">
                              Test
                            </div>
                          </div>
                          <div className="w-[37.5px] flex flex-col items-center justify-start gap-[1.5px]">
                            <div className="w-[18px] relative h-[18px]">
                              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm-5 bg-dark-3 flex flex-row items-center justify-start">
                                <img
                                  className="w-[44.44%] absolute !m-[0] h-[44.44%] top-[27.78%] right-[27.78%] bottom-[27.78%] left-[27.78%] max-w-full overflow-hidden max-h-full z-[0]"
                                  alt=""
                                  src="/icon2.svg"
                                />
                              </div>
                            </div>
                            <div className="relative leading-[7.88px]">
                              Compile
                            </div>
                          </div>
                          <div className="w-[37.5px] flex flex-col items-center justify-start gap-[1.5px]">
                            <div className="w-[18px] relative h-[18px]">
                              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm-5 bg-dark-3 flex flex-row items-center justify-start">
                                <img
                                  className="w-[44.44%] absolute !m-[0] h-[44.44%] top-[27.78%] right-[27.78%] bottom-[27.78%] left-[27.78%] max-w-full overflow-hidden max-h-full z-[0]"
                                  alt=""
                                  src="/icon3.svg"
                                />
                              </div>
                            </div>
                            <div className="relative leading-[7.88px]">
                              Generate
                            </div>
                          </div>
                          <div className="w-[37.5px] flex flex-col items-center justify-start gap-[1.5px]">
                            <div className="w-[18px] relative h-[18px]">
                              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm-5 bg-dark-3 flex flex-row items-center justify-start">
                                <img
                                  className="w-[44.44%] absolute !m-[0] h-[44.44%] top-[27.78%] right-[27.78%] bottom-[27.78%] left-[27.78%] max-w-full overflow-hidden max-h-full z-[0]"
                                  alt=""
                                  src="/icon4.svg"
                                />
                              </div>
                            </div>
                            <div className="relative leading-[7.88px]">
                              Deploy
                            </div>
                          </div>
                          <div className="w-[37.5px] flex flex-col items-center justify-start gap-[1.5px]">
                            <div className="w-[18px] relative h-[18px]">
                              <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-sm-5 bg-dark-3 flex flex-row items-center justify-start">
                                <img
                                  className="w-[44.44%] absolute !m-[0] h-[44.44%] top-[27.78%] right-[27.78%] bottom-[27.78%] left-[27.78%] max-w-full overflow-hidden max-h-full z-[0]"
                                  alt=""
                                  src="/icon5.svg"
                                />
                              </div>
                            </div>
                            <div className="relative leading-[7.88px]">
                              Open Terminal
                            </div>
                          </div>
                        </div>
                        <div className="absolute top-[7.5px] left-[359.6px] flex flex-row items-start justify-start text-right">
                          <div className="[background:linear-gradient(180deg,_rgba(37,_214,_149,_0),_rgba(37,_214,_149,_0.15))] flex flex-row items-center justify-center py-[4.5px] px-[7.5px] text-white border-b-[0.4px] border-solid border-primary-green">
                            <div className="relative leading-[7.5px] font-semibold">
                              Code
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-center py-[4.5px] px-[7.5px]">
                            <div className="relative leading-[7.5px]">
                              Query
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-center py-[4.5px] px-[7.5px]">
                            <div className="relative leading-[7.5px]">
                              Execute
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <SmartContractContainer
                      featureDescription="Dev Playground"
                      smartContractDefinitionTe="Interact with Coreum blockchain through our developer playground."
                      featureDescriptionText="Access playground"
                      propBorderRadius="unset"
                      propGap="24px"
                      propPadding="24px"
                      propGap1="8px"
                      propAlignSelf="stretch"
                    />
                  </div>
                  <div className="w-[400px] rounded-xl bg-shades-pitch overflow-hidden shrink-0 flex flex-col items-start justify-start text-center text-8xs-2 text-shades-carbon">
                    <div className="self-stretch relative bg-shades-night h-60 overflow-hidden shrink-0">
                      <div className="absolute top-[6.5px] left-[5.3px] w-[505.5px] h-[339px]">
                        <div className="absolute top-[calc(50%_-_139.6px)] left-[calc(50%_-_219.45px)] rounded-[3.23px] bg-shades-dark-1 w-[435.6px] h-[272.3px] overflow-hidden text-left">
                          <img
                            className="absolute top-[0.2px] left-[0px] w-[435.6px] h-[272.3px] object-contain"
                            alt=""
                            src="/group-9793@2x.png"
                          />
                          <div className="absolute top-[12.1px] left-[84.7px] w-[338.8px] flex flex-row items-start justify-start gap-[3.630345582962036px]">
                            <FinancialInstitutionContainer
                              financialInstitutionName="Financial Institution B"
                              institutionCoordinates="/cad@2x.png"
                              transactionParticipant="Destination"
                              uniqueIdentifier="testcoreEFA60D747EB5D7sqeu1hkk666..."
                              institutionDimensions="/iconcopy-inactive@2x.png"
                              institutionId="/usd@2x.png"
                              transactionAmount="0.00"
                            />
                            <FinancialInstitutionContainer
                              financialInstitutionName="Financial Institution A"
                              institutionCoordinates="/usd1@2x.png"
                              transactionParticipant="Initiator"
                              uniqueIdentifier="testcorePUL1suhgf5svhu4usrurvxzlgn54ks..."
                              institutionDimensions="/iconcopy-inactive1@2x.png"
                              institutionId="/usd2@2x.png"
                              transactionAmount="2,000.00"
                              propOpacity="unset"
                              propBorderRadius="7.26px"
                            />
                          </div>
                          <div className="absolute top-[0px] left-[0px] w-[72.6px] h-[272.3px]">
                            <div className="absolute top-[0px] left-[0px] bg-shades-dark-2 shadow-[0.6px_0px_3.63px_rgba(0,_0,_0,_0.08)] w-[72.6px] h-[272.3px]" />
                            <div className="absolute top-[53.2px] left-[4.8px] tracking-[-0.01em] leading-[6.35px] text-center">
                              Sessions
                            </div>
                            <div className="absolute top-[27.7px] left-[4.7px] box-border w-[63.2px] h-[0.3px] border-t-[0.3px] border-solid border-gray-300" />
                            <div className="absolute top-[35.1px] left-[4.8px] w-[62.9px] h-[10.9px] text-white">
                              <div className="absolute w-full top-[0px] right-[0%] left-[0%] rounded-[2.42px] bg-mediumseagreen-200 box-border flex flex-row items-center justify-center py-[2.4202303886413574px] pr-[7.260691165924072px] pl-[6.655632972717285px] gap-[2.4202303886413574px] border-[0.2px] border-solid border-primary-green">
                                <img
                                  className="w-[5.1px] relative h-[5.1px]"
                                  alt=""
                                  src="/iconadd.svg"
                                />
                                <div className="relative leading-[6.05px] font-medium">
                                  New Session
                                </div>
                              </div>
                            </div>
                            <img
                              className="absolute top-[7.3px] left-[7.3px] w-[36.3px] h-[13.3px]"
                              alt=""
                              src="/logo1.svg"
                            />
                            <div className="absolute bottom-[0.1px] left-[0px] bg-gray-300 w-[72.6px] flex flex-row items-center justify-between p-[4.840460777282715px] box-border text-9xs-6 text-primary-green">
                              <div className="flex flex-row items-center justify-start gap-[3.630345582962036px]">
                                <img
                                  className="w-[6.4px] relative h-[6.4px]"
                                  alt=""
                                  src="/icon-connected.svg"
                                />
                                <div className="w-4 relative h-1.5">
                                  <div className="absolute top-[0px] left-[0px] leading-[5.45px] font-semibold">
                                    TESTNET
                                  </div>
                                </div>
                              </div>
                              <img
                                className="w-[3.6px] relative h-[3.6px]"
                                alt=""
                                src="/icon-network-expand.svg"
                              />
                            </div>
                          </div>
                          <div className="absolute top-[176.4px] left-[236.9px] text-8xs-8 leading-[7.26px] text-shades-light">
                            Select Scenario
                          </div>
                          <div className="absolute top-[188.5px] left-[84.7px] w-[338.8px] flex flex-row items-start justify-start gap-[3.630345582962036px] text-7xs-4 text-white">
                            <ISOConfirmationContainer
                              dimensions="/group-97931@2x.png"
                              dimensionsDescription="/flare-2@2x.png"
                              financialMessagingStandar="ISO + RTGS Confirmation"
                              iso20022Description="Involves leveraging the global financial messaging standard, ISO 20022, to enhance the real-time gross settlement (RTGS) process."
                            />
                            <ISOConfirmationContainer
                              dimensions="/bg1@2x.png"
                              dimensionsDescription="/flare-21@2x.png"
                              financialMessagingStandar="ISO Confirmation"
                              iso20022Description="Entails utilizing the universal financial messaging standard, ISO 20022, to streamline and standardize communication in financial transactions."
                              propFlex="1"
                            />
                            <div className="flex-1 rounded-[3.03px] h-[60.5px] flex flex-col items-start justify-start p-[6.0505757331848145px] box-border relative gap-[2.4202303886413574px]">
                              <img
                                className="w-full absolute !m-[0] h-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-contain z-[0]"
                                alt=""
                                src="/group-97932@2x.png"
                              />
                              <img
                                className="w-[48.7px] absolute !m-[0] top-[0px] right-[0px] h-[60.5px] object-cover z-[1]"
                                alt=""
                                src="/mask-group1@2x.png"
                              />
                              <div className="self-stretch relative tracking-[-0.01em] leading-[8.17px] font-medium z-[2]">
                                ISO Rejection
                              </div>
                              <div className="self-stretch flex-1 relative text-8xs-2 tracking-[-0.01em] leading-[6.35px] text-shades-light z-[3]">
                                Involves employing the standardized financial
                                messaging framework, ISO 20022, to communicate
                                and formalize the rejection of a financial
                                transaction.
                              </div>
                            </div>
                          </div>
                          <div className="absolute bottom-[7.3px] left-[calc(50%_+_18.2px)] rounded-[2.42px] bg-dark-4 w-[36.3px] flex flex-row items-center justify-center py-[2.4202303886413574px] pr-[7.260691165924072px] pl-[6.655632972717285px] box-border">
                            <div className="relative leading-[6.35px] font-semibold">
                              Run
                            </div>
                          </div>
                          <div className="absolute top-[0.2px] left-[0px] rounded-[3.23px] bg-gray-500 [backdrop-filter:blur(0.2px)] w-[435.6px] h-[272.3px]" />
                        </div>
                        <div className="absolute top-[calc(50%_-_70.3px)] left-[calc(50%_-_228.35px)] w-[90.8px] h-[16.5px]">
                          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-600 [filter:blur(16.13px)]" />
                        </div>
                        <div className="absolute top-[calc(50%_-_78.5px)] left-[calc(50%_-_236.35px)] rounded-[1.61px] bg-gray-300 w-[90.8px] flex flex-row items-center justify-between py-[4.537931442260742px] px-[6.0505757331848145px] box-border text-[3.8px]">
                          <div className="flex flex-row items-center justify-start gap-[3.781609535217285px] z-[0]">
                            <div className="w-[7.6px] rounded-[1.51px] box-border h-[7.6px] flex flex-col items-center justify-center border-[0.4px] border-solid border-shades-carbon">
                              <div className="relative tracking-[-0.01em] leading-[5.67px] font-semibold">
                                1
                              </div>
                            </div>
                            <div className="flex flex-row items-start justify-start">
                              <img
                                className="w-[7.6px] relative rounded-[9.08px] h-[7.6px] object-cover z-[1]"
                                alt=""
                                src="/usd3@2x.png"
                              />
                              <img
                                className="w-[7.6px] relative h-[7.6px] object-cover z-[0] ml-[-1.51px]"
                                alt=""
                                src="/cad1@2x.png"
                              />
                            </div>
                            <div className="relative text-7xs-3 tracking-[-0.01em] leading-[7.56px] text-light-1 text-left">
                              0e791929cf....
                            </div>
                          </div>
                          <img
                            className="w-[7.6px] relative h-[7.6px] z-[1]"
                            alt=""
                            src="/right.svg"
                          />
                          <div className="w-[90.8px] absolute !m-[0] top-[0px] left-[0px] rounded-[1.61px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0))] h-[16.7px] opacity-[0.65] z-[2]" />
                        </div>
                        <div className="absolute top-[calc(50%_-_141.3px)] left-[calc(50%_-_109.55px)] bg-gray-700 [filter:blur(32.27px)] w-[209.8px] h-[179.9px]" />
                        <div className="absolute top-[calc(50%_-_139.8px)] right-[89.9px] box-border w-[121.2px] h-[0.6px] border-t-[0.3px] border-solid border-mediumseagreen-400" />
                        <div className="absolute top-[calc(50%_-_0.5px)] left-[calc(50%_-_219.75px)] box-border w-[0.6px] h-[65.1px] border-r-[0.3px] border-solid border-mediumseagreen-400" />
                        <div className="absolute top-[calc(50%_+_132.3px)] left-[calc(50%_+_74.75px)] box-border w-[121.2px] h-[0.6px] border-t-[0.3px] border-solid border-mediumseagreen-400" />
                        <div className="absolute top-[calc(50%_-_152.9px)] left-[calc(50%_-_133.35px)] rounded-[3.78px] bg-shades-dark-3 w-[209.5px] flex flex-col items-center justify-start py-[7.56321907043457px] px-0 box-border gap-[7.56321907043457px] text-6xs-1 text-light-1">
                          <div className="self-stretch rounded-t-[3.78px] rounded-b-none flex flex-row items-center justify-center gap-[4.537931442260742px] z-[0]">
                            <div className="relative leading-[9.08px] font-semibold">
                              Financial Institution B
                            </div>
                            <img
                              className="w-[9.1px] relative h-[9.1px] object-cover"
                              alt=""
                              src="/cad2@2x.png"
                            />
                            <div className="rounded-[1.51px] bg-mediumseagreen-300 flex flex-row items-center justify-center py-[0.7563219666481018px] px-[3.0252878665924072px] text-left text-8xs-5 text-primary-green">
                              <div className="relative tracking-[-0.01em] leading-[6.81px] font-medium">
                                Destination
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch relative box-border h-[0.4px] z-[1] border-t-[0.4px] border-solid border-gray-100" />
                          <div className="self-stretch flex flex-col items-start justify-start py-0 px-[7.56321907043457px] gap-[4.537931442260742px] z-[2] text-left text-shades-light">
                            <div className="self-stretch rounded-[3.78px] bg-gray-300 flex flex-col items-start justify-start p-[6.0505757331848145px] gap-[6.0505757331848145px]">
                              <div className="self-stretch flex flex-row items-center justify-between">
                                <div className="relative tracking-[-0.01em] leading-[9.08px] font-medium">
                                  Create Wallet
                                </div>
                                <img
                                  className="w-[7.6px] relative h-[7.6px]"
                                  alt=""
                                  src="/group-423731.svg"
                                />
                              </div>
                              <div className="self-stretch flex flex-col items-start justify-start gap-[1.5126439332962036px] text-8xs-5 text-shades-carbon">
                                <div className="w-[190.2px] relative tracking-[-0.01em] leading-[6.81px] inline-block">
                                  Wallet Address
                                </div>
                                <div className="rounded-[3.03px] flex flex-row items-center justify-start gap-[3.0252878665924072px] text-7xs-3 text-light-1">
                                  <div className="relative tracking-[-0.01em] leading-[7.94px]">
                                    testcoreEFA60D747EB5D7sqeu1hkk666...
                                  </div>
                                  <img
                                    className="w-[7.2px] relative h-[7.2px] object-cover"
                                    alt=""
                                    src="/iconcopy-inactive2@2x.png"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch rounded-[3.78px] bg-gray-300 flex flex-col items-start justify-start p-[6.0505757331848145px] gap-[6.0505757331848145px]">
                              <div className="self-stretch flex flex-row items-center justify-between">
                                <div className="relative tracking-[-0.01em] leading-[9.08px] font-medium">
                                  Fund Wallet
                                </div>
                                <img
                                  className="w-[7.6px] relative h-[7.6px]"
                                  alt=""
                                  src="/group-423731.svg"
                                />
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start gap-[6.0505757331848145px] text-8xs-5 text-shades-carbon">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[1.5126439332962036px]">
                                  <div className="w-[190.2px] relative tracking-[-0.01em] leading-[6.81px] inline-block">
                                    CORE Balance
                                  </div>
                                  <div className="rounded-[3.03px] flex flex-row items-center justify-start gap-[2.268965721130371px] text-7xs-3 text-light-1">
                                    <img
                                      className="w-[6.4px] relative h-[6.4px] overflow-hidden shrink-0"
                                      alt=""
                                      src="/original1.svg"
                                    />
                                    <div className="relative tracking-[-0.01em] leading-[7.94px]">
                                      100.00
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 flex flex-col items-start justify-start gap-[1.5126439332962036px]">
                                  <div className="w-[190.2px] relative tracking-[-0.01em] leading-[6.81px] inline-block">
                                    USD Balance
                                  </div>
                                  <div className="rounded-[3.03px] flex flex-row items-center justify-start gap-[3.0252878665924072px] text-7xs-3 text-light-1">
                                    <img
                                      className="w-[6.4px] relative rounded-[9.08px] h-[6.4px] object-cover"
                                      alt=""
                                      src="/usd4@2x.png"
                                    />
                                    <div className="relative tracking-[-0.01em] leading-[7.94px]">
                                      0.00
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="self-stretch rounded-[3.78px] bg-gray-300 flex flex-col items-start justify-start p-[6.0505757331848145px] gap-[6.0505757331848145px]">
                              <div className="self-stretch flex flex-row items-center justify-between">
                                <div className="flex-1 relative tracking-[-0.01em] leading-[9.08px] font-medium">
                                  Generate Keys
                                </div>
                                <img
                                  className="w-[7.6px] relative h-[7.6px]"
                                  alt=""
                                  src="/group-423731.svg"
                                />
                              </div>
                              <div className="self-stretch flex flex-row items-start justify-start gap-[6.0505757331848145px] text-8xs-5 text-shades-carbon">
                                <div className="flex-1 flex flex-col items-start justify-start gap-[1.5126439332962036px]">
                                  <div className="w-[190.2px] relative tracking-[-0.01em] leading-[6.81px] inline-block">
                                    Public Key
                                  </div>
                                  <div className="rounded-[3.03px] flex flex-row items-center justify-start text-7xs-3">
                                    <div className="relative tracking-[-0.01em] leading-[7.94px] text-transparent !bg-clip-text [background:linear-gradient(225deg,_#25d695,_#179b69)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      View Details
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-1 flex flex-col items-start justify-start gap-[1.5126439332962036px]">
                                  <div className="w-[190.2px] relative tracking-[-0.01em] leading-[6.81px] inline-block">
                                    Private Key
                                  </div>
                                  <div className="rounded-[3.03px] flex flex-row items-center justify-start text-7xs-3">
                                    <div className="relative tracking-[-0.01em] leading-[7.94px] text-transparent !bg-clip-text [background:linear-gradient(225deg,_#25d695,_#179b69)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                                      View Details
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="w-[209.3px] absolute !m-[0] top-[-0.1px] left-[0px] rounded-[4.03px] [background:radial-gradient(50%_50%_at_50%_50%,_rgba(255,_255,_255,_0.1),_rgba(255,_255,_255,_0))] h-[180.3px] opacity-[0.65] z-[3]" />
                        </div>
                      </div>
                    </div>
                    <SmartContractContainer
                      featureDescription="ISO Simulator"
                      smartContractDefinitionTe="Find out how ISO 20022 can be used by financial institution with our simulator."
                      featureDescriptionText="Enter simulator"
                      propBorderRadius="unset"
                      propGap="24px"
                      propPadding="24px"
                      propGap1="8px"
                      propAlignSelf="stretch"
                    />
                  </div>
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
      <BottomFooter imageDimensionsCode="/lumina-screen4@2x.png" />
    </div>
  );
};

export default Apps;
