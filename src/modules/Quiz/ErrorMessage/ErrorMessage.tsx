import useSound from "use-sound";

import type { MessageState } from "../types";
import type { ErrorMessageProps } from "./types";

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  hint,
}: ErrorMessageProps) => {
  const [play] = useSound("/quack.mp3", { volume: 0.25 });
  play();

  const renderMessage = (): JSX.Element => {
    const random: number = Math.floor(Math.random() * 5) + 1;

    const defaultMessage: JSX.Element = (
      <span className="block">Versuch noch einmal! &#129488;</span>
    );

    const message: MessageState = {
      1: defaultMessage,
      2: <span className="block">Leider nicht korrekt! &#128549;</span>,
      3: <span className="block">Das ist aber falsch! &#128549;</span>,
      4: <span className="block">Ziemlich korrekt! &#128588;</span>,
      5: (
        <span className="block">
          Nein. Bitte probiere es noch einmal! &#129325;
        </span>
      ),
    };

    return message[random] || defaultMessage;
  };

  return (
    <>
      {renderMessage()}
      {!!hint && (
        <>
          <i className="block text-sm font-bold">Hinweis:</i>
          <span className="text-sm">{hint}</span>
        </>
      )}
    </>
  );
};

export default ErrorMessage;
