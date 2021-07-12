import React from "react";
import ProgressBar from "react-customizable-progressbar";

export const ProgressCircular = (props: any) => {
    return(
        <ProgressBar
            progress={props.progress}
            radius={props.radius}
            strokeLinecap={"round"}
            strokeColor={'black'}
            trackStrokeWidth={2}
            strokeWidth={6}

        >
            <div style={{position: 'absolute', top: '40%', right: '35%', fontFamily: ' font-family: Poppins, sans-serif;', fontSize: '25px'}}>
                {props.progress}%
            </div>
        </ProgressBar>
    )
}