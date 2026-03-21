---
layout: post
title: The Bachelors Show  &#124; Epiosde 2
maintitle: The Bachelors Show
subtitle: Epiosde 2
description:  23 February 1975 - with The Bachelors, The Vernons and Lena Zavaroni.
post_description: with The Bachelors, The Vernons and Lena Zavaroni.
categories: [BBC Two, The Bachelors Show, OnThisDay23February]
---

{% assign eps = site.posts
    | where_exp: "post", "post.categories contains 'The Bachelors Show'"
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

<p>Lena performs the song "Music, Music, Music" standing at an old jukebox. She then joins the Bachelors to sing the Irving Berlin composition "I Love A Piano" while sitting on top of theirs.</p>
<p>While she still sits on their piano, they then teach her about musical scales in a short musical comedy routine.</p>
<p><strong>External Website:</strong> <a class="external-link" href="https://genome.ch.bbc.co.uk/schedules/bbctwo/england/1975-02-23#at-20.20">BBC Genome</a></p>

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
