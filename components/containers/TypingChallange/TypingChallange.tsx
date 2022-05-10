import React from "react";
import {
  ChallangeWrapper,
  TextAreaContainer,
  TextareaContent,
  Select
} from "./TypingChallange.style";

type Iprops = {
  handleKeyPress: (e:React.ChangeEventHandler<HTMLTextAreaElement>)=>void
  timeRemaining: number
  timerStarted:boolean
  selectedParagraph: string,
  onChange?:React.ChangeEventHandler<HTMLSelectElement> 

}

const  TypingChallange:React.FC<Iprops> = ({
  handleKeyPress,
  timeRemaining,
  timerStarted,
  selectedParagraph,
  onChange,
}) => {
  return (
    <ChallangeWrapper>
        
      <div className="timer-container">
        <p className="timer">00:{timeRemaining >= 10 ? timeRemaining : `0${timeRemaining}`}</p>
        <p className="timer-info">{!timerStarted && 'Start typing to start the test'}</p>
      </div>
      <TextAreaContainer>
        <TextareaContent>
          <textarea value={selectedParagraph} disabled={true} className="textarea"></textarea>
        </TextareaContent>
        <TextareaContent>
          {/* @ts-ignore */}
          <textarea  onChange={handleKeyPress} className="textarea"></textarea>
        </TextareaContent>
      </TextAreaContainer>
    </ChallangeWrapper>
  );
}

export default TypingChallange

