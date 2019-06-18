import React from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Label from '../Label';

const FieldInput = ({
  input,
  meta: { touched, error },
  type,
  placeholder,
  min,
  max,
  label,
  append,
  required,
}) => (
  <Form.Group>
    <Label label={label} required={required} />
    <InputGroup>
      <Form.Control
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        value={input.value}
        onChange={input.onChange}
        onBlur={input.onBlur}
        isInvalid={error && touched}
      />
      {append && (
        <InputGroup.Append>
          <InputGroup.Text id="inputGroupAppend">{append}</InputGroup.Text>
        </InputGroup.Append>
      )}
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </InputGroup>
  </Form.Group>
);

export default FieldInput;
