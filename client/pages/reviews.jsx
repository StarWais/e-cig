import React from 'react';
import Review from '../components/pages/reviews/Review';
import useReviews from '../hooks/api/useReviews';
import { getReviews } from '../services/reviewsApi';

export default function Reviews({ initialData }) {
  const { isLoading, reviews } = useReviews({ initialData });
  return (
    <section className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 container">
      {reviews.map((review) => (
        <Review key={review.id} review={review.review} />
      ))}
    </section>
  );
}

export async function getStaticProps() {
  const initialData = await getReviews();
  return {
    props: {
      initialData,
    },
  };
}
