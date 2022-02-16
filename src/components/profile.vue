<template>
<div>
    <div>
          <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
            <h2 id="heading">Sample Project</h2>
            <form id="msform">
              <ul id="progressbar">
                <li id="account" class="active" @click="per()"><strong>Personal</strong></li>
                <li id="personal" class="active" @click="pro()"><strong>Profile</strong></li>
                <li id="payment" @click="exp()"><strong>Expertise</strong></li>
                <li id="confirm" @click="int()"><strong>Interview</strong></li>
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
  <div class="form-card">
    <div class="row">
      <!-- <div class="col-7">
        <h2 class="fs-title">Personal Information:</h2>
      </div> -->
    </div>
    <label class="fieldlabels">About You: *</label>
    <input type="textarea" v-model="aboutYou" name="aboutYou" placeholder="Write a short bio " />
    <label class="fieldlabels">Teaching Experience: *</label>
    <input
      type="textarea"
      v-model="teachingExperience"
      name="teachingExperience"
      placeholder="Tell us about your teaching experience"
    />
    <label class="fieldlabels">Work History: *</label>
    <div v-for="(input,index) in addwork" :key=" `phoneInput-${index}`">
    <input type="text" v-model="input.work" name="workHistory" placeholder="Company" />
    <label class="fieldlabels">Active From: *</label>
    <input type="date" v-model="activeFrom" name="activeFrom" placeholder="Active From" />
    <label class="fieldlabels">Active To: *</label>
    <input type="date" v-model="activeTo" name="activeTo" placeholder="Active To" />
    </div>
   <div>
     <span @click="addField(input,addwork)">+ Add Another Job</span>
     </div>
    <label class="fieldlabels">Education: *</label>
    <div v-for="(input,index) in addeducation" :key=" `phoneInput-${index}`">
    <input type="text" v-model="education" name="education" placeholder="School" />
    <label class="fieldlabels">Enrolled: *</label>
    <input type="month" v-model="enrolled" name="enrolled" placeholder="Enrolled Year" />
    <label class="fieldlabels">Graduated: *</label>
    <input type="month" v-model="graduated" name="graduated" placeholder="Graduated Year" />
    </div>
   <div>
     <span @click="addField(input,addeducation)">+ Add Another Job</span>
     </div>
    <!-- + Add Another School -->
  </div>
  <div>
                    <button @click="next()">Next</button>
                </div>
  <div>
                    <button @click="previous()">Previous</button>
                </div>
</div>
</template>
<script>
import progressbar from '@/components/progressbar'
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
      addwork: [{work: ''}],
      addeducation: [{ed: ''}]
    }
  },
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
    async next () {
      if (this.aboutYou === null ||
        this.teachingExperience === null ||
        this.workHistory === null ||
        this.activeFrom === null ||
        this.activeTo === null ||
        this.education === null ||
        this.enrolled === null ||
        this.graduated === null) {
        swal({
          text: 'Please fill all the details',
          icon: 'warning'
        })
        return
      }
      if (this.activeTo < this.activeFrom) {
        swal({text: 'Active To date should not be less than Active from date'})
        return
      }
      if (this.graduated < this.enrolled) {
        swal({text: 'The graduated date must not be earlier than the enrolled date.'})
        return
      }
      localStorage.setItem('aboutYou', this.aboutYou)
      localStorage.setItem('teachingExperience', this.teachingExperience)
      localStorage.setItem('workHistory', this.workHistory)
      localStorage.setItem('activeFrom', this.activeFrom)
      localStorage.setItem('activeTo', this.activeTo)
      localStorage.setItem('education', this.education)
      localStorage.setItem('enrolled', this.enrolled)
      localStorage.setItem('graduated', this.graduated)
      this.$router.push('/expertise')
    },
    previous () {
      this.$router.push('/personal')
    },
    addField (value, fieldType) {
      fieldType.push({value: ''})
    }
  }
}
</script>

<style scoped>
.form-card{
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: left;
    padding: 50px;
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
