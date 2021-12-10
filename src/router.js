import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';
import Conocenos from './views/conocenos.vue';
import Calzado from './views/calzado.vue';
import CalzadoC from './views/calzadoC.vue';
import CalzadoN from './views/calzadoN.vue';
import panelOp from './views/panelOperador.vue';
import panelAd from './views/panelAdmin.vue';
import Balances from './views/Balances.vue';
import inicio from './views/inicio.vue';
import adminpro from './views/AdmProductos.vue';
import pedido from './views/pedido.vue';
import agregaropd from './views/AgregarOpd.vue';
import agcliente from './views/Agregarcliente.vue';
import agregarmaterial from './views/Agregarmaterial';
const routes = [
{
  path: '/',
  name: 'root',
  component: Conocenos
},
{
  path: '/calzado-dama',
  name: 'caldama',
  component: Calzado
},
{
  path: '/calzado-caballero',
  name: 'calcaballero',
  component: CalzadoC
},
{
  path: '/calzado-ninos',
  name: 'calniños',
  component: CalzadoN
},
{
  path: '/panel',
  name: 'panelOp',
  component: panelOp
},

{
  path: '/balance',
  name: 'Balances',
  component: Balances
},

{
  path:'/panelAd',
  name: 'paneladmin',
  component: panelAd
},

{
  path:'/inicio',
  name: 'inicio',
  component: inicio
},

{
  path:'/administrar-productos',
  name: 'adminpro',
  component: adminpro
},

{
  path: '/pedidos',
  name:  'Pedido',
  component: pedido
},

{
 path: '/agregar-operador',
 name: 'AgregarOpd',
 component: agregaropd
},


{
  path: '/agregar-cliente',
  name: 'AgCliente',
  component: agcliente 

},

{
  path: '/agregar-material',
  name: 'AgMaterial',
  component: agregarmaterial
},


]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
