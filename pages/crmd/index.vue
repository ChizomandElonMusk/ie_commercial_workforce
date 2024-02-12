<template>
    <div style="padding-top: 20px;" class="container">

        <div class="row">
            <nuxt-link to="../dashboard" class="red white-text btn">
                Back
            </nuxt-link>
        </div>
    
        <div class="row">
            <div>
                <h6 class="red-text center" style="font-weight: 100; margin-bottom: 20px;">
                    CRMD
                </h6>
            </div>
        </div>
  
      <div class="row">
        <div class="row">
          <div class="col s12 center">
            
            <table class="striped">

                <tbody>
                    <tr>
                        <td>
                            <nuxt-link to="../crmd/account_reactivation">
                                Account Reactivation
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <nuxt-link to="../crmd/account_suspension">
                                Account Suspension
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <nuxt-link to="../crmd/switch_to_dormant">
                                Switch to Dormant
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <nuxt-link to="../crmd/switch_to_quantitative">
                                Switch to Quantitative
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <nuxt-link to="../crmd/switch_to_actual_read">
                                Switch to Actual Read
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <nuxt-link to="../crmd/correction_of_dials">
                                Correction of Dials
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <nuxt-link to="../crmd/correction_of_lar_par">
                                Correction of LAR & PAR
                            </nuxt-link>
                        </td>
                    </tr>
                </tbody>
            </table>

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
          vfirstname: '',
          vlastname: '',
          vemail: '',
          vcompany: '',
          vphone: '',
          purposeOfVisit: '',
          meetingDate: '',
          meetingTime: '',
          user_id: '',
          host_name: '',
          currentDate: '',
  
          name: '',
          email: '',
          message: '',
  
          scheduleList: [],
  
        }
      },

      methods: {

      },

      created() {

      }
  }
  </script>
  
  
  <style scoped>
  </style>