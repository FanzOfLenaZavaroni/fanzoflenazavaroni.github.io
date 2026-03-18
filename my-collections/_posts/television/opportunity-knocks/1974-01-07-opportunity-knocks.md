---
layout: post
title: Opportunity Knocks &#124; 7 January 1974 &#124; Lena Zavaroni makes her first appearance
maintitle: Opportunity Knocks
subtitle: Episode 14.23 
description: Lena makes her first appearance. She sings Ma! (He's Making Eyes At Me).
post_description: Lena makes her first appearance. She sings Ma! (He's Making Eyes At Me).
categories: [Thames, Opportunity-Knocks, Hughie-Green, OnThisDay7January]
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

With Friends In Harmony, Brian Aherne, The Frank and Peggy Spencer Formation Dancers, Johnny Douglas, Lena Zavaroni
<cite><a href="https://www.tvbrain.info/tv-archive?showname=Opportunity+Knocks&type=lostshow#:~:text=With%20Friends%20In%20Harmony%2C%20Brian%20Aherne%2C%20The%20Frank%20and%20Peggy%20Spencer%20Formation%20Dancers%2C%20Johnny%20Douglas%2C%20Lena%20Zavaroni">TV Brain</a></cite>

Lena makes her first appearance. She sings "Ma! (He's Making Eyes At Me)".

