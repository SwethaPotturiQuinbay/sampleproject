<template>
  <div>
            <div>
          <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
            <h2 id="heading">Sample Project</h2>
            <form id="msform">
              <ul id="progressbar">
                <li id="personal" class="active" ><strong>Personal</strong></li>
                <li id="profile" class="active" ><strong>Profile</strong></li>
                <li id="expertise" class="active" ><strong>Expertise</strong></li>
                <li id="interview" class="active" ><strong>Interview</strong></li>
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
        <p @click="activeTab='q1'">Question 1</p>
        <p @click="activeTab='q2'">Question 2</p>
        <p @click="activeTab='q3'">Question 3</p>
        <p @click="activeTab='q4'">Question 4</p>

    </div>
    <div class="question">
        <q1 v-if="activeTab === 'q1'"/>
        <q2 v-if="activeTab === 'q2'"/>
        <q3 v-if="activeTab === 'q3'"/>
        <q4 v-if="activeTab === 'q4'"/>
    </div>
  </div>
  <div class="buttons">
   <div>
                    <button class="button" @click="previous()">Previous</button>
                </div>
  <div><button class="button" @click="submit()" >Submit</button></div>
  </div>
  </div>
</template>
<script>
import progressbar from '@/components/progressbar'
import q1 from './q1.vue'
import q2 from './q2.vue'
import q3 from './q3.vue'
import q4 from './q4.vue'
export default{
  data () {
    return {
      activeTab: 'q1'
    }
  },
  components: {
    progressbar,
    q1,
    q2,
    q3,
    q4
  },
  methods: {
    previous () {
      this.$router.push('/expertise/0/0')
    },
    submit(){
      this.$router.push('/submit')
    }
  }
}
</script>

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

#progressbar #personal:before {
  font-family: FontAwesome;
  content: "✓";
}

#progressbar #profile:before {
  font-family: FontAwesome;
  content: "✓";
}

#progressbar #expertise:before {
  font-family: FontAwesome;
  content: "✓";
}

#progressbar #interview:before {
  font-family: FontAwesome;
  content: "✓";
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
#heading {
  text-transform: uppercase;
  color: #673ab7;
  font-weight: normal;
}
.progress-bar {
  background-color: #673ab7;
}
.buttons{
  display:flex;
  justify-content: space-evenly;
  align-items:center ;
}
.button{
  background-color: #673ab7;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width:100px;
  color: white;
  position:relative;
margin-top:100%;
}
</style>
