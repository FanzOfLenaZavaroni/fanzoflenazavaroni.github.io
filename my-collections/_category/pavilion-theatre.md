---
layout: post-no-comments-no-date
title: Pavilion Theatre
maintitle: Pavilion Theatre
---

<ul>
{% for post in site.categories["Pavilion Theatre"] reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>

