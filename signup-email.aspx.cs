using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

public partial class signup_email : MPPage
{
    public string Email { get; set; }
    protected void Page_Load(object sender, EventArgs e)
    {
        string token = RouteData.Values["token"] as string;

        var res = DB.SExecuteScalar("select email from signup_email where token=? and expire>?", token, DateTime.Now);
        if (res != null)
        {
            Email = (string)res;
        }
        else
        {
            Response.StatusCode = 404;
            Response.End();
        }

        if(Request.HttpMethod=="POST")
        {

            Response.End();
        }
    }
}