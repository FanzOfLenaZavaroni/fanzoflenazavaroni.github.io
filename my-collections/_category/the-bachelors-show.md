---
layout: post-no-comments-no-date
title: "Category: The Bachelors Show"
maintitle: "Category: The Bachelors Show"
---

<ul>
{% for post in site.categories["The Bachelors Show"] reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
