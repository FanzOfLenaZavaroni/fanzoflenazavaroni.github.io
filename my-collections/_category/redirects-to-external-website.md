---
layout: post-no-comments-no-date
title: "Category: Redirects To External Website"
maintitle: "Category: Redirects To External Website"
---

<ul>
{% for post in site.categories["Redirects To External Website"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
