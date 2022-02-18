<template>
    <div>
    <div class="box">
<div class="checkboxgroup">
          <div><input type="checkbox" /> springboot</div>
          <div><input type="checkbox" /> sql</div>
          <div><input type="checkbox" /> mongodb</div>
          <div><input type="checkbox" /> django</div>
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
