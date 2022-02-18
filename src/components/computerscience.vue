<template>
    <div>
    <div class="box">
<div class="checkboxgroup">
          <div><input type="checkbox" />python</div>
          <div><input type="checkbox" /> c</div>
          <div><input type="checkbox" /> vue js</div>
          <div><input type="checkbox" /> js</div>
        </div>
    </div>
    </div>
</template>
<style scoped>
.checkboxgroup{
    width: 20em;
    overflow: auto;
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.checkboxgroup p{
    width: 7em;
    text-align: right;
}
.checkboxgroup label{
    width: 12em;
    float: right;
}
</style>
