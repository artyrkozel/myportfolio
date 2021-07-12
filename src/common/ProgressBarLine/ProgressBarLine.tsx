import React from "react";
import { Line} from 'rc-progress';

type ProgressLineType = {
    title: string
    percent: number
}

export const ProgressLine = (props: ProgressLineType) => {
    return(
        <div style={{marginBottom: '15px'}}>
            <div>
                <h3 style={{textAlign: 'left', fontFamily: ' font-family: Poppins, sans-serif;', fontSize: '18px', margin: '0'}}>{props.title} : {props.percent}%</h3>
            </div>
                <Line percent={props.percent} strokeWidth={2} strokeColor="#000"/>
        </div>

    )
}