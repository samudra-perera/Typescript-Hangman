// @ts-ignore
import {HangManBase, HangManPole, HangManOutHang, HangManRopeHolder, Head, Body, RightArm, LeftArm, RightLeg, LeftLeg} from './styles/Drawing.style.js'


export function HangManDrawing() {
    return (
        <div style={{position: "relative"}}>
            {<Head/>}
            {<Body/>}
            {<RightArm/>}
            {<LeftArm/>}
            {<RightLeg/>}
            {<LeftLeg/>}
            <HangManRopeHolder />
            <HangManOutHang/>
            <HangManPole />
            <HangManBase />
        </div>
    )
}