---
layout: post-no-comments-no-date
title: Biographies
maintitle: Biographies
---

{% assign posts = site.categories["Biography"] | sort: "date" %}
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
          <a href="{{ post.url }}">
            {% comment %} 
              1. Split the title at the common phrase to isolate the name 
            {% endcomment %}
            {% if post.maintitle contains "A Summary Of The Media Based Biography" %}
              {% assign clean_name = post.maintitle | split: " A Summary Of The Media Based Biography" | first %}
              {% assign badge = " (Summary)" %}
            {% elsif post.maintitle contains "A Media Based Biography" %}
              {% assign clean_name = post.maintitle | split: " A Media Based Biography" | first %}
              {% assign badge = " (Full Biography )" %}
            {% else %}
              {% assign clean_name = post.maintitle %}
              {% assign badge = "" %}
            {% endif %}

            {{ clean_name }}{{ badge }} - Born: {{ post.born | date: "%-d %B %Y" }}{% if post.died %}, Died: {{ post.died | date: "%-d %B %Y" }}{% endif %}
          </a>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
{% endfor %}

