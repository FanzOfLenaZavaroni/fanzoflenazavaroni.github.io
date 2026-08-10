---
layout: post-no-comments-no-date
title: "Category: The Stage and Television Today"
maintitle: "Category: The Stage and Television Today"
---

{% assign posts = site.categories["The Stage and Television Today"] | sort: "date" %}
{% assign years = "" | split: "" %}

{% for post in posts %}
  {% assign y = post.date | date: "%Y" %}
  {% unless years contains y %}
    {% assign years = years | push: y %}
  {% endunless %}
{% endfor %}

{% assign sorted_years = years | sort %}

{% for year in sorted_years %}
  <h2 id="{{ year }}"><a href="#{{ year }}">{{ year }}</a></h2>
  <ul>
    {% for post in posts %}
      {% assign post_year = post.date | date: "%Y" %}
      {% if post_year == year %}
        <li>
          <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} - {{ post.maintitle }}{{ post.suffix }}</a>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
{% endfor %}

