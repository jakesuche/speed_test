import React from "react";

import { Container } from "./TypingChallengeContainer.style";
import TypingChallange from "../TypingChallange/TypingChallange";
import ChallengeDetailsCard from "../DetailCard/DetailCard";

type Iprops = {
  handleKeyPress: (e:React.ChangeEventHandler<HTMLTextAreaElement>)=>void;
  timeRemaining: number;
  words: number;
  characters: number;
  mistakes: number;
  timerStarted: boolean;
  selectedParagraph: string;
};

export default function TypingChallengeContainer({
  handleKeyPress,
  timeRemaining,
  words,
  characters,
  mistakes,
  timerStarted,
  selectedParagraph,
}: Iprops) {
  return (
    <Container>
      <div className="details-container">
        <ChallengeDetailsCard cardName="Words" cardValue={words} />
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
        <ChallengeDetailsCard cardName="Mistakes" cardValue={mistakes} />
      </div>

      <div className="type-challenge-cont">
        <TypingChallange
          
          timeRemaining={timeRemaining}
          timerStarted={timerStarted}
          selectedParagraph={selectedParagraph}
          handleKeyPress={handleKeyPress}
        />
      </div>
    </Container>
  );
}
