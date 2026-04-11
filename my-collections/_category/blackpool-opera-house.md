---
layout: post-no-comments-no-date
title: "Category: Blackpool Opera House"
maintitle: "Category: Blackpool Opera House"
---

<ul>
{% for post in site.categories["Blackpool Opera House"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
