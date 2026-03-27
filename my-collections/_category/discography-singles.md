---
layout: post-no-comments-no-date
title: "Category: Discography Singles"
maintitle: "Category: Discography Singles"
---

{% assign full_dates = site.posts | where: "categories", "Discography Singles" %}
{% assign partial_dates = site.singles %}
{% assign all_items = full_dates | concat: partial_dates %}

{% assign list_full = "" | split: "," %}
{% assign list_year_month = "" | split: "," %}
{% assign list_year_only = "" | split: "," %}

{% for item in all_items %}
  {% assign filename = item.path | split: "/" | last %}
  {% assign basename = filename | remove: ".md" | remove: ".markdown" %}
  {% assign parts = basename | split: "-" %}

  {% assign p0 = parts[0] %}
  {% assign p1 = parts[1] %}
  {% assign p2 = parts[2] %}

  {% assign n0 = p0 | plus: 0 %}
  {% assign n1 = p1 | plus: 0 %}
  {% assign n2 = p2 | plus: 0 %}

  {% assign prefix = "" %}
  {% assign group = "" %}

  {% if n0 != 0 %}
    {% assign prefix = p0 %}
    {% if n1 != 0 %}
      {% assign prefix = prefix | append: "-" | append: p1 %}
      {% if n2 != 0 %}
        {% assign prefix = prefix | append: "-" | append: p2 %}
        {% assign group = "full" %}
      {% else %}
        {% assign group = "year_month" %}
      {% endif %}
    {% else %}
      {% assign group = "year_only" %}
    {% endif %}
  {% endif %}

  {% capture entry %}{{ prefix }}|{{ item.url }}|{{ item.maintitle }}{% endcapture %}

  {% if group == "full" %}
    {% assign list_full = list_full | push: entry %}
  {% elsif group == "year_month" %}
    {% assign list_year_month = list_year_month | push: entry %}
  {% elsif group == "year_only" %}
    {% assign list_year_only = list_year_only | push: entry %}
  {% endif %}
{% endfor %}

{% assign list_full = list_full | sort %}
{% assign list_year_month = list_year_month | sort %}
{% assign list_year_only = list_year_only | sort %}

<h2>Full Dates</h2>
<ul>
{% for entry in list_full %}
  {% assign data = entry | split: "|" %}
  {% assign prefix = data[0] %}
  {% assign title = data[2] %}
  <li><a href="{{ data[1] | relative_url }}">{{ prefix }} — {{ title }}</a></li>
{% endfor %}
</ul>

<h2>Year + Month</h2>
<ul>
{% for entry in list_year_month %}
  {% assign data = entry | split: "|" %}
  {% assign prefix = data[0] | append: "-00" %}
  {% assign title = data[2] %}
  <li><a href="{{ data[1] | relative_url }}">{{ prefix }} — {{ title }}</a></li>
{% endfor %}
</ul>

<h2>Year Only</h2>
<ul>
{% for entry in list_year_only %}
  {% assign data = entry | split: "|" %}
  {% assign prefix = data[0] | append: "-00-00" %}
  {% assign title = data[2] %}
  <li><a href="{{ data[1] | relative_url }}">{{ prefix }} — {{ title }}</a></li>
{% endfor %}
</ul>

