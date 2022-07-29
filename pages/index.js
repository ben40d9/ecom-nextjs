import HomeLayout from "../components/layouts/HomeLayout";
import ProductDetails from "../components/sections/ProductDetails";

export default function Home() {
  return <HomeLayout children={<ProductDetails />} />;
}
