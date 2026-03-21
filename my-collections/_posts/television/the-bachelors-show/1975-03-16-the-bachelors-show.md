---
layout: post
title: The Bachelors Show  &#124; Epiosde 5
maintitle: The Bachelors Show
subtitle: Epiosde 5
description:  16 March 1975 - with The Bachelors, The Vernons and Lena Zavaroni.
post_description: with The Bachelors, The Vernons and Lena Zavaroni.
categories: [BBC Two, The Bachelors Show, OnThisDay16March]
---

{% assign eps = site.posts
    | where_exp: "post", "post.categories contains 'Television-The-Bachelors-Show'"
    | sort: "date" %}

{% assign index = nil %}

{% for p in eps %}
  {% if p.url == page.url %}
    {% assign index = forloop.index0 %}
  {% endif %}
{% endfor %}

{% assign prev_index = index | minus: 1 %}
{% assign next_index = index | plus: 1 %}

{% assign prev = nil %}
{% assign next = nil %}

{% if prev_index >= 0 %}
  {% assign prev = eps[prev_index] %}
{% endif %}

{% if next_index < eps.size %}
  {% assign next = eps[next_index] %}
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

<h2 id="infobox1"><a href="#infobox1">Summary</a></h2>

<p>Lena sings "What A Wonderful World" as she wanders around in a make‑believe garden. She then performs a lively song and dance version of "The Spaniard That Blighted My Life". Finally she joins the Bachelors and the Vernons for a version of "Viva Espana".</p>
<p><strong>External Website:</strong> <a class="external-link" href="https://genome.ch.bbc.co.uk/schedules/bbctwo/england/1975-03-16#at-20.15">BBC Genome</a></p>

<h2 id="infobox2"><a href="#infobox2">Cast</a></h2>
<ul class="columns2">
<li><strong>Hosts:</strong>  The Bachelors</li>
<li><strong>Singer:</strong>  Lena Zavaroni</li>
<li><strong>Singers:</strong>  The Vernons</li>
</ul>

<h2 id="infobox3"><a href="#infobox3">Cast</a></h2>
<ul class="columns2">
<li><strong>Orchestra conductor:</strong>  Norman Percival</li>
<li><strong>Choreography:</strong>  Lesley Brooks</li>
<li><strong>Production team:</strong>  Ann R Mann</li>
<li><strong>Production team:</strong>  Maurice Gallacher</li>
<li><strong>Lighting:</strong>  Ken McGregor</li>
<li><strong>Sound:</strong>  Hugh Barker</li>
<li><strong>Sound:</strong>  Peter Rose</li>
<li><strong>Design:</strong>  Lesley Bremness</li>
<li><strong>Producer:</strong>  Ernst Maxin</li>
<li><strong>Production company:</strong>  BBC Television</li>
</ul>
