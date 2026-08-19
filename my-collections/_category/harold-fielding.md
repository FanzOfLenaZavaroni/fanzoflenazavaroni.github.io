---
layout: post-no-comments-no-date
title: Harold Fielding
maintitle: Harold Fielding
---

<ul>
{% for post in site.categories["Harold Fielding"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
