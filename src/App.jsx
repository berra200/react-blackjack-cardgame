import { useEffect, useState } from "react";
import Dealer from "./components/Dealer";
import Player from "./components/Player";
export default function App() {
  const [deck, setDeck] = useState();

  useEffect(() => {
    createDeck();
  }, []);

  function createDeck() {
    const suits = ["♦", "♣", "♥", "♠"];
    const values = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K",
    ];

    let newDeck = values.flatMap((value) => {
      return suits.map((suit) => {
        return [suit, value];
      });
    });

    newDeck.sort((a, b) => Math.random() - 0.5);
    setDeck(newDeck);
    // console.log(deck);
  }
  // function dealCards() {
  //   // Alla deltagare ska få varsit kort 2 gånger
  // }
  function dealCard() {
    console.log(deck[0]);
    let card = [];
    setDeck(() => {
      let newDeck = [...deck];
      card = newDeck.shift();
      return newDeck;
    });
    return card;
  }
  return (
    <>
      <h1 className="text-4xl">Blackjack!</h1>
      <Dealer />
      <Player name={"Testnamn"} dealCard={dealCard} />
    </>
  );
}
