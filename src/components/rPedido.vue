<template>
    <div class="contendorpedido">
        <h1 class="titularpedido">REGISTRAR PEDIDO</h1>
        <div class="ctn">
<div class="conclientes">
    <div class="cliente">
    <h3>Cliente:</h3>
    <input type="text" class="inp" >
    <button class="btnpedido">Registrar Cliente</button>
    </div>
    <div class="fechaTotal"> 
    <h3>Fecha:</h3>
    <input type="text" class="inpt">
    <h3>Total:</h3>
    <input type="number" class="inpt">
    </div>
</div>
    <table class="greyGridTable">
      <thead>
        <tr>
          <th>Imagen</th>
          <th>Nombre</th>
          <th>Referencia</th>
          <th>Precio</th>
          <th>Material</th>
          <th>Talla</th>
          <th>Cantidad</th>
          <th>Acciones</th>
        </tr>
      </thead>
     
      <tbody>
        <tr>
          <td>1</td>
          <td><img src="../assets/Fotocabecera.png" alt="" width="100" height="100"></td>
          <td>botas melardas</td>
          <td>602343</td>
          <td>90.000</td>
          <td>36-40</td>
          <td>10</td>
          <td>
              <a href=""><img src="../assets/delete.png" alt=""></a>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Pedido',
}
</script>

<style>
.contendorpedido{
    padding: 30px;
    background-color: rgba(181, 19, 19, 0.75);
  
}
.ctn{
    background-color: white;
    padding: 30px;
    border-radius: 12px;
    margin: 30px;
}
.cliente{
    display: flex;
    justify-content: space-evenly;
    font-size: 30px;
}
.inp{
    width: 700px;
    height: 40px;
}

.fechaTotal{
    display: flex;
    justify-content: space-evenly;
    padding: 30px;
     font-size: 30px;

}
.inpt{
    width: 370px;
    height: 40px;
}
.btnpedido{
  background-color: #B51313;
  color: white;
  font-size: 25px;
  border-radius: 30px;
  border: none;
  padding: 8px;
}

.titularpedido{
 font-weight: 900;
 color: white;
 font-size: 50px;
 text-align: center;
}
</style>