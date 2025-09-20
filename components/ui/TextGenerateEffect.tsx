"use client";
import { TextGenerateEffectHelper } from "./TextGenerateEffectHelper";

const words = `Always open to collaborating on exciting projects — let’s connect!
`;
export function TextGenerateEffect() {
  return <TextGenerateEffectHelper duration={2} filter={true} words={words} />;
}
