---
layout: post-no-comments-no-date
title: The New Year Show 1985
maintitle: The New Year Show 1985
---

<ul>
{% for post in site.categories["The New Year Show 1985"] reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
