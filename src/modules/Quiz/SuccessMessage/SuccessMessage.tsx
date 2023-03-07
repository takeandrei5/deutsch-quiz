import Image from "next/image";
import { useState } from "react";
import useSound from "use-sound";

import type { MessageState } from "../types";

const SuccessMessage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [play] = useSound("/ding.mp3", {
    volume: 0.25,
    onload: () => setIsLoaded(true),
  });
  play();

  const renderMessage = (): JSX.Element => {
    const random: number = Math.floor(Math.random() * 5) + 1;

    const defaultMessage: JSX.Element = (
      <>
        <figure className="drag-none pointer-events-none h-16 w-24 select-none">
          <Image
            className="max-h-full"
            src="/anya.gif"
            alt="Success"
            quality={75}
            width={96}
            height={64}
            priority
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
          <figure className="drag-none pointer-events-none h-18 w-24 select-none">
            <Image
              className="max-h-full"
              src="/excited-spin.gif"
              alt="Success"
              width={96}
              height={72}
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
          <figure className="drag-none pointer-events-none h-18 w-24 select-none">
            <Image
              className="max-h-full"
              src="/happy.gif"
              alt="Success"
              width={96}
              height={72}
              quality={75}
              priority
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

  return <>{isLoaded && renderMessage()}</>;
};

export default SuccessMessage;
