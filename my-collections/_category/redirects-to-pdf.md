---
layout: post-no-comments-no-date
title: "Category: Redirects To PDF"
maintitle: "Category: Redirects To PDF"
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
