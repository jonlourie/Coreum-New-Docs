import type { NextPage } from "next";

const Content2: NextPage = () => {
  return (
    <div className="self-stretch h-[2286px] flex flex-col items-start justify-start pt-6 px-10 pb-20 box-border gap-[80px] text-left text-5xl text-primary-off-white font-regular-label lg:pt-5 lg:pb-[34px] lg:box-border mq750:pb-[22px] mq750:box-border mq1050:gap-[40px_80px] mq450:gap-[20px_80px]">
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] shrink-0 text-13xl text-shades-light mq450:gap-[20px_40px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[40px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
          Coreum Non-Fungible Token
        </h1>
        <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer">
          This document specifies assetnft module, which allows public users of
          the blockchain to create non-fungible tokens on the Coreum blockchain.
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] shrink-0 text-13xl text-shades-light mq450:gap-[20px_40px]">
        <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[40px] font-medium font-inherit text-transparent !bg-clip-text [background:linear-gradient(180deg,_#fff,_#666)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq1050:text-7xl mq1050:leading-[32px] mq450:text-lgi mq450:leading-[24px]">
          Concepts
        </h1>
        <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer">
          <span>
            This module provides transactions and queries which allows public
            users of the blockchain to issue non-fungible tokens. The
            information for the NFTs themselves are stored in the nft module
            developed by Cosmos team, but that module does not allow public
            users to issue NFT classes or mint NFTs, and that's where this
            module comes in. The interaction between the two modules is
            described 
          </span>
          <span className="font-semibold text-primary-green">here</span>
          <span>
            . This module also introduces features that defines specific
            behavior for the nft (described 
          </span>
          <span className="font-semibold text-primary-green">here</span>
          <span>).</span>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start shrink-0 mq450:gap-[20px_40px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
            Interaction with NFT Module, Introducing WNFT Module
          </h3>
          <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
            <p className="m-0">
              The Cosmos team has developed the nft module (which we hereby
              refer to as the original nft module), which can be used to store
              the information about NFTs, their classes, their ownership, etc.
              But as mentioned earlier this module does not provide any
              functionalities to public users to create their own NFTs, or
              define custom behavior for transferring tokens. Because of this
              reason we have wrapped the original nft module into
              the wnft module, which allows injecting custom logic into the
              transfer method of the original nft module. We have also created
              the assetnft module (this module), to allow public users to create
              their own NFTs with their own custom behavior.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              In other words the assetnft module defines the custom behavior for
              NFTs, enforces that behavior by injecting custom logic
              into wnft module, and keeps most NFT related information on
              the original nft moduel.
            </p>
            <p className="m-0">&nbsp;</p>
            <p className="m-0">
              This design means that some portion of data relating to NFTs will
              live in this module, and some will live in the original nft
              module, so to get the final NFT functionality one should be aware
              and understand that they should make some of the queries to
              the original nft module.
            </p>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] shrink-0 text-lg mq450:gap-[20px_40px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-5xl">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
            Token Features
          </h3>
          <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
            <p className="m-0">
              NFT tokens come with a set of features that the issuer can specify
              at the time of issuing a class, and then in some cases configured
              on each NFT level later.
            </p>
            <p className="m-0">Here is the list of features:</p>
            <ul className="m-0 font-inherit text-inherit pl-[21px]">
              <li className="mb-0">burning</li>
              <li className="mb-0">freezing</li>
              <li className="mb-0">whitelisting</li>
              <li className="mb-0">disable sending</li>
              <li className="mb-0">soulbound</li>
            </ul>
            <p className="m-0">We will discuss each feature separately.</p>
          </div>
        </div>
        <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
              Burning
            </div>
            <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
              If this feature is enabled, it allows the holders of the token to
              burn the tokens they hold. It should be noted here that the issuer
              can burn their token regardless of this feature.
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
              Freezing
            </div>
            <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
              If this feature is enabled, it allows the issuer of the class to
              freeze any NFT token in that class. A frozen token cannot be
              transferred until it is unfrozen by the issuer.
            </div>
          </div>
        </div>
        <div className="self-stretch rounded-xl flex flex-col items-start justify-start">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="relative tracking-[-0.02em] leading-[22px] font-medium">
              Whitelisting
            </div>
            <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
              If this feature is enabled, then for any user to receive any NFT
              of that class, they must be whitelisted to receive that specific
              NFT. It follows that this feature allows the issuer of the class
              to whitelist an account to hold a specific NFT of that class, or
              remove an account from whitelisted accounts for that NFT.
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start shrink-0 mq450:gap-[20px_40px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
            Disable Sending
          </h3>
          <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
            If this feature is enabled, then the NFT cannot be directly
            transferred between users, meaning that user A cannot send the
            tokens they hold directly to user B. This feature opens up the door
            for different use cases in the future, one of which is that it might
            be used to force transfer of ownership to go via DEX, so that the
            royalty fee is applied and the creator of the NFT always gets a
            royalty fee.
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start shrink-0 mq450:gap-[20px_40px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
          <h3 className="m-0 self-stretch relative text-inherit tracking-[-0.02em] leading-[30px] font-medium font-inherit mq450:text-lgi mq450:leading-[24px]">
            Soulbound
          </h3>
          <div className="self-stretch relative text-base tracking-[-0.01em] leading-[28px] font-overline-footer text-shades-light">
            If this feature is enabled, then the NFT can not be sent by anyone,
            except the issuer. This feature is useful for NFTs that are created
            for a specific user, and the issuer wants to make sure that the NFT
            is not transferred to anyone else.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
