import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ApellidoInput = ({ value, onChange }) => {

    const handleApellidoChange = (e) => {
        const val = e.target.value;
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
                required
            />
        </Form.Group>
    );
};

export default ApellidoInput;