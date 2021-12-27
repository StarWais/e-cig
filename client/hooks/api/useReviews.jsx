import { useQuery } from 'react-query';
import { getReviews } from '../../services/reviewsApi';

export default function useReviews({ initialData }) {
  const { isLoading, data: reviews } = useQuery('reviews', getReviews, {
    initialData,
  });
  return { isLoading, reviews };
}
