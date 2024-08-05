<template>
    <div style="padding-top: 20px;" class="container">
        <div class="row">
            <div class="col s12">
                <nuxt-link to="./menu" class="red white-text btn">
                    Back 
                </nuxt-link>
                <b class="grey-text btn disabled">IE FORCE</b>
            </div>
        </div>
  
        <div class="row">

            <div class="col s12 center">
                <nuxt-link to="/dashboard_ie_force">
                    <div class="card-panel orange">
                        <span class="white-text">
                            <i class="material-icons">folder_open</i>
                            <h6>Forms</h6>
                        </span>
                    </div>
                </nuxt-link>
            </div>

            <div class="col s12 center">
                <nuxt-link to="/dt_assigned">
                    <div class="card-panel orange">
                        <span class="white-text">
                            <i class="material-icons">folder_open</i>
                            <h6>DTs Assigned</h6>
                        </span>
                    </div>
                </nuxt-link>
            </div>

            <div class="col s12 center">
                <nuxt-link to="../e_services">
                    <div class="card-panel orange">
                        <span class="white-text">
                            <i class="material-icons">folder_open</i>
                            <h6>E-Services</h6>
                        </span>
                    </div>
                </nuxt-link>
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