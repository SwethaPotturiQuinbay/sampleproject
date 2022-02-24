<template>
  <div>
    <div>
      <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
        <h2 id="heading">Sample Project</h2>
        <form id="msform">
          <ul id="progressbar">
            <li id="personal" class="active" @click="per()">
              <strong>Personal</strong>
            </li>
            <li id="profile" class="active">
              <strong>Profile</strong>
            </li>
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
    <div class="form-card">
      <div class="side">
        <label class="fieldlabels">About You: </label>
        <p>*</p>
        <input
          type="textarea"
          v-model="aboutYou"
          name="aboutYou"
          placeholder="Write a short bio "
        />
      </div>
      <div class="sid">
        <label class="fieldlabels">Teaching Experience: </label>
        <p>*</p>
        <input
          type="textarea"
          v-model="teachingExperience"
          name="teachingExperience"
          placeholder="Tell us about your teaching experience"
        />
      </div>
        <h5 class="fieldlabels">Work History</h5>
        <div v-for="(workobj, indx) in addwork" :key="indx+'work'">
          <div class="cn">
        <label class="fieldlabels">Company Name:</label>
        <p>*</p>
          <input
            type="text"
            v-model="workobj.work"
            name="workHistory"
            placeholder="Company"
          />
          </div>
          <div class="af">
          <label class="fieldlabels">Active From:</label>
          <p>*</p>
          <input
            type="date"
            v-model="workobj.activeFrom"
            name="activeFrom"
            placeholder="Active From"
          />
          </div>
          <div class="at">
          <label class="fieldlabels">Active To:</label>
          <p>*</p>
          <input
            type="date"
            v-model="workobj.activeTo"
            name="activeTo"
            placeholder="Active To"
          />
          </div>
        </div>

      <div>
        <span id="addanotherjob" @click="addField(addwork)"
          >+ Add Another Job</span
        >
      </div>
        <h5 class="fieldlabels">Education</h5>
        <div
          v-for="(input, index) in addeducation"
          :key="`${index}-edu`"
        >
        <div class="school">
          <label class="fieldlabels">School Name:</label>
          <p>*</p>
          <input
            type="text"
            v-model="addeducation[index].education"
            name="education"
            placeholder="School"
          />
        </div>
        <div class="enrolled">
          <label class="fieldlabels">Enrolled:</label>
          <p>*</p>
          <input
            type="month"
            v-model="addeducation[index].enrolled"
            name="enrolled"
            placeholder="Enrolled Year"
          />
        </div>
        <div class="graduated">
          <label class="fieldlabels">Graduated:</label>
          <p>*</p>
          <input
            type="month"
            v-model="addeducation[index].graduated"
            name="graduated"
            placeholder="Graduated Year"
          />
        </div>
        </div>
      <div>
        <span id="addanotherschool" @click="addFields(addeducation)"
          >+ Add Another School</span
        >
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
import swal from 'sweetalert'
export default {
  data () {
    return {
      aboutYou: null,
      workHistory: null,
      activeFrom: null,
      activeTo: null,
      education: null,
      enrolled: null,
      graduated: null,
      addwork: [{ work: '', activeFrom: '', activeTo: '' }],
      addworkone: [],
      addeducation: [{ education: '', graduated: '', enrolled: '' }],
      addeducationone: [],
      addanotherjob: false,
      addanotherschool: false,
      work: null,
      h: []
    }
  },
  created () {
    this.aboutYou = localStorage.getItem('aboutYou')
    this.teachingExperience = localStorage.getItem('teachingExperience')
    if (localStorage.getItem('addWork') !== null) {
      this.addwork = JSON.parse(localStorage.getItem('addWork'))
    }
    if (localStorage.getItem('addEducation') !== null) {
      this.addeducation = JSON.parse(localStorage.getItem('addEducation'))
    }
  },
  methods: {
    per () {
      this.$router.push('/')
    },
    async next () {
      if (
        this.aboutYou === null ||
        this.teachingExperience === null ||
        this.addwork.work === '' ||
        this.addwork.activeFrom === null ||
        this.addwork.activeTo === null ||
        this.addeducation.education === '' ||
        this.addeducation.enrolled === null ||
        this.addeducation.graduated === null
      ) {
        swal({
          text: 'Please fill all the details',
          icon: 'warning'
        })
        return
      }
      for (let i = 0; i < this.addwork.length; i++) {
        if (this.addwork[i].activeTo < this.addwork[i].activeFrom) {
          console.log('Hi')
          swal({
            text: 'Active To date should not be less than Active from date'
          })
          return
        }
      }
      for (let i = 0; i < this.addeducation.length; i++) {
        if (this.addeducation[i].graduated < this.addeducation[i].enrolled) {
          console.log('Hi')
          swal({
            text: 'The graduated date must not be earlier than the enrolled date.'
          })
          return
        }
      }
      localStorage.setItem('aboutYou', this.aboutYou)
      localStorage.setItem('teachingExperience', this.teachingExperience)
      localStorage.setItem('addWork', JSON.stringify(this.addwork))
      localStorage.setItem('addEducation', JSON.stringify(this.addeducation))
      this.$router.push('/expertise/')
    },
    previous () {
      this.$router.push('/')
    },
    addField () {
      const index = this.addwork.length - 1
      if (!this.addwork[index].work || !this.addwork[index].activeFrom || !this.addwork[index].activeTo) {
        this.addanotherjob = false
      } else {
        this.addanotherjob = true
        const obj = {}
        obj['work'] = ''
        obj['activeFrom'] = ''
        obj['activeTo'] = ''
        this.addwork.push(obj)
        console.log(this.addwork)
        // this.i = this.i + 1
      }
    },
    addFields () {
      const index = this.addeducation.length - 1
      if (!this.addeducation[index].education || !this.addeducation[index].enrolled || !this.addeducation[index].graduated) {
        this.addanotherschool = false
      } else {
        this.addanotherschool = true
        const obj = {}
        obj['education'] = ''
        obj['enrolled'] = ''
        obj['graduated'] = ''
        this.addeducation.push(obj)
        console.log(this.addeducation)
      }
    }
  }
}
</script>

<style scoped>
.side {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
}
.side p {
  color: red;
}
.sid {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  margin-right: 73px;
}
.sid p {
  color: red;
}
.cn {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  margin-right: 50px;
}
.cn p {
  color: red;
}
.at {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  margin-left: 50px;
}
.at p {
  color: red;
}
.af {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  margin-left: 30px;
}
.af p {
  color: red;
}
.enrolled {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  margin-left: 35px;
}
.enrolled p {
  color: red;
}
.graduated {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  margin-left: 15px;
}
.graduated p {
  color: red;
}
.school {
  display: flex;
  margin-bottom: 20px;
  align-items: center;
  margin-right: 50px;
}
.school p {
  color: red;
}
.form-card label {
  text-align: left;
}
.form-card input[type="textarea"] {
  width: 400px;
  padding: 12px 20px;
  margin-left: 20px;
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
}
.form-card input[type="month"] {
  width: 400px;
  padding: 12px 20px;
  margin-left: 20px;
  box-sizing: border-box;
  text-align: center;
  display: inline-block;
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
.buttons {
  display: flex;
  justify-content: space-evenly;
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
}
.form-card {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  padding: 50px;
  align-items: center;
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
#heading {
  text-transform: uppercase;
  color: #673ab7;
  font-weight: normal;
}

</style>
