import React from "react";
import Timer from 'react-compound-timer';

export default function Timer_(){
    return(
        <div className="timer">
        <Timer
            initialTime={1586304000}
            direction="backward"
        >
            {() => (
                <React.Fragment>
                  <span className="timer-element">  <Timer.Days /> Jours </span>
                  <span className="timer-element"> <Timer.Hours /> Heures </span>
                  <span className="timer-element"> <Timer.Minutes /> minutes </span>
                  <span className="timer-element">   <Timer.Seconds /> secondes </span>
                    {/*<Timer.Milliseconds /> milliseconds*/}
                </React.Fragment>
            )}
        </Timer>
        </div>
    );
}
