---
layout: post-no-comments-no-date
title: "Category: Poetry"
maintitle: "Category: Poetry"
---

<ul>
{% for post in site.categories.Poetry reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
