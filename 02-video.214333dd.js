const o=document.querySelector("iframe"),e=new Vimeo.Player(o);e.on("play",(function(){console.log("played the video!")})),e.getVideoTitle().then((function(o){console.log("title:",o)}));e.on("play",(function(o){console.log(o)}));
//# sourceMappingURL=02-video.214333dd.js.map
