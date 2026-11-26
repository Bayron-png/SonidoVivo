import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const NombreInput = ({ value, onChange, validar }) => {

    const [click, setClick] = useState(false);
    const error = validar(value);

    const handleNombreChange = (e) => {
        setClick(true)
        onChange(e);
    };

    return (
        <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label className="fw-bold">
                Nombre (*)
            </Form.Label>

            <Form.Control
                type="text"
                placeholder="Tu nombre"
                value={value}
                onChange={handleNombreChange}
                isInvalid={click && !!error}
                isValid={click && !error && !!value.trim()}
                required
            />
            {click && error && (
                <Form.Control.Feedback type="invalid">
                    {error}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    );
};

export default NombreInput;