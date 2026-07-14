import ProductPageLayout from '@/components/ProductPageLayout'
import { getProduct } from '@/lib/products'

export const metadata = { title: 'Education Platform | Veloryx Technologies' }

export default function EducationPage() {
  return <ProductPageLayout product={getProduct('education')!} />
}
