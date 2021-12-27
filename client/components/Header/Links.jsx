import React, { useRef } from 'react';
import useCategories from '../../hooks/api/useCategories';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import Button from '../Button';
import NextLink from '../NextLink';
import Catalog from './Catalog';
import Link from './Link';

export default function Links({ isLg, setOpenMenu }) {
  const { isLoading, categories } = useCategories();
  const ref = useRef(null);
  useOnClickOutside(ref, () => {
    if (!isLg) {
      setOpenMenu(false);
    }
  });
  return (
    <nav>
      <ul
        ref={ref}
        className="flex flex-col lg:flex-row gap-8 text-white lg:items-center items-start lg:static lg:p-0 fixed right-0 top-0 h-screen lg:h-fit bg-header lg:bg-transparent p-8"
      >
        <Catalog name="Каталог" items={categories} />
        <Link link="/reviews">Отзывы</Link>
        <Link link="/mission">Наша миссия</Link>
      </ul>
    </nav>
  );
}
