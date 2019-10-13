// 有许多的功能,请求
var user = {
    login:function(options){
        $.ajax({
            type:'post',
            url:USER_LOGIN,
            data:options.data,
            success:options.callback
        })
    },
    // 退出功能
    logout:function(options){
        $.ajax({
            type:'post',
            url:USER_LOGIN_OUT,
            success:options.callback
        })
    },
    user_info_get:function(options){
        $.ajax({
            type:'get',
            url:USER_INFO_GET,
            success:options.callback
        })

    }
}