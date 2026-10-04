import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const NombreInput = ({ value, onChange }) => {

    const handleNombreChange = (e) => {
        const val = e.target.value;
        onChange(e);
    };

    return (
        <Form.Group className="mb-3" controlId="formBasicNombre">
            <Form.Label className="fw-bold">
                Nombre
            </Form.Label>

            <Form.Control
                type="text"
                placeholder="Tu nombre"
                value={value}
                onChange={handleNombreChange}
                required
            />
        </Form.Group>
    );
};

export default NombreInput;