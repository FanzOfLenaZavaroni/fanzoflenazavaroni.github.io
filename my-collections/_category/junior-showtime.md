---
layout: post-no-comments-no-date
title: Junior Showtime
maintitle: Junior Showtime
---

<ul>
{% for post in site.categories["Junior Showtime"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
