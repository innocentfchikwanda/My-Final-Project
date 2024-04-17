<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Chore Mania Dashboard</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="" name="keywords">
    <meta content="" name="description">

    <!-- Favicon -->
    <link href="/images/fav.png" rel="icon">

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&family=Roboto:wght@500;700&display=swap"
        rel="stylesheet">

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="../lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="../lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="../css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="../css/style.css" rel="stylesheet">

    <!-- Custom Stylesheet -->
    <link href="../css/custom2.css" rel="stylesheet">

</head>

<body>
    <!-- Body content -->
    <div class="container-fluid position-relative d-flex p-0">
        <!-- Sidebar Start -->
        <div class="sidebar pe-4 pb-3">
            <!-- Sidebar Content -->
        </div>
        <!-- Sidebar End -->

        <!-- Content Start -->
        <div class="content">
            <!-- Navbar Start -->
            <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                <!-- Navbar Content -->
            </nav>
            <!-- Navbar End -->

            <!-- Main Page Content -->
            <?php
            include "../settings/core.php";
            include "../action/get_a_chore_action.php";

            check_user_id(); //checking if user is logged in
            
            if (isset($_GET['cid'])) {
                $ret_var = $_GET['cid'];
                $chore = get_chore($ret_var);
                $chore = $chore[0];

                // Check if chore exists
                if ($chore) {
                    // Display the edit form
                    ?>
                    <div>
                        <!--Pop-up input form-->
                        <div id="editChoreForm">
                            <div class="main">
                                <div class="bg-secondary rounded h-100 p-4">
                                    <div>
                                        <span class="closeButton">&times;</span>
                                        <h3 class="mb-4">Edit Chore</h3>
                                        <form action="../action/edit_chore_action.php" method="POST" class="register-form"
                                            id="add-chore-form">
                                            <div class="form-group">
                                                <input type="text" name="chore" id="chore"
                                                    value="<?php $chore['chorename']; ?>" />
                                            </div>
                                            <input type="text" name="cid" id="cid" value="<?php $ret_var; ?>" />
                                            <br><br>
                                            <div class="form-group">
                                                <input type="submit" name="choreSubmit" id="editBtn" value="Save Changes" />
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <?php
                } else {
                    // Redirect to chore_control_view.php if chore does not exist
                    header("Location:../view/chore_control_view.php");
                    die();
                }
            }
            ?>
        <!-- Content End -->

        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>
    <!-- Content End -->
    </div>

    <!-- JavaScript Libraries -->
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
    <script src="lib/chart/chart.min.js"></script>
    <script src="lib/easing/easing.min.js"></script>
    <script src="lib/waypoints/waypoints.min.js"></script>
    <script src="lib/owlcarousel/owl.carousel.min.js"></script>
    <script src="lib/tempusdominus/js/moment.min.js"></script>
    <script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
    <script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
    <!-- Custom Javascript -->
    <script src="../js/add_chore.js"></script>
</body>

</html>