import { findProduct } from "./data";

function App() {

  console.log("Passou no App");
  // FORMA ERRADA
  // eslint-disable-next-line prefer-const
  let productId = 1;
  // eslint-disable-next-line prefer-const
  let prod = findProduct(productId);

  function handleClick() {
    console.log("PASSOU NO handleClick");
    productId = 2;
    prod = findProduct(productId);
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
