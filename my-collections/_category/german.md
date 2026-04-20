---
layout: post-no-comments-no-date
title: "Category: German"
maintitle: "Category: German"
---

<ul>
{% for post in site.categories.German reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a></li>
{% endif %}
{% endfor %}
</ul>
