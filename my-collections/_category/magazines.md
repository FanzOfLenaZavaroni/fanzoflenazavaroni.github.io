---
layout: post-no-comments-no-date
title: "Category: Magazines"
maintitle: "Category: Magazines"
---

{% assign mag_names = "" | split: "" %}
{% for cat in site.categories %}
  {% if cat[0] contains "Magazine-" %}
    {% assign mag_names = mag_names | push: cat[0] %}
  {% endif %}
{% endfor %}

{% assign sorted_mag_names = mag_names | sort_natural %}

{% for name in sorted_mag_names %}
  {% assign Mag = name | split: "Magazine-" | last %}
  <h2 id="{{ Mag | slugify }}"><a href="#{{ Mag | slugify }}">{{ Mag }}</a></h2>
  
  <ul>
    {% assign category_posts = site.categories[name] | sort: "date" %}
    {% for post in category_posts %}
      <li>
        <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

