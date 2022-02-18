<template>
    <div>
    <div class="box">
<div class="checkboxgroup">
          <div><input type="checkbox" /> c++</div>
          <div><input type="checkbox" /> java</div>
          <div><input type="checkbox" /> html</div>
          <div><input type="checkbox" /> css</div>
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
