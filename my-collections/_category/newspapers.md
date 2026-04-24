---
layout: post-no-comments-no-date
title: "Category: Newspapers"
maintitle: "Category: Newspapers"
---

{% assign paper_names = "" | split: "" %}
{% for cat in site.categories %}
  {% if cat[0] contains "Newspaper-" %}
    {% assign paper_names = paper_names | push: cat[0] %}
  {% endif %}
{% endfor %}

{% assign sorted_paper_names = paper_names | sort_natural %}

{% for name in sorted_paper_names %}
  {% assign paper = name | split: "Newspaper-" | last %}
  <h2 id="{{ paper | slugify }}"><a href="#{{ paper | slugify }}">{{ paper }}</a></h2>
  
  <ul>
    {% assign category_posts = site.categories[name] | sort: "date" %}
    {% for post in category_posts %}
      <li>
        <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

