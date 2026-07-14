import ProductPageLayout from '@/components/ProductPageLayout'
import { getProduct } from '@/lib/products'

export const metadata = { title: 'CRM Platform | Veloryx Technologies' }

export default function CRMPage() {
  return <ProductPageLayout product={getProduct('crm')!} />
}
