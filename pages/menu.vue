<template>
    <div style="padding-top: 20px;" class="container">
      <div class="row">
        <div class="col s12">
          <b class="red white-text btn" @click="logOut">
            <i class="material-icons">lock</i> 
          </b>
          <b class="grey-text btn disabled">Menu</b>
        </div>
      </div>

      <!-- <div class="row">
        <Logo style="margin-bottom: 50px; margin-top: 10px;"/>
      </div> -->

      <!-- <div class="row" style="padding-bottom: 10px;">
        <div class="col s12">
          <b class=" grey-text darken-4">Welcome,</b> <br>
          <b style="font-size: 20px; color: #757575;" class="">{{fullname}}</b>
        </div>
      </div> -->
  
      <div class="row">
        <div class="row">

          <div class="col s12 center">
            <nuxt-link to="/ie_force">
              <div class="card-panel orange">
                <span class="white-text">
                  <i class="material-icons">folder_open</i>
                  <h6>IE Force</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          
        </div>

      </div>
  
      
  
    </div>
    
  </template>
  
  
  
  
  <script>
  export default {
      layout: 'admin_main',

      data() {
        return {
          fullname: '',
  
          name: '',
          email: '',
          message: '',
  
          scheduleList: [],
  
        }
      },

      methods: {
        logOut() {
          if(process.client) {
            localStorage.removeItem('token')
            window.location = './'
          }
        },

        async getFullname() {
          // this.fullname = localStorage.getItem('fullname')
        }
      },

      mounted() {
        localStorage.setItem('service_type', '')
        localStorage.setItem('meter_number', '')
      },

      created() {
        
        // this.getFullname()
      }
  }
  </script>
  
  
  <style scoped>
  </style>