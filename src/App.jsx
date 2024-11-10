import { useEffect, useState } from "react"
import { BarraSuperior } from "./components/BarraSuperior"
import { CartaPrincipal } from "./components/CartaPrincipal"
import { CartasTenis } from "./components/CartasTenis"
import products from "./data/products"
import { MenuNav } from "./components/MenuNav"
import { MenuInferior } from "./components/MenuInferior"
import { ProductoPopup } from "./components/ProductoPopup"


function App() {

  const [seleccionarProducto, setSeleccionarProducto] = useState(null);
  const [abrirPopup, setAbrirPopup] = useState(false);
  const [darkMode, setDarkMode] = useState(false)
  const [cantidades, setCantidades] = useState(null)
  const openPopup = (producto, cantidad) => {
    setCantidades(cantidad)
    setSeleccionarProducto(producto)
    setAbrirPopup(true)
  }
  const cerrarPopup = () => setAbrirPopup(false)
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])
  const modoOscuro = () => {
    setDarkMode(!darkMode)
  }
  
  return (
    <>
      <h1 className='text-[4rem] hidden sm:block'>esto solo puede ver para movil</h1>
      <main className="bg-white dark:bg-black w-screen sm:hidden">
        <BarraSuperior />
        <CartaPrincipal />
        <MenuNav />
        <div className="flex justify-center items-center gap-4 flex-wrap mt-4 pb-24">
          {products.map((producto, index) => (
            <div key={index}>
              <CartasTenis producto={producto} abrirPopup={openPopup}  />
            </div>
          ))
          }
        </div>

        {
          abrirPopup && (<ProductoPopup productoseleccionado={seleccionarProducto} cerrarPopup={cerrarPopup} cantidadTenis={cantidades}/>)
        }
        <MenuInferior modoOscurof={modoOscuro} stateOscuro={darkMode}/>
      </main>
    </>
  )

}



export default App
