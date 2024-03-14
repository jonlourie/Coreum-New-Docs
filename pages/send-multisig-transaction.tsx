import type { NextPage } from "next";
import Header from "../components/header";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import PermissionGrantContainer from "../components/permission-grant-container";
import BottomFooter from "../components/bottom-footer";

const SendMultisigTransaction: NextPage = () => {
  return (
    <div className="relative bg-shades-solid w-full flex flex-col items-start justify-start text-left text-base text-shades-light font-overline-footer">
      <Header />
      <div className="w-[1441px] relative box-border h-px border-t-[1px] border-solid border-shades-dark-1" />
      <div className="w-[1440px] flex flex-row items-start justify-start">
        <div className="flex flex-col items-end justify-start py-6 px-4">
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
          <div className="self-stretch flex flex-col items-end justify-start py-2 pr-0 pl-4">
            <div className="w-[228px] box-border flex flex-col items-start justify-start py-0 pr-0 pl-2 border-l-[1px] border-solid border-shades-dark-1">
              <TypeDropdownStateExpanded
                label="Get Started"
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
                    label="Setup CLI Network Variables"
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
                    label="Install Cored"
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
                  <TypeDropdownStateExpanded
                    label="CLI"
                    iconArrow="/iconarrow1.svg"
                    typeDropdownStateExpandedPadding="8px 8px 8px 12px"
                    typeDropdownStateExpandedAlignSelf="stretch"
                    typeDropdownStateExpandedGap="unset"
                    typeDropdownStateExpandedBackgroundColor="unset"
                    labelLineHeight="20px"
                    labelColor="#eee"
                    labelFontWeight="500"
                    labelFlex="1"
                    iconArrowWidth="20px"
                    iconArrowHeight="20px"
                    iconArrowMinHeight="unset"
                  />
                  <div className="self-stretch flex flex-col items-end justify-start py-2 pr-0 pl-4">
                    <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-2 border-l-[1px] border-solid border-shades-dark-1">
                      <TypeTextStateSelectedSiz
                        label="Transfer funds with CLI"
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
                        label="Send Multisig Transaction"
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
                        label="Smart FT with Access Control List (ACL)"
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
                        label="Ledger Nano with CLI"
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
                    </div>
                  </div>
                  <TypeDropdownStateExpanded
                    label="Golang"
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
                    label="Typescript"
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
                    label="WASM"
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
                </div>
              </div>
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
        </div>
        <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-shades-dark-1" />
        <div className="flex-1 flex flex-col items-start justify-start">
          <div className="w-[896px] flex flex-col items-start justify-start pt-6 px-10 pb-20 box-border gap-[80px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px]">
              <div className="self-stretch relative text-13xl tracking-[-0.02em] leading-[40px] font-medium font-regular-label text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Send Multisig Transaction
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                  <p className="m-0">
                    The sample below describes the full flow from the creation
                    of the multisig account to the tx broadcast.
                  </p>
                  <ul className="m-0 text-inherit pl-[21px]">
                    <li className="mb-0">
                      <span>Follow the </span>
                      <span className="font-semibold font-overline-footer text-primary-green">
                        instruction
                      </span>
                      <span className="font-overline-footer text-shades-light">
                         to install cored binary.
                      </span>
                    </li>
                    <li className="mb-0">
                      <span className="font-overline-footer text-shades-light">
                        Verify that 
                      </span>
                      <span className="font-semibold font-overline-footer text-primary-green">
                        network variables
                      </span>
                      <span className="font-overline-footer text-shades-light">
                         are set up correctly.
                      </span>
                    </li>
                    <li>
                      <span className="font-overline-footer text-shades-light">
                        Add the keys that we are going to use for the multisig.
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                  Option 1: generate the keys ourselves.
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
                  <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start gap-[12px]">
                    <div className="flex flex-row items-start justify-start p-4">
                      <div className="relative tracking-[-0.01em] leading-[24px]">
                        <p className="m-0">1</p>
                        <p className="m-0">2</p>
                        <p className="m-0">3</p>
                        <p className="m-0">4</p>
                      </div>
                    </div>
                    <img
                      className="self-stretch w-0 relative max-h-full"
                      alt=""
                      src="/divider-1.svg"
                    />
                    <div className="flex-1 flex flex-row items-start justify-start p-4 text-left text-mediumseagreen-100">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                        <p className="m-0">
                          <span className="text-primary-dim">{`cored keys `}</span>
                          <span className="text-primary-yellow">add</span>
                          <span className="text-primary-dim">{` k1 `}</span>
                          <span>$COREUM_CHAIN_ID_ARGS</span>
                        </p>
                        <p className="m-0">
                          <span className="text-primary-dim">{`cored keys `}</span>
                          <span className="text-primary-yellow">add</span>
                          <span className="text-primary-dim">{` k2 `}</span>
                          <span>$COREUM_CHAIN_ID_ARGS</span>
                        </p>
                        <p className="m-0">
                          <span className="text-primary-dim">{`cored keys `}</span>
                          <span className="text-primary-yellow">add</span>
                          <span className="text-primary-dim">{` k3 `}</span>
                          <span>$COREUM_CHAIN_ID_ARGS</span>
                        </p>
                        <p className="m-0">
                          <span className="text-primary-dim">{`cored keys `}</span>
                          <span className="text-primary-yellow">add</span>
                          <span className="text-primary-dim">{` recipient `}</span>
                          <span>$COREUM_CHAIN_ID_ARGS</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                  Option 2: add the public keys provided by the people who are
                  going to be part of the multisig.
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
                  <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start relative gap-[12px]">
                    <div className="flex flex-row items-start justify-start p-4 z-[0]">
                      <div className="relative tracking-[-0.01em] leading-[24px]">
                        <p className="m-0">1</p>
                        <p className="m-0">2</p>
                        <p className="m-0">3</p>
                      </div>
                    </div>
                    <img
                      className="self-stretch w-0 relative max-h-full z-[1]"
                      alt=""
                      src="/divider1.svg"
                    />
                    <div className="flex-1 overflow-hidden flex flex-row items-start justify-start p-4 z-[2] text-left text-mediumseagreen-100">
                      <div className="relative tracking-[-0.01em] leading-[24px]">
                        <p className="m-0">
                          <span className="text-primary-dim">{`cored keys `}</span>
                          <span className="text-primary-yellow">add</span>
                          <span className="text-primary-dim">{` k1 `}</span>
                          <span>{`--pubkey='{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A8kOpeBMbmri5rvLjlqN6kOuNzRVUnr2vtinCkKMmwKU"}' $COREUM_CHAIN_ID_ARGS`}</span>
                        </p>
                        <p className="m-0">
                          <span className="text-primary-dim">{`cored keys `}</span>
                          <span className="text-primary-yellow">add</span>
                          <span className="text-primary-dim">{` k2 `}</span>
                          <span>{`--pubkey='{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"Aul+q9bj3zZTADlKbLcpmn/roDj2d0DJIHIQiyCQM8Fk"}' $COREUM_CHAIN_ID_ARGS`}</span>
                        </p>
                        <p className="m-0">
                          <span className="text-primary-dim">{`cored keys `}</span>
                          <span className="text-primary-yellow">add</span>
                          <span className="text-primary-dim">{` k3 `}</span>
                          <span>{`--pubkey='{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A3AcsNQ+FNwnUovxN/6/sa/vVN+Lc89IksZQKpLyAQ16"}' $COREUM_CHAIN_ID_ARGS`}</span>
                        </p>
                      </div>
                    </div>
                    <img
                      className="w-[calc(100%_-_96px)] absolute !m-[0] right-[16px] bottom-[8px] left-[80px] max-w-full overflow-hidden h-1.5 object-contain z-[3]"
                      alt=""
                      src="/scrollbar@2x.png"
                    />
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                  For this option, each member needs to provide the public key.
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
                  <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start gap-[12px]">
                    <div className="flex flex-row items-start justify-start p-4">
                      <div className="relative tracking-[-0.01em] leading-[24px]">
                        1
                      </div>
                    </div>
                    <img
                      className="self-stretch w-0 relative max-h-full"
                      alt=""
                      src="/divider2.svg"
                    />
                    <div className="flex-1 flex flex-row items-start justify-start p-4 text-left text-primary-dim">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                        cored keys list
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                  Output example:
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
                  <div className="self-stretch rounded-xl bg-shades-pitch overflow-hidden flex flex-row items-center justify-start gap-[12px]">
                    <div className="flex flex-row items-start justify-start p-4">
                      <div className="relative tracking-[-0.01em] leading-[24px]">
                        <p className="m-0">1</p>
                        <p className="m-0">2</p>
                        <p className="m-0">3</p>
                        <p className="m-0">4</p>
                        <p className="m-0">5</p>
                      </div>
                    </div>
                    <img
                      className="self-stretch w-0 relative max-h-full"
                      alt=""
                      src="/divider3.svg"
                    />
                    <div className="flex-1 flex flex-row items-start justify-start p-4 text-left text-primary-dim">
                      <div className="relative tracking-[-0.01em] leading-[24px]">
                        <p className="m-0">- name: k1</p>
                        <p className="m-0">
                          <span className="whitespace-pre-wrap">{`  type: `}</span>
                          <span className="text-mediumorchid">local</span>
                        </p>
                        <p className="m-0 whitespace-pre-wrap">
                          {" "}
                          address: core1qj7d46j56khz4ysvvgt5elghhu6p3fxepzme7y
                        </p>
                        <p className="m-0 text-mediumseagreen-100">
                          <span className="text-primary-dim whitespace-pre-wrap">{`  pubkey: `}</span>
                          <span>{`'{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A8kOpeBMbmri5rvLjlqN6kOuNzRVUnr2vtinCkK`}</span>
                          <span className="text-primary-dim">{`MmwKU"}'`}</span>
                        </p>
                        <p className="m-0 whitespace-pre-wrap"> mnemonic: ""</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-5xl text-primary-off-white font-regular-label">
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                <div className="self-stretch relative tracking-[-0.02em] leading-[30px] font-medium">
                  Send Staking TX with CLI
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-base text-shades-light font-overline-footer">
                  <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                    <ul className="m-0 font-inherit text-inherit pl-[21px]">
                      <li>
                        To stake your tokens with CLI you should
                        use staking module. Let's check available commands:
                      </li>
                    </ul>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
                    <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start gap-[12px]">
                      <div className="flex flex-row items-start justify-start p-4">
                        <div className="relative tracking-[-0.01em] leading-[24px]">
                          <p className="m-0">1</p>
                          <p className="m-0">2</p>
                          <p className="m-0">3</p>
                          <p className="m-0">4</p>
                          <p className="m-0">5</p>
                          <p className="m-0">6</p>
                        </div>
                      </div>
                      <img
                        className="self-stretch w-0 relative max-h-full"
                        alt=""
                        src="/divider4.svg"
                      />
                      <div className="flex-1 flex flex-row items-start justify-start p-4 text-left">
                        <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                          <p className="m-0 text-primary-dim">
                            <span>{`cored tx staking `}</span>
                            <span className="text-mediumseagreen-100">
                              --help
                            </span>
                          </p>
                          <p className="m-0">
                            # create-validator create new validator initialized
                            with a self-delegation to it
                          </p>
                          <p className="m-0 whitespace-pre-wrap">
                            # delegate Delegate liquid tokens to a validator
                          </p>
                          <p className="m-0 whitespace-pre-wrap">
                            # edit-validator edit an existing validator account
                          </p>
                          <p className="m-0 whitespace-pre-wrap">
                            # redelegate Redelegate illiquid tokens from one
                            validator to another
                          </p>
                          <p className="m-0 whitespace-pre-wrap">
                            # unbond Unbond shares from a validator
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-base text-shades-light font-overline-footer">
                <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>Let's delegate some tokens:</li>
                  </ul>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
                  <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start relative gap-[12px]">
                    <div className="flex flex-row items-start justify-start p-4 z-[0]">
                      <div className="relative tracking-[-0.01em] leading-[24px]">
                        <p className="m-0">1</p>
                        <p className="m-0">2</p>
                        <p className="m-0">3</p>
                        <p className="m-0">4</p>
                        <p className="m-0">5</p>
                        <p className="m-0">6</p>
                      </div>
                    </div>
                    <img
                      className="self-stretch w-0 relative max-h-full z-[1]"
                      alt=""
                      src="/divider4.svg"
                    />
                    <div className="flex-1 overflow-hidden flex flex-row items-start justify-start p-4 z-[2] text-left">
                      <div className="relative tracking-[-0.01em] leading-[24px]">
                        <p className="m-0 text-primary-dim">
                          cored tx bank send my-sender-wallet
                          testcore1snn05vrzvnwy7t0g00rr7hva63hmwxuuv7nrj0
                          1000000utestcore --node=$CORED_NODE
                          --chain-id=$CHAIN_ID
                        </p>
                        <p className="m-0">
                          # create-validator create new validator initialized
                          with a self-delegation to it
                        </p>
                        <p className="m-0 whitespace-pre-wrap">
                          # delegate Delegate liquid tokens to a validator
                        </p>
                        <p className="m-0 whitespace-pre-wrap">
                          # edit-validator edit an existing validator account
                        </p>
                        <p className="m-0 whitespace-pre-wrap">
                          # redelegate Redelegate illiquid tokens from one
                          validator to another
                        </p>
                        <p className="m-0 whitespace-pre-wrap">
                          # unbond Unbond shares from a validator
                        </p>
                      </div>
                    </div>
                    <img
                      className="w-[calc(100%_-_96px)] absolute !m-[0] right-[16px] bottom-[8px] left-[80px] max-w-full overflow-hidden h-1.5 object-contain z-[3]"
                      alt=""
                      src="/scrollbar@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                  <ul className="m-0 text-inherit pl-[21px]">
                    <li className="mb-0">
                      <span className="font-overline-footer text-shades-light">
                        If the output code is 0, get the transaction hash, go
                        to 
                      </span>
                      <span className="font-semibold font-overline-footer text-primary-green">
                        Block Explorer
                      </span>
                      <span>{` and put it into the search line. `}</span>
                    </li>
                    <li>
                      <span>
                        If output code is not 0, your transaction failed local
                        validation and was not broadcasted. Fix the problem and
                        run the command again.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <PermissionGrantContainer transactionPermissionDesc="Send Staking TX with CLI" />
          </div>
          <div className="w-[896px] flex flex-row items-start justify-start p-10 box-border gap-[40px] text-xs">
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
                <a
                  className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green [text-decoration:none]"
                  href="https://docs.coreum.dev/tutorials/multisig.html"
                  target="_blank"
                >
                  Send Multisig Transaction
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch w-[1.5px] relative box-border opacity-[0] border-r-[1.5px] border-solid border-shades-dark-1" />
        <div className="w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border opacity-[0] text-sm font-regular-label">
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0 text-primary-green">
            <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
              Transfer funds with CLI
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-3">
            <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
              <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                Send Staking TX with CLI
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start py-0 px-3">
            <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
              <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                Send Staking TX with CLI
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1441px] relative box-border h-px border-t-[1px] border-solid border-shades-dark-1" />
      <BottomFooter imageDimensionsCode="/lumina-screen1@2x.png" />
    </div>
  );
};

export default SendMultisigTransaction;
