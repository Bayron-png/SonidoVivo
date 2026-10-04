import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const TelefonoInput = ({ value, onChange }) => {

    const handleTelefonoChange = (e) => {
        const val = e.target.value;
        onChange(e);
    };

    return (
        <Form.Group className="mb-3" controlId="formBasicTelefono">
            <Form.Label className="fw-bold">
                Telefono
            </Form.Label>

            <Form.Control
                type="tel"
                placeholder="+56 9 1234 5678"
                value={value}
                onChange={handleTelefonoChange}
            />
        </Form.Group>
    );
};

export default TelefonoInput;