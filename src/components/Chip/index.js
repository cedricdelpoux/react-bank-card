import styled from "styled-components"

const Chip = styled.div`
  background: #c1c2c4;
  border-radius: 5px;
  width: 3.125rem;
  height: 2.25rem;
  position: relative;

  &::before {
    content: "";
    width: 70%;
    height: 60%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    background: #dbdbdc;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`

export default Chip
