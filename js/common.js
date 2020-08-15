function axiosPost(url,reqData,method) {
    axios.post(url,reqData).then(function (res) {
        if(res.data.status){
            if(res.data.message){
                main.$message({message:res.data.message,type:'success'});
            }
            if(method){
                method(res);
            }
        }else{
            main.$message({message:res.data.message,type:'error'});
        }
    })
}

function axiosGet(url,reqData,method) {
    axios.get(url,{params:reqData}).then(function (res) {
        if(res.data.status){
            if(res.data.message){
                main.$message({message:res.data.message,type:'success'});
            }
            if(method){
                method(res);
            }
        }else{
            main.$message({message:res.data.message,type:'error'});
        }
    }).catch(function (reason) {
        console.info(reason);
    })
}

function confirm(message,method) {
    main.$confirm(message, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
    }).then(function() {
        method();
    }).catch(function(){
        /*main.$message({
            type: 'info',
            message: '已取消删除'
        });*/
    });
}