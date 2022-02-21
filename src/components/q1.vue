<template>

    <div class="question">
      <h2 class="fs-title">Question 1</h2>
    <h3 class="fs-subtitle">What do you consider your main strengths to be?</h3>
    <!--<p class="help-block">List your strengths here.</p>-->
    <textarea class="form-control" name="CAT_Custom_1" v-model="q1" id="CAT_Custom_1" rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>
    <!-- <input type="button" name="next" class="next action-button" value="Next" /> -->
    <div>
    <button id="btnn" @click="submit()">Submit Question 1</button></div>
    </div>
</template>
<script>
// export default {
//   data () {
//     return {
//       checkedbox: []
//     }
//   },
//   methods: {
//     addItem () {
//       // const array = []
//       // array.push(...this.checkedbox)
//       // localStorage.setItem('Checked List', JSON.stringify(array))
//       localStorage.setItem('Question 1', this.q1)
//       // this.$router.push('/q2')
//     }
//   }
// }
import swal from 'sweetalert'
export default{
  data () {
    return {
      q1: null
    }
  },
  methods: {
    submit () {
      if (localStorage.getItem('QuestionOne')) {
        swal('', 'cannot enter twice', 'error')
      } else {
        localStorage.setItem('QuestionOne', this.q1)
        this.$emit('updatestep', 1)
        swal('', 'Question added', 'success')
      }
      this.name = localStorage.getItem('q1')
    }
  }
}
</script>
<style  scoped>
#btnn{
    background-color: #673ab7;
    color: white;
  /* margin-left: 200px; */
  height:40px;
  width: 100px;
  /* margin-bottom: 5px; */
  align-items: center;
}
</style>
