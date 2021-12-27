import React from 'react';

export default function Advantage({ title, text }) {
  return (
    <div>
      <div className="p-8 bg-[#151D3C] text-white rounded-t-lg flex flex-col h-full">
        <h5 className="text-lg font-semibold mb-6">{title}</h5>
        <p className="text-sm mb-4">{text}</p>
      </div>
      <div className="p-1 bg-accent rounded-b-lg" />
    </div>
  );
}
