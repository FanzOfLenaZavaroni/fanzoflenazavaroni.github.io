---
layout: post-no-comments-no-date
title: "Category: Yorkshire Television"
maintitle: "Category: Yorkshire Television"
---

<ul>
{% for post in site.categories["Yorkshire Television"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
