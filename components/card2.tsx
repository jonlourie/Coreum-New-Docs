import type { NextPage } from "next";

export type Card2Type = {
  coreumCheatsheet?: string;
};

const Card2: NextPage<Card2Type> = ({ coreumCheatsheet }) => {
  return (
    <div className="w-[402px] !m-[0] absolute top-[0px] left-[0px] rounded-xl [background:linear-gradient(90deg,_rgba(69,_69,_69,_0.1),_rgba(255,_255,_255,_0.1))] shadow-[2px_0px_8px_rgba(0,_0,_0,_0.16)_inset] [backdrop-filter:blur(10px)] flex flex-row items-start justify-start pt-px pb-0 pr-0 pl-px box-border gap-[11.650000000000093px] max-w-full mq450:flex-wrap mq450:pr-px mq450:pb-px mq450:box-border">
      <div className="h-[59px] flex flex-col items-start justify-start pt-[35px] px-0 pb-0 box-border">
        <div className="w-0.5 h-6 relative box-border border-r-[1px] border-solid border-mediumseagreen-400" />
      </div>
      <div className="h-[71px] flex-1 flex flex-col items-start justify-start gap-[23.5px] min-w-[246px] max-w-full">
        <div className="w-60 h-0.5 relative box-border border-t-[1px] border-solid border-mediumseagreen-400" />
        <input
          className="w-full [border:none] [outline:none] bg-[transparent] self-stretch h-6 flex flex-row items-start justify-start py-0 px-3 box-border font-regular-label font-medium text-base text-primary-off-white min-w-[227px]"
          placeholder="Coreum cheatsheet"
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
  );
};

export default Card2;
