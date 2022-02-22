<template>
  <div>
    <div>
      <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
        <h2 id="heading">Sample Project</h2>
        <form id="msform">
          <ul id="progressbar">
            <li id="personal" class="active" >
              <strong>Personal</strong>
            </li>
             <li id="profile" ><strong>Profile</strong></li>
            <li id="expertise" ><strong>Expertise</strong></li>
            <li id="interview" ><strong>Interview</strong></li>
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

    <div class="container-fluid">
      <div class="row justify-content-center">
        <br />
        <div class="form-card">
          <div class="side">
            <label class="fieldlabels">Name: </label>
            <p>*</p>
            <input type="text" v-model="name" name="name" placeholder="Name" />
          </div>
          <div class="side">
            <label class="control-label requiredField" for="email">
              Email :<span style="color: red">*</span>
            </label>
            <input
              class="form-control"
              @input="isEmailValid"
              v-model="email"
              type="email"
            />
          </div>
          <div>
            <span v-show="wrongEmail" style="color: red"
              >Incorrect email address</span
            >
          </div>
          <div class="side">
            <label class="fieldlabels">Mobile</label>
            <p>*</p>
            <input
              type="text"
              v-model="value"
              name="mobile"
              placeholder="Mobile Number"
              @input="acceptNumber"
            />
          </div>
          <div class="way" >
            <label> what are you?</label>
            <p>*</p>
            <input type="radio" name="radio" value="University Student" v-model="radiooption" required/>University Student
            <input type="radio" name="radio" value="Professional" v-model="radiooption" required/>Professional
          </div>
          <div class="sides">
            <label class="fieldlabels">University: </label>
            <p>*</p>
            <input
              type="text"
              v-model="university"
              name="university"
              placeholder="University"
            />
          </div>
          <div class="side">
            <label class="fieldlabels">Major: </label>
            <p>*</p>
            <input
              type="text"
              v-model="major"
              name="major"
              placeholder="Major"
            />
          </div>
          <div class="sid">
            <label class="fieldlabels">Graduation Date: </label>
            <p>*</p>
            <input
              type="date"
              name="graduationDate"
              placeholder="Graduation Date"
              v-model="graduationDate"
            />
          </div>
          <div class="side">
            <label class="fieldlabels">Do you have a tax ID ? </label>
            <p>*</p>
            <input type="radio" name="rad" v-model="taxvalue" value="I have a tax ID" />I have a tax id<input
              type="radio"
              name="rad"
              v-model="taxvalue"
              value="I don't have a tax ID"
            />I don't have a tax id
          </div>
          <div>
            <button class="button" @click="next()">Next</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import swal from 'sweetalert'
const emailRe =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
export default {
  data () {
    return {
      name: null,
      email: '',
      mobile: null,
      university: null,
      major: null,
      graduationDate: '',
      value: '',
      radiooption: null,
      taxvalue: null,
      wrongEmail: ''
    }
  },
  created () {
    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')
    this.value = localStorage.getItem('value')
    this.university = localStorage.getItem('university')
    this.major = localStorage.getItem('major')
    this.graduationDate = localStorage.getItem('graduationDate')
    this.radiooption = localStorage.getItem('univerradio')
    this.taxvalue = localStorage.getItem('taxid')
    console.log('radio value' + this.radiooption)
  },
  methods: {
    isEmailValid () {
      if (emailRe.test(this.email)) {
        this.wrongEmail = false
      } else {
        this.wrongEmail = true
      }
    },
    acceptNumber () {
      var x = this.value
        .replace(/\D/g, '')
        .match(/(\d{0,3})(\d{0,3})(\d{0,4})/)
      this.value = !x[2]
        ? x[1]
        : '(' + x[1] + ') ' + x[2] + (x[3] ? '-' + x[3] : '')
    },
    async next () {
      if (
        this.name === null ||
        this.email === null ||
        this.value === null ||
        this.university === null ||
        this.major === null ||
        this.graduationDate === null
      ) {
        swal({
          text: 'Please fill all the details',
          icon: 'warning'
        })
        return
      }
      localStorage.setItem('name', this.name)
      localStorage.setItem('email', this.email)
      localStorage.setItem('value', this.value)
      localStorage.setItem('university', this.university)
      localStorage.setItem('major', this.major)
      localStorage.setItem('graduationDate', this.graduationDate)
      localStorage.setItem('univerradio', this.radiooption)
      localStorage.setItem('taxid', this.taxvalue)

      this.$router.push('/profile/' + 0 + '/' + 0)
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.form-card {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: left;
  padding: 50px;
  align-items: center;
}
.form-card label {
  text-align: left;
}
.form-card input[type="text"] {
  width: 400px;
  padding: 12px 20px;
  margin-left: 20px;
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
}
.form-card input[type="date"] {
  width: 400px;
  padding: 12px 20px;
  margin-left: 20px;
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
}
.form-card input[type="email"] {
  width: 400px;
  padding: 12px 20px;
  margin-left: 20px;
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
}
.form-card input[type="phonenumber"] {
  width: 400px;
  padding: 12px 20px;
  margin-left: 20px;
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
}
html {
  height: 100%;
}

p {
  color: grey;
}
.side {
  display: flex;
  margin-bottom: 20px;
}
.sides {
  display: flex;
  margin-bottom: 20px;
  margin-right: 30px;
}
.sid {
  display: flex;
  margin-bottom: 20px;
  margin-right: 80px;
}
.side p {
  color: red;
}
.sides p {
  color: red;
}
.sid p {
  color: red;
}
.button{
  background-color: #673ab7;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width:100px;
  color: white;
}
#heading {
  text-transform: uppercase;
  color: #673ab7;
  font-weight: normal;
}
.container-fluid {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
input[type="radio"] {
  margin: 6px;
  display: inline-block;
}

.card {
  z-index: 0;
  border: none;
  position: relative;
}

.fs-title {
  font-size: 25px;
  color: #673ab7;
  margin-bottom: 15px;
  font-weight: normal;
  text-align: left;
}

.purple-text {
  color: #673ab7;
  font-weight: normal;
}

.way {
  margin-left: -140px;
  display: flex;
  margin-bottom: 20px;
}
.way p {
  color: red;
}
.steps {
  font-size: 25px;
  /* color: gray; */
  margin-bottom: 10px;
  font-weight: normal;
  text-align: right;
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
/* .fieldlabels {
  color: black;
  text-align: left;
} */
.fit-image {
  width: 100%;
  object-fit: cover;
}
</style>
