---
layout: post-no-comments-no-date
title: "Category: Me And My Girl"
maintitle: "Category: Me And My Girl"
---

<ul>
{% for post in site.categories["Me And My Girl"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
