---
layout: post
title: Opportunity Knocks &#124; 29 April 1974 &#124; Lena appeared in the Opportunity Knocks All Winners Show
maintitle: Opportunity Knocks
subtitle: All Winners Show
description: Lena appeared in the Opportunity Knocks All Winners Show.
post_description: Lena appeared in the Opportunity Knocks All Winners Show.
categories: [Thames, Opportunity Knocks, Hughie Green, OnThisDay29April]
last_modified_at: 13 January 2024
---

{% assign tb_posts = site.categories["Opportunity Knocks"] | sort: "date" %}

{% assign index = nil %}

{% for p in tb_posts %}
  {% if p.url == page.url %}
    {% assign index = forloop.index0 %}
  {% endif %}
{% endfor %}

{% assign prev_index = index | minus: 1 %}
{% assign next_index = index | plus: 1 %}

{% assign prev = nil %}
{% assign next = nil %}

{% if prev_index >= 0 %}
  {% assign prev = tb_posts[prev_index] %}
{% endif %}

{% if next_index < tb_posts.size %}
  {% assign next = tb_posts[next_index] %}
{% endif %}

<div style="background-color: #f3f3f3; padding: 10px; border-radius: 5px; text-align: center; display: flex; justify-content: space-evenly;">

  {% if prev %}
    <a href="{{ prev.url }}">« Previous Episode</a>
  {% else %}
    <span style="visibility:hidden;">« Previous Episode</span>
  {% endif %}

  {% if next %}
    <a href="{{ next.url }}">Next Episode »</a>
  {% else %}
    <span style="visibility:hidden;">Next Episode »</span>
  {% endif %}

</div>

Lena appeared in the Opportunity Knocks All Winners Show.

