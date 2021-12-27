import { ExclamationCircleIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import React from 'react';
import useFooterInfo from '../hooks/api/useFooterInfo';

export default function Footer() {
  const { isLoading, info } = useFooterInfo();
  return (
    <footer className="bg-black mt-auto text-white text-sm">
      <div className="container py-20">
        <div className="bg-white p-6 text-sm lg:text-lg font-bold text-black mx-auto flex gap-7 items-center max-w-fit">
          <ExclamationCircleIcon className="text-accent h-9 w-9 flex-none " />
          Продукция не исключает риски для здоровья и вызывает зависимость
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-20 gap-8 justify-center">
          <div className="flex flex-col gap-4">
            <div className="relative w-[130px] h-[50px]">
              <Image
                src="/logo.svg"
                layout="fill"
                alt="logotype"
                objectFit="contain"
              />
            </div>
            <a
              href="#"
              target="_blank"
              className="underline text-accent font-semibold"
            >
              Политика конфиденциальности
            </a>
            <address>{info?.address}</address>
            <span>
              Часы работы:{' '}
              <span className="font-semibold">{info?.openingHours}</span>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-bold text-slate-400 text-base">
              Идеальное решение для потребителей никотина, реальная альтернатива
              обычным сигаретам.
            </span>
            <p>
              Этот сайт служит для предоставления общей информации о компании
              HQD. Сайт не используется в рекламных или маркетинговых целях.
              Материалы на сайте не являются предложениями о продаже или покупке
              какого-либо продукта компании HQD!
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <span className="font-bold text-slate-400 text-base">Контакты</span>
            <span>{info?.phone}</span>
            <a href={`mailto:${info?.email}`}>{info?.email}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
