﻿<%@ Page Language="C#" AutoEventWireup="true" CodeFile="test.aspx.cs" Inherits="test" MasterPageFile="~/MP_MasterPage/MasterPage_NoUI .master" %>

<asp:Content runat="server" ContentPlaceHolderID="head">
    <script>
        $(function ()
        {
            MPWedgit.Frame.New();
        })
    </script>
</asp:Content>