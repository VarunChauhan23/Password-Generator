import React, { useState } from "react";

const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const specialSymbols = '`~!@#$%^&()-_=+|[]{}\'\"\;:/?.>,<*';


const MainLogic = () => {
    
    const [upperCaseChoice, setUpperCaseChoice] = useState(false);
    const [lowerCaseChoice, setLowerCaseChoice] = useState(false);
    const [numbersChoice, setNumbersChoice] = useState(false);
    const [specialSymbolsChoice, setSpecialSymbolsChoice] = useState(false);

    const handleUpperCaseOption = () => {
        setUpperCaseChoice(prevState => {
            console.log(!prevState);
            return !prevState;
        });
    }
    
    const handleLowerCaseOption = () => {
        setLowerCaseChoice(prevState => {
            console.log(!prevState);
            return !prevState;
        });
    }
    
    const handleNumbersOption = () => {
        setNumbersChoice(prevState => {
            console.log(!prevState);
            return !prevState;
        });
    }

    const handleSpecialSymbolsOption = () => {
        setSpecialSymbolsChoice(prevState => {
            console.log(!prevState);
            return !prevState;
        });
    }

    const handleGeneration = (length) => {
        console.log(length);
    }

    return {
        handleUpperCaseOption,
        handleLowerCaseOption,
        handleNumbersOption,
        handleSpecialSymbolsOption,
        handleGeneration
    };

}

export default MainLogic;