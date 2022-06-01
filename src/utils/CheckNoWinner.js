export default function CheckNoWinner(currentGameBoard) {
  
  let obj = {...currentGameBoard }

  if ( (obj[1] !== "") && (obj[2] !== "") && (obj[3] !== "") && (obj[4] !== "") && (obj[5] !== "") && (obj[6] !== "") && (obj[7] !== "") && (obj[8] !== "") && (obj[9] !== "") ){
    console.log("No Winner!");
    return true;
  }
}