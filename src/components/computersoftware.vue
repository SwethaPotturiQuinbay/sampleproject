<template>
    <div>
<div class="box">
  <label><input type="checkbox" v-model="checkedbox" name="C" value="C">C</label>
  <label><input type="checkbox" v-model="checkedbox" name="ds" value="ds">ds</label>
  <label ><input type="checkbox" v-model="checkedbox" name="Django" value="Django">Django</label>
  <label ><input type="checkbox" v-model="checkedbox" name="js" value="js">js</label>
  <label ><input type="checkbox" v-model="checkedbox" name="CSS" value="CSS"> CSS</label>
  <label ><input type="checkbox" v-model="checkedbox" name="java" value="java">java</label>
  <label ><input type="checkbox" v-model="checkedbox" name="HTML" value="HTML">HTML </label>
  <label ><input type="checkbox" v-model="checkedbox" name="springboot" value="spring boot">spring boot</label>
  <label ><input type="checkbox" v-model="checkedbox" name="vuejs" value="vue js">vue js</label>
  <label ><input type="checkbox"  v-model="checkedbox" name="python" value="python">python</label>
  <label ><input type="checkbox" v-model="checkedbox" name="Go" value="Go">Go</label>
  <label ><input type="checkbox" v-model="checkedbox" name="R" value="R">R </label>
</div>
<div>
  <button id="btnn" @click="addItem()">Save</button>
</div>
    </div>
</template>
<script>
export default {
  // props: ['source'],
  data () {
    return {
      // check: this.source
      checkedbox: []
    }
  },
  methods: {
    addItem () {
      // this.$emit('save', {check: this.check, number: 1})
      const array = []
      array.push(...this.checkedbox)
      localStorage.setItem('Checked List computer software', JSON.stringify(array))
    }
  }
}
</script>
<style scoped>
*{ box-sizing: border-box; }

.box {
  display: flex;
  flex-wrap: wrap;
}

label {
  flex: 1 0 25%;
  white-space: nowrap;
  padding: 5px;
}
#btnn{
    background-color: #673ab7;
    color: white;
  height:30px;
  width: 100px;
  align-items: center;
}
input {
  display: inline;
  padding:30px
}
</style>
