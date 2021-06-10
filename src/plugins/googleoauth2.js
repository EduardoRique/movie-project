import Vue from 'vue'
import GAuth from 'vue-google-oauth2'

const gauthOption = {
  clientId: '342429341950-hg40c7vvik55ue6aao0du3g3a16kphog.apps.googleusercontent.com',
  scope: 'https://www.googleapis.com/auth/tasks',
  prompt: 'consent'
}

Vue.use(GAuth, gauthOption)