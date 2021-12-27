import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Advantage from '../components/Advantage';
import Button from '../components/Button';
import { useModal } from '../hooks/useModal';

export default function Home() {
  const { openModal } = useModal();
  return (
    <>
      <Head>
        <title>Главная</title>
      </Head>
      <section className="container text-white">
        <div className="flex lg:flex-row flex-col items-center justify-between gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="font-bold text-3xl">
              Измените ваше представление об электронных сигаретах
            </h1>
            <h3>Продаем продукты высокого качества с 2017 года</h3>
            <Button text="Заказать звонок" onClick={() => openModal()} />
          </div>
          <div className="relative w-[400px] h-[400px] flex-none">
            <Image src="/main-img.webp" alt="e-cig" layout="fill" />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-16 mt-20 md:grid-cols-2">
          <Advantage
            title="Меньше вреда"
            text="Из-за отсутствия
побочных продуктов
горения, наша продукция наносит гораздо меньший вред вашему здоровью!"
          />
          <Advantage
            title="Продуманно"
            text="Идеально подобранная крепость жидкости
на правильном солевом никотине вкупе
с правильной мощностью дает лучший потребительский опыт."
          />
          <Advantage
            title="Удобно"
            text="Забудьте о зарядных устройствах, флаконе
с жидкостью, сгоревшей
вате, испарителях
и кнопках."
          />
        </div>
      </section>
    </>
  );
}
