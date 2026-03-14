---
layout: post-no-comments-no-date
title: "Category: Dougie Squires"
maintitle: "Category: Dougie Squires"
---

<ul>
{% for post in site.categories.Dougie-Squires reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
