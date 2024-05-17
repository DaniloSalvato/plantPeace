import ProductsSection from "../components/Products/ProductsSection"

export default function Products() {
  return (
    <main className="flex flex-col items-center gap-6 bg-customWisper pb-6">
      <h1 className="font-garamondSerif font-bold text-customLunarGreen text-4xl">
        Products
      </h1>

      <ProductsSection />
    </main>
  )
}
