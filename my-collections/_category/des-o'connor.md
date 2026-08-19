---
layout: post-no-comments-no-date
title: Des O'Connor
maintitle: Des O'Connor
permalink: /category/des-o'connor
---

<ul>
{% for post in site.categories["Des O'Connor"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
