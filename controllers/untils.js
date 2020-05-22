const obj={
    setResult:(code,message='success',data=null) => {
    return{
        code:code,
        message:message,
        data:data
    }
    },

}

module.exports = obj
