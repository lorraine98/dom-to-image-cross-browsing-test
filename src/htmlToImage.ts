import { toJpeg } from "html-to-image";

export const convertWithHtmlToImage = async (target: HTMLElement) => {
  await toJpeg(target);
  return await toJpeg(target, { backgroundColor: "#ffffff" });
};
