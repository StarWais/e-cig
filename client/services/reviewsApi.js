import api from '../utils/api';

export const getReviews = async () => {
  const { data } = await api.get('reviews?populate=*');
  return data.data.map(({ id, attributes }) => ({
    id,
    review: attributes,
  }));
};
