import PropTypes from "prop-types"
import React, {Component} from "react"
import styled from "styled-components"

import Chip from "./components/Chip"
import Field from "./components/Field"
import Logo from "./components/Logo"

const DEFAULT_NAME = "•••••• •••••••"
const DEFAULT_NUMBER = "••••••••••••••••"
const DEFAULT_EXPIRY_MONTH = "••"
const DEFAULT_EXPIRY_YEAR = "••"
const DEFAULT_CVC = "•••"

const Line = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const CvcField = Field.extend`
  font-size: .875rem;
  margin-left: .625rem;
  width: 2rem;
  text-align: left;
`

const NameField = Field.extend`font-size: 1.25rem;`

const NumberField = Field.extend`
  font-size: 1.5rem;
  width: 100%;
`

const Expiry = styled.div`margin-left: 10px;`

const Card = styled.div`
  width: 330px;
  transform-style: preserve-3d;
  transition: all 400ms linear;
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-top: 66.66%; /* 3:2 ratio */
  }

  ${props => props.flipped && "transform: rotateY(180deg);"};
`

const Face = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  backface-visibility: hidden;
  transform-style: preserve-3d;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Recto = Face.extend`
  background-image: linear-gradient(to bottom right, #2f638b 50%, #3c7daf 50%);
  padding: 25px;
`

const Verso = Face.extend`
  background-image: linear-gradient(to bottom left, #2f638b 50%, #3c7daf 50%);
  padding: 5% 0;
  transform: rotateY(180deg);

  ${Line}:nth-child(2),
  ${Line}:nth-child(3) {
    padding: 0 .625rem;
  }
`

const VersoChip = Chip.extend``

const Strip = styled.div`
  background: #000;
  height: 3.125rem;
  width: 100%;
`
const Signature = styled.div`
  flex: 1 1 auto;
  background: #fff;
  height: 2.5rem;
`

class ReactBankCard extends Component {
  renderRecto() {
    const {expiryMonth, expiryYear, highlighted, name, number} = this.props
    const trimedNumber = number.replace(/[^\d]+/, "") || DEFAULT_NUMBER
    const spacedNumber = trimedNumber.replace(/(.{4})/g, "$1 ")
    return (
      <Recto>
        <Line>
          <Chip />
          <Logo number={number} />
        </Line>
        <Line>
          <NumberField highlighted={highlighted && highlighted.number}>
            {spacedNumber}
          </NumberField>
        </Line>
        <Line>
          <NameField highlighted={highlighted && highlighted.name}>
            {name || DEFAULT_NAME}
          </NameField>
          <Expiry>
            <Field highlighted={highlighted && highlighted.expiryMonth}>
              {expiryMonth || DEFAULT_EXPIRY_MONTH}
            </Field>
            <Field highlighted={highlighted && highlighted.expiryYear}>
              {expiryYear || DEFAULT_EXPIRY_YEAR}
            </Field>
          </Expiry>
        </Line>
      </Recto>
    )
  }

  renderVerso() {
    const {cvc, highlighted} = this.props
    return (
      <Verso>
        <Line>
          <Strip />
        </Line>
        <Line>
          <Signature />
          <CvcField highlighted={highlighted && highlighted.cvc}>
            {cvc || DEFAULT_CVC}
          </CvcField>
        </Line>
        <Line>
          <VersoChip />
        </Line>
      </Verso>
    )
  }

  render() {
    const {verso} = this.props
    return (
      <Card flipped={verso}>
        {this.renderRecto()}
        {this.renderVerso()}
      </Card>
    )
  }
}

ReactBankCard.propTypes = {
  cvc: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  expiryMonth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  expiryYear: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  highlighted: PropTypes.object,
  name: PropTypes.string,
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  verso: PropTypes.bool,
}

ReactBankCard.defaultProps = {
  cvc: DEFAULT_CVC,
  expiryMonth: DEFAULT_EXPIRY_MONTH,
  expiryYear: DEFAULT_EXPIRY_YEAR,
  highlighted: null,
  name: DEFAULT_NAME,
  number: DEFAULT_NUMBER,
  verso: false,
}

export default ReactBankCard
