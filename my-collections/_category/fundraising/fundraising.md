---
layout: post-no-comments-no-date
title: "Category: Fundraising"
maintitle: "Category: Fundraising"
---

<ul>
{% for post in site.categories.Fundraising reversed %}
{% if post.url %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}</a>
</li>
{% endif %}
{% endfor %}
</ul>
