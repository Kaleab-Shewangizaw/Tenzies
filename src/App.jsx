import Dice from "./components/Dice";
import { useState } from "react";
export default function App() {
  function generateAllNewDice() {
    // const newDice = []
    // for(let i = 0; i < 10; i++){
    //     const randNum = Math.floor(Math.random() * 6)
    //     newDice.push(randNum)
    // }
    // return newDice
    // ----------------------------------------------------------------
    // return new Array(10)
    //   .fill(0)
    //   .map((val, index) => (
    //     <Dice value={Math.ceil(Math.random() * 6)} key={index} />
    //   ));
    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
    }));
  }

  const [dice, setDice] = useState(generateAllNewDice());

  const diceElement = dice.map((num, index) => (
    <Dice value={num.value} key={index} />
  ));

  // const dice = generateAllNewDice().map((die, index)=>{
  //     return  <Dice value={die} key={index}/>})

  const rolldice = () => {
    setDice(generateAllNewDice());
  };

  return (
    <>
      <main>
        <div className="container">{diceElement}</div>

        <button onClick={rolldice}>Roll Dice</button>
      </main>
    </>
  );
}
