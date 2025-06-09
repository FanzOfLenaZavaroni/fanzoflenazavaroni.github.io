---
layout: post-no-comments
title: "Category: Lena Series 3"
maintitle: "Category: Lena Series 3"
subtitle: Series 3 was recorded as one block in Spring-Summer but split into two 3-episode segments due to the broadcasts of World Cup 82 and Wimbledon 82
before: "Block 1: "
date: 25 May 1982
after: " to 8 June 1982, Block 2: 30 November 1982 to 14 December 1982"
---

<figure class="fig1">
<div class="CardLayout">
<div class="CardItem"><h2 id="infobox1" class="infobox"><a href="#infobox1">Block 1</a></h2></div>
<div class="CardItem split">
<ul>
{% for post in site.categories.Lena-Series-3 reversed %}
{% if post.block == 1 %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
</div></div>
</figure>

<figure class="fig2">
<div class="CardLayout">
<div class="CardItem"><h2 id="infobox2" class="infobox"><a href="#infobox2">Block 2</a></h2></div>
<div class="CardItem split">
<ul>
{% for post in site.categories.Lena-Series-3 reversed %}
{% if post.block == 2 %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
</div></div>
</figure>

