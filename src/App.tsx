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
  const containerRef = useRef<HTMLSelectElement>(null);

  const drawWithHtml2Canvas = async () => {
    if (ticketRef.current) {
      const canvas = await convertWithHtml2Image(ticketRef.current);
      containerRef.current?.appendChild(canvas);
    }
  };

  const downloadWithHtml2Canvas = async () => {
    if (ticketRef.current) {
      const canvas = await convertWithHtml2Image(ticketRef.current);
      const downloadLink = document.createElement("a");
      downloadLink.href = canvas.toDataURL("image/jpeg");
      downloadLink.download = "221010 티켓";
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
      downloadLink.href = dataUrl;
      downloadLink.download = "221010 티켓";
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
