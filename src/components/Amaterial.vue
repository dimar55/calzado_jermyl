<template>
   <div class="conta">
      <div class="contendoroperador">
    <div class="titadm">
    <h1 class="titularadministrar">ADMINISTRAR MATERIAL</h1>
    <button class="btnoperador">Agregar material</button>
    </div>
      </div>
<div class="ctntabla">
       <table class="greyGridTable">
      <thead>
        <tr>
        <th></th>
          <th>Codigo</th>
          <th>Nombre</th>
          <th>Color</th>
          <th>Cantidad</th>
          <th>Proveedor</th>    
          <th>Fecha de ingreso</th>
        </tr>
      </thead>
     
      <tbody>
        <tr>
          <td>1</td>
          <td>CU239OF</td>
          <td>Cuerina</td>
          <td>Cafe</td>
          <td>3 mts</td>
          <td>Guillermo Ariza</td>
          <td>28/11/2021</td>
         
        </tr>
      </tbody>
    </table>
</div>
</div>  
</template>

<script>
export default {
  name: 'Agregarmaterial',
}
</script>