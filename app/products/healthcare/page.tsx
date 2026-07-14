import ProductPageLayout from '@/components/ProductPageLayout'
import { getProduct } from '@/lib/products'

export const metadata = { title: 'Healthcare Suite | Veloryx Technologies' }

export default function HealthcarePage() {
  return <ProductPageLayout product={getProduct('healthcare')!} />
}
