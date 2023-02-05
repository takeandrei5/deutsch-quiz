import Image from "next/image";
import useSound from "use-sound";

import type { MessageState } from "../types";

const SuccessMessage: React.FC = () => {
  const [play] = useSound("/ding.mp3", { volume: 0.25 });
  play();

  const renderMessage = (): JSX.Element => {
    const random: number = Math.floor(Math.random() * 5) + 1;

    const defaultMessage: JSX.Element = (
      <>
        <Image src="/anya.gif" alt="Success" height={100} width={100} />
        <span>Umwerfend! &#129327;</span>
      </>
    );

    const message: MessageState = {
      1: defaultMessage,
      2: (
        <>
          <Image
            src="/excited-spin.gif"
            alt="Success"
            height={100}
            width={100}
          />
          <span>Spitze! &#128079;</span>
        </>
      ),
      3: <span>Sehr Richtig! &#129305;</span>,
      4: <span>Genau! &#128588;</span>,
      5: (
        <>
          <Image src="/happy.gif" alt="Success" height={100} width={100} />
          <span>Wunderbar! &#127881;</span>
        </>
      ),
    };

    return message[random] || defaultMessage;
  };

  return renderMessage();
};

export default SuccessMessage;
