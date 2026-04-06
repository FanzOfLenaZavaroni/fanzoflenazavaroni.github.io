---
layout: post-no-comments-no-date
title: "Category: Discography Studio Albums"
maintitle: "Category: Discography Studio Albums"
---

{% assign full_dates = site.posts | where: "categories", "Discography Studio Albums" %}
{% assign partial_dates = site.studio-albums %}
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

  {% capture entry %}{{ prefix }}|{{ item.url }}|{{ item.maintitle }}|{{ item.extra }}|{{ item.sortorder }}{% endcapture %}

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

{% assign box_index = 0 %}

{% if list_full.size > 0 %}
  {% assign box_index = box_index | plus: 1 %}
  {% assign box_id = 'infobox' | append: box_index %}
  <h2 id="{{ box_id }}"><a href="#{{ box_id }}">Full Dates</a></h2>
  <ul>
  {% for entry in list_full %}
    {% assign data = entry | split: "|" %}
    <li>
      <a href="{{ data[1] | relative_url }}">
        {{ data[0] }} — {{ data[2] }}{{ data[3] }}
      </a>
    </li>
  {% endfor %}
  </ul>
{% endif %}

{% if list_year_month.size > 0 %}
  {% assign box_index = box_index | plus: 1 %}
  {% assign box_id = 'infobox' | append: box_index %}
  <h2 id="{{ box_id }}"><a href="#{{ box_id }}">Year + Month</a></h2>
  <ul>
  {% for entry in list_year_month %}
    {% assign data = entry | split: "|" %}
    <li>
      <a href="{{ data[1] | relative_url }}">
        {{ data[0] }}-00 — {{ data[2] }}{{ data[3] }}
      </a>
    </li>
  {% endfor %}
  </ul>
{% endif %}

{% if list_year_only.size > 0 %}
  {% assign box_index = box_index | plus: 1 %}
  {% assign box_id = 'infobox' | append: box_index %}
  <h2 id="{{ box_id }}"><a href="#{{ box_id }}">Year Only</a></h2>

  {% assign sorted_year_only = "" | split: "," %}

  {% for entry in list_year_only %}
    {% assign data = entry | split: "|" %}
    {% assign year = data[0] %}
    {% assign sortorder = data[4] | default: 999999999 %}

    {% capture sortable %}
      {{ year | plus: 0 }}-{{ sortorder | plus: 0 }}|{{ entry }}
    {% endcapture %}

    {% assign sorted_year_only = sorted_year_only | push: sortable %}
  {% endfor %}

  {% assign sorted_year_only = sorted_year_only | sort %}

  <ul>
  {% for sortable in sorted_year_only %}
    {% assign entry = sortable | split: "|" | slice: 1, 10 | join: "|" %}
    {% assign data = entry | split: "|" %}
    <li>
      <a href="{{ data[1] | relative_url }}">
        {{ data[0] }}-00-00 — {{ data[2] }}{{ data[3] }}
      </a>
    </li>
  {% endfor %}
  </ul>
{% endif %}

