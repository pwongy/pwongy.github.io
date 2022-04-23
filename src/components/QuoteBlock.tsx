import React from "react";

type Props = {
  quote: string;
  author: string;
  tags?: string[];
};

export default function QuoteBlock({
  quote,
  author,
  tags,
}: Props): React.ReactElement {
  const tagStyle =
    "inline-block text-sm rounded bg-gray-100 border border-gray-200 text-black font-semibold px-3 py-1 mr-3 mb-3";

  const layout = (
    <div className="w-full bg-white rounded-md shadow">
      <div className="px-4 py-4 rounded-t-md">
        <h1 className="text-lg mb-4">{`"${quote}"`}</h1>
        <span className="flex flex-row-reverse">
          <span className="italic">— {author}</span>
        </span>
      </div>
      <div className="px-4 pt-3 rounded-b-md bg-teal-50 border-t border-teal-300">
        {tags && tags?.length > 0 ? (
          tags.map((tag) => <span className={tagStyle}>{`#${tag}`}</span>)
        ) : (
          <span className={tagStyle}>{`#untagged`}</span>
        )}
      </div>
    </div>
  );

  return layout;
}
