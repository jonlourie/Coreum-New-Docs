import type { NextPage } from "next";
import Header from "../components/header";
import TypeDropdownStateExpanded from "../components/type-dropdown-state-expanded";
import TypeTextStateSelectedSiz from "../components/type-text-state-selected-siz";
import PermissionGrantContainer from "../components/permission-grant-container";
import BuildFromSourcesContainer from "../components/build-from-sources-container";
import BottomFooter from "../components/bottom-footer";

const TransferFundsWithCLI: NextPage = () => {
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
                Transfer Funds With CLI
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                  <p className="m-0">
                    The section provides a tutorial on how to use cored cli. You
                    can follow this flow with any other cli command.
                  </p>
                  <p className="m-0">
                    Note: we are going to use testnet for this example.
                  </p>
                  <ul className="m-0 text-inherit pl-[21px] text-primary-green">
                    <li className="mb-0">
                      <span className="font-semibold">
                        Install cored binary
                      </span>
                    </li>
                    <li>
                      <span className="font-overline-footer text-shades-light">
                        Point cored binary to testnet network:
                      </span>
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
                      </div>
                    </div>
                    <img
                      className="self-stretch w-0 relative max-h-full"
                      alt=""
                      src="/divider1.svg"
                    />
                    <div className="flex-1 flex flex-row items-start justify-start p-4 text-left text-primary-dim">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                        <p className="m-0">&nbsp;</p>
                        <p className="m-0">{`export CORED_NODE=https://full-node.testnet-1.coreum.dev:26657 `}</p>
                        <p className="m-0">
                          export CHAIN_ID="coreum-testnet-1"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                  <p className="m-0">
                    <span>
                      If you want to target other network than testnet, replace
                      it with values at 
                    </span>
                    <span className="font-semibold font-overline-footer text-primary-green">
                      network variables page
                    </span>
                  </p>
                  <ul className="m-0 text-inherit pl-[21px]">
                    <li className="mb-0">
                      <span>
                        To check verify that everything is set correctly, you
                        can run cored status | jq and check network name. If you
                        don't have jq installed you can run cored status, but we
                        strongly recommend using this awesome tool 😃
                      </span>
                    </li>
                    <li className="mb-0">
                      <span>
                        You should have funded account. If you don't have it, do
                        next:
                      </span>
                    </li>
                    <li className="mb-0">
                      <span>Go to </span>
                      <span className="font-semibold font-overline-footer text-primary-green">
                        faucet page
                      </span>
                      <span className="font-overline-footer text-shades-light">
                         and click Generate Funded Wallet.
                      </span>
                    </li>
                    <li>
                      <span className="font-overline-footer text-shades-light">
                        Copy Wallet Mnemonic and go to your terminal and run:
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start text-center text-sm text-shades-carbon font-fira-code">
                  <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row items-center justify-start gap-[12px]">
                    <div className="flex flex-row items-start justify-start p-4">
                      <div className="relative tracking-[-0.01em] leading-[24px]">
                        <p className="m-0">1</p>
                        <p className="m-0">2</p>
                      </div>
                    </div>
                    <img
                      className="self-stretch w-0 relative max-h-full"
                      alt=""
                      src="/divider5.svg"
                    />
                    <div className="flex-1 flex flex-row items-start justify-start p-4 text-left text-primary-dim">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px]">
                        <p className="m-0">
                          <span className="text-primary-dim">{`cored keys `}</span>
                          <span className="text-primary-yellow">add</span>
                          <span>{` my-sender-wallet `}</span>
                          <span className="text-mediumseagreen-100">
                            --recover
                          </span>
                          <span className="text-primary-dim"> --chain-id</span>
                          <span className="text-mediumseagreen-100">
                            =$CHAIN_ID
                          </span>
                        </p>
                        <p className="m-0 text-shades-carbon">
                          # Where `my-sender-wallet` is your local account name.
                          It will be used later.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li className="mb-0">
                      Enter your mnemonic. Now you imported account into your
                      local machine!
                    </li>
                    <li>
                      Store the mnemonic in safe place, this is the only way to
                      recover your account.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li className="mb-0">
                      Transfer funds. Let's go step by step, --help command will
                      lead us through:
                    </li>
                    <li>Let's check available commands for cored:</li>
                  </ul>
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
                        <span>{`cored `}</span>
                        <span className="text-mediumseagreen-100">--help</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li>
                      Sending funds changes the state of the network, so this is
                      a transaction. Let's check modules that has own
                      transactions:
                    </li>
                  </ul>
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
                        <span>{`cored tx `}</span>
                        <span className="text-mediumseagreen-100">--help</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="self-stretch relative tracking-[-0.01em] leading-[28px]">
                  <ul className="m-0 font-inherit text-inherit pl-[21px]">
                    <li className="mb-0">
                      bank module is responsible for transferring funds:
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <PermissionGrantContainer transactionPermissionDesc="Send Staking TX with CLI" />
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
        <div className="self-stretch w-px relative box-border border-r-[1px] border-solid border-shades-dark-1" />
        <BuildFromSourcesContainer
          featureDescription="Transfer funds with CLI"
          actionDescription="Send Staking TX with CLI"
          commandDescription="Send Staking TX with CLI"
        />
      </div>
      <div className="w-[1441px] relative box-border h-px border-t-[1px] border-solid border-shades-dark-1" />
      <BottomFooter imageDimensionsCode="/lumina-screen1@2x.png" />
    </div>
  );
};

export default TransferFundsWithCLI;
