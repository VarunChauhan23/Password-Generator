import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../index.css';

function MainCard() {
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
                                />
                            </Form.Group>

                            {/* Checkbox if user want to add uppercase characters in it's password or not */}
                            <Form.Group className='select-password-details'>
                                <Form.Label htmlFor="checkbox-uppercase">Add Uppercase Letters</Form.Label>
                                <Form.Check id='checkbox-uppercase' />
                            </Form.Group>
                            
                            {/* Checkbox if user want to add lowercase characters in it's password or not */}
                            <Form.Group className='select-password-details'>
                                <Form.Label htmlFor="checkbox-lowercase">Add Lowercase Letters</Form.Label>
                                <Form.Check id='checkbox-lowercase' />
                            </Form.Group>
                            
                            {/* Checkbox if user want to add numbers in it's password or not */}
                            <Form.Group className='select-password-details'>
                                <Form.Label htmlFor="checkbox-numbers">Add Numbers</Form.Label>
                                <Form.Check id='checkbox-numbers' />
                            </Form.Group>
                            
                            {/* Checkbox if user want to add special symbols in it's password or not */}
                            <Form.Group className='select-password-details'>
                                <Form.Label htmlFor="checkbox-special-symbols">Add Special Symbols</Form.Label>
                                <Form.Check id='checkbox-special-symbols' />
                            </Form.Group>
                        </Form>

                        {/* Button which will call the relative function to generate password */}
                        <Button className='my-3' id='generate-password-btn' variant="success">Generate Password</Button>
                        
                        {/* Button which will copy the generated password to clipboard */}
                        <Button id='copy-btn'>Copy Password 📋</Button>
                    </Card.Body>
                </Card>
            </Container>
        </>
    );
}

export default MainCard