import { useEffect, useState } from "react";
import { findProduct } from "./data";

function App() {

  console.log("Passou no App");
  // FORMA ERRADA
  // let productId = 1;
  const [productId, setProductId] = useState(1);
  // let prod = findProduct(productId);
  // aqui dá problema ao carregar os dados
  // const [prod, setProd] = useState(findProduct(1));
  //precisa colocar dentro do useEffect para observar e reagir
  //começando com undefined
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [prod, setProd] = useState<any>();
  // useEffect( function , lista de dependências que ele vai observar )
  // executa na hora em que o component for montado
  useEffect( () => {
    console.log("PASSOU NO useEffect");
    setProd(findProduct(productId))
  } , [productId] //observa quando productId muda, observa o estado
)

  function handleClick() {
    console.log("PASSOU NO handleClick");
    // productId = 2;
    // setProductId(2);
    // prod = findProduct(productId);
    // setProd(findProduct(productId));
    setProductId(2);
    // muda o Id e chama o useEffect
  }

  return (
    <>
      <h2>{prod?.name}</h2>
      <p>{prod?.price}</p>

      <button onClick={handleClick}> 
        Mudar para produto 2
      </button>
    </>
  )
}

export default App
