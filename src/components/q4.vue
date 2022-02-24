<template>
    <div class="question">
      <h2 class="fs-title">Question 4</h2>
    <h3 class="fs-subtitle">What do you consider your main strengths to be?</h3>
    <textarea class="form-control" name="questionfour" v-model="quesFour" id="questionfour" rows="4" cols="50" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>
    <div>
    <button id="btnn" @click="submit()">Submit Question 4</button></div>
    </div>
</template>
<script>
import swal from 'sweetalert'
export default{
  data () {
    return {
      quesFour: null
    }
  },
  created () {
    this.quesFour = localStorage.getItem('QuestionFour')
  },
  methods: {
    submit () {
      if (localStorage.getItem('QuestionFour')) {
        swal('', 'Cannot enter twice', 'error')
      } else if (!localStorage.getItem('QuestionThree')) {
        swal('', 'Enter Questions Above', 'error')
      } else {
        localStorage.setItem('QuestionFour', this.quesFour)
        swal('', 'Question added', 'success')
      }
    }
  }
}
</script>
<style  scoped>
#btnn{
    background-color: #673ab7;
    color: white;
  height:40px;
  width: 100px;
  margin-bottom: 20px;
  align-items: center;
}
</style>
