import ProductPageLayout from '@/components/ProductPageLayout'
import { getProduct } from '@/lib/products'

export const metadata = { title: 'ERP Suite | Veloryx Technologies' }

export default function ERPPage() {
  return <ProductPageLayout product={getProduct('erp')!} />
}
