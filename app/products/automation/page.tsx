import ProductPageLayout from '@/components/ProductPageLayout'
import { getProduct } from '@/lib/products'

export const metadata = { title: 'Workflow Automation | Veloryx Technologies' }

export default function AutomationPage() {
  return <ProductPageLayout product={getProduct('automation')!} />
}
