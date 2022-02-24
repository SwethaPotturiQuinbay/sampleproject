<template>
    <div class="question">
      <h2 class="fs-title">Question 3</h2>
    <h3 class="fs-subtitle">What do you consider your main strengths to be?</h3>
    <textarea class="form-control" name="questionthree" v-model="quesThree" id="questionthree" cols="50" rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>
    <div>
    <button id="btnn" @click="submit()">Submit Question 3</button></div>
    </div>
</template>
<script>
import swal from 'sweetalert'
export default{
  props: ['q4'],
  data () {
    return {
      quesThree: null,
      storepropfour: this.q4
    }
  },
  created () {
    this.quesThree = localStorage.getItem('QuestionThree')
  },
  methods: {
    submit () {
      if (localStorage.getItem('QuestionThree')) {
        swal('', 'cannot enter twice', 'error')
      } else if (!localStorage.getItem('QuestionTwo')) {
        swal('', 'Enter Questions Above', 'error')
      } else {
        localStorage.setItem('QuestionThree', this.quesThree)
        this.$emit('enablequesthree', {storepropfour: false})
        this.$emit('updatestep', 3)
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
