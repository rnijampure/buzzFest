import { prisma } from "@/lib/prisma";
import ProductClient from "./ProductClient";

export default async function ProductPage({
  params,
}: {
  params: { value: { slug: string } };
}) {
  const _p: any = await params;
  console.log("params", _p);
  const product = await prisma.product.findUnique({
    where: { slug: _p.slug },
    include: { baker: true },
  });

  if (product) {
    const safeProduct = {
      ...product,
      price: product.price.toNumber(),
    };
    return <ProductClient product={safeProduct} />;
  }

  if (!product) return <div>Not found</div>;
}
