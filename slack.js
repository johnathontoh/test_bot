//formatMessage is the function, req is the parameter
//body is the variable, req.body is to link the para to the variable
const formatMessage = req => {
    const body = req.body
    console.log(body)
}

module.exports = {
    formatMessage
}