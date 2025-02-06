import PropTypes from "prop-types";
import { ButtonContainer } from "./styles";

const Button = ({ title, variant = "primary", onClick }) => {
  return (
    <ButtonContainer $variant={variant} onClick={onClick}>
      {title}
    </ButtonContainer>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary"]),
  onClick: PropTypes.func,
};

export { Button };
