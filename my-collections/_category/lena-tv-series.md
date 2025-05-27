---
layout: post-no-title-link
title: "Category: Lena"
maintitle: "Category: Lena"
---

<figure class="fig1">
<div class="LenaCard">
<div class="CardItem"><strong id="infobox1"><a href="#infobox1">Series 1</a></strong></div>
<div class="CardItem">
<ul>
  {% for post in site.categories.Lena-Series-1 reversed %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
</div>
</div>
</figure>

<figure class="fig2">
<div class="LenaCard">
<div class="CardItem"><strong id="infobox2"><a href="#infobox2">Series 2</a></strong></div>
<div class="CardItem">
<ul>
  {% for post in site.categories.Lena-Series-2 reversed %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
</div>
</div>
</figure>

<figure class="fig3">
<div class="LenaCard">
<div class="CardItem"><strong id="infobox3"><a href="#infobox3">Series 3</a></strong></div>
<div class="CardItem">
<ul>
  {% for post in site.categories.Lena-Series-3 reversed %}
    {% if post.url %}
        <li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
    {% endif %}
  {% endfor %}
</ul>
</div>
</div>
</figure>

<figure class="fig3">
<div class="LenaCard">
<div class="CardItem"><strong id="infobox4"><a href="#infobox4">Publicity</a></strong></div>
<div class="CardItem">
<p>Details on the back of the publicity photograph</p>
<p>12.4.1981/JRG <span style="float: right;">80/0851</span></p>
<p>BBC 1</p>
<p>Lena Zavaroni 1/6 Singer</p>
<p>Lena Zavaroni returns to BBC Televison with a new series of her own. Each weekshe will introduce two guests and in her first programme they are Rowan Atkinson and Corky Hale.</p>
<p>Lena Zavaroni.</p>
<p>Transmission: BBC 1, Wednesday, April 23.</p>
<p>BBC COPYRIGHT PHOTOGRAPH, FROM:</p>
<p>BBC PICTURE PUBLICITY,</p>
<p>BROADCASTING HOUSE,</p>
<p>LONDON. W1A 1AA <span style="float: right;">P.I.</span></p>
</div>
</div>
</figure>

