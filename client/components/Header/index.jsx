import { MenuIcon } from '@heroicons/react/outline';
import { useMediaQuery } from 'react-responsive';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from '../Button';
import NextLink from '../NextLink';
import Links from './Links';

export default function Header() {
  const [openMenu, setOpenMenu] = useState(true);

  const isLg = useMediaQuery({ minWidth: 1024 }, undefined, (matches) => {
    setOpenMenu(matches);
  });
  return (
    <header className="py-6 px-12 sticky bg-header flex items-center justify-between">
      <NextLink href="/">
        <Image src="/logo.svg" width={100} height={30} alt="logotype" />
      </NextLink>
      {openMenu && <Links isLg={isLg} setOpenMenu={setOpenMenu} />}
      <Button text="Изучить отзывы" outline className="hidden lg:block" />
      <MenuIcon
        className="lg:hidden h-8 w-8 cursor-pointer text-white"
        onClick={() => setOpenMenu((prev) => !prev)}
      />
    </header>
  );
}
