import { useContext } from "react"
import { CartContext } from "../context/cart"

export function useCart () {
  const cart = useContext(CartContext)

  //si no existe el contexto, lanzamos un error
  if (cart === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return cart
}