<template>
    <div style="padding-top: 20px;" class="container">
      <div class="row">
        <div class="col s12">
          <nuxt-link to="./ie_force" class="red white-text btn">
              Back 
          </nuxt-link>
          <b class="grey-text btn disabled">IE FORCE</b>
        </div>
      </div>
  
      <div class="row">
        <div class="row">

          <div class="col s12 center">
            <nuxt-link to="/crmd">
              <div class="card-panel orange">
                <span class="white-text">
                  <i class="material-icons">folder_open</i>
                  <h6>CRMD</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <div class="col s12 center">
            <nuxt-link to="/customer_mapping">
              <div class="card-panel orange">
                <span class="white-text">
                  <i class="material-icons">folder_open</i>
                  <h6>Customer Mapping</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <div class="col s12 center">
            <nuxt-link to="/customer_details_validation">
              <div class="card-panel orange">
                <span class="white-text">
                  <i class="material-icons">folder_open</i>
                  <h6>Customer Details Validation</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <div class="col s12 center">
            <nuxt-link to="/energy_theft">
              <div class="card-panel orange">
                <span class="white-text">
                  <i class="material-icons">folder_open</i>
                  <h6>Energy Theft</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <!-- <div class="col s12 center">
            <nuxt-link to="/newly_installed_ppm">
              <div class="card-panel red">
                <span class="white-text">
                  <i class="material-icons">folder_open</i>
                  <h6>Newly Installed PPM CV</h6>
                </span>
              </div>
            </nuxt-link>
          </div> -->

          <div class="col s12 center">
            <nuxt-link to="/customer_complaints">
              <div class="card-panel black">
                <span class="white-text">
                  <i class="material-icons white-text">folder_open</i>
                  <h6 class="white-text">Customer Complaints</h6>
                </span>
              </div>
            </nuxt-link>
          </div>
          

          <!-- 

          <div class="col s12 center">
            <nuxt-link to="/suspended_cv">
              <div class="card-panel pink">
                <span class="white-text">
                  <i class="material-icons">folder_open</i>
                  <h6>Suspended Customers Validation</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

           -->

          <div class="col s12 center">
            <nuxt-link to="/none_vending_cv">
              <div class="card-panel orange">
                <span class="white-text">
                  <i class="material-icons">folder_open</i>
                  <h6>Non vending Customer Validation</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <!-- <div class="col s12 center">
            <nuxt-link to="/non_inclusion_capture">
              <div class="card-panel blue darken-4">
                <span class="white-text">
                  <i class="material-icons">folder_open</i>
                  <h6>Non-inclusion capture</h6>
                </span>
              </div>
            </nuxt-link>
          </div> -->

          <div class="col s12 center">
            <nuxt-link to="/field_for_customer_visitation">
              <div class="card-panel orange">
                <span class="white-text">
                  <i class="material-icons">folder_open</i>
                  <h6>Customer visitation</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <!-- <div class="col s12 center">
            <nuxt-link to="./about">
              <div class="card-panel red lighten-1">
                <span class="white-text">
                  <i class="material-icons">info</i>
                  <h6>About</h6>
                </span>
              </div>
            </nuxt-link>
          </div> -->

          <div class="col s12 center">
              <div class="card-panel red" @click="logOut">
                  <span class="white-text">
                    <i class="material-icons">lock</i>
                    <h6>Logout</h6>
                  </span>
              </div>
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