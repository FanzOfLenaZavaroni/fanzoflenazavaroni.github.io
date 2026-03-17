---
layout: post-no-comments-no-date
title: "Category: Alle Sette Della Sera"
maintitle: "Category: Alle Sette Della Sera"
---

<ul>
{% for post in site.categories.Alle-Sette-Della-Sera reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
