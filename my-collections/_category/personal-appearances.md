---
layout: post-no-comments-no-date
title: Personal Appearances
maintitle: Personal Appearances
---

{% assign Pers_names = "" | split: "" %}
{% for cat in site.categories %}
  {% if cat[0] contains "Personal Appearances-" %}
    {% assign Pers_names = Pers_names | push: cat[0] %}
  {% endif %}
{% endfor %}

{% assign sorted_Pers_names = Pers_names | sort_natural %}

{% for name in sorted_Pers_names %}
  {% assign Pers = name | split: "Personal Appearances-" | last %}
  <h2 id="{{ Pers | slugify }}"><a href="#{{ Pers | slugify }}">{{ Pers }}</a></h2>
  
  <ul>
    {% assign category_posts = site.categories[name] | sort: "date" %}
    {% for post in category_posts %}
      <li>
        <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a>
      </li>
    {% endfor %}
  </ul>
{% endfor %}

