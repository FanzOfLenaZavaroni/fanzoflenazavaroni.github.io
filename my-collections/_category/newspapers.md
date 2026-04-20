---
layout: post-no-comments-no-date
title: "Category: Newspapers"
maintitle: "Category: Newspapers"
---

{% assign sorted_categories = site.categories | sort %}
{% for cat in sorted_categories %}
{% assign cat_name = cat[0] %}
{% if cat_name contains "Newspaper-" %}
{% assign paper = cat_name | split: "Newspaper-" | last %}
<h2 id="{{ paper | slugify }}"><a href="#{{ paper | slugify }}">{{ paper }}</a></h2>
<ul>
{% for post in cat[1] %}
<li>
<a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a>
</li>
{% endfor %}
</ul>
{% endif %}
{% endfor %}

