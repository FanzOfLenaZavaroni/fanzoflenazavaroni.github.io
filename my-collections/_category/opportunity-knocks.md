---
layout: post-no-comments-no-date
title: Opportunity Knocks
maintitle: Opportunity Knocks
---

<ul>
{% for post in site.categories["Opportunity Knocks"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
