import PropTypes from "prop-types"
import styled from "styled-components"

const Field = styled.span`
  color: rgba(255, 255, 255, 0.5);
  font-family: Courier, monospace;
  white-space: nowrap;
  overflow: hidden;
  border: 3px solid transparent;
  ${props => props.highlighted && "border-color: #ff8000;"};
`

Field.propTypes = {
  highlighted: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Field
