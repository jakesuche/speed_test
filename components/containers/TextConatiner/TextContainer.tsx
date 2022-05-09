import React from "react";
import { TryAgain } from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer /TypingChallengeContainer";
import { Container } from "./TextContainer.style";

type Iprops = {
  handleKeyPress: (e:React.ChangeEventHandler<HTMLTextAreaElement>)=>void
  timeRemaining: number;
  words: number;
  characters: number;
  mistakes: number;
  timerStarted: boolean;
  selectedParagraph: string;
  startAgain: () => void;
};

export default function TextContainer({
  handleKeyPress,
  timeRemaining,
  startAgain,
  words,
  characters,
  mistakes,
  timerStarted,
  selectedParagraph,
}: Iprops) {
  return (
    <Container>
      {timeRemaining > 0 ? (
        <TypingChallengeContainer
          handleKeyPress={handleKeyPress}
          timeRemaining={timeRemaining}
          words={words}
          characters={characters}
          mistakes={mistakes}
          timerStarted={timerStarted}
          selectedParagraph={selectedParagraph}
        />
      ) : (
        <div className="d-flex justify-content-center">
          <TryAgain
            words={words}
            characters={characters}
            mistakes={mistakes}
            startAgain={startAgain}
          />
        </div>
      )}
    </Container>
  );
}
