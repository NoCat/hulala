/// <reference path="../Dialog/CreateImageDialog.js" />
/// <reference path="../Format/User.js" />
/// <reference path="../main.js" />

MPWedgit.Image = {};
MPWedgit.Image.New = function (image)
{
    var strVar = "";
    strVar += "<div class=\"widget-image\">";
    strVar += "    <div class=\"actions\">";
    if (image.user.id == MPData.user.id)
    {
        var strVar1 = "";
        strVar1 += "<div class=\"right\">";
        strVar1 += "    <div class=\"edit\" title=\"编辑\" data-id=\"{0}\" >编辑<\/div>";
        strVar1 += "<\/div>";

        strVar += strVar1.Format(image.id);
    }
    else
    {
        var strVar1 = "";
        strVar1 += "<div class=\"left\">";
        strVar1 += "    <div class=\"repin\" title=\"转存到我的图包\" data-id=\"{0}\">转存<\/div>";
        strVar1 += "<\/div>";
        strVar1 += "<div class=\"right\">";
        strVar1 += "    <div class=\"praise\" title=\"赞一个\" data-id=\"{0}\" >赞<\/div>";
        strVar1 += "<\/div>";

        strVar += strVar.Format(image.id);
    }
    strVar += "    <\/div>";
    strVar += "    <a class=\"img\" href=\"{0}\">";
    strVar += "        <img src=\"{1}\" width=\"236\" height=\"{2}\" />";
    strVar += "        <div class=\"cover\"><\/div>";
    strVar += "    <\/a>";
    strVar += "    <div class=\"description\">{3}<\/div>";
    strVar += "    <div class=\"info\">";
    strVar += "        <a class=\"avt\" href=\"{4}\">";
    strVar += "            <img src=\"{5}\" />";
    strVar += "        <\/a>";
    strVar += "        <div class=\"text\">";
    strVar += "            <div class=\"line\"><a href=\"{6}\">{7}<\/a><span>收集到<\/span><\/div>";
    strVar += "            <div class=\"line\"><a href=\"{8}\">{9}<\/a><\/div>";
    strVar += "        <\/div>";
    strVar += "    <\/div>";
    strVar += "<\/div>";

    var fuser = MPFormat.User.New(image.user);
    var str = strVar.Format(
        "/image/" + image.id,                                                       //0
        imageHost + "/" + image.file.hash,                                 //1 
        Math.ceil(236 * image.file.height / image.file.width),      //2
        image.description,                                                              //3
        fuser.Avt,                                                                              //4
        fuser.Home,                                                                         //5
        fuser.Home,                                                                         //6
        fuser.Name,                                                                         //7
        "/package/" + image.package.id,                                      //8   
        image.package.description                                               //9
        );
};
MPWedgit.Image.Bind = function (parent)
{
    //点击编辑按钮
    parent.on("click", ".widget-image .edit", edit_click)
        //点击转存按钮
    .on("click", ".widget-image .repin", repin_click)
        //点击赞按钮
    .on("click", ".widget-image .praise", praise_click)
        //点击图像,点击了以后阻止a标签的click,防止页面跳转,并显示图片,这个函数暂时先不实现
    .on("click", ".widget-image a img", img_click)
        //鼠标进入,显示action
    .on("mouseenter", ".widget-image", mouse_enter)
        //鼠标离开,隐藏action
    .on("mouseleave", ".widget-image", mouser_leaver);

    function edit_click()
    {
        var id = $(this).attr("data-id");
        location.href = "/image/" + id + "/edit";
    }

    function repin_click()
    {
        var id = $(this).attr("data-id");
        //获取要转存图片的描述内容用作初始描述
        var description = "";
        var dialog = MPCreateImageDialog.New(imageHost + "/" + id + "_fw236","转存",description);
        dialog.onOK = function ()
        {
            //进行转存,见ajax文档```````````
        };
    }

    function praise_click()
    {
        var id = $(this).attr("data-id");
        
    }

    function mouse_enter()
    {

    }

    function mouse_leave()
    {

    }
};
