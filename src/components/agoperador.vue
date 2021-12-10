<template>
<div class="conta">
      <div class="contendoroperador">
    <div class="titadm">
    <h1 class="titularadministrar">ADMINISTRAR OPERADORES</h1>
    <button class="btnoperador">Agregar operador</button>
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
          <th>Celular</th>
          <th>Correo</th>
          <th>Contraseña</th>  
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
    name: 'AgregarOpd',
}
</script>

<style>
.btnoperador{
  border: 4px solid #FFFFFF;
  background: rgba(181, 19, 19, 0.75); 
  color: #FFFFFF;
  font-size: 30px;
  font-weight: 900;
  padding: 5px;
}


.conta{
  padding: 50px;
  background: rgba(181, 19, 19, 0.75); 
}
</style>