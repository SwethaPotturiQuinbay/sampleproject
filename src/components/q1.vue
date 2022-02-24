<template>

    <div class="question">
      <h2 class="fs-title">Question 1</h2>
    <h3 class="fs-subtitle">What do you consider your main strengths to be?</h3>
    <textarea class="form-control" name="questiontwo" v-model="quesOne" id="questionone" rows="5" cols="50" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>
    <div>
    <button id="btnn" @click="submit()">Submit Question 1</button></div>
    </div>
</template>
<script>
import swal from 'sweetalert'
export default{
  data () {
    return {
      quesOne: null,
      storeprop: this.q2
    }
  },
  created () {
    this.quesOne = localStorage.getItem('QuestionOne')
  },
  methods: {
    submit () {
      if (localStorage.getItem('QuestionOne')) {
        swal('', 'cannot enter twice', 'error')
      } else {
        localStorage.setItem('QuestionOne', this.quesOne)
        this.$emit('enablequesone', {storeprop: false})
        this.$emit('updatestep', 1)
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

  margin-top: 20px;
  align-items: center;
}

</style>
