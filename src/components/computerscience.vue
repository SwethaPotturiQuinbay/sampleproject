<template>
    <div>
<div class="box">
  <label><input type="checkbox" v-model="checkedbox" name="cplusplus" value="DAA">DAA</label>
  <label><input type="checkbox" v-model="checkedbox" name="ds" value="cyber security">cyber security</label>
  <label ><input type="checkbox" v-model="checkedbox" name="Django" value="oop">oop</label>
  <label ><input type="checkbox" v-model="checkedbox" name="js" value="Networking">Networking</label>
  <label ><input type="checkbox" v-model="checkedbox" name="CSS" value="Fla"> Fla</label>
  <label ><input type="checkbox" v-model="checkedbox" name="java" value="SQL">SQL</label>
  <label ><input type="checkbox" v-model="checkedbox" name="HTML" value="Mongo db">Mongo db</label>
  <label ><input type="checkbox" v-model="checkedbox" name="springboot" value="bootstrap">bootstrap</label>
  <label ><input type="checkbox" v-model="checkedbox" name="vuejs" value="ethical hacking">ethical hacking</label>
  <label ><input type="checkbox"  v-model="checkedbox" name="python" value="Linux">Linux</label>
  <label ><input type="checkbox" v-model="checkedbox" name="Go" value="PHP">PHP</label>
  <label ><input type="checkbox" v-model="checkedbox" name="C" value="C++">C++</label>
</div>
<div>
  <button id="btnn" @click="addItem()">Save</button>
</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      checkedbox: []
    }
  },
  methods: {
    addItem () {
      const array = []
      array.push(...this.checkedbox)
      localStorage.setItem('Checked List computer science', JSON.stringify(array))
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
