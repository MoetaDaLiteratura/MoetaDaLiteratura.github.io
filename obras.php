<!DOCTYPE html>
<html class="background">
<?php require 'includes/head.php' ?>
<body>
    <?php
        require 'includes/navbar.php';
        require 'includes/sidebar.php' 
    ?>
    <div class="dialog">
        <div class="card dialog-card">
            <span onclick="closeDialogText()" class="fa fa-arrow-left close-dialog"></span>
            <div class="card-title" id="dialog-text-title"></div>
            <div class="card-content" id="dialog-text-content"></div>
        </div>
    </div>

    <main class="page card-deck" id="obras">
    </main>

    <?php require 'includes/footer.php' ?>
    <script src="/assets/js/obras.js"></script>
    <script src="controllers/Obras.js"></script>
</body>
</html>