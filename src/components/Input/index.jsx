import PropTypes from "prop-types"; // Import PropTypes
import { Controller } from "react-hook-form";

import { InputContainer, InputText, IconContainer } from "./styles";

const Input = ({ leftIcon, name, control, rules, ...rest }) => {
  return (
    <InputContainer>
      {leftIcon ? <IconContainer>{leftIcon}</IconContainer> : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <InputText {...field} {...rest} $rules={rules} />
        )}
      />
    </InputContainer>
  );
};

Input.propTypes = {
  leftIcon: PropTypes.any, // Validate leftIcon prop
  name: PropTypes.string.isRequired, // Make sure name is a string and required
  control: PropTypes.object.isRequired, // Ensure control is an object and required
  rules: PropTypes.array,
};

export { Input };
