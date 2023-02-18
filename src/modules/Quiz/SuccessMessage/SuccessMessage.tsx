import Image from "next/image";
import { useEffect } from "react";
import useSound from "use-sound";

import type { MessageState } from "../types";

const SuccessMessage: React.FC = () => {
  const [play] = useSound("/ding.mp3", { volume: 0.25 });
  useEffect(() => play(), [play]);

  const renderMessage = (): JSX.Element => {
    const random: number = Math.floor(Math.random() * 5) + 1;

    const defaultMessage: JSX.Element = (
      <>
        <figure className="relative h-24 w-24">
          <Image
            src="/anya.gif"
            alt="Success"
            fill
            quality={75}
            style={{
              objectFit: "contain",
            }}
          />
        </figure>
        <span>Umwerfend! &#129327;</span>
      </>
    );

    const message: MessageState = {
      1: defaultMessage,
      2: (
        <>
          <figure className="relative h-24 w-24">
            <Image
              src="/excited-spin.gif"
              alt="Success"
              fill
              quality={75}
              style={{
                objectFit: "contain",
              }}
            />
          </figure>
          <span>Spitze! &#128079;</span>
        </>
      ),
      3: <span>Sehr Richtig! &#129305;</span>,
      4: <span>Genau! &#128588;</span>,
      5: (
        <>
          <figure className="relative h-24 w-24">
            <Image
              src="/happy.gif"
              alt="Success"
              fill
              quality={75}
              style={{
                objectFit: "cover",
              }}
            />
          </figure>
          <span>Wunderbar! &#127881;</span>
        </>
      ),
    };

    return message[random] || defaultMessage;
  };

  return renderMessage();
};

export default SuccessMessage;
