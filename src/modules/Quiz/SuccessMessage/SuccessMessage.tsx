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
        <video
          className="drag-none pointer-events-none h-16 w-24 select-none"
          preload="metadata"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/anya.webm" type="video/webm" />
        </video>

        <span>Umwerfend! &#129327;</span>
      </>
    );

    const message: MessageState = {
      1: defaultMessage,
      2: (
        <>
          <video
            className="drag-none pointer-events-none h-16 w-24 select-none"
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/spin.webm" type="video/webm" />
          </video>

          <span>Spitze! &#128079;</span>
        </>
      ),
      3: (
        <>
          <video
            className="drag-none pointer-events-none h-16 w-24 select-none"
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/excited-happy.webm" type="video/webm" />
          </video>

          <span>Sehr Richtig! &#129305;</span>
        </>
      ),
      4: (
        <>
          <video
            className="drag-none pointer-events-none h-16 w-24 select-none"
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/jake.webm" type="video/webm" />
          </video>
          <span>Genau! &#128588;</span>
        </>
      ),
      5: (
        <>
          <video
            className="drag-none pointer-events-none h-16 w-24 select-none"
            preload="metadata"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/happy.webm" type="video/webm" />
          </video>

          <span>Wunderbar! &#127881;</span>
        </>
      ),
    };

    return message[random] || defaultMessage;
  };

  return <>{isLoaded && renderMessage()}</>;
};

export default SuccessMessage;
