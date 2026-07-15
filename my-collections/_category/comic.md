---
layout: post-no-comments-no-date
title: "Category: Comics"
maintitle: "Category: Comics"
---

{% assign Com_names = "" | split: "" %}
{% for cat in site.categories %}
  {% if cat[0] contains "Comic-" %}
    {% assign Com_names = Com_names | push: cat[0] %}
  {% endif %}
{% endfor %}

{% assign sorted_Com_names = Com_names | sort_natural %}

{% for name in sorted_Com_names %}
  {% assign Com = name | split: "Comic-" | last %}
  <h2 id="{{ Com | slugify }}"><a href="#{{ Com | slugify }}">{{ Com }}</a></h2>
  
  <ul>
    {% assign category_posts = site.categories[name] | sort: "date" %}
    {% for post in category_posts %}
      <li>
        <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

