import Dice from "./components/Dice";
import { useState } from "react";
import { nanoid } from "nanoid";
export default function App() {
  function generateAllNewDice() {

    return new Array(10).fill(0).map(() => ({
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid(),
    }));
  }

  const [dice, setDice] = useState(generateAllNewDice());

  const diceElement = dice.map((num, index) => (
    <Dice
      value={num.value}
      isHeld={num.isHeld}
      key={num.id}
      hold={() => hold(num.id)}
    />
  ));

  if (dice.filter((die) => die.isHeld).length === 10 && dice.every(die => die.value === dice[0].value)) {
    console.log("game over");
    
  }
  const hold = (id) => {
    setDice(
      dice.map((die) => {
        if (die.id === id) {
          return { ...die, isHeld: !die.isHeld };
        } else {
          return die;
        }
      })
    );
  };

  const rolldice = () => {
    setDice((oldDice) =>
      oldDice.map((die) =>
        die.isHeld ? die : { ...die, value: Math.ceil(Math.random() * 6) }
      )
    );
  };

  return (
    <>
      <main>
        <h1>Tenzies</h1>
        <div className="container">{diceElement}</div>

        <button onClick={rolldice}>Roll Dice</button>
      </main>
    </>
  );
}
