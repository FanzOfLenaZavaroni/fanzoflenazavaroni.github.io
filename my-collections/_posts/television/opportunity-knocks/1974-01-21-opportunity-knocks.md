---
layout: post
title: Opportunity Knocks &#124; 21 January 1974 &#124; Lena Zavaroni makes her third appearance
maintitle: Opportunity Knocks
subtitle: Episode 14.25
description: Lena makes her third appearance after winning the viewers votes for the second time.
media: Thames Television
post_description: Lena makes her third appearance after winning the viewers votes for the second time.
categories: [Thames, Opportunity Knocks, Hughie-Green, OnThisDay21January]
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

With Cherish, Ella Wilson's Gang, Eric Charnley, Johnny Lancaster, A Taste of Olde England
<cite><a href="https://www.tvbrain.info/tv-archive?showname=Opportunity+Knocks&type=lostshow#:~:text=With%20Cherish%2C%20Ella%20Wilson%27s%20Gang%2C%20Eric%20Charnley%2C%20Johnny%20Lancaster%2C%20A%20Taste%20of%20Olde%20England">TV Brain</a></cite>

Lena makes her third appearance after winning the viewers votes for the second time.

