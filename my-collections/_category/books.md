---
layout: post-no-comments-no-date
title: "Category: Books"
maintitle: "Category: Books"
---

<ul>
{% for post in site.categories.Books reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
