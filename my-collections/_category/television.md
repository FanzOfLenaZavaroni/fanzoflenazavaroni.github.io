---
layout: post-no-comments-no-date
title: "Category: Television"
maintitle: "Category: Television"
---

{% assign show_names = "" | split: "" %}
{% for cat in site.categories %}
  {% if cat[0] contains "Television-" %}
    {% assign show_names = show_names | push: cat[0] %}
  {% endif %}
{% endfor %}

{% assign sorted_show_names = show_names | sort_natural %}

{% for name in sorted_show_names %}
  {% assign Show = name | split: "Television-" | last %}
  <h2 id="{{ Show | slugify }}"><a href="#{{ Show | slugify }}">{{ Show }}</a></h2>
  
  <ul>
    {% assign category_posts = site.categories[name] | sort: "date" %}
    {% for post in category_posts %}
      <li>
        <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

