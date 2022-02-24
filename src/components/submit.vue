<template>
  <div class="boxes">
    <center>
        <div class="boxtable">
      <table cellpadding="0" cellspacing="0">
        <tbody>
          <tr>
            <td><label class="fieldlabels">Name</label></td>
            <td>
              <span>{{ name }}</span>
            </td>
          </tr>
          <tr>
            <td><label class="fieldlabels"> Email </label></td>
            <td>
              <span>{{ email }}</span>
            </td>
          </tr>
          <tr>
            <td><label class="fieldlabels">Mobile</label></td>
            <td>
              <span>{{ value }}</span>
            </td>
          </tr>
          <tr>
            <td><label class="fieldlabels">University</label></td>
            <td>
              <span>{{ university }}</span>
            </td>
          </tr>
          <tr>
            <td><label class="fieldlabels">Major </label></td>
            <td>
              <span>{{ major }}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label class="fieldlabels">Graduation Date</label>
            </td>
            <td>
              <span>{{ graduationDate }}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label class="fieldlabels"> About You </label>
            </td>
            <td>
              <span>{{ aboutYou }}</span>
            </td>
          </tr>
          <tr>
            <td>
              <label class="fieldlabels"> Teaching Experience </label>
            </td>
            <td>
              <span>{{ teachingExperience }}</span>
            </td>
          </tr>
        </tbody>
      </table>
        </div>
        <div class="but">
            <button class="button" @click="abc()">
              Exit
            </button>
          </div>
    </center>
  </div>
</template>
<script>
export default {
  created () {
    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')
    this.value = localStorage.getItem('value')
    this.university = localStorage.getItem('university')
    this.major = localStorage.getItem('major')
    this.graduationDate = localStorage.getItem('graduationDate')
    this.aboutYou = localStorage.getItem('aboutYou')
    this.teachingExperience = localStorage.getItem('teachingExperience')
  },
  methods: {
    abc () {
      localStorage.clear()
      this.$router.push('/')
    }
  }
}
</script>
<style>
.boxes {
  padding-top: 50px;
}
table tbody tr td {
  text-align: left;
  vertical-align: middle;
  padding-top: 20px;
}
.boxtable{
    background-color: #673ab7;
    width: 400px;
    height:370px;
    border-radius:15px;
    color:white;
}
table tbody tr td:nth-child(2):before {
  content: ":";
  display: inline-block;
  padding-left: 10px;
  margin-right: 10px;
}
.but {
  align-content: center;
  align-items: center;
  padding-top:20px;
}
.button {
  background-color: #673ab7;
  border: 1px white solid;
  border-radius:15px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  width: 100px;
  color: white;
  height:30px
}
</style>
