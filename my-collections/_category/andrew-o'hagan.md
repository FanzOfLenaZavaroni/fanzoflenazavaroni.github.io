---
layout: post-no-comments-no-date
title: "Category: Andrew O'Hagan"
maintitle: "Category: Andrew O'Hagan"
permalink: /category/andrew-o'hagan/
---

<ul>
{% for post in site.categories["Andrew-O'Hagan"] reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
