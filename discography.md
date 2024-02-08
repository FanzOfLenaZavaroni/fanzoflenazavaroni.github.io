---
layout: post-no-comments
title: Discography+
maintitle: Discography+
last_modified_at: 8 February 2024
---

<figure class="fig1">
<h3>Covers</h3>
<div id="slideshow">
 <div>
<img src="/assets/images/albums/1976-lena-zavaroni-ma-hes-making-eyes-at-me-pickwick.jpg" class="full-width" /> 
</div>

<div>
<img src="/assets/images/albums/The-Lena-Zavaroni-Collection.jpeg" class="full-width" />
</div>

<div>
<img src="/assets/images/singles/ma-hes-making-eyes-at-me/ma-hes-making-eyes-at-me-france-fc.jpg" class="full-width" />
</div>

<div>
<img src="/assets/images/spoken-words/John_hannam.jpg" class="full-width" />
</div>

<div>
<img src="/assets/images/albums/1987-05-11-pulp-freaks-01.jpg" class="full-width" />
</div>

<div>
<img src="/assets/images/karaoke/pioneer-laserkaraoke-vol-302.jpg" class="full-width" /> 
</div>

<div>
<img src="/assets/images/podcasts/d-sides-orphans-and-oddities.jpg" class="full-width" /> 
</div>

<div>
<img src="/assets/images/Sheetmusic/lena-zavaroni---sheet-music---ma-hes-making-eyes-at-me-01-sq.png" class="full-width" /> 
</div>

<div>
<img src="/assets/images/discography/lena-zavaroni-drupi-01.jpeg" class="full-width" /> 
</div>
</div>
</figure>

<figure class="fig2">
<h3>Discography</h3>
<ul>
<li><a href="/discography/studio-albums">Studio Albums</a></li>
<li><a href="/discography/compilation-albums">Compilation Albums</a></li>
<li><a href="/discography/singles">Singles</a></li>
<li><a href="/discography/spoken-words">Spoken Words</a></li>
<li><a href="/discography/tribute-songs">Tribute Songs</a></li>
<li><a href="/discography/karaoke">Karaoke</a></li>
</ul>
<h3 class="adjust">Plus</h3>
<ul>
<li><a href="/discography/podcasts">Podcasts</a></li>
<li><a href="/discography/sheet-music">Sheet Music</a></li>
<li><a href="/discography/sound-postcards">sound Postcards</a></li>
</ul>
</figure>

<style>
#slideshow {
margin: 0 auto;
position: relative;
aspect-ratio:1/1;
width: 90%;
padding: 10px;
box-shadow: 0 0 20px rgba(0,0,0,0.4);
}

#slideshow > div {
position: absolute;
top: 10px;
left: 10px;
right: 10px;
bottom: 10px;
}
</style>

<script type="text/javascript" src="/assets/js/jquery-3.6.0.min.js"></script>

<script>
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
$('#slideshow > div:first')
.fadeOut(1000)
.next()
.fadeIn(1000)
.end()
.appendTo('#slideshow');
}, 3000);
</script>
