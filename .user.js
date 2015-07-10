// ==UserScript==
// @name          Sleek-Yang
// @description   Replace textures in tagpro
// @version       0.1
// @grant         none
// @include       http://tagpro-*.koalabeast.com:*
// @include       http://tangent.jukejuice.com:*
// @include       http://*.newcompte.fr:*
// @license       2015
// @author        Kaii
// ==/UserScript==

tagpro.loadAssets({
  "tiles": "http://i.imgur.com/knCRG3Y.png",
  //"tiles": "http://i.imgur.com/1BncASl.png", //Remove the "//" at the beginning of the line to have a grid . DO NOT FORGET TO ADD "//" to the first line if you choose the grid-version.
  "speedpad": "http://i.imgur.com/iDbBt1W.png",
  "speedpadRed": "http://i.imgur.com/9SAuKuZ.png",
  "speedpadBlue": "http://i.imgur.com/kU9FeSt.png",
  "portal": "https://i.imgur.com/elIWwuA.png",
  "splats": "http://i.imgur.com/AqXkJCJ.png"
});

//If you don't want to have the flag displayed inside the FC add this "/*" at the beginning of line 25 and this "*/" after the semicolon in line 34.
//This last part of the userscript was made by /u/datblizzard , it forces the flag to be inside the FC's ball.
tagpro.ready(function() {
    var upf = tagpro.renderer.updatePlayerFlag;
    tagpro.renderer.updatePlayerFlag = function(player) {
        upf.apply(this,arguments);
        if(player.sprites.flag) {
            player.sprites.flag.x = 0; //increase to move more right - game default is 13
            player.sprites.flag.y = 0; //increase to move further down - game default is -32
        }
    }
});
