

export async function checkCustomerMeterNumber(meterNumber) {
    var CustomerMeterNumber = ""
    CustomerMeterNumber = {
        param1: meterNumber,
    }
    CustomerMeterNumber = JSON.stringify(CustomerMeterNumber)

    try {
        const rawResponse = await fetch('https://api.ikejaelectric.com:8243/ie/harmony/v1/customer/accountlookup', {
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
        const rawResponse = await fetch('https://api.ikejaelectric.com:8243/ie/harmony/v1/customer/info', {
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
        const rawResponse = await fetch('http://192.168.6.183:8087/cwfrestapi/api/v1/upload/document', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + localStorage.token, 

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
        // const rawResponse = await fetch('http://192.168.6.183:8087/cwfrestapi/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
        const rawResponse = await fetch('http://192.168.6.183:8087/cwfrestapi/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=' + date_from + '&endDate=' + date_to, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.token,

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
    username = 'paseeperi'

    try {
        // const rawResponse = await fetch('http://192.168.6.183:8087/cwfrestapi/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
        const rawResponse = await fetch('http://192.168.6.183:8087/cwfrestapi/api/v1/getESRDTLink?username=' + username, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.token,

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
    // searchString = 'ojo'

    try {
        // const rawResponse = await fetch('http://192.168.6.183:8087/cwfrestapi/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
        const rawResponse = await fetch('http://192.168.6.183:8087/cwfrestapi/api/v1/getDTSearch?searchString=' + searchString, {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer ' + localStorage.token,

            },
        })

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