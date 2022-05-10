
import { TryAgainContainer } from './TryAgain.style'

type Iprops = {
    startAgain:()=>void;
    words?:number;
    characters?:number;
    mistakes?:number;
}

export const TryAgain = ({ 
    startAgain,
    words,
    characters,
    mistakes
}:Iprops) => {
    return (
        <TryAgainContainer >
            <h1>Test Results</h1>

            <div className="result-container">
                <p>uche</p>
                <p><b>Characters:</b>{characters}</p>
                <p><b>Mistakes:</b> {mistakes}</p>
                <p><b>Speed</b> {words} wpm</p>
            </div>

            <button onClick={startAgain} className="start-again-btn">
                Start Again
            </button>
        </TryAgainContainer>
    )
}