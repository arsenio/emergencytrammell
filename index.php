<?
require 'lib/Browser.php';
$browser = new Browser();
?>
<!DOCTYPE html>
<html>
<head>
    <title>EmerTrammell</title>
    <meta name="viewport" content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,width=device-width" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <link rel="apple-touch-icon" href="./trammell-touch-icon.png" />
    <style type="text/css">
    body {
        font-family: "Lucida Grande", sans-serif;
        font-size: 10px;
    }
    .foot {
        bottom: 30px;
        color: #777;
        position: absolute;
        right: 20px;
        text-align: right;
    }
    .foot a {
        color: purple;
        font-weight: bold;
        text-decoration: none;
    }
    .foot img {
        -webkit-transition: all 0.4s ease-in-out;
        border: 2px double pink;
        border-radius: 4px;
        margin-left: 5px;
        padding: 2px;
    }
    .foot img.trammell {
        border: 2px double #ff0080;
    }
    .foot img:hover {
        -webkit-transform: scale(1.2);
    }
    #et_button {
        position: absolute;
        height: 500px;
        width: 500px;
        top: 0;
        left: 50%;
        margin: 20px 0 0 -250px;
    }
    img.main {
        -webkit-transition: all 0.2s ease-in-out;
        border:0;
        display: block;
        left: 80px;
        position: absolute;
        top: 0;
        z-index: 2;
    }
    img.main:hover {
        -webkit-transform: scale(1.3) rotate(8deg);
        -webkit-animation-name: pulse;
        cursor: pointer;
    }
    img.burst {
        left: 0;
        position: absolute;
        top: 0;
        z-index: 1;
    }
    @-webkit-keyframes burst {
     0% {
       -webkit-transform: scale(1.0) rotate(0deg);
       opacity: 1.0;
     }
     33% {
       -webkit-transform: scale(1.1) rotate(-5deg);
       opacity: 0.75;
     }
     67% {
       -webkit-transform: scale(1.1) rotate(5deg);
       opacity: 0.5;
     }
     100% {
       -webkit-transform: scale(1.0) rotate(0deg);
       opacity: 1.0;
     }
    }
    .burst {
     -webkit-animation-name: burst;
     -webkit-animation-direction: alternate;
     -webkit-animation-duration: 4s;
     -webkit-animation-iteration-count: 100;
     -webkit-animation-timing-function: ease-in-out;
    }
    @media all and (max-width: 600px) {
        #et_button {
            height: 100vw;
            width: 100vw;
            top: 0;
            left: 0;
            margin: 20px 0 0 0;
        }
        img.burst {
            width: 100vw;
        }
        img.main {
            width: 50vw;
            left: 25vw;
        }
        img.main:hover {
            -webkit-transform: none;
            -webkit-animation-name: none;
        }
    }

    div.iphone_bookmark{
      text-align:center;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      margin: 0;
      padding: 0;

    }

    div.iphone_bookmark div{
      background-image:url('images/arrow.png');
      background-repeat:no-repeat;
      background-position: center;
      height: 30px;
      font-size: 16px;
      color: purple;
      font-weight: bold;
    }
    </style>
    <script src="js/dojo.js" type="text/javascript"></script>
    <script src="et.js"></script>
</head>
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-1GVQWP8QEZ"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1GVQWP8QEZ');
</script>
<body>

<div id="et_button">
    <a id="superclick" href="/"><img id="superclick_image" class="main" src="images/trammell-1.gif" alt="Mwa ha ha"></a>
    <img class="burst" src="images/burst.gif" alt="">
</div>

<div id="footer" class="foot">
    A <a href="http://marktrammell.com/">Mark Trammell</a> Experience
    <p>Brought to you by:</p>
    <p>
        <a href="http://twitter.com/ryan000">
        <img width="30" src="http://avatars.io/twitter/ryan000">
        </a>
        <a href="http://twitter.com/arsenio">
        <img width="30" src="http://avatars.io/twitter/arsenio">
        </a>
        <a href="http://twitter.com/dburka">
        <img width="30" src="http://avatars.io/twitter/dburka">
        </a>
        <a href="http://twitter.com/emertrammell">
        <img class="trammell" width="30" src="http://avatars.io/twitter/emertrammell">
        </a>
    </p>
</div>


<img src="images/snort.png" style="display:none">
<img src="images/trammell-on.png" style="display:none">

<? if ($browser->getPlatform() == Browser::PLATFORM_IPHONE) { ?>
<div class="iphone_bookmark" id="iphone_bookmark">
  <div> Add to Home Screen </div>
</div>
<? } ?>

</body>
</html>
