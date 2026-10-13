import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ApellidoInput = ({ value, onChange, validar }) => {

    const [click, setClick] = useState(false);
    const error = validar(value);

    const handleApellidoChange = (e) => {
        setClick(true)
        onChange(e);
    };

    return (
        <Form.Group className="mb-3" controlId="formBasicApellido">
            <Form.Label className="fw-bold">
                Apellido
            </Form.Label>

            <Form.Control
                type="text"
                placeholder="Tu apellido"
                value={value}
                onChange={handleApellidoChange}
                isInvalid={click && !!error}
                isValid={click && !error && !!value.trim()}
            />
            {click && error && (
                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    );
};

export default ApellidoInput;