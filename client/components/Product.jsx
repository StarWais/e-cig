import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import { useModal } from '../hooks/useModal';
import Button from './Button';

export default function Product({ product }) {
  const { name, description, price, image, characteristics } =
    product.attributes;

  const { openModal } = useModal();
  return (
    <div className="bg-product text-white bg-cover bg-no-repeat bg-center">
      <div className="container py-20 flex flex-col-reverse lg:flex-row  justify-center gap-8 items-center">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl font-semibold">{name}</h2>
          <p className="text-sm">{description}</p>
          <ul className="grid grid-cols-2 gap-3 max-w-fit">
            {characteristics?.map((characteristic) => (
              <li className="flex gap-2" key={characteristic.id}>
                <div className="w-7 h-7 relative">
                  <Image src="/characteristic.svg" layout="fill" alt="dot" />
                </div>
                {characteristic.name}
              </li>
            ))}
          </ul>
          <span className="font-bold text-lg">от {price}₽</span>
          <Button text="Заказать" onClick={() => openModal()} />
        </div>

        <img
          src={`${process.env.NEXT_PUBLIC_SERVER_URL}${image.data.attributes.url}`}
          alt={name}
          className="h-[400px] w-[300px] object-cover"
        />
      </div>
    </div>
  );
}
