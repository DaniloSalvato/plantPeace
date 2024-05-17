export interface IPlantProps {
  id: number
  name: string
  subtitle: string
  label: string[]
  price: number
  isInSale: boolean
  discountPercentage?: string
  features: string[]
  description: string
  imgUrl: string
}

export interface IPlantFormState {
  plantName: string
  plantSubtitle: string
  plantType: string
  price: number
  discountPercentage: number
  label: string
  features: string
  description: string
}

export interface IFormErrors {
  plantName: string | null
  plantSubtitle: string | null
  plantType: string | null
  price: string | null
  discountPercentage: string | null
  label: string | null
  features: string | null
  description: string | null
}
