import html2canvas from "html2canvas";

export const convertWithHtml2Image = async (target: HTMLElement) => {
  return await html2canvas(target, { useCORS: true });
};
