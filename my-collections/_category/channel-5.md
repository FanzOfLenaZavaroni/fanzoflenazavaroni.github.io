---
layout: post-no-comments-no-date
title: "Category: Channel 5"
maintitle: "Category: Channel 5"
---

<ul>
{% for post in site.categories["Channel 5"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
