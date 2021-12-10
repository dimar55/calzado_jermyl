<template>
    <div class="conta">
      <div class="contendoroperador">
    <div class="titadm">
    <h1 class="titularadministrar">ADMINISTRAR CLIENTE</h1>
    <button class="btnoperador">Agregar cliente</button>
    </div>
      </div>
<div class="ctntabla">
       <table class="greyGridTable">
      <thead>
        <tr>
        <th></th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>Identificación</th>
          <th>Empresa</th>
          <th>Celular</th>    
          <th>Acciones</th>
        </tr>
      </thead>
     
      <tbody>
        <tr>
          <td>1</td>
          <td>Luis</td>
          <td>Perez</td>
          <td>1004235212</td>
          <td>3223602043</td>
          <td>LuisPijaDura@gmail.com</td>
          <td>**********</td>
          <td>
                <a href=""><img src="../assets/pencil.png" alt=""></a>  
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
    name: 'Agcliente',
}
</script>