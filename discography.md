---
layout: post-no-comments
title: Discography Plus
maintitle: Discography Plus
subtitle: As well as Records, CDs and Digital Audio this section lists Podcasts, Sheet Music and Sound Postcards
last_modified_at: 8 February 2024
---

<figure class="fig1">
<div class="CardLayout cards-height">
<div class="CardItem">
<h2 id="infobox1" class="infobox"><a href="#infobox1">Covers</a></h2>
</div>
<div class="CardItem split">
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
</div></div></div></div>
</figure>


<figure class="fig2">
<div class="CardLayout cards-height">
<div class="CardItem">
<h2 id="infobox2" class="infobox"><a href="#infobox2">Discography</a></h2>
</div>
<div class="CardItem split">
<ul>
<li><a href="/discography/studio-albums">Studio Albums</a></li>
<li><a href="/discography/compilation-albums">Compilation Albums</a></li>
<li><a href="/discography/singles">Singles</a></li>
<li><a href="/discography/spoken-words">Spoken Words</a></li>
<li><a href="/discography/tribute-songs">Tribute Songs</a></li>
<li><a href="/discography/karaoke">Karaoke</a></li>
</ul>
<h2 class="adjust">Plus</h2>
<ul>
<li><a href="/discography/podcasts">Podcasts</a></li>
<li><a href="/discography/sheet-music">Sheet Music</a></li>
<li><a href="/discography/sound-postcards">sound Postcards</a></li>
</ul>
</div></div>
</figure>

<style>
.cards-height {height: 450px}
@media screen and (orientation:portrait) {.cards-height {height: unset;}}

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
