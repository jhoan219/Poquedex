import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../Home"

//nuestro router va a ser un componente el cual se encargue de retornar las rutas de su respectvia vista 

const Router =()=>{

    return(
        <BrowserRouter>        
        <Routes>
            {/* publicas */}
            <Route path="/" element={<Home/>}/>
          

            {/* privadas */}


        </Routes>      
        
        
        </BrowserRouter>
    )

}



export default Router;