<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />

    <!-- Bootstrap CSS -->
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../public/assets/css/custom.css">

    <title>Hello, world!</title>
  </head>
  <body>
      <h1 id="test" class=" header text-center">Star<br> Wars</h1>
      <div class="container">
          <div class="row selected-text">
              <p class="col-sm-12 text-center text-light conditional-msg">Select 3 characters!</p>
          </div>
          <div class="row">
              <div class="btn-container col-sm-12 text-center invisible">
                  <button class="download-btn text-light bg-success">Download</button>
                  <button class="reset-btn text-light bg-danger">Reset</button>
              </div>
          </div>
      </div>

      <div class="container border border-success d-flex justify-content-center flex-row">
          <button class="prev-btn "><</button>
          <div class="row characters-box border border-primary">
            <?php
              for($x = 0; $x < 9; $x++) {?>
              <div class="col-4">
                <div class="card character flex-row rounded-0">
                    <div class="image-container">
                      <div class="person-icon"></div>
                        <!-- <img class="person-icon align-self-end" src="../public/assets/images/user.png"> -->
                    </div>
                    <div class="char-name" > 
                        <h3 class="text-right" id="<?php echo "name-$x"?>"></h3>
                    </div>
                </div>
              </div>
                <?php } ?>
          </div>
          <button class="next-btn">></button>
        </div>
   

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script
      src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
      integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
      integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
      integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
      crossorigin="anonymous"
    ></script>
    <script
    src="https://kit.fontawesome.com/2a997af484.js"
    crossorigin="anonymous"
  ></script>
  <script src="../public/assets/scripts/script.js"></script>
  <script>
    let allCharacters = <?=json_encode($characters)?>;
    console.log(Characters);
  </script>
  </body>
</html>
