---
layout: post-no-comments-no-date
title: "Category: BBC News"
maintitle: "Category: BBC News"
---

<ul>
{% for post in site.categories["BBC News"] reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
