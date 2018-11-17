<!DOCTYPE html>
<html>
<?php require 'includes/head.php' ?>
<body>
    <?php
        require 'includes/navbar.php';
        require 'includes/sidebar.php' 
    ?>
    <div class="dialog-text">
        <span onclick="closeDialogText()" class="fa fa-arrow-left close-dialog"></span>
        <h1 id="dialog-text-title"></h1>
        <div id="dialog-text-content"></div>
    </div>

    <main class="page card-deck-flex" id="obras">
    </main>

    <?php require 'includes/footer.php' ?>
    <script src="/assets/js/obras.js"></script>
    <script src="controllers/Obras.js"></script>
</body>
</html>