---
layout: post-no-comments-no-date
title: "Category: Magazines"
maintitle: "Category: Magazines"
---

<ul>
{% for post in site.categories.Magazines reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a></li>
{% endif %}
{% endfor %}
</ul>
