import api from '../utils/api';

export const getProductsByCategorySlug = async (slug) => {
  const { data } = await api.get(
    'categories?filters[slug][$eq]=' +
      slug +
      '&populate[products][populate][0]=characteristics,image'
  );
  return data.data[0];
};
