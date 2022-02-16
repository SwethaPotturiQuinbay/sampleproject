<template>
  <div>
            <div>
          <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
            <h2 id="heading">Sample Project</h2>
            <form id="msform">
              <ul id="progressbar">
                <li id="account" class="active" @click="per()"><strong>Personal</strong></li>
                <li id="personal" class="active" @click="pro()"><strong>Profile</strong></li>
                <li id="payment" class="active" @click="exp()"><strong>Expertise</strong></li>
                <li id="confirm" class="active" @click="int()"><strong>Interview</strong></li>
              </ul>
              <div class="progress">
                <div
                  class="
                    progress-bar progress-bar-striped progress-bar-animated
                  "
                  role="progressbar"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </form>
    </div>
      </div>
    <div class="box">
    <div class="questionlist">
      <p>Question  1</p>
      <p>Question  2</p>
      <p>Question  3</p>
      <p>Question  4</p>
    </div>
    <div class="question">
      <h2 class="fs-title">Question 1</h2>
    <h3 class="fs-subtitle">What do you consider your main strengths to be?</h3>
    <!--<p class="help-block">List your strengths here.</p>-->
    <textarea class="form-control" name="CAT_Custom_1" id="CAT_Custom_1" rows="4" onkeydown="if(this.value.length>=4000)this.value=this.value.substring(0,3999);"></textarea>
    <!-- <input type="button" name="next" class="next action-button" value="Next" /> -->
    </div>
  </div>
   <div>
                    <button @click="previous()">Previous</button>
                </div>
  <div><button>Submit</button></div>
  </div>
</template>
<style scoped>
.box{
  display:flex;
  justify-content: center;
}
.questionlist{
  padding-right:100px
}
#progressbar {
  margin-bottom: 30px;
  overflow: hidden;
  color: lightgrey;
}

#progressbar .active {
  color: #673ab7;
}

#progressbar li {
  list-style-type: none;
  font-size: 15px;
  width: 25%;
  float: left;
  position: relative;
  font-weight: 400;
}

#progressbar #account:before {
  font-family: FontAwesome;
  content: "\f13e";
}

#progressbar #personal:before {
  font-family: FontAwesome;
  content: "\f007";
}

#progressbar #payment:before {
  font-family: FontAwesome;
  content: "\f030";
}

#progressbar #confirm:before {
  font-family: FontAwesome;
  content: "\f00c";
}

#progressbar li:before {
  width: 50px;
  height: 50px;
  line-height: 45px;
  display: block;
  font-size: 20px;
  color: #ffffff;
  background: lightgray;
  border-radius: 50%;
  margin: 0 auto 10px auto;
  padding: 2px;
}

#progressbar li:after {
  content: "";
  width: 100%;
  height: 2px;
  background: lightgray;
  position: absolute;
  left: 0;
  top: 25px;
  z-index: -1;
}

#progressbar li.active:before,
#progressbar li.active:after {
  background: #673ab7;
}

.progress {
  height: 20px;
}

.progress-bar {
  background-color: #673ab7;
}
</style>
<script>
import progressbar from '@/components/progressbar'
export default{
  components: {
    progressbar
  },
  methods: {
    per () {
      this.$router.push('/personal')
    },
    pro () {
      this.$router.push('/profile')
    },
    exp () {
      this.$router.push('/expertise')
    },
    int () {
      this.$router.push('/interview')
    },
    previous () {
      this.$router.push('/expertise')
    }
  }
}
</script>
