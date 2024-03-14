import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ISOConfirmationContainerType = {
  dimensions?: string;
  dimensionsDescription?: string;
  financialMessagingStandar?: string;
  iso20022Description?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const ISOConfirmationContainer: NextPage<ISOConfirmationContainerType> = ({
  dimensions,
  dimensionsDescription,
  financialMessagingStandar,
  iso20022Description,
  propFlex,
}) => {
  const involvesLeveragingTheStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div className="flex-1 rounded-[3.03px] h-[60.5px] flex flex-col items-start justify-start p-[6.0505757331848145px] box-border relative gap-[2.4202303886413574px] text-left text-7xs-4 text-white font-overline-footer">
      <img
        className="w-full absolute !m-[0] h-full top-[0%] right-[0%] bottom-[0%] left-[0%] max-w-full overflow-hidden max-h-full object-contain z-[0]"
        alt=""
        src={dimensions}
      />
      <img
        className="w-[60.5px] absolute !m-[0] top-[calc(50%_-_30.25px)] right-[0.1px] h-[60.5px] object-cover mix-blend-lighten z-[1]"
        alt=""
        src={dimensionsDescription}
      />
      <div className="self-stretch relative tracking-[-0.01em] leading-[8.17px] font-medium z-[2]">
        {financialMessagingStandar}
      </div>
      <div
        className="self-stretch relative text-8xs-2 tracking-[-0.01em] leading-[6.35px] text-shades-light z-[3]"
        style={involvesLeveragingTheStyle}
      >
        {iso20022Description}
      </div>
    </div>
  );
};

export default ISOConfirmationContainer;
