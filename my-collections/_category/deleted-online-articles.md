---
layout: post-no-comments-no-date
title: Deleted Online Articles
maintitle: Deleted Online Articles
subtitle: via the wayback machine or the text was saved by the Creator of this site
---

{% assign posts = site.categories["Deleted Online Articles"] | sort: "date" %}
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

