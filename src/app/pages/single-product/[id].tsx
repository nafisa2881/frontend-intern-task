// pages/single-product/[id].tsx

import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';

type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  image: string;
};

type Props = {
  product: Product;
};

export default function SingleProduct({ product }: Props) {
  return (
    <>
      <Head>
        <title>{product.name} | Sweet Cloths</title>
        <meta name="description" content={product.description} />
        <meta property="og:title" content={product.name} />
        <meta property="og:description" content={product.description} />
        <meta property="og:image" content={product.image} />
      </Head>

      <main className="min-h-screen bg-[#F5F5DC] text-[#5C4033] font-sans p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="rounded"
          />
          <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
          <p className="text-lg text-[#8B5E3C] mt-2">{product.description}</p>
          <p className="text-xl font-semibold mt-4">৳ {product.price}</p>
        </div>
      </main>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.params!;

  try {
    const res = await fetch(`https://glore-bd-backend-node-mongo.vercel.app/api/product/${id}`);
    if (!res.ok) {
      throw new Error('Failed to fetch product');
    }
    const product = await res.json();

    return {
      props: {
        product,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};

