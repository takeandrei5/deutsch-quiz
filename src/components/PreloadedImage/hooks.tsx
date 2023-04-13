import { useState } from 'react';
import PreloadedImage from './PreloadedImage';

import type { ImageToPreload } from './types';

const usePreloadImage = () => {
  const [preloadedImages, setPreloadedImages] = useState<JSX.Element[]>([]);
  const [preloadedImageIds, setPreloadedImageIds] = useState<string[]>([]);

  const preloadImage = (imageToPreload: ImageToPreload): void => {
    if (preloadedImageIds.includes(imageToPreload.id)) {
      return;
    }

    const result: JSX.Element = (
      <PreloadedImage
        key={`${imageToPreload.name}-${imageToPreload.src}`}
        src={imageToPreload.src}
        alt={imageToPreload.name}
        width={imageToPreload.width}
        height={imageToPreload.height}
        quality={imageToPreload.quality}
      />
    );

    setPreloadedImageIds((preloadedImageIds: string[]) => [...preloadedImageIds, imageToPreload.id]);
    setPreloadedImages((preloadedImages: JSX.Element[]) => [...preloadedImages, result]);
  };

  return { preloadImage, preloadedImages };
};

export { usePreloadImage };
