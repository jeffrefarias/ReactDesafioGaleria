import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import MyCard from './assets/components/MyCard';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import './App.css'

function App() {


  return (
    <>
    <div className=''>
         <Header title="Galería de Comida" />
        <div className='d-flex justify-content-between'>
            <MyCard
              image="./src/assets/img/casaeltrebol.jpeg"
              title="Choco Latte"
              description="
              El Choco Latte es una deliciosa y reconfortante variante del clásico chocolate caliente. Preparado con una mezcla indulgente de chocolate derretido y leche, esta delicia se sirve en una elegante copa de postre. Además, para realzar su sabor, se corona con una generosa capa de crema chantilly que se funde delicadamente con el cálido líquido"
              colorButton="info"
              textButton="Más Información"
            />

          <MyCard
                    image="./src/assets/img/momotaroRamen.png"
                    title="Miso Ramen"
                    colorButton="info"
                    description="
                    El miso ramen es un delicioso plato de origen japonés que forma parte de la famosa y variada cocina de ramen. Es una sopa sabrosa y reconfortante que combina fideos de trigo cocidos al dente con un caldo espeso a base de pasta de miso, una pasta fermentada de soja, y dashi, un caldo de pescado o alga.La sopa suele estar repleta de ingredientes adicionales, como cebolla verde, brotes de bambú, maíz, huevo marinado, alga nori y carne de cerdo u otras proteínas."
                    textButton="Más Información"
                  />

          <MyCard
                    image="./src/assets/img/hansoban.jpeg"
                    title="Tteokbokki"
                    description="
                    El Tteokbokki es un popular platillo coreano que consiste en trozos de tteok, una especie de pasta de arroz en forma de cilindros o bastones, cocinados en una salsa picante y dulce. Es uno de los aperitivos callejeros más queridos en Corea del Sur y se ha convertido en un alimento básico en la cultura culinaria del país."
                    colorButton="info"
                    textButton="Más Información"
                  />

        </div>
        <Footer/>
      </div>
    </>
  )
}

export default App
