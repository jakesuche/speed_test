import React from "react";
import { TryAgain } from "../TryAgain/TryAgain";
import TypingChallengeContainer from "../TypingChallengeContainer /TypingChallengeContainer";
import { Container } from "./TextContainer.style";
import { useState, useEffect, useRef } from "react";
import { typingTestData } from "../../../utils/data/textSource";
import { randomElementSelector } from '../../../helpers/randomSelector'
import { testDetailsCalculator } from "../../../helpers/testDetailsCalculator";





export default function TextContainer() {
  const initialDetails: {
    words: number;
    characters: number;
    mistakes: number;
  } = {
    words: 0,
    characters: 0,
    mistakes: 0,
  };
 
  

  const [timerStarted, setTimeStarted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(60);
  const [detailsData, setDetailsData] = useState(initialDetails);
  const [selectedParagraph, setSelectedParagraph] = useState<string>("");
  const mountedRef: React.MutableRefObject<boolean> = useRef(false);
  const startAgain = () => {
    setDetailsData({ ...initialDetails });
    setTimeRemaining(60);
    setTimeStarted(false);
    const paragraph = randomElementSelector(typingTestData);
    
    setSelectedParagraph(paragraph);
  };

  const handleKeyPress = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (!timerStarted) startTimer();
    const updatedDetails = testDetailsCalculator(selectedParagraph, value);
    console.log("Updated Details: ", updatedDetails);
    setDetailsData({ ...updatedDetails });
  };

  useEffect(() => {
    mountedRef.current = true;
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    if (mountedRef) {
      const paragraph = randomElementSelector(typingTestData);
      setSelectedParagraph(paragraph);
    }
  }, []);

  const startTimer = () => {
    setTimeStarted(true);
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining((prev) => prev - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };
  return (
    <Container>
      {timeRemaining > 0 ? (
        <TypingChallengeContainer
        //@ts-ignore
          handleKeyPress={handleKeyPress}
          timeRemaining={timeRemaining}
          words={detailsData.words}
          characters={detailsData.characters}
          mistakes={detailsData.mistakes}
          timerStarted={timerStarted}
          selectedParagraph={selectedParagraph}
        />
      ) : (
        <div className="d-flex justify-content-center">
          <TryAgain
            words={detailsData.words}
            characters={detailsData.characters}
            mistakes={detailsData.mistakes}
            startAgain={startAgain}
          />
        </div>
      )}
    </Container>
  );
}
