---
layout: post-no-comments-no-date
title: "Category: Lena Series 2"
maintitle: "Category: Lena Series 2"
---

<ul>
{% for post in site.categories["Lena Series 2"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
