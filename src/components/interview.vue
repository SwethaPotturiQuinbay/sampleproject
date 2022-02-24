<template>
  <div>
    <div>
      <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
        <h2 id="heading">Sample Project</h2>
        <form id="msform">
          <ul id="progressbar">
            <li id="personal" class="active" @click="per()"><strong>Personal</strong></li>
            <li id="profile" class="active" @click="pro()"><strong>Profile</strong></li>
            <li id="expertise" class="active" @click="int()"><strong>Expertise</strong></li>
            <li id="interview" class="active"><strong>Interview</strong></li>
          </ul>
          <div class="progress">
            <div
              class="progress-bar progress-bar-striped progress-bar-animated"
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
        <div class="questionbutton">
        <button id="btn" @click="activeTab = 'q1'" > Question 1</button>
        <button id="btn" @click="activeTab = 'q2'" :disabled="q2">Question 2</button>
        <button id="btn" @click="activeTab = 'q3'" :disabled="q3">Question 3</button>
        <button id="btn" @click="activeTab = 'q4'" :disabled="q4">Question 4</button>
      </div>
      </div>
      <div class="question">
        <q1
          v-if="activeTab === 'q1'"
          @updatestep="callonupdatestep"
          :passprop="q2"
          @enablequesone="enablequesone"
        />
        <q2
          v-if="activeTab === 'q2'"
          @updatestep="callonupdatestep"
          :passprop="q3"
          @enablequestwo="enablequestwo"
        />
        <q3
          v-if="activeTab === 'q3'"
          @updatestep="callonupdatestep"
          :passprop="q4"
          @enablequesthree="enablequesthree"
        />
        <q4 v-if="activeTab === 'q4'" />
      </div>
    </div>
    <div class="buttons">
      <div>
        <button class="button" @click="previous()">Previous</button>
      </div>
      <div><button class="button" @click="submit()">Submit</button></div>
    </div>
  </div>
</template>
<script>
import q1 from './q1.vue'
import q2 from './q2.vue'
import q3 from './q3.vue'
import q4 from './q4.vue'
import swal from 'sweetalert'
export default {
  data () {
    return {
      activeTab: 'q1',
      q2: true,
      q3: true,
      q4: true
    }
  },
  components: {
    q1,
    q2,
    q3,
    q4
  },

  methods: {
    per () {
      this.$router.push('/')
    },
    pro () {
      this.$router.push('/profile')
    },
    int () {
      this.$router.push('/expertise')
    },
    previous () {
      this.$router.push('/expertise')
    },
    callonupdatestep (stepnumber) {
      if (stepnumber === 1) {
        this.activeTab = 'q2'
      } else if (stepnumber === 2) {
        this.activeTab = 'q3'
      } else if (stepnumber === 3) {
        this.activeTab = 'q4'
      } else {
      }
    },
    submit () {
      if (
        localStorage.getItem('email') &&
        localStorage.getItem('aboutYou')) {
        swal('', 'Thank You for filling these details', 'success')
      } else {
        swal('', 'Fill all the details', 'error')
        return
      }
      this.$router.push('/submit')
    },
    enablequesone (obj) {
      console.log('obj', obj)
      this.q2 = obj.storeprop
    },
    enablequestwo (obj) {
      this.q3 = obj.storepropthree
    },
    enablequesthree (obj) {
      this.q4 = obj.storepropfour
    }
  }
}
</script>

<style scoped>
.box {
  display: flex;
  justify-content: center;
  margin-left: 10px;
}
.questionlist {
  display:flex;
  flex-direction: column;
  justify-content: space-between;
}
#btn{
  margin-top: 10px;
  background-color:#673ab7 ;
  color: white;
}
#btn[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
.questionbutton{
  display:flex;
  flex-direction: column;
  padding-right: 220px;
  padding-top: 35px;
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
.buttons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
.button {
  background-color: #673ab7;
  border-radius:15px;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100px;
  color: white;
  position: relative;
  margin-top: 100%;
}

</style>
