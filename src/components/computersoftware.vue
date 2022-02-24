<template>
    <div>
<div class="box">
  <div class="list">
  <div v-for="item in list" :key="item.id">
    <div>
    <li>
      <input type="checkbox" v-model="item.checked" @click="addItem(item.text,item.id)">{{item.text}}
    </li>
    </div>
  </div>
</div>
</div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {id: 0, text: 'C++', checked: false},
        {id: 1, text: 'python', checked: false},
        {id: 2, text: 'java', checked: false},
        {id: 3, text: 'C', checked: false},
        {id: 4, text: 'js', checked: false},
        {id: 5, text: 'vue js', checked: false},
        {id: 6, text: 'angular js', checked: false},
        {id: 7, text: 'R', checked: false},
        {id: 8, text: 'DS', checked: false},
        {id: 9, text: 'oops', checked: false},
        {id: 10, text: 'Go', checked: false},
        {id: 11, text: 'kotlin', checked: false},
        {id: 12, text: 'html', checked: false},
        {id: 13, text: 'CSS', checked: false},
        {id: 14, text: 'SQL', checked: false},
        {id: 15, text: 'mongo db', checked: false},
        {id: 16, text: 'PHP', checked: false}],
      checkedbox: [],
      flag: true
    }
  },
  created () {
    if (localStorage.getItem('computersoftware')) {
      this.checkedbox = JSON.parse(localStorage.getItem('computersoftware'))
      for (let i = 0; i < this.checkedbox.length; i++) {
        for (let j = 0; j < this.list.length; j++) {
          if (this.list[j].text === this.checkedbox[i]) {
            this.list[j].checked = true
          }
        }
      }
    }
  },
  methods: {
    addItem (itemName, itemId) {
      for (let i = 0; i <= this.checkedbox.length - 1; i++) {
        if (this.checkedbox[i] === itemName) {
          var newArray = this.checkedbox.filter((item) => item !== itemName)
          this.checkedbox = newArray
          this.flag = false
        }
      }
      if (this.flag === true) {
        this.checkedbox.push(itemName)
      }
      this.flag = true
      this.$emit('onGetList', this.checkedbox)
    }
  }
}
</script>
<style scoped>
#checkboxes label {
  float: left;
}
#checkboxes div {
  margin: 0;
  list-style: none;
  float: left;
}
.list{
  padding-left: 100px;
    height: 450px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap:60px;
    align-items: flex-start;

}
li{
  display:block;
}
input[type=checkbox]{
  vertical-align: middle;
  position: relative;
  bottom: 1px;
}

</style>
