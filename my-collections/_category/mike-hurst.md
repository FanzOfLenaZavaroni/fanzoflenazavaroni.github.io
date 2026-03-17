---
layout: post-no-comments-no-date
title: "Category: Mike Hurst"
maintitle: "Category: Mike Hurst"
---

<ul>
{% for post in site.categories.Mike-Hurst reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
