---
layout: post-no-comments-no-date
title: "Category: Junior Choice"
maintitle: "Category: Junior Choice"
---

<ul>
{% for post in site.categories["Junior Choice"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
