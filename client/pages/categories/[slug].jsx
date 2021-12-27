import Head from 'next/head';
import React from 'react';
import Product from '../../components/Product';
import { getCategoriesSlugs } from '../../services/catalogApi';
import { getProductsByCategorySlug } from '../../services/productsApi';

export default function Category({ products, name }) {
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <section className="text-white">
        <h1 className="text-center font-bold text-4xl">{name}</h1>
        <div className="flex flex-col gap-8 mt-8">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const res = await getProductsByCategorySlug(slug);
  if (res) {
    const { products, name } = res.attributes;
    return {
      props: {
        products: products.data,
        name,
      },
    };
  }
  return {
    notFound: true,
  };
}

export async function getStaticPaths() {
  const slugs = await getCategoriesSlugs();

  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: 'blocking',
  };
}
