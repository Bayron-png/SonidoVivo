import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const RutInput = ({ value, onChange, validar}) => {

    const [interactuando, setInteractuando] = useState(false);
    const error = validar(value);

    const handleRutChange = (e) => {
        setInteractuando(true)
        onChange(e);
    };

    return (
        <Form.Group className="mb-3" controlId="formBasicRut">
            <Form.Label className="fw-bold">
                Rut (*)
            </Form.Label>

            <Form.Control
                type="text"
                placeholder="12.345.678-9"
                maxLength={12}
                value={value}
                onChange={handleRutChange}
                isInvalid={interactuando && !!error}
                isValid={interactuando && !error && !!value.trim()}
                required
            />
            {interactuando && error && (
                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    );
};

export default RutInput;