---
layout: page
permalink: /categories/
title: Categories
maintitle: Categories
---

<div id="archives">
{% comment %}
#
#  Change date order by adding '| reversed'
#  To sort by title or other variables use {% assign sorted_posts = category[1] | sort: 'title' %}
#
{% endcomment %}
{% assign sorted_cats = site.categories | sort %}
{% for category in sorted_cats %}
{% assign sorted_posts = category[1] | reversed %}
<h2 id="{{category[0] | uri_escape}}">{{category[0]}}</H2>
<ul>
  {% for post in sorted_posts %}
 	<li>—— ({{post.date | date: "%Y-%m-%d"}}). <a href="{{ site.url }}{{ site.baseurl }}{{  post.url }}">{{post.maintitle}} - {{ post.subtitle }}</a></li>
  {% endfor %}
</ul>
{% endfor %}
</div>

