import { createContext, useState } from 'react'

// 1. Crear el contexto (el objeto que va a compartir la información)
export const FiltersContext = createContext()

// 2. Crear el provider (el componente que va a envolver a los hijos) 
export function FiltersProvider ({ children }) {
  const [filters, setFilters] = useState({
    category: 'all',
    minPrice: 0,
  })

  return (
    <FiltersContext.Provider value={{
      filters,
      setFilters
    }}>
      {children}
    </FiltersContext.Provider>
  )
}
