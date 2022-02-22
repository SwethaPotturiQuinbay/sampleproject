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
        <p @click="activeTab='computersoftware'">Computer Software </p>
        <p @click="activeTab='computerscience'">Computer Science</p>
        <p @click="activeTab='engineering'">Engineering</p>
      </div>
      <div class="options">
        <computersoftware v-if="activeTab === 'computersoftware'" :source="checkedbox" @save="save"/>
        <computerscience v-if="activeTab === 'computerscience'"/>
        <engineering v-if="activeTab === 'engineering'"/>
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
import progressbar from '@/components/progressbar'
import computersoftware from './computersoftware.vue'
import computerscience from './computerscience.vue'
import engineering from './engineering.vue'
export default {
  data () {
    return {
      activeTab: 'computersoftware'
    }
  },
  components: {
    progressbar,
    computersoftware,
    engineering,
    computerscience
  },
  methods: {
    save (obj) {
      if (obj.number === 1) {
        const array = []
        this.checkedbox.push(...obj.check)
        array.push(...this.checkedbox)
        localStorage.setItem('checkone', JSON.stringify(array))
      }
    },
    created () {
      this.taxvalue = localStorage.getItem('taxvalue')
    },
    next () {
      this.$router.push('/interview')
    },
    previous () {
      let i = this.$route.params.i
      console.log('i', i)
      for (let t = 0; t <= i; t++) {
        console.log(t)
        localStorage.getItem('work' + t)
        localStorage.getItem('active From' + t)
        localStorage.getItem('active To' + t)
      }
      let j = this.$route.params.j
      console.log('j', j)
      this.$router.push('/profile/' + i + '/' + j)
    },
    componeclicked () {
      this.$emit('componeclicked', this.item)
    }
  }
}
</script>
<style scoped>
.box {
  display: flex;
  justify-content: center;
  margin-left:100px;
}
.list {
    display: flex;
    flex-direction: column;
    justify-content: wrap;
  padding-right: 100px;
  align-items: right;
}
.options{
    border: 1px solid black;
    width: 60%;
}
p {
  border: 1px solid black;
  background-color: whitesmoke;
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
