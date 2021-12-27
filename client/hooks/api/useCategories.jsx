import { useQuery } from 'react-query';
import { getCategories } from '../../services/catalogApi';

export default function useCategories() {
  const { isLoading, data: categories } = useQuery('categories', getCategories);
  return { isLoading, categories };
}
