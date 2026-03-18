---
layout: post
title: Opportunity Knocks &#124; 17 November 1975 &#124; Lena Sponsored Her Parents Victor And Hilda On The Show
maintitle: Opportunity Knocks
subtitle: Episode 16.8 - Lena Sponsored Her Parents Victor And Hilda
description: Lena sponsored her parents Victor and Hilda on the show under the name The Zavaronis.
post_description: Lena sponsored her parents Victor and Hilda on the show under the name The Zavaronis.
categories: [Thames, Opportunity-Knocks, Hughie-Green, OnThisDay17November]
last_modified_at: 13 January 2024
---

{% assign tb_posts = site.posts
    | where_exp: "post", "post.categories contains 'Opportunity-Knocks'"
    | sort: "date" %}

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

With Paul and Suzy Brown, Mike Donohoe, Les Filles De Paris, Blue, Hilda and Victor Zavaroni
<cite><a href="https://www.tvbrain.info/tv-archive?showname=Opportunity+Knocks&type=lostshow#:~:text=With%20Paul%20and%20Suzy%20Brown%2C%20Mike%20Donohoe%2C%20Les%20Filles%20De%20Paris%2C%20Blue%2C%20Hilda%20and%20Victor%20Zavaroni">TV Brain</a></cite>

Lena sponsored her parents Victor and Hilda on the show under the name The Zavaronis.

They had previously applied in 1973 but did not make it passed the qualifying heats.

