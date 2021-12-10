<template>
  <div class="contendoradministrar">
    <div class="titadm">
      <h1 class="titularadministrar">ADMINISTRAR PRODUCTOS</h1>
      <button class="btnadministrar">Agregar producto</button>
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
          <td>
            <img
              src="../assets/Fotocabecera.png"
              alt=""
              width="100"
              height="100"
            />
          </td>
          <td>botas melardas</td>
          <td>602343</td>
          <td>90.000</td>
          <td>36-40</td>
          <td>10</td>
          <td>
            <a href=""><img src="../assets/pencil.png" alt="" /></a>
            <a href=""><img src="../assets/delete.png" alt="" /></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "Admprod",
};
</script>

<style>
.titadm {
  display: flex;
  justify-content: space-between;
  padding: 30px;
}
.btnadministrar {
  border: 4px solid #ffffff;
  background-color: rgba(181, 19, 19, 0.75) !important;
  color: #ffffff;
  font-size: 30px;
  font-weight: 900;
  padding: 5px;
}
.contendoradministrar {
  background-color: rgba(181, 19, 19, 0.75);
  padding: 50px;
}
.titularadministrar {
  font-size: 50px;
  font-weight: 900;
  color: #ffffff;
}
table.greyGridTable {
  border: 2px solid #ffffff;
  width: 100%;
  text-align: center;
  border-collapse: collapse;
  background-color: #ffffff;
}
table.greyGridTable td,
table.greyGridTable th {
  border: 2px solid #000000;
  padding: 3px 4px;
}
table.greyGridTable tbody td {
  font-size: 18px;
}
table.greyGridTable td:nth-child(even) {
  background: #ebebeb;
}
table.greyGridTable thead {
  background: #ffffff;
  border: 2px solid #000000;
}
table.greyGridTable thead th {
  font-size: 15px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  border: 2px solid #000000;
}
table.greyGridTable thead th:first-child {
  border-left: none;
}

table.greyGridTable tfoot {
  font-size: 14px;
  font-weight: bold;
  color: #333333;
  border: 4px solid #000000;
}
table.greyGridTable tfoot td {
  font-size: 14px;
}
</style>