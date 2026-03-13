export type ProductTag = 'Lanzamiento' | 'Edicion'

export interface Product {
  id: string
  name: string
  price: number
  tag: ProductTag
  imageUrl: string
  colorway: string
}
