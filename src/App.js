import { useState } from "react";

import Modal from "./Components/Modal";
import styled from "styled-components";

function App() {
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
    <div>
      <BtnsContainer>
        <Button onClick={() => setModal(!modal)}>Modal 1</Button>
        <Button onClick={() => setModal2(!modal2)}>Modal 2</Button>
        <Button onClick={() => setModal3(!modal3)}>Modal 3</Button>
      </BtnsContainer>
      <Title>Click the Buttons 🤓</Title>

      {/* Modal #1 */}
      <Modal
        state={modal}
        changeState={setModal}
        icono={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="red"
            className="bi bi-exclamation-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
          </svg>
        }
      >
        <Description>
          <h1>Are you sure?</h1>
          <p>You can´t go back!</p>

          <Button onClick={() => setModal(!modal)}>Accept</Button>
          <ButtonScdry onClick={() => setModal(!modal)}>Delete</ButtonScdry>
        </Description>
      </Modal>

      {/* Modal #2 */}
      <Modal
        state={modal2}
        changeState={setModal2}
        icono={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="#D118DE "
            className="bi bi-emoji-neutral-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm-3 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zM10 8c-.552 0-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5S10.552 8 10 8z" />
          </svg>
        }
      >
        <Description>
          <h1>Upsss</h1>
          <p>Something is wrong..</p>
        </Description>
      </Modal>

      {/* Modal #3 */}
      <Modal
        state={modal3}
        changeState={setModal3}
        icono={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="green"
            className="bi bi-check-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
          </svg>
        }
      >
        <Description>
          <h1>Let's Go!</h1>
          <p>Everithing is ok 😃</p>
          <Button onClick={() => setModal3(!modal3)}>Close</Button>
        </Description>
      </Modal>
    </div>
  );
}

export default App;

const BtnsContainer = styled.div`
  padding: 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Button = styled.button`
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #000;
  cursor: pointer;

  font-weight: bold;
  transition: 0.3s ease all;
  &:hover {
    background: #9eadbd;
  }
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 3rem;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p {
    font-size: 18px;
    margin-bottom: 20px;
  }
`;
const ButtonScdry = styled.button`
  display: flex;
  padding: 10px 30px;
  border-radius: 100px;
  color: #fff;
  border: none;
  background: #ee144e;
  cursor: pointer;

  font-weight: bold;
  transition: 0.3s ease all;
  &:hover {
    background: #e36d8c;
  }

  margin-top: 30px;
`;
