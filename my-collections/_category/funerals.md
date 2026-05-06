---
layout: post-no-comments-no-date
title: "Category: Funerals"
maintitle: "Category: Funerals"
---

<ul>
{% for post in site.categories.Funerals reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
