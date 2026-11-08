---
layout: post-no-comments-no-date
title: De Telegraaf
maintitle: De Telegraaf
---

<ul>
{% for post in site.categories["De Telegraaf"] reversed %}
{% if post.url %}
<li><a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a></li>
{% endif %}
{% endfor %}
</ul>
