import React from 'react';

export default function Button({ outline = false, text, className, ...rest }) {
  return (
    <button
      className={`py-2 px-8 text-center text-sm max-w-fit ${className} ${
        outline
          ? ' border border-pink-600 text-white'
          : 'bg-pink-600 text-primary font-semibold shadow-lg shadow-pink-600/50'
      }`}
      type="button"
      {...rest}
    >
      {text}
    </button>
  );
}
