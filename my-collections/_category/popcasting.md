---
layout: post-no-comments-no-date
title: "Category: Popcasting"
maintitle: "Category: Popcasting"
---

<ul>
{% for post in site.categories.Popcasting reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
