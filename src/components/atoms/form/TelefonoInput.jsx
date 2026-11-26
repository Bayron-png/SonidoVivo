import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const TelefonoInput = ({ value, onChange, validar}) => {

    const [interactuando, setInteractuando] = useState(false);
    const error = validar(value);

    const handleTelefonoChange = (e) => {
        setInteractuando(true)
        onChange(e);
    };

    return (
        <Form.Group className="mb-3" controlId="formBasicTelefono">
            <Form.Label className="fw-bold">
                Telefono (*)
            </Form.Label>

            <Form.Control
                type="tel"
                placeholder="9 1234 5678"
                maxLength={9}
                value={value}
                onChange={handleTelefonoChange}
                isInvalid={interactuando && !!error}
                isValid={interactuando && !error && !!value.trim() && value.length === 9}
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

export default TelefonoInput;