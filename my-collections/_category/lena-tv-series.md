---
layout: post-no-comments
title: "Category: Lena"
maintitle: "Category: Lena"
---

<figure class="fig3">
<div class="CardLayout">
<div class="CardItem"><h2 id="infobox1" class="infobox"><a href="#infobox1">Series 1</a></h2></div>
<div class="CardItem split">
<ul>
{% for post in site.categories.Lena-Series-1 reversed %}
{% if post.url %}
<li>
<p><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></p>
<p>{{ post.subtitle }}</p>
</li>
{% endif %}
{% endfor %}
</ul>
</div>
</div>
</figure>

<figure class="fig3">
<div class="CardLayout">
<div class="CardItem"><h2 id="infobox2" class="infobox"><a href="#infobox2">Series 2</a></h2></div>
<div class="CardItem split">
<ul>
{% for post in site.categories.Lena-Series-2 reversed %}
{% if post.url %}
<li>
<p><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></p>
<p>{{ post.subtitle }}</p>
</li>
{% endif %}
{% endfor %}
</ul>
</div>
</div>
</figure>

<figure class="fig3">
<div class="CardLayout">
<div class="CardItem"><h2 id="infobox3" class="infobox"><a href="#infobox3">Series 3, Block 1</a></h2></div>
<div class="CardItem split">
<ul>
{% for post in site.categories.Lena-Series-3 reversed %}
{% if post.block == 1 %}
<li>
<p><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></p>
<p>{{ post.subtitle }}</p>
</li>
{% endif %}
{% endfor %}
</ul>
</div></div>
</figure>

<figure class="fig4">
<div class="CardLayout">
<div class="CardItem"><h2 id="infobox4" class="infobox"><a href="#infobox4">Series 3, Block 2</a></h2></div>
<div class="CardItem split">
<ul>
{% for post in site.categories.Lena-Series-3 reversed %}
{% if post.block == 2 %}
<li>
<p><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></p>
<p>{{ post.subtitle }}</p>
</li>
{% endif %}
{% endfor %}
</ul>
</div></div>
</figure>

<!--
<figure class="fig3">
<div class="CardLayout">
<div class="CardItem"><h2 id="infobox4" class="infobox"><a href="#infobox4">Publicity</a></h2></div>
<div class="CardItem split">
<p>Details on the back of the publicity photograph</p>
<p>12.4.1981/JRG <span style="float: right;">80/0851</span></p>
<p>BBC 1</p>
<p>Lena Zavaroni 1/6 Singer</p>
<p>Lena Zavaroni returns to BBC Televison with a new series of her own. Each week she will introduce two guests and in her first programme they are Rowan Atkinson and Corky Hale.</p>
<p>Lena Zavaroni.</p>
<p>Transmission: BBC 1, Wednesday, April 23.</p>
<p>BBC COPYRIGHT PHOTOGRAPH, FROM:</p>
<p>BBC PICTURE PUBLICITY,</p>
<p>BROADCASTING HOUSE,</p>
<p>LONDON. W1A 1AA <span style="float: right;">P.I.</span></p>
</div>
</div>
</figure>
-->
