import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const RutInput = ({ value, onChange }) => {

    const handleRutChange = (e) => {
        const val = e.target.value;
        onChange(e);
    };

    return (
        <Form.Group className="mb-3" controlId="formBasicRut">
            <Form.Label className="fw-bold">
                Rut
            </Form.Label>

            <Form.Control
                type="text"
                placeholder="12.345.678-9"
                value={value}
                onChange={handleRutChange}
            />
        </Form.Group>
    );
};

export default RutInput;