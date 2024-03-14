import type { NextPage } from "next";
import NavBar1 from "../components/nav-bar1";
import SidebarMenu2 from "../components/sidebar-menu2";
import AncestorFiveTimesRemovedNo from "../components/ancestor-five-times-removed-no";
import Footer1 from "../components/footer1";

const SmartTokens: NextPage = () => {
  return (
    <div className="w-full h-[7332px] relative bg-shades-solid tracking-[normal] mq1050:h-auto mq1050:min-h-[7332]">
      <NavBar1 />
      <div className="absolute top-[64px] left-[1168px] box-border w-px h-[6995px] z-[2] border-r-[1px] border-solid border-shades-dark-1" />
      <main className="absolute top-[64px] left-[0px] flex flex-row items-start justify-start max-w-full w-full mq1050:pl-5 mq1050:pr-5 mq1050:box-border">
        <SidebarMenu2 />
        <div className="h-[6994px] w-px relative box-border border-r-[1px] border-solid border-shades-dark-1 mq1050:hidden" />
        <section className="flex-1 flex flex-col items-start justify-start gap-[80px] max-w-[calc(100%_-_277px)] shrink-0 text-left text-lg text-primary-off-white font-regular-label lg:gap-[40px_80px] mq750:gap-[20px_80px] mq1050:max-w-full">
          <AncestorFiveTimesRemovedNo />
          <div className="w-[896px] flex flex-row items-start justify-start py-0 px-10 box-border max-w-full">
            <div className="flex-1 flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px_40px]">
              <div className="self-stretch flex flex-col items-start justify-start text-5xl">
                <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
                  Features
                </h3>
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                    Issuance
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    Asset issuance is the initial phase of the asset lifecycle.
                    On issuance, the issuer defines the asset settings, initial
                    amount, allowed features, and default Access Control List.
                    After the creation, the initial amount will be minted for
                    the provided recipient and sent to the corresponding
                    account. The allowed features are the asset features, which
                    can be used with the asset but can't be changed after the
                    issuance. Meaning, if you set no features, you won't be able
                    to use any of them.
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                    Minting
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    Tokens can be initially minted on asset instantiation or on
                    the fly if the can_mint feature flag is set at the issuance
                    level. This feature is useful for a wide variety of use
                    cases, such as CBDCs, Stablecoins, Tokenized Securities,
                    Wrapped Crypto Currencies and so on. If a token gives up the
                    ability to mint at the time of issuance, it can never mint
                    more tokens and the total supply of the token will not ever
                    increase.
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start gap-[24px] max-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                    Access Control List
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    <p className="m-0">
                      The ACL(Access Control List) provides a flexible way for
                      asset administration and is the relationships of the chain
                      accounts and allowed features set on the asset issuance.
                      The administrators might be set in the same ACL.
                    </p>
                    <p className="m-0">Example of the ACL:</p>
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start max-w-full text-sm text-shades-carbon font-fira-code">
                  <div className="self-stretch rounded-xl bg-shades-pitch flex flex-row flex-wrap items-center justify-start gap-[12px] max-w-full">
                    <div className="flex flex-row items-start justify-start p-4">
                      <div className="w-[9px] relative tracking-[-0.01em] leading-[24px] inline-block">
                        <p className="m-0">1</p>
                        <p className="m-0">2</p>
                        <p className="m-0">3</p>
                        <p className="m-0">4</p>
                      </div>
                    </div>
                    <img
                      className="h-32 w-0 relative min-h-[128px]"
                      loading="lazy"
                      alt=""
                      src="/divider-1.svg"
                    />
                    <div className="flex-1 flex flex-row items-start justify-start p-4 box-border min-w-[488px] max-w-full text-primary-dim mq750:min-w-full">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[24px] inline-block max-w-full">
                        <p className="m-0">can_administrate: account1</p>
                        <p className="m-0">can_partial_freeze: account2</p>
                        <p className="m-0">can_mint: account3, account4</p>
                        <p className="m-0">can_burn: all</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                    Burning
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    When this feature is enabled on a token, then the holders of
                    the token who have the right permission will be able to burn
                    some of the tokens they hold to reduce the total supply of
                    that token. To give an example use case, if shares of a
                    company are tokenized, then the total supply will represent
                    the total shares of the company on the chain. And burning
                    those tokens would mean those shares are now moved out of
                    the blockchain and total supplies will correctly represent
                    that fact.
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                    Freezing
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    <p className="m-0">
                      If this feature is enabled when the token is first issued,
                      freezing allows the administrator of the token to freeze a
                      portion of or the balance of the token held by a user.
                      There are many use cases that are enforced by law to
                      freeze a token. An example use case is when the token
                      administrator sends tokens to an address but does not want
                      the user to spend them until some time has passed such as
                      clearing a cheque.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Token might be frozen globally. It means that it might be
                      transferred only to the issuer. All the other transfers
                      are rejected until it is unfrozen back.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                    Freezing
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    <p className="m-0">
                      If this feature is enabled when the token is first issued,
                      freezing allows the administrator of the token to freeze a
                      portion of or the balance of the token held by a user.
                      There are many use cases that are enforced by law to
                      freeze a token. An example use case is when the token
                      administrator sends tokens to an address but does not want
                      the user to spend them until some time has passed such as
                      clearing a cheque.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Token might be frozen globally. It means that it might be
                      transferred only to the issuer. All the other transfers
                      are rejected until it is unfrozen back.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[22px] font-medium">
                    Whitelisting
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    <p className="m-0">
                      Whitelisting is designed to support scenarios when, due to
                      KYC/AML or any other policy enforced by the issuer, the
                      Smart Token might be held by a limited scope of accounts
                      that passed the verification procedure. Its possible use
                      cases include tokens representing stock shares, CBDC or
                      any other rights enforced by the legal system where the
                      identity of the holder must be confirmed.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      If the can_whitelist flag is enabled on the Smart Token,
                      the issuer defines the list of accounts (addresses) that
                      are allowed to receive that token. If an account is not on
                      that list and someone tries to send tokens to it, the
                      transfer is rejected. Alternatively, a special flag
                      whitelist_everyone may be set to true to whitelist all the
                      accounts. If whitelisting was enabled during Smart Token
                      issuance, the issuer may update the list of whitelisted
                      accounts and enable or disable the whitelist_everyone flag
                      at any time.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      If an account holding the token is removed from the
                      whitelist, its current balance stays unaffected but it
                      cannot receive tokens anymore until whitelisted back.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                    Block Smart Contracts
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    <p className="m-0">
                      When a token is issued, it is possible to define Burn
                      Rate. It is a number between 0 and 1, defining the portion
                      of transferred amount to be burnt. The burnt amount is
                      charged on the sender in addition to the original amount
                      being transferred.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Burn Rate is not applied on transfers sent or received by
                      the token issuer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                    Send Fee
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    <p className="m-0">
                      Similarly to Burn Rate, the issuer may define a Send Fee.
                      It is a number between 0 and 1 too, which defines the
                      portion of transferred amount which is sent to the issuer.
                      This tax is charged on the sender in addition to the
                      original amount.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Send Fee is not applied on transfers sent or received by
                      the token issuer.
                    </p>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="self-stretch relative tracking-[-0.02em] leading-[22px] font-medium">
                    IBC Compatibility
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    Assets are based on the Cosmos SDK modules and extend the
                    Cosmos IBC (Inter Blockchain Communication) capability.
                    Hence, they can be transferred to and from IBC-supported
                    chains within the cosmos ecosystem or outside it given
                    proper relayers are present. When an asset is transferred to
                    another chain, it’s represented as a tokenized version of
                    the underlying asset in the Coreum Blockchain.
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
                <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
                  <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
                    Smart Contract Integration
                  </div>
                  <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
                    <p className="m-0">
                      An integral part of the Coreum blockchain is to support
                      the deployment and execution of Smart Contracts, which
                      already bring countless possibilities. By implementing
                      Smart Tokens, Coreum is able to extend their
                      functionalities and flexibility through Smart Contracts.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Developers can deploy their own logic by writing Smart
                      Contracts, being able to issue Smart Tokens, mint and burn
                      them, whitelist and blacklist accounts, freeze and
                      unfreeze their balances, and block or allow sending them
                      to other smart contracts.
                    </p>
                    <p className="m-0">&nbsp;</p>
                    <p className="m-0">
                      Now the behavior of the Smart Token might be driven by
                      actions taken by ordinary people, departments of your
                      organization or even different ones cooperating together,
                      meaning that the final action taken on the Smart Token
                      might be the result of the process involving different
                      actors following the transparent logic provided by the
                      Smart Contract, leading to greater reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[896px] flex flex-row flex-wrap items-start justify-start p-10 box-border gap-[40px] max-w-full z-[1] text-xs text-shades-light font-overline-footer mq450:gap-[20px]">
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-start justify-start p-4 box-border min-w-[301px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch relative tracking-[-0.01em] leading-[18px]">
                  PREVIOUS
                </div>
                <div className="self-stretch relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green">
                  Smart Contracts
                </div>
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-shades-pitch flex flex-col items-end justify-start p-4 box-border opacity-[0] min-w-[301px] max-w-full text-right">
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="self-stretch h-[18px] relative tracking-[-0.01em] leading-[18px] inline-block">
                  NEXT
                </div>
                <div className="self-stretch h-[22px] relative text-lg tracking-[-0.02em] leading-[22px] font-medium font-regular-label text-primary-green inline-block">
                  Tutorials
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer1 luminaScreen="/lumina-screen3@2x.png" />
    </div>
  );
};

export default SmartTokens;
