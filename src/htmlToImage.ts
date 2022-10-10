import { toJpeg } from "html-to-image";

export const convertWithHtmlToImage = async (target: HTMLElement) => {
  return await toJpeg(target, { backgroundColor: "#ffffff" });
};
