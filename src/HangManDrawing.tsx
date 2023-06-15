// @ts-ignore
import {
  HangManBase,
  HangManPole,
  HangManOutHang,
  HangManRopeHolder,
  Head,
  Body,
  RightArm,
  LeftArm,
  RightLeg,
  LeftLeg,
} from "./styles/Drawing.style.ts";

type HangmanDrawingProps = {
  numberOfGuesses: number;
};

const BODY_PARTS = [
  <Head />,
  <Body />,
  <RightArm />,
  <LeftArm />,
  <RightLeg />,
  <LeftLeg />,
];

export function HangManDrawing({ numberOfGuesses }: HangmanDrawingProps) {
  return (
    <div style={{ position: "relative" }}>
      {BODY_PARTS.slice(0, numberOfGuesses)}
      <HangManRopeHolder />
      <HangManOutHang />
      <HangManPole />
      <HangManBase />
    </div>
  );
}
