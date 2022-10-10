import styled from "@emotion/styled";
import { useRef } from "react";
import { convertWithHtml2Image } from "./html2image";
import { convertWithHtmlToImage } from "./htmlToImage";
import { Ticket } from "./Ticket";

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  background: none;
  border: 1px solid black;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  :hover {
    background-color: gray;
    color: white;
  }
`;

function App() {
  const ticketRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const { userAgent } = navigator;

  const checkUserAgent = () => {
    if (/iPad|iPhone|iPod/.test(userAgent)) {
      return "IOS";
    } else if (/Chrome/.test(userAgent)) {
      return "CHROME";
    } else if (/Safari/.test(userAgent)) {
      return "SAFARI";
    } else {
      return "OTHER";
    }
  };

  const drawWithHtml2Canvas = async () => {
    if (ticketRef.current) {
      const canvas = await convertWithHtml2Image(ticketRef.current);
      const image = new Image();
      image.width = 255;
      image.src = canvas.toDataURL("image/jpeg");
      containerRef.current?.appendChild(image);
    }
  };

  const downloadWithHtml2Canvas = async () => {
    if (ticketRef.current) {
      const canvas = await convertWithHtml2Image(ticketRef.current);
      const downloadLink = document.createElement("a");
      const userAgent = checkUserAgent();

      downloadLink.href = canvas.toDataURL("image/jpeg");
      downloadLink.download = `html2Canvas ${userAgent}`;
      downloadLink.click();
    }
  };

  const drawWithHtmlToImage = async () => {
    if (ticketRef.current) {
      const image = new Image();
      image.width = 255;
      const dataUrl = await convertWithHtmlToImage(ticketRef.current);
      image.src = dataUrl;
      containerRef.current?.appendChild(image);
    }
  };

  const downloadWithHtmlToImage = async () => {
    if (ticketRef.current) {
      const dataUrl = await convertWithHtmlToImage(ticketRef.current);
      const downloadLink = document.createElement("a");
      const userAgent = checkUserAgent();

      downloadLink.href = dataUrl;
      downloadLink.download = `htmlToImage ${userAgent}`;
      downloadLink.click();
    }
  };

  return (
    <Container ref={containerRef}>
      <Ticket ref={ticketRef} />
      <p>html2Canvas</p>
      <div>
        <Button onClick={drawWithHtml2Canvas} style={{ marginRight: "12px" }}>
          이미지로 그리기
        </Button>
        <Button onClick={downloadWithHtml2Canvas}>다운로드</Button>
      </div>
      <p>htmlToImage</p>
      <div>
        <Button onClick={drawWithHtmlToImage} style={{ marginRight: "12px" }}>
          이미지로 그리기
        </Button>
        <Button onClick={downloadWithHtmlToImage}>다운로드</Button>
      </div>
    </Container>
  );
}

export default App;
