<%@ Page Language="C#" AutoEventWireup="true" CodeFile="Login.aspx.cs" Inherits="Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="UTF-8">
    <meta name="description" content="">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Title -->
    <title>Login | GBK Group</title>

    <!-- Favicon -->
    <link rel="icon" href="img/Gbk_Group_fav.png">

    <!-- Stylesheet -->
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <form id="form1" runat="server">
        <center>
        <a class="nav-brand" href="./index.html">
            <img style="width: 231px;margin:5px" alt="" src="https://storage.googleapis.com/gbkgroupdotin/builder_uploads/_logo.png">
        </a>
        </center>
        <section class="roberto-cta-area">
            <div class="offset-md-4 col-md-4">
                <div class="cta-content bg-img bg-overlay jarallax" style="background-image: url(../img/bg-img/1.jpg);">
                    <div class="row align-items-center">
                        <div class="cta-text mb-50">
                            <h3 style="color: white;">Login</h3>
                            <hr />
                            <input type="text" class="form-control mb-15" id="txtUserName" placeholder="Username" />
                            <input type="password" class="form-control" id="txtPassword" placeholder="Password" />
                            <hr />
                            <input type="button" id="btnSubmit" class="btn btn-success" value="Submit" />
                            <hr />
                            <div class="copywrite-text">
                                <p>
                                    <span style="margin-right: 50px">Copyright &copy;<script>document.write(new Date().getFullYear());</script>
                                        <a href="index.html">GBK Group</a> </span><a href="http://www.makeindiaunitech.com" target="_blank">
                                            <img src="../img/Make-India_Logo-90x80.png" style="max-width: 35px;" /></a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </form>
    <script src="../js/jquery.min.js"></script>
    <!-- Popper -->
    <script src="../js/popper.min.js"></script>
    <!-- Bootstrap -->
    <script src="../js/bootstrap.min.js"></script>
    <!-- All Plugins -->
    <script src="../js/roberto.bundle.js"></script>
    <!-- Active -->
    <script src="../js/default-assets/active.js"></script>
    <script src="../js/Login.js"></script>
</body>
</html>
