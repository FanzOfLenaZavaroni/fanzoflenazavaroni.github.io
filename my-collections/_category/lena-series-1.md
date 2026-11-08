---
layout: post-no-comments-no-date
title: Lena Series 1
maintitle: Lena Series 1
---

<ul>
{% for post in site.categories["Lena Series 1"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
