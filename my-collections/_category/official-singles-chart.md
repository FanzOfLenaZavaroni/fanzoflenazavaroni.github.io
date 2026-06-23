---
layout: post-no-comments-no-date
title: "Category: Official Singles Chart"
maintitle: "Category: Official Singles Chart"
---

<ul>
{% for post in site.categories["Official Singles Chart"] reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a></li>
{% endif %}
{% endfor %}
</ul>

