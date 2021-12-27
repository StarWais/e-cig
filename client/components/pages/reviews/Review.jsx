import React from 'react';
import Moment from 'react-moment';

export default function Review({ review }) {
  return (
    <div>
      <div className="p-8 bg-[#151D3C] text-white rounded-t-lg flex flex-col h-full">
        <p className="text-sm mb-4">"{review.review}"</p>
        <span className="mt-auto block font-semibold">
          {review.user.name} {review.user.surname}
        </span>
        <Moment
          className="text-xs mt-2 text-white tracking-wider"
          date={review.date}
          format="DD.MM.YYYY"
        />
      </div>
      <div className="p-1 bg-accent rounded-b-lg" />
    </div>
  );
}
