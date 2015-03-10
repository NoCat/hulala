﻿/// <reference path="../main.js" />
MPFormat.User = {};
MPFormat.User.New = function (user)
{
    var res = {};
    res.Home = function ()
    {
        return "/user/" + user.id;
    }
    res.Avt = function ()
    {
        if (user.default_head == true)
            return imageHost + "/avt/0";
        else
            return imageHost + "/avt/" + user.id;
    }
    res.Follower = function ()
    {
        return "/user/" + user.id + "/follower";
    }
    res.Following = function ()
    {
        return "/user/" + user.id + "/following";
    }
    res.Name = function ()
    {
        return user.name;
    }
    return res;
}