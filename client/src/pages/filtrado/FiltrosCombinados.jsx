import React, { useState } from 'react';
import ListFiltros from '../../../components/filtrosComb/ListFiltros';

export const FiltrosCombinados = () => {
  const [amount, setAmount] = useState("");//monto que colocara el cliente
  const [price, setPrice] = useState("");
  const [product, setProduct] = useState("");
  return (
    <div>
      <h2> Filtrado </h2>

      <h3>Coloca el monto para tu presupuesto</h3>

      <ListFiltros title="amounts" url="" handleChange={(e) => {setAmount(e.target.value);}} />

      {amount && (<ListFiltros title="price" url="" handleChange={(e) => {setPrice(e.target.value);}} />
      )}

      {price && (<ListFiltros title="name" url="" handleChange={(e) => {setProduct(e.target.value);}} />
      )}
  
      <pre>
        <code>
          {amount} - {price} - {product}
        </code>
      </pre>
    </div>
  )
}

export default FiltrosCombinados;
