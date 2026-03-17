---
layout: post-no-comments-no-date
title: "Category: Sunday Mirror"
maintitle: "Category: Sunday Mirror"
---

<ul>
{% for post in site.categories.Sunday-Mirror reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
