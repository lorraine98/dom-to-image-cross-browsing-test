import styled from "@emotion/styled";
import Ticket from "./Ticket";

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
  const drawWithHtml2Canvas = async () => {};
  const downloadWithHtml2Canvas = async () => {};
  const drawWithHtmlToImage = async () => {};
  const downloadWithHtmlToImage = async () => {};
  return (
    <Container>
      <Ticket />
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
