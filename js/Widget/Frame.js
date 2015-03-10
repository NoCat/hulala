/// <reference path="../jquery.js" />
/// <reference path="../main.js" />
/// <reference path="../Format/User.js" />
MPWedgit.Frame = {};
MPWedgit.Frame.New = function ()
{
    var strVar = "";
    strVar += "    <div class=\"header\">";
    strVar += "        <div class=\"wrapper\">";
    strVar += "            <div class=\"menu-bar\">";
    strVar += "                <div class=\"left\">";
    strVar += "                    <div class=\"nav home-nav\">";
    strVar += "                        <div class=\"nav-link\">主页<\/div>";
    strVar += "                    <\/div>";
    strVar += "                    <div class=\"nav menu-nav\">";
    strVar += "                        <div class=\"nav-link\">";
    strVar += "                            <div class=\"arrow\"><\/div>";
    strVar += "                        <\/div>";
    strVar += "                        <div class=\"hide-menu\">";
    strVar += "                        <\/div>";
    strVar += "                    <\/div>";
    strVar += "                    <div class=\"nav search\"><\/div>";
    strVar += "                <\/div>";
    strVar += "                <div class=\"right\">";
    if (MPData.user.id == 0)
    {
        strVar += "<div id=\"login\">登录</div>";
        strVar += "<div id=\"signup\">注册</div>";
    }
    else
    {
        strVar1 = "";
        strVar1 += "<div class=\"nav add-nav\">";
        strVar1 += "    <div class=\"nav-link\" title=\"添加\">";
        strVar1 += "    <\/div>";
        strVar1 += "    <div class=\"hide-menu\"><\/div>";
        strVar1 += "<\/div>";
        strVar1 += "<div class=\"nav user-nav\">";
        strVar1 += "    <a class=\"nav-link\" href=\"{0}\">";
        strVar1 += "        <img class=\"avt\" src=\"{1}\" />";
        strVar1 += "        <div class=\"arrow\"><\/div>";
        strVar1 += "    <\/a>";
        strVar1 += "    <div class=\"hide-menu\">";
        strVar1 += "        <a class=\"item\" href=\"{0}\">我的主页<\/a>";
        strVar1 += "        <div class=\"seperator\"><\/div>";
        strVar1 += "        <a class=\"item\" href=\"{2}\">我的关注<\/a>";
        strVar1 += "        <a class=\"item\" href=\"{3}\">我的粉丝<\/a>";
        strVar1 += "        <div class=\"seperator\"><\/div>";
        strVar1 += "        <a class=\"item\">设置<\/a>";
        strVar1 += "        <div class=\"item\" id=\"logout\">退出<\/div>";
        strVar1 += "    <\/div>";
        strVar1 += "<\/div>";

        var fuser = MPFormat.User.New(MPData.user);
        strVar += strVar1.Format(fuser.Home(), fuser.Avt(), fuser.Following(), fuser.Follower());
    }
    strVar += "                <\/div>";
    strVar += "            <\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "    <div class=\"wrapper\">";
    strVar += "        <div class=\"body\"><\/div>";
    strVar += "    <\/div>";

    var res = {};
    var body = $("body");
    body.html(strVar);

    var search = body.find(".header .search");
    res.Body = body.find("body");

    var s = MPWedgit.Search.New();
    search.append(MPWedgit.Search.New());
    if (MPData.user.id == 0)
    {
        var login = body.find("#login");
        var signup = body.find("#signup");

        login.click(function ()
        {
            MPLoginDialog.New();
        });
        signup.click(function ()
        {
            MPSignUpDialog.New();
        })
    }
    return res;
};