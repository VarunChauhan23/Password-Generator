import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css';
import MainLogic from './MainLogic';

// import toast components of React to notify user on relative event
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function MainCard() {

    // useState hook to handle the length of password set by the user
    const [passwordLength, setPasswordLength] = useState(10);

    // importing all exports of MainLogic.js component using destructuring
    const { toggleChoice, handleGeneration, password } = MainLogic();

    // function triggered by the Generate password button which call the handleGeneration function of MainLogic.js component with passwordlength useState hook.
    const handleClick = () => {
        handleGeneration(passwordLength);
    }

    // function triggered by the copy password button which copy the generated password from output textarea
    const copyToClipboard = () => {

        // select the output area
        const target_element = document.getElementById('copy-area');

        // get the text of the output area
        const output_text = target_element.value;

        // condition which ensures that text is copied only after password is generated
        if (!output_text) {
            // toast triggered if the output area is empty
            toast.error(`Please generate a password to copy!`, {
                position: "top-center"
            });

        } else {
            target_element.select();
            document.execCommand("copy");
            // toast triggered after the content is copied
            toast.success(`Content copied to Clipboard!`, {
                position: "top-center"
            });
        }

    }

    return (
        <>
            <Container id='card-container'>
                <Card id='content-card'>
                    <Card.Body>
                        <Card.Title className='text-center text-success mb-4'>Password Generator</Card.Title>

                        <Form>

                            {/* Area to get the generated password or output area*/}
                            <Form.Group className='select-password-details mb-3'>
                                <Form.Control
                                    id="copy-area"
                                    readOnly
                                    name="char-no"
                                    type="text"
                                    value={password}
                                    placeholder='Generated password here'
                                />
                            </Form.Group>

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

                            {/* check box to handle the uppercase letters choice Also call the toggle choice function of MainLogic.js component with upperCaseChoice parameter */}
                            <Form.Group className='select-password-details'>
                                <Form.Label htmlFor="checkbox-uppercase">Add Uppercase Letters</Form.Label>
                                <Form.Check onClick={() => toggleChoice('upperCaseChoice')} id='checkbox-uppercase' />
                            </Form.Group>

                            {/* check box to handle the lowercase letters choice Also call the toggle choice function of MainLogic.js component with lowerCaseChoice parameter */}
                            <Form.Group className='select-password-details'>
                                <Form.Label htmlFor="checkbox-lowercase">Add Lowercase Letters</Form.Label>
                                <Form.Check onClick={() => toggleChoice('lowerCaseChoice')} id='checkbox-lowercase' />
                            </Form.Group>

                            {/* check box to handle the numbers choice Also call the toggle choice function of MainLogic.js component with numbersChoice parameter */}
                            <Form.Group className='select-password-details'>
                                <Form.Label htmlFor="checkbox-numbers">Add Numbers</Form.Label>
                                <Form.Check onClick={() => toggleChoice('numbersChoice')} id='checkbox-numbers' />
                            </Form.Group>


                            {/* check box to handle the special symbols choice Also call the toggle choice function of MainLogic.js component with specialSymbolsChoice parameter */}
                            <Form.Group className='select-password-details'>
                                <Form.Label htmlFor="checkbox-special-symbols">Add Special Symbols</Form.Label>
                                <Form.Check onClick={() => toggleChoice('specialSymbolsChoice')} id='checkbox-special-symbols' />
                            </Form.Group>
                        </Form>

                        {/* Button which will call the handleClick function to generate password */}
                        <Button className='my-3' onClick={handleClick} id='generate-password-btn' variant="success">Generate Password</Button>

                        {/* Button which will copy the generated password to clipboard by calling the copyToClipboard function */}
                        <Button id='copy-btn' onClick={() => copyToClipboard(password)}>Copy Password 📋</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default MainCard