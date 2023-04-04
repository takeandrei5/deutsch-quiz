import { Portal } from "@components/Portal";
import Image from "next/image";

import type { ImageProps as PreloadedImageProps } from "next/image";

const PreloadedImage: React.FC<PreloadedImageProps> = (
  props: PreloadedImageProps
) => {
  return (
    <Portal>
      <Image
        {...props}
        alt={props.alt} //so that we do not get an error, stupid linter
        className="invisible absolute top-[-999px] left-[-999px]"
      />
    </Portal>
  );
};

export default PreloadedImage;
