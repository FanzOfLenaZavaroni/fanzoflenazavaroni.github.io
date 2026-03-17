---
layout: post-no-comments-no-date
title: "Category: Lena"
maintitle: "Category: Lena"
---

<h2 id="infobox1" class="infobox"><a href="#infobox1">Series 1</a></h2>

<ul>
{% for post in site.categories.Lena-Series-1 reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>

<h2 id="infobox2" class="infobox"><a href="#infobox2">Series 2</a></h2>

<ul>
{% for post in site.categories.Lena-Series-2 reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>

<h2 id="infobox3" class="infobox"><a href="#infobox3">Series 3, Block 1</a></h2>

<ul>
{% for post in site.categories.Lena-Series-3 reversed %}
{% if post.block == 1 %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>

<h2 id="infobox4" class="infobox"><a href="#infobox4">Series 3, Block 2</a></h2>

<ul>
{% for post in site.categories.Lena-Series-3 reversed %}
{% if post.block == 2 %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
