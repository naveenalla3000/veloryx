import ProductPageLayout from '@/components/ProductPageLayout'
import { getProduct } from '@/lib/products'

export const metadata = { title: 'Data Intelligence | Veloryx Technologies' }

export default function DataIntelligencePage() {
  return <ProductPageLayout product={getProduct('data-intelligence')!} />
}
