---
layout: post-no-comments-no-date
title: "Category: Going Nowhere"
maintitle: "Category: Going Nowhere"
---

<ul>
{% for post in site.categories.Going-Nowhere reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
