import type { NextPage } from "next";
import TypeLinkStateDefault from "./type-link-state-default";

export type ContainerCardType = {
  iconId?: string;
  blockchainNetworkLogo?: string;
};

const ContainerCard: NextPage<ContainerCardType> = ({
  iconId,
  blockchainNetworkLogo,
}) => {
  return (
    <div className="w-[402px] rounded-xl bg-shades-pitch flex flex-row items-center justify-start p-6 box-border gap-[20px] text-left text-lg text-primary-dim font-regular-label">
      <img
        className="w-14 relative rounded-xl h-14 overflow-hidden shrink-0"
        alt=""
        src={iconId}
      />
      <div className="flex-1 flex flex-col items-start justify-start gap-[8px]">
        <div className="self-stretch relative tracking-[-0.02em] leading-[22px] font-medium">
          {blockchainNetworkLogo}
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
    </div>
  );
};

export default ContainerCard;
