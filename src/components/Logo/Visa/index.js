import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  background: white;
  text-transform: uppercase;
  color: #1a1876;
  font-weight: bold;
  text-align: center;
  font-size: .9375rem;
  font-style: italic;
  line-height: 2.25rem;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  padding: 0 5px;
`

const Band = styled.span`
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  height: 25%;
  z-index: 0;
`

const BandUp = styled(Band)`top: 0;
background: #1a1876;`

const BandDown = styled(Band)`bottom: 0;
background: #e79800;`

const Visa = () =>
  <Wrapper>
    <BandUp />
    <BandDown />
    <span>
      {"Visa"}
    </span>
  </Wrapper>

export default Visa
