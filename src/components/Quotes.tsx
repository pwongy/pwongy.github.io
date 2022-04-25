import React from "react";
import { Quotes } from "phosphor-react";
import QuoteBlock from "./QuoteBlock";

import bernardBaruch from "../assets/images/quotes/bernard_baruch.jpg";
import cherokee from "../assets/images/quotes/cherokee.jpg";
import dalaiLama from "../assets/images/quotes/dalai_lama.jpg";
import julieZhuo from "../assets/images/quotes/julie_zhuo.jpg";
import michaelTubbs from "../assets/images/quotes/michael_tubbs.jpg";
import neilStrauss from "../assets/images/quotes/neil_strauss.jpg";
import novakDjokovic from "../assets/images/quotes/novak_djokovic.jpg";
import reddit from "../assets/images/quotes/reddit.png";
import shifu from "../assets/images/quotes/shifu.png";
import thomasOppong from "../assets/images/quotes/thomas_oppong.jpg";

const quotesText: Array<{
  quote: string;
  author: string;
  photo: string;
  tags?: string[];
}> = [
  {
    quote: `If you only do what you can do, you will never be more than you are now.`,
    author: "Shifu (Kung Fu Panda 3)",
    photo: shifu,
    tags: ["continuousimprovement", "growthmindset"],
  },
  {
    quote: `When you were born, you cried and the world rejoiced.  
  Live your life so that when you die, 
  the world cries and you rejoice.`,
    author: "Cherokee expression",
    photo: cherokee,
    tags: ["life", "noregrets"],
  },
  {
    quote: `Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.`,
    author: "Bernard M. Baruch",
    photo: bernardBaruch,
    tags: ["authenticity"],
  },
  {
    quote: `Your career is defined by your skills and how you’ve used them, not by any external measure of your progress.`,
    author: "Julie Zhuo",
    photo: julieZhuo,
    tags: ["expectations", "career"],
  },
  {
    quote: `Change only moves at the speed of trust.`,
    author: "Michael Tubbs",
    photo: michaelTubbs,
    tags: ["change", "trust", "constraints"],
  },
  {
    quote: `If a problem is fixable, if a situation is such that you can do something about it, then there is no need to worry. If it’s not fixable, then there is no help in worrying. There is no benefit in worrying whatsoever.`,
    author: "Dalai Lama",
    photo: dalaiLama,
    tags: ["worrying", "problems"],
  },
  {
    quote: `At the end of the day, it's important that your convictions are stronger than your doubts.`,
    author: "Novak Djokovic",
    photo: novakDjokovic,
    tags: ["decisions", "conviction", "tennis"],
  },
  {
    quote: `Do crabs think fish can fly?`,
    author: "Someone on Reddit",
    photo: reddit,
    tags: ["perspective", "thoughtprovoking"],
  },
  {
    quote: `Don't spend your life preparing for life.`,
    author: "Thomas Oppong",
    photo: thomasOppong,
    tags: ["inaction"],
  },
  {
    quote: `If there was anything I'd learned, it's that the man never chooses the woman. All he can do is give her an opportunity to choose him.`,
    author: "Neil Strauss",
    photo: neilStrauss,
    tags: ["relationships", "choice"],
  },
];

export default function QuotesPage(): React.ReactElement {
  const layout = (
    <div className="flex flex-col min-h-full items-center justify-start align-middle">
      {/* Header */}
      <span className="flex flex-col md:flex-row justify-center align-middle items-center gap-6 my-10">
        <span className="hidden sm:flex">
          <Quotes color="#2EC4B6" weight="duotone" size={160} />
        </span>
        <div className="flex flex-col gap-3">
          <h1 className="px-4 text-4xl text-center md:text-left">
            Favourite Quotes
          </h1>
          <p className="px-4 text-xl font-light text-center md:text-left">
            Wise words from other humans
          </p>
        </div>
      </span>

      <div className="flex flex-col space-y-6 px-3 sm:w-4/5 max-w-2xl items-center mb-12">
        {quotesText.map((item) => (
          <QuoteBlock
            quote={item.quote}
            author={item.author}
            photo={item.photo}
            tags={item.tags}
          />
        ))}
      </div>
    </div>
  );

  return layout;
}
