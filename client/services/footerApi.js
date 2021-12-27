import api from '../utils/api';

export const getFooterInfo = async () => {
  const { data } = await api.get(
    'contact?fields=openingHours,address,email,phone'
  );
  return data.data.attributes;
};
