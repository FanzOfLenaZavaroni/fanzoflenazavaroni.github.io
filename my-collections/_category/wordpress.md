---
layout: post-no-comments-no-date
title: "Category: Wordpress"
maintitle: "Category: Wordpress"
---

<ul class="columns2">
{% for post in site.categories.Wordpress reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
