import { ShopPayButton } from "@shopify/hydrogen-react";
export function MyProduct({ variantId }: any) {
  return <ShopPayButton variantIds={[variantId]} />;
}
