---
layout: post-no-comments-no-date
title: Redirects To PDF
maintitle: Redirects To PDF
---

<ul>
{% for post in site.categories["Redirects To PDF"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
