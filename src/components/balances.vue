<template>
     <div class="contenedorbalance">
    <h1 class="titularbalance">BALANCES</h1>
    <div class="tbalances">
        <div class="pnlb">
            <h3>Balances general de gastos en materiales</h3>
            <button class="btnadmin"><img src="../assets/entrar.png" alt=""></button>
            </div>
        <div class="pnlb">
            <h3>Balance general de ventas de productos</h3>
            <button class="btnadmin"><img src="../assets/entrar.png" alt=""></button>
            </div>
        <div class="pnlb">
            <h3>Balance general de ganancias</h3>
        <button class="btnadmin " ><img src="../assets/entrar.png" alt=""></button>
            </div>
        </div>   
    </div>  
</template>

<script>
export default {
    name: 'Balances',
    
}
</script>
<style>

.contenedorbalance{
   background:  rgba(181, 19, 19, 0.75);
   padding-bottom: 30px;

}
.titularbalance{
    padding-top: 30px;
    text-align: center;
    color: rgb(255, 255, 255);
    font-size: 50px;
}

.tbalances{
    
    padding: 30px;
    display: grid;
    margin-top: 30px;
    margin-right: 300px;
    margin-left: 300px;
    grid-template-columns: repeat(1, 2fr);
    grid-gap: 10px;
    background-color: white;
    border-radius: 15px;
    align-items: center;

    
    
}

.pnlb{
    margin-left: 160px;
    padding-left: 12px;
    border: 5px solid #B51313;
    width: 360px;
    height: 200px;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 46px;
    color: #B51313;
    border-radius: 12px;
    background-color: white;
}

.btnadmin{
    background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        position: relative;
        left: 300px;
        top: 20px;
}

</style>
