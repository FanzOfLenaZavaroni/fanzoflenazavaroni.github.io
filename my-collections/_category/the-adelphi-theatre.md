---
layout: post-no-comments-no-date
title: The Adelphi Theatre
maintitle: The Adelphi Theatre
---

<ul>
{% for post in site.categories["The Adelphi Theatre"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
