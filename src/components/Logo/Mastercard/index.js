import React from "react"
import styled from "styled-components"

const Wrapper = styled.div`
  position: relative;
  color: white;
  font-weight: bold;
  text-align: center;
  font-size: .5625rem;
  font-style: italic;
  line-height: 2.25rem;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.6);
  padding: 0 5px;
`

const Circle = styled.span`
  content: "";
  position: absolute;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  z-index: 0;
`

const CircleLeft = styled(Circle)`
left: 0;
background: #f00;`

const CircleRight = styled(Circle)`  right: 0;
background: #ffab00;`

const Text = styled.span`
  position: relative;
  z-index: 0;
`

const Mastercard = () =>
  <Wrapper>
    <CircleLeft />
    <CircleRight />
    <Text>
      {"Mastercard"}
    </Text>
  </Wrapper>

export default Mastercard
