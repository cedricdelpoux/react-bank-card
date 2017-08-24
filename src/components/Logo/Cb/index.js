import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  background: linear-gradient(
    to bottom,
    #23356a 0%,
    #4a91cc 35%,
    #4a91cc 65%,
    #38765e 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2.25rem;
  padding: 0 5px;
`

const Svg = styled.svg`
  height: 20px;
  fill: #fff;
`

const Cb = () =>
  <Wrapper>
    <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 66">
      <path d="M159 16c0-8.6-7-15.7-15.7-15.7H86v31.5h57.3c8.7 0 15.7-7 15.7-15.7zm0 33.5c0-8.7-7-15.7-15.7-15.8H86v31.6h57.3c8.7 0 15.7-7 15.7-15.8zM42.8 33.7v-2h42v-2.5C84.8 13.4 72 .5 56.2.5H29.5C13.5.5.8 13.5.8 29.2v7.6c0 15.8 12.8 28.7 28.7 28.7h26.7C72 65.5 85 52.5 85 36.8v-3H42.6z" />
    </Svg>
  </Wrapper>

export default Cb
