<template>
  <div>
        <div>
          <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
            <h2 id="heading">Sample Project</h2>
            <form id="msform">
              <ul id="progressbar">
                <li id="personal" class="active" @click="per()"><strong>Personal</strong></li>
                <li id="profile" class="active" @click="pro()"><strong>Profile</strong></li>
                <li id="expertise" class="active" ><strong>Expertise</strong></li>
                <li id="interview" ><strong>Interview</strong></li>
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
      <div class="list">
        <div class="abc" @click="activeTab='computersoftware'">Computer Software </div>
        <div class="abc" @click="activeTab='computerscience'">Computer Science</div>
        <div class="abc" @click="activeTab='engineering'">Engineering</div>
      </div>
      <div class="options">
        <computersoftware v-if="activeTab === 'computersoftware'" @onGetList="onGetList"/>
        <computerscience v-if="activeTab === 'computerscience'" @onGetListTwo="onGetListTwo"/>
        <engineering v-if="activeTab === 'engineering'" @onGetListThree="onGetListThree"/>
      </div>
    </div>
                <div class="buttons">
  <div>
                    <button class="button" @click="previous()">Previous</button>
                </div>
  <div>
                    <button class="button" @click="next()">Next</button>
                </div>
</div>
  </div>
</template>
<script>
import computersoftware from './computersoftware.vue'
import computerscience from './computerscience.vue'
import engineering from './engineering.vue'
import swal from 'sweetalert'
export default {
  data () {
    return {
      activeTab: 'computersoftware',
      hello: [],
      arrayfortwo: [],
      arrayforthree: []
    }
  },
  created () {
    this.hello = JSON.parse(localStorage.getItem('computersoftware'))
    this.arrayfortwo = JSON.parse(localStorage.getItem('computerscience'))
  },
  components: {
    computersoftware,
    engineering,
    computerscience
  },
  methods: {
    per () {
      this.$router.push('/')
    },
    pro () {
      this.$router.push('/profile')
    },
    onGetList (lis) {
      this.hello = lis
      localStorage.setItem('computersoftware', JSON.stringify(this.hello))
    },
    next () {
      if (localStorage.getItem('computersoftware') == null) {
        swal('', 'Check some items', 'error')
      } else {
        this.$router.push('/interview')
      }
    },
    onGetListTwo (lisTwo) {
      this.arrayfortwo = lisTwo
      localStorage.setItem('computerscience', JSON.stringify(this.arrayfortwo))
    },
    onGetListThree (lisThree) {
      this.arrayforthree = lisThree
      localStorage.setItem('engineering', JSON.stringify(this.arrayforthree))
    },
    previous () {
      this.$router.push('/profile')
    }
  }
}
</script>
<style scoped>
.options{
    margin: auto;
    margin-top:40px;
    width: 50%;
    padding: 10px;
    height:480px;
    display: flex;
    justify-content: space-between;
    margin-left: 90px;
}
#checkboxes label {
  float: left;
}
#checkboxes div {
  margin: 0;
  list-style: none;
  float: left;
}
.listcheck{
    height: 450px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
}
.box{
  display: flex;
}
.list{
margin-left:150px;
  margin-top: 40px;

}
.abc{
  height:40px;
  width:150px;
  border-radius: 15px;
  background-color: #673ab7;
  margin-bottom:5px;
  cursor: pointer;
  color:white;
  padding-top: 10px;
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

.progress-bar {
  background-color: #673ab7;
}
.buttons{
  display:flex;
  justify-content: space-around;
  align-items:center ;
}
.button{
  background-color: #673ab7;
  border-radius:15px;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width:100px;
  color: white;
  position:relative;
margin-top:100%;
}
#heading {
  text-transform: uppercase;
  color: #673ab7;
  font-weight: normal;
}
</style>
