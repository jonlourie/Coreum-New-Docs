import type { NextPage } from "next";
import Header from "../components/header";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import ValidatorListContainer from "../components/validator-list-container";
import TokenDelegationContainer from "../components/token-delegation-container";
import PermissionGrantContainer from "../components/permission-grant-container";
import BottomFooter from "../components/bottom-footer";

const SmartFTWithAccessControlL: NextPage = () => {
  return (
    <div className="relative bg-shades-solid w-full flex flex-col items-start justify-start text-left text-13xl text-primary-off-white font-regular-label">
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
                        label="Smart FT with Access Control List (ACL)"
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
              <div className="self-stretch relative tracking-[-0.02em] leading-[40px] font-medium text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                Smart FT with Access Control List (ACL)
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[40px] text-5xl">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[30px] font-medium">
                    Create multisig account and issue an asset
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-base text-shades-light font-overline-footer">
                    <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                      <ul className="m-0 text-inherit pl-[21px]">
                        <li className="mb-0">
                          <span>
                            The documentation below explains how to create a
                            Multisig account and grant different permissions to
                            individual addresses using the Authz Module so that
                            each address has different permissions for the
                            management of Coreum assets.
                          </span>
                        </li>
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
                        <li className="mb-0">
                          <span className="font-overline-footer text-shades-light">
                            The first step is to create a multisig account.
                            Follow the steps in 
                          </span>
                          <span className="font-semibold font-overline-footer text-primary-green">
                            multisig creation
                          </span>
                          <span className="font-overline-footer text-shades-light">
                             to set it up.
                          </span>
                        </li>
                        <li>
                          <span className="font-overline-footer text-shades-light">
                            Generate the json tx to issue an FT from the
                            multisig.
                          </span>
                        </li>
                      </ul>
                    </div>
                    <ValidatorListContainer />
                  </div>
                </div>
                <TokenDelegationContainer />
              </div>
            </div>
            <PermissionGrantContainer transactionPermissionDesc="Grant permission to an address to perform transactions on behalf of the multisig account" />
            <PermissionGrantContainer transactionPermissionDesc="Creating and managing a Multisig using a UI instead of CLI" />
          </div>
          <div className="w-[896px] flex flex-row items-start justify-start p-10 box-border gap-[40px] text-xs text-shades-light font-overline-footer">
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
        <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-shades-dark-1" />
        <div className="w-[272px] flex flex-col items-end justify-start py-6 px-4 box-border text-sm text-primary-green">
          <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
            <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
              Smart FT with Access Control List (ACL)
            </div>
          </div>
          <div className="self-stretch flex flex-col items-end justify-start py-0 pr-0 pl-2 text-shades-light">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-4 border-l-[1px] border-solid border-shades-dark-1">
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  Create Multisig Account and Issue an Asset
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  Grant Permission to an Address to Perform Transactions on
                  Behalf of the Multisig Account
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  Smart FT with Access Control List (ACL)
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-row items-center justify-start py-2 px-0">
                <div className="flex-1 relative tracking-[-0.01em] leading-[20px]">
                  Creating and Managing a Multisig Using a UI Instead of CLI
                </div>
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

export default SmartFTWithAccessControlL;
