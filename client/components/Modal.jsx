import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Button from './Button';

export default function Modal({ isOpen, closeModal }) {
  const initialValues = {
    name: '',
    phone: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Введите имя'),
    phone: Yup.string().required('Введите телефон'),
  });
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-slate-600/70" />
          </Transition.Child>

          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-white align-middle transition-all transform shadow-xl rounded-lg bg-[#151d3b]">
              <Dialog.Title as="h3" className="text-lg leading-6 font-semibold">
                Оставьте заявку, и наш менеджер свяжется с Вами в ближайшее
                время
              </Dialog.Title>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={() => closeModal()}
              >
                <Form className="flex flex-col mt-8">
                  <Field
                    name="name"
                    className="p-3 text-slate-700"
                    placeholder="Введите имя"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-xs self-start text-red-500 font-semibold mt-2"
                  />
                  <Field
                    name="phone"
                    className="p-3 text-slate-700 mt-6"
                    placeholder="Введите телефон"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-xs self-start text-red-500 font-semibold mt-2"
                  />
                  <Button
                    text="Отправить заявку"
                    type="submit"
                    style={{ marginTop: '2em' }}
                  />
                </Form>
              </Formik>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
