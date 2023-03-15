const buildBlurImage = async (image: string): Promise<string> => {
  const response: Response = await fetch(image);
  const buffer: ArrayBuffer = await response.arrayBuffer();
  const data: string = Buffer.from(buffer).toString("base64");

  return `data:image/webp;base64,${data}`;
};

export { buildBlurImage };
