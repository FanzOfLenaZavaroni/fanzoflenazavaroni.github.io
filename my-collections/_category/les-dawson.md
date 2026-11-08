---
layout: post-no-comments-no-date
title: Les Dawson
maintitle: Les Dawson
---

{% assign posts = site.categories["Les Dawson"] %}
{% assign years = "" | split: "" %}

{% for post in posts %}
  {% assign y = nil %}
  {% if post.born %}
    {% assign y = post.born | date: "%Y" %}
  {% elsif post.died %}
    {% assign y = post.died | date: "%Y" %}
  {% elsif post.date %}
    {% assign y = post.date | date: "%Y" %}
  {% endif %}
  
  {% if y and y != "" %}
    {% unless years contains y %}
      {% assign years = years | push: y %}
    {% endunless %}
  {% endif %}
{% endfor %}

{% assign sorted_years = years | sort %}

{% for year in sorted_years %}
  <h2 id="{{ year }}"><a href="#{{ year }}">{{ year }}</a></h2>
  <ul>
    {% for post in posts %}
      {% assign post_year = nil %}
      {% if post.born %}
        {% assign post_year = post.born | date: "%Y" %}
      {% elsif post.died %}
        {% assign post_year = post.died | date: "%Y" %}
      {% elsif post.date %}
        {% assign post_year = post.date | date: "%Y" %}
      {% endif %}
      
      {% if post_year == year %}
        <li>
          <a href="{{ post.url }}">
            {% if post.born or post.died %}
              {% if post.born %}{{ post.born | date: "%Y-%m-%d" }}{% endif %}
              {% if post.born and post.died %} to {% endif %}
              {% if post.died %}{{ post.died | date: "%Y-%m-%d" }}{% endif %}
            {% else %}
              {{ post.date | date: "%Y-%m-%d" }}
            {% endif %}
            - {{ post.maintitle }}{{ post.suffix }}
          </a>
        </li>
      {% endif %}
    {% endfor %}
  </ul>
{% endfor %}

