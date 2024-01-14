import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css';
import MainLogic from './MainLogic';

const ButtonWrapper = ({ onClickHandler }) => {

    const { handleUpperCaseOption, handleLowerCaseOption, handleNumbersOption, handleSpecialSymbolsOption, } = MainLogic();

    return (
        <>
            {/* Checkbox if user want to add uppercase characters in it's password or not */}
            <Form.Group className='select-password-details'>
                <Form.Label htmlFor="checkbox-uppercase">Add Uppercase Letters</Form.Label>
                <Form.Check onClick={() => onClickHandler(handleUpperCaseOption)} id='checkbox-uppercase' />
            </Form.Group>

            {/* Checkbox if user want to add lowercase characters in it's password or not */}
            <Form.Group className='select-password-details'>
                <Form.Label htmlFor="checkbox-lowercase">Add Lowercase Letters</Form.Label>
                <Form.Check onClick={() => onClickHandler(handleLowerCaseOption)} id='checkbox-lowercase' />
            </Form.Group>

            {/* Checkbox if user want to add numbers in it's password or not */}
            <Form.Group className='select-password-details'>
                <Form.Label htmlFor="checkbox-numbers">Add Numbers</Form.Label>
                <Form.Check onClick={() => onClickHandler(handleNumbersOption)} id='checkbox-numbers' />
            </Form.Group>

            {/* Checkbox if user want to add special symbols in it's password or not */}
            <Form.Group className='select-password-details'>
                <Form.Label htmlFor="checkbox-special-symbols">Add Special Symbols</Form.Label>
                <Form.Check onClick={() => onClickHandler(handleSpecialSymbolsOption)} id='checkbox-special-symbols' />
            </Form.Group>
        </>
    );
}

function MainCard() {

    const [passwordLength, setPasswordLength] = useState(10);
    const { handleGeneration } = MainLogic();

    const handleClick = (func) => {
        if (typeof func === 'function') {
            func();
        } else {
            console.error('Invalid function provided:', func);
        }
    };

    return (
        <>
            <Container id='card-container'>
                <Card id='content-card'>
                    <Card.Body>
                        <Card.Title className='text-center text-success mb-4'>Password Generator</Card.Title>

                        {/* Area to get the generated password */}
                        <div className='mb-3' id='copy-area'>
                            <h5>Password</h5>
                        </div>

                        <Form>

                            {/* Input to select the length of password numerically */}
                            <Form.Group className='select-password-details mb-2'>
                                <Form.Label htmlFor="char-no">Password length</Form.Label>
                                <Form.Control
                                    id="char-no"
                                    required
                                    name="char-no"
                                    type="number"
                                    value={passwordLength}
                                    onChange={(e) => setPasswordLength(e.target.value)}
                                />
                            </Form.Group>

                            <ButtonWrapper onClickHandler={handleClick} />
                        </Form>

                        {/* Button which will call the relative function to generate password */}
                        <Button className='my-3' onClick={() => handleGeneration(passwordLength)} id='generate-password-btn' variant="success">Generate Password</Button>

                        {/* Button which will copy the generated password to clipboard */}
                        <Button id='copy-btn'>Copy Password 📋</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default MainCard