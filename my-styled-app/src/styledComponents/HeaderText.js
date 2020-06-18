import styled from "styled-components";
const fontSize = (size) => {
  switch (size) {
    case "large":
      return "4rem";
    case "small":
      return "3rem";
    default:
      return "2rem";
  }
};
const HeaderText = styled.h1`
  color: white !important;
  text-align: center !important;
  font-size: ${(props) => fontSize(props.fSize)} !important;
`;
export default HeaderText;