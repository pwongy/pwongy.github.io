import React from "react";
import { Crown, House, Wrench } from "phosphor-react";
import TextSection from "./TextSection";

const whyText = [
  `I am driven by my desire to achieve self-determination`,
  `For me, this means leaving a small dent in the universe - which is admittedly a big ambition`,
  `I believe the way to do this is to help solve large-scale, wicked, intractable problems, because I see problems as opportunities to create value`,
  `I recognise that I have been enabled to do this by my family, particularly through the decisions and sacrifices that my parents made in their own lives`,
];
const howText = [
  `Time is the most valuable resource that any of us have`,
  `Therefore, how we spend our attention is of utmost importance`,
  `Noticing is the first step, because only when one is aware can a real choice be made`,
  `I have a strong preference to take control of my own life, rather than have it decided for me`,
  `To solve big problems, one needs to understand how the systems that make up our world really work`,
  `I don't need to be a world-class expert in any particular domain, just enough to be dangerous`,
  `Of course, I can't learn everything at once, so prioritisation, skill stacking, continuous improvement, and self-reflection are necessary parts of my journey`,
  `The more systems and mental models at my disposal, the more they can be combined in useful ways`,
  `To solve big problems, one also needs to be surrounded by the right people`,
  `Avoid toxic relationships, fake people, and unnecessary drama; no one on their deathbed wishes for more of these`,
];
const whatText = [
  "The what is to be discovered, and inevitably dynamic",
  `The best framework I've come across to guide this discovery process is the concept of ikigai`,
  `What I love: Applying technology, data, culture and economics`,
  `What I am good at: Bridging disciplines`,
  `What the world needs: More positive impact`,
  `What I can be paid for: A better way to solve big problems`,
  "I feel confident that I am hitting all these marks through my current venture, JourneyLab",
];

export default function Principles(): React.ReactElement {
  const layout = (
    <div className="flex flex-col min-h-full items-center justify-start align-middle">
      <span className="flex flex-col md:flex-row justify-center align-middle items-center gap-6 my-10">
        <span className="hidden sm:flex">
          <Crown color="#2EC4B6" weight="duotone" size={160} />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="px-4 text-4xl text-center md:text-left">Principles</h1>
          <p className="px-4 text-xl font-light text-center md:text-left">
            My fundamental values and worldview
            {/* The rules I try to live by (i.e. what's important to me) */}
          </p>
        </div>
      </span>

      <div className="flex flex-col space-y-6 px-3 sm:w-4/5 max-w-2xl items-center mb-12">
        <TextSection title={`My Why 🤔`} dotPoints={whyText} />
        <TextSection title={`My How 🧭`} dotPoints={howText} />
        <TextSection title={`My What 🌟`} dotPoints={whatText} />
      </div>
      {/* <div className="max-w-3xl w-4/5 bg-red-100">
        <h1 className="text-xl mb-4">My Why</h1>
        <ul className="list-disc list-outside">
          {whyText.map((item) => (
            <li className="ml-5">{item}</li>
          ))}
        </ul>
      </div> */}
    </div>
  );

  return layout;
}
