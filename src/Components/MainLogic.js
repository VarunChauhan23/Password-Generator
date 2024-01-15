import React, { useEffect, useState } from "react";
import Chance from 'chance';
// import toast components of React to notify user on relative event
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const MainLogic = () => {

    // create a new chance instance
    const chance = new Chance();

    // various characters to be included
    const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialSymbols = '`~!@#$%^&()-_=+|[]{}\'\"\;:/?.>,<*';

    // useState hooks for storing generated password
    const [password, setPassword] = useState("");
    
    // useState hooks for handling character choices of user
    const [choices, setChoices] = useState({
        upperCaseChoice: false,
        lowerCaseChoice: false,
        numbersChoice: false,
        specialSymbolsChoice: false,
    });

    // toggle choice function which toggle the boolean values of choices hooks when user toggle the checkbox
    const toggleChoice = (choice) => {
        setChoices(prevChoices => ({
            ...prevChoices,
            [choice]: !prevChoices[choice],
        }));
    }


    // notify function which handle the toasts based on the type
    const notify = (message, type) => {

        if (type === 'error') {
            toast.error(`${message}!`, {
                position: "top-center"
            });
        };

        if (type === 'success') {
            toast.success(`${message}!`, {
                position: "top-center"
            });
        };

    }

    // function to generate password based on different conitions of user character choices
    //  inside function a chance function has been called which generate random strings and take 2 arguments --> 
    //         1- number of characters which is the length of password here selected by the user.
    //         2- character pool from which the password will be generated (here the pool is the concatenation of different chracter sets declared above based on the user choices).
    const handleGeneration = (length) => {

        if (choices.upperCaseChoice && choices.lowerCaseChoice && choices.numbersChoice && choices.specialSymbolsChoice) {

            let allCharacters = uppercaseLetters + lowercaseLetters + numbers + specialSymbols;

            const randomString = chance.string({ length, pool: allCharacters });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.upperCaseChoice && choices.lowerCaseChoice && choices.numbersChoice) {

            let allCharacters = uppercaseLetters + lowercaseLetters + numbers;

            const randomString = chance.string({ length, pool: allCharacters });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.upperCaseChoice && choices.specialSymbolsChoice && choices.numbersChoice) {

            let allCharacters = uppercaseLetters + specialSymbols + numbers;

            const randomString = chance.string({ length, pool: allCharacters });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.upperCaseChoice && choices.lowerCaseChoice && choices.specialSymbolsChoice) {

            let allCharacters = uppercaseLetters + lowercaseLetters + specialSymbols;

            const randomString = chance.string({ length, pool: allCharacters });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.upperCaseChoice && choices.lowerCaseChoice) {

            let allCharacters = uppercaseLetters + lowercaseLetters;

            const randomString = chance.string({ length, pool: allCharacters });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.upperCaseChoice && choices.numbersChoice) {

            let allCharacters = uppercaseLetters + numbers;

            const randomString = chance.string({ length, pool: allCharacters });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.upperCaseChoice && choices.specialSymbolsChoice) {

            let allCharacters = uppercaseLetters + specialSymbols;

            const randomString = chance.string({ length, pool: allCharacters });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.lowerCaseChoice && choices.numbersChoice && choices.specialSymbolsChoice) {

            let allCharacters = lowercaseLetters + numbers + specialSymbols;

            const randomString = chance.string({ length, pool: allCharacters });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.lowerCaseChoice && choices.numbersChoice) {

            let allCharacters = lowercaseLetters + numbers;

            const randomString = chance.string({ length, pool: allCharacters });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.lowerCaseChoice && choices.specialSymbolsChoice) {

            let allCharacters = lowercaseLetters + specialSymbols;

            const randomString = chance.string({ length, pool: allCharacters });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.numbersChoice && choices.specialSymbolsChoice) {

            let allCharacters = numbers + specialSymbols;

            const randomString = chance.string({ length, pool: allCharacters });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.upperCaseChoice) {

            const randomString = chance.string({ length, pool: uppercaseLetters });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.lowerCaseChoice) {

            const randomString = chance.string({ length, pool: lowercaseLetters });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.numbersChoice) {

            const randomString = chance.string({ length, pool: numbers });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else if (choices.specialSymbolsChoice) {

            const randomString = chance.string({ length, pool: specialSymbols });

            setPassword(randomString);

            notify("Password generated successfully", "success");

        } else {
            notify("Select at least one checkbox", "error")
        }
    }

    // useEffect function which make sure that handleGeneration function is called only after the useState variables are updated
    useEffect(() => {

        // condition that make sure the function will not run automatically when starting the app
        if (!choices.upperCaseChoice && !choices.lowerCaseChoice && !choices.numbersChoice && !choices.specialSymbolsChoice) {
            return;
        }

        // calling handleGeneration function with length parameter i.e., length of password
        handleGeneration(length);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return {
        password,
        choices,
        toggleChoice,
        handleGeneration
    };

}

export default MainLogic;