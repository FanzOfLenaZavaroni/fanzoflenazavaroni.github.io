---
layout: post
title: Official Singles Chart &#124; 17 March 1974
maintitle: Official Singles Chart
suffix: ": Ma! (He's Making Eyes At Me), Position 17"
subtitle: Ma! (He's Making Eyes At Me)
after: " - 23 March 1974"
description: Ma! (He's Making Eyes At Me) moves up the charts to number 17.
post_description: Ma! (He's Making Eyes At Me) moves up the charts to number 17.
categories: [Official Singles Chart, OnThisDay17March]
last_modified_at: 23 June 2026
---

{% assign tb_posts = site.posts
    | where_exp: "post", "post.categories contains 'Official Singles Chart'"
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

  <a href="/discography/singles/1974-01-25-ma-hes-making-eyes-at-me-uk">Ma! (He's Making Eyes At Me), Single</a>

  {% if next %}
    <a href="{{ next.url }}">Next Episode »</a>
  {% else %}
    <span style="visibility:hidden;">Next Episode »</span>
  {% endif %}

</div>

<h2 id="infobox1"><a href="#infobox1">Details</a></h2>
<p>The Official Singles Chart site lists the page as having the Top 100, this is not the case for historical chart listings it only covers the Top 50.</p>
<ul>
<li>{{ page.post_description }}</li>
<li>Official Singles Chart: <a class="external-link" href="https://www.officialcharts.com/charts/singles-chart/19740317/7501/#:~:text=EYES%20AT%20ME)-,LENA%20ZAVARONI,-LW%3A%2014">17 March 1974 - 23 March 1974</a></li>
</ul>

