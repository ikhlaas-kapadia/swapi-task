<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
      integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="../public/assets/css/custom.css">

    <title>SWAPI-TASK</title>
  </head>
  <body>
    <div class="bg">
      <h1 id="test" class="header text-center">Star Wars</h1>
      <div class="container-fluid conditional-text">
          <div class="row">
              <p class="col-sm-12 span12 text-center conditional-msg">SELECT 2 CHARACTERS OR MORE!</p>
          </div>
          <div class="row">
              <div class="btn-container col-sm-12 text-center invisible">
                  <button class="download-btn text-light bg-success">Download</button>
                  <button class="reset-btn text-light bg-danger">Reset</button>
              </div>
          </div>
      </div>

      <div class="container char-container">
            <?php
              for($x = 0; $x < 9; $x++) {?>
              <div class=" character-box rounded-0 <?php echo "char-$x"?>">
                    <div class="image-container"></div>
                    <div class="char-name unselected" > 
                        <h3 class="text-left" id="<?php echo "name-$x"?>"></h3>
                    </div>
              </div>
                <?php } ?>
      </div>
      <div class="page-numbers">
          <button class="prev-btn "><</button>
          <span class="current-page">PAGE 1 /  </span> <span class="total-page"> 10  </span>
          <button class="next-btn">></button>
      </div>
    </div>         
    <script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
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
    let allCharacters = <?=json_encode($characters["people"])?>;
    let moreData = <?=json_encode($characters["moreData"])?>;
    let totalResults = <?=json_encode($characters["count"])?>;
    let resultsPerReq = <?=json_encode($characters["perPage"])?>;
  </script>
  </body>
</html>
