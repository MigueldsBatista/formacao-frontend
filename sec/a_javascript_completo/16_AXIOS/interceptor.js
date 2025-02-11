customAxios.interceptors.request.use(
    function (response){//requisição normal
        console.log("Antes da requisição");
        return response
    },

    function(err){
        return Promise.reject(err)
    }
)