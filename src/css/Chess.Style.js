import styled from "styled-components";

export const UpperDiv = styled.div`
  border-radius: 4px;
  border: 0;
  position: absolute;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 720px;
  height: 720px;
  font-size: 1.5rem;
`;
export const Numbers = styled.div`
  height: 100%;
  width: 5%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-evenly;
  left: 0;
  top: 0;
  color: #ebebd0;
  text-align: center;
`;
export const Letters = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  text-align: center;
  height: 5%;
  display: flex;
  color: #ebebd0;
  justify-content: space-evenly;
  align-items: center;
`;
export const BoardStyle = styled.div`
  background-color: #1e2028;
  position: absolute;
  display: flex;
  flex-flow: row wrap;
  top: 47%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 610px;
  width: 610px;
  border: outset 20px #7d694c;
  width: auto;
  height: auto;
  margin: auto;
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(8, 75px);
  grid-template-rows: repeat(8, 75px);
  grid-auto-flow: row;
`;

export const Div = styled.div`
  height: 75px;
  width: 75px;
  background-color: ${({ Design }) => (Design === 1 ? "#759652" : "#EBEBD0")};
  background-image: url(${({ IMG }) => (IMG !== "Empty" ? IMG : "")});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 38%;
  background: ${({ Test }) => (Test ? "#ffc97a" : "")};
  background: ${({ Test }) => (Test ? "#ffc97a" : "")};
  box-shadow: ${({ Test }) =>
    Test
      ? "inset 0px 0px 10px 5px rgba(0, 0, 0, 0.26)"
      : "inset 0px 0px 10px 5px rgba(0, 0, 0, 0.19)"};

  -webkit-transition: background-color 350ms linear;
  -moz-transition: background-color 350ms linear;
  -o-transition: background-color 350ms linear;
  -ms-transition: background-color 350ms linear;

  transition: background-color 350ms cubic-bezier(0.65, 0.05, 1, 0.8);

  opacity: 1;
  &&:hover {
    box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.4);
  }
`;
