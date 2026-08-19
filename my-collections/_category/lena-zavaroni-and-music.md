---
layout: post-no-comments-no-date
title: Lena Zavaroni and Music
maintitle: Lena Zavaroni and Music
---

<ul>
{% for post in site.categories["Lena Zavaroni and Music"] reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a></li>
{% endif %}
{% endfor %}
</ul>
