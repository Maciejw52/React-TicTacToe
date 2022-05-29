import React from 'react'

export default function CheckWinner(currentGameBoard) {

    let obj = {...currentGameBoard }

    // Horizontal
    if ((obj[1] !== "" && obj[2] !== "" && obj[3] !== "")) {
        if ((obj[1] === obj[2]) && (obj[2] === obj[3]) && (obj[3] === obj[1])) {
            console.log(`WINNER! ${obj[1]}`);
            return true;
        }
    }
    if ((obj[4] !== "" && obj[5] !== "" && obj[6] !== "")) {
        if ((obj[4] === obj[5]) && (obj[5] === obj[6]) && (obj[6] === obj[4])) {
            console.log(`WINNER! ${obj[4]}`);
            return true;
        }
    }
    if ((obj[7] !== "" && obj[8] !== "" && obj[9] !== "")) {
        if ((obj[7] === obj[8]) && (obj[8] === obj[9]) && (obj[9] === obj[7])) {
            console.log(`WINNER! ${obj[7]}`);
            return true;
        }
    }
    // Vertical
    if ((obj[1] !== "" && obj[4] !== "" && obj[7] !== "")) {
        if ((obj[1] === obj[4]) && (obj[4] === obj[7]) && (obj[7] === obj[1])) {
            console.log(`WINNER! ${obj[1]}`);
            return true;
        }
    }
    if ((obj[2] !== "" && obj[5] !== "" && obj[8] !== "")) {
        if ((obj[2] === obj[5]) && (obj[5] === obj[8]) && (obj[8] === obj[2])) {
            console.log(`WINNER! ${obj[2]}`);
            return true;
        }
    }
    if ((obj[3] !== "" && obj[6] !== "" && obj[9] !== "")) {
        if ((obj[3] === obj[6]) && (obj[6] === obj[9]) && (obj[9] === obj[3])) {
            console.log(`WINNER! ${obj[3]}`);
            return true;
        }
    }
    // Diagonal
    if ((obj[1] !== "" && obj[5] !== "" && obj[9] !== "")) {
        if ((obj[1] === obj[5]) && (obj[5] === obj[9]) && (obj[9] === obj[1])) {
            console.log(`WINNER! ${obj[1]}`);
            return true;
        }
    }
    if ((obj[3] !== "" && obj[5] !== "" && obj[7] !== "")) {
        if ((obj[3] === obj[5]) && (obj[5] === obj[7]) && (obj[7] === obj[3])) {
            console.log(`WINNER! ${obj[3]}`);
            return true;
        }
    }

}