/// <reference path="main.js" />

$(function ()
{
    var username = $("#username");
    var password = $("#password");
    var password = $("#password2");
    var submit = $("#submit");

    submit.click(submit_click);

    function submit_click()
    {
        //检查用户名长度,不得大于10个字符

        //检查两次输入的密码

        //提交申请,申请提交后有可能用户名冲突之类的问题,弹窗处理
    }
})