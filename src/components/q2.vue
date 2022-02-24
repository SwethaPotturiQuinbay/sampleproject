<template>
    <div class="question">
      <h2 class="fs-title">Question 2</h2>
    <h3 class="fs-subtitle">What do you consider your main strengths to be?</h3>
    <textarea class="form-control" name="questionone" v-model="quesTwo" id="questiontwo" cols="50" rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>
    <div>
    <button id="btnn" @click="submit()">Submit Question 2</button></div>
    </div>
</template>
<script>
import swal from 'sweetalert'
export default{
  data () {
    return {
      quesTwo: null,
      storepropthree: this.q3
    }
  },
  created () {
    this.quesTwo = localStorage.getItem('QuestionTwo')
  },
  methods: {
    submit () {
      if (localStorage.getItem('QuestionTwo')) {
        swal('', 'cannot enter twice', 'error')
      } else if (!localStorage.getItem('QuestionOne')) {
        swal('', 'Enter Questions Above', 'error')
      } else {
        localStorage.setItem('QuestionTwo', this.quesTwo)
        this.$emit('enablequestwo', {storepropthree: false})
        this.$emit('updatestep', 2)
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
