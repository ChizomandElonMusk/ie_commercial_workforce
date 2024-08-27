

export async function checkCustomerMeterNumber(meterNumber) {
    var CustomerMeterNumber = ""
    CustomerMeterNumber = {
        param1: meterNumber,
    }
    CustomerMeterNumber = JSON.stringify(CustomerMeterNumber)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/ie/harmony/v1/customer/accountlookup', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 1ba5295b-3525-3a8c-9b23-69a82e45fb2d',
                'Content-Type': 'application/json'

            },
            body: CustomerMeterNumber,
        })

        const response = await rawResponse.json()
        // return response

        // console.log(response)

        // console.log(response.accountNumber)
        console.log(response)
        
        let users_meter_number = response.meterNumber
        
        if (users_meter_number == '') {
            M.toast({html: `<b class="red-text">Please check meter number agian</b>`})
        } else {
            return response
            // let users_account_number = response.accountNumber
            // console.log(users_account_number)
            // users_account_number = users_account_number.trim()
            // await getCustomerInfoApi(users_account_number)
        }
    } catch (error) {
        console.log(error)
        console.log(this.service_type)
        M.toast({html: `<b class="red-text">${error}</b>`})
    }
}


export async function getCustomerInfoApi(accountNumber) {
    M.toast({html: `<b class="yellow-text">Please wait</b>`})
    var CustomerAccountNumber = ""
    CustomerAccountNumber = {
        accountNumber: accountNumber
    }
    CustomerAccountNumber = JSON.stringify(CustomerAccountNumber)
    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/ie/harmony/v1/customer/info', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer 1ba5295b-3525-3a8c-9b23-69a82e45fb2d',
                'Content-Type': 'application/json'

            },
            body: CustomerAccountNumber,
        })

        const response = await rawResponse.json()
        return response
    } catch (error) {
        console.log(error)
        M.toast({html: `<b class="red-text">${error}</b>`})
    }
}


export async function uploadImage(userId, accountNumber, docType, file) {
    M.toast({html: `<b class="yellow-text">Uploading </b>`})
    console.log(userId, accountNumber, docType, file)

    var formData = new FormData()
    formData.append("userId", userId);
    formData.append("accountNo", accountNumber);
    formData.append("docType", docType);
    formData.append("file", file);
    
    

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/upload/document', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.token,
                'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6', 

            },
            body: formData,
        })

        const response = await rawResponse.json()
        if (response.statusMsg == 'Success') {
            M.toast({html: `<b class="green-text">Success </b>`})
        }
        // console.log(response)

        return response

       
    } catch (error) {
        console.log(error)
        M.toast({html: `<b class="red-text">${error}</b>`})
        return error
    }
}


export async function getPaymentHistory(meter_number, date_from, date_to) {
    // let token = localStorage.getItem('jdotwdott')
    // var passwords = ""
    // meter_number = {
    //     param: "0102327327",
    // }
    // meter_number = JSON.stringify(meter_number)
    // let meter_number = '0102111612'

    try {
        console.log(date_from, date_to);
        // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
        const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=' + date_from + '&endDate=' + date_to, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token,
                'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6',

            },
        })

        const response = await rawResponse.json()
        console.log(response)
        return response

        // console.log(response)

        // console.log(response.passwords)
        // console.log(response)
        // return response
    } catch (error) {
        console.log(error)
        M.toast({html: `<b class="red-text">${error}</b>`})
    }
}



export async function getAllDTList(username) {
    // username = 'paseeperi'
    console.log(username);

    try {
        // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
        const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getESRDTLink?username=' + username, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token,
                'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6',

            },
        })

        const response = await rawResponse.json()
        console.log(response)
        return response

        // console.log(response)

        // console.log(response.passwords)
        // console.log(response)
        // return response
    } catch (error) {
        console.log(error)
        M.toast({html: `<b class="red-text">${error}</b>`})
    }
}

export async function getDTSearch(searchString) {
    searchString = searchString.toLowerCase()

    try {
        // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
        const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getDTSearch?searchString=' + searchString, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.token,
                'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6',

            },
        })

        console.log(response)
        const response = await rawResponse.json()
        return response

        // console.log(response)

        // console.log(response.passwords)
        // console.log(response)
        // return response
    } catch (error) {
        console.log(error)
        M.toast({html: `<b class="red-text">${error}</b>`})
    }
}



export async function getEsrFormHistory(date_from, date_to) {
    // let token = localStorage.getItem('jdotwdott')
    // var passwords = ""
    // meter_number = {
    //     param: "0102327327",
    // }
    // meter_number = JSON.stringify(meter_number)
    // let meter_number = '0102111612'

    try {
        console.log(date_from, date_to);
        const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getFormReport?startDate=' + date_from + '&endDate=' + date_to, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.token,
                'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6',

            },
        })

        const response = await rawResponse.json()
        console.log(response.status)
        if(response.status == 500) {
            await logOut()
        } else {
            return response
        }
        

        // console.log(response)

        // console.log(response.passwords)
        // console.log(response)
        // return response
    } catch (error) {
        console.log(error)
        M.toast({html: `<b class="red-text">${error}</b>`})
    }
}

export async function logOut() {
    if(process.client) {
      localStorage.removeItem('token')
      window.location = './'
    }
    localStorage.setItem('service_type', '')
    localStorage.setItem('meter_number', '')
    localStorage.setItem('token', '')
    localStorage.setItem('forms', '')
    localStorage.setItem('userId', '')

}