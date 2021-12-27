import React from 'react';
import { useModal } from '../hooks/useModal';
import Footer from './Footer';
import Header from './Header';
import Modal from './Modal';

export default function Content({ Component, pageProps }) {
  const { isOpen, closeModal } = useModal();
  return (
    <>
      <Header />
      <main>
        <Component {...pageProps} />
      </main>
      {isOpen && <Modal isOpen={isOpen} closeModal={closeModal} />}
      <Footer />
    </>
  );
}
