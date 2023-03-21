import Image from "next/image";

import type { ImageProps as PreloadedImageProps } from "next/image";

const PreloadedImage: React.FC<PreloadedImageProps> = (
  props: PreloadedImageProps
) => {
  return (
    <Image
      {...props}
      alt={props.alt} //so that we do not get an error, stupid linter
      className="invisible absolute top-[-999px] left-[-999px]"
    />
  );
};

export default PreloadedImage;
