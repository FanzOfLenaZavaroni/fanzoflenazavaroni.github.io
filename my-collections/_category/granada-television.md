---
layout: post-no-comments-no-date
title: "Category: Granada Television"
maintitle: "Category: Granada Television"
---

<ul>
{% for post in site.categories["Granada Television"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
