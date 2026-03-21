---
layout: post
title: "Opportunity Knocks &#124; 4 February 1974 &#124; Tenth Birthday Edition Of The Programme"
maintitle: Opportunity Knocks
subtitle: Episode 14.27 - Tenth Birthday Edition Of The Programme
description: "Opportunity Knocks &#124; 4 February 1974 &#124; Tenth birthday edition of the programme in which some of Hughie's top discoveries including David Whitfield, Bobby Crush and Candlewick Green returned for the celebration and which meant that viewers would have to wait another week to find out if Lena Zavaroni would win for the fourth time."
post_description: "Opportunity Knocks &#124; 4 February 1974 &#124; Tenth birthday edition of the programme in which some of Hughie's top discoveries including David Whitfield, Bobby Crush and Candlewick Green returned for the celebration and which meant that viewers would have to wait another week to find out if Lena Zavaroni would win for the fourth time."
image: /assets/images/newspapers/1974-02-05-evening-times-my-view-last-night.png
categories: [Thames, Opportunity Knocks, Hughie-Green, OnThisDay4February]
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

<p>Tenth birthday edition of the programme in which some of Hughie's top discoveries including David Whitfield, Bobby Crush and Candlewick Green returned for the celebration and which meant that viewers would have to wait another week to find out if Lena Zavaroni would win for the fourth time.</p>
