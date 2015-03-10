﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="image.aspx.cs" Inherits="image" MasterPageFile="~/MP_MasterPage/MasterPage.master" %>

<asp:Content runat="server" ContentPlaceHolderID="content">
    <div class="image-view">
        <div class="main">
            <div class="image-piece piece">
                <div class="tool-bar">
                    <div class="resave btn">转存</div>
                    <div class="edit btn">编辑</div>
                    <div class="delete btn">删除</div>
                </div>
                <div class="image">
                    <img src="img/236.jpg" />
                </div>
                <div class="tool-bar-bottom">
                    <a class="source">来源：www.miaopass.net
                    </a>
                    <div class="clear"></div>
                </div>
            </div>
        </div>
        <div class="side">
            <div class="package-piece piece">
                <div class="info">
                    <img class="avt" src="img/sq_36.jpg" />
                    <a class="title">图包名</a>
                    <a class="username">用户名</a>
                </div>
                <div class="images">
                    <div class="image-waterfall">
                        <a class="image selected" href="#">
                            <img src="img/77.jpg" />
                            <div class="cover"></div>
                        </a>
                        <a class="image" href="#" style="top:150px">
                            <img src="img/77.jpg" />
                            <div class="cover"></div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="ad-piece piece">
                
            </div>
        </div>
        <div class="bottom"></div>
    </div>
</asp:Content>
