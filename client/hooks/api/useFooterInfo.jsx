import React from 'react';
import { useQuery } from 'react-query';
import { getFooterInfo } from '../../services/footerApi';

export default function useFooterInfo() {
  const { data: info, isLoading } = useQuery('footer-info', getFooterInfo);
  return { info, isLoading };
}
