import api from '../utils/api';

export const getCategories = async () => {
  const { data } = await api.get('categories?fields=name,slug');
  return data.data.map(({ id, attributes }) => ({
    id,
    name: attributes.name,
    link: `/categories/${attributes.slug}`,
  }));
};

export const getCategoriesSlugs = async () => {
  const { data } = await api.get(
    'categories?pagination[limit]=1000&fields=slug'
  );
  return data.data.map(({ attributes }) => attributes.slug);
};
