---
layout: post-no-comments-no-date
title: "Category: Journals"
maintitle: "Category: Journals"
---

<ul>
{% for post in site.categories.Journals reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
