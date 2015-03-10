<%@ Page Language="C#" AutoEventWireup="true" CodeFile="all.aspx.cs" Inherits="all_aspx"  MasterPageFile="~/MP_MasterPage/MasterPage.master"%>

<asp:Content  ContentPlaceHolderID="content" Runat="Server">
        <div class="wrapper">
        <div class="waterfall">
            <div class="image">
                <div class="actions">
                    <div class="left">
                        <div class="repin" title="转存到我的图包">转存</div>
                    </div>
                    <div class="right">
                        <div class="praise" title="赞一个">赞</div>
                    </div>
                </div>
                <a class="img" href="#">
                    <img src="img/236.jpg"/>
                    <div class="cover"></div>
                </a>
                <div class="description">
                    这是文字描述
                </div>
                <div class="info">
                    <a class="avt">
                        <img src="img/sq_36.jpg" />
                    </a>
                    <div class="text">
                        <div class="line">这个人<a>a标签</a></div>
                        <div class="line">某个图包</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</asp:Content>