---
layout: post
title: Opportunity Knocks &#124; 14 January 1974 &#124; Lena Zavaroni makes her second appearance
maintitle: Opportunity Knocks
subtitle: Episode 14.24
description: Lena makes her second appearance after winning the viewers votes for the first time. She sings Take Me Home, Country Roads.
media: Thames Television
post_description: Lena makes her second appearance after winning the viewers votes for the first time. She sings Take Me Home, Country Roads.
categories: [Thames, Opportunity-Knocks, Hughie-Green, OnThisDay14January]
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

With Gladys Bennett, Jacqui Edwards, The Nicky Papas Duo, The Mike Price Set, Keith Manifold

<cite><a href="https://www.tvbrain.info/tv-archive?showname=Opportunity+Knocks&type=lostshow#:~:text=With%20Gladys%20Bennett%2C%20Jacqui%20Edwards%2C%20The%20Nicky%20Papas%20Duo%2C%20The%20Mike%20Price%20Set%2C%20Keith%20Manifold">TV Brain</a></cite>

Lena makes her second appearance after winning the viewers votes for the first time. She sings "Take Me Home, Country Roads".

