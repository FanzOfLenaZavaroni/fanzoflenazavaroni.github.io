---
layout: post
title: Lena Zavaroni and Music &#124; Episode 5
maintitle: Lena Zavaroni and Music - Episode 5
subtitle: "Guests: Michel Legrand, Wayne Sleep and Berni Flint"
description: This week's guests are Michel Legrand, Wayne Sleep and Berni Flint.
post_description: This week's guests are Michel Legrand, Wayne Sleep and Berni Flint.
image: /assets/images/BBC/lena-zavaroni-image-copyright-bbc.jpg
categories: [BBC One, Lena Zavaroni and Music, Dougie Squires, OnThisDay20June]
last_modified_at: 26 November 2023
---

{% assign tb_posts = site.posts
    | where_exp: "post", "post.categories contains 'Lena Zavaroni and Music'"
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

  <a class="external-link" href="https://genome.ch.bbc.co.uk/schedules/service_bbc_one_london/1979-06-20#at-18.50">BBC Genome: Series 1, Episode 5</a>

  {% if next %}
    <a href="{{ next.url }}">Next Episode »</a>
  {% else %}
    <span style="visibility:hidden;">Next Episode »</span>
  {% endif %}

</div>

<figure class="fig1">
<div class="CardLayout CardLayout-Height1">
<div class="CardItem">
<h2 id="infobox1" class="infobox"><a href="#infobox1">BBC Publicity Photo</a></h2>
<div class="CardItem split">
<img src="/assets/images/BBC/lena-zavaroni-image-copyright-bbc.jpg" class="full-width" />
</div></div></div>
</figure>

<figure class="fig2">
<div class="CardLayout CardLayout-Height1">
<div class="CardItem">
<h2 id="infobox2" class="infobox"><a href="#infobox2">Set List</a></h2>
<div class="CardItem split">
<ul>
<li>Music Was My First Love (Lena, shorter version)</li>
<li>Going Places (Lena and the Ace Eight)</li>
<li>Tomorrow [from the musical Annie] (Lena)</li>
<li>Dancing in the City (Lena and the Ace Eight)</li>
<li>The 59th Street Bridge Song (Feelin' Groovy) (Lena with Berni Flint)</li>
<li>The Land Of Points (Lena and the Ace Eight with Wayne Sleep featuring Paul Aylett and his puppet dog Arrow)</li>
<li>Sweet Gingerbread Man (Lena with Michel Legrand)</li>
<li>Watch what Happens (Michel Legrand)</li>
<li>I Love America (Lena and the Ace Eight)</li>
</ul>
</div></div></div>
</figure>

<figure class="fig1">
<div class="CardLayout CardLayout-Height2">
<div class="CardItem">
<h2 id="infobox3" class="infobox"><a href="#infobox3">Cast</a></h2>
<div class="CardItem split">
<ul>
<li><strong>Hostess and Signer:</strong> Lena Zavaroni</li>
<li><strong>Special Guest:</strong> Michel Legrand</li>
<li><strong>Special Guest:</strong> Wayne Sleep</li>
<li><strong>Special Guest:</strong> Berni Flint</li>
<li><strong>Dancers</strong> The Ace Eight</li>
</ul>
</div>
<div class="CardItem"><h2 id="infobox4" class="infobox"><a href="#infobox4">Links</a></h2>
<ul>
<li><strong>Category:</strong> <a href="/category/lena-zavaroni-and-music">Lena Zavaroni and Music</a></li>
<li><strong>BBC Genome:</strong> <a href="https://genome.ch.bbc.co.uk/schedules/service_bbc_one_london/1979-06-20#at-18.50">Series 1, Episode 5</a></li>
</ul>
</div></div></div>
</figure>

<figure class="fig2">
<div class="CardLayout CardLayout-Height2">
<div class="CardItem">
<h2 id="infobox4" class="infobox"><a href="#infobox4">Crew</a></h2>
<div class="CardItem split">
<ul>
<li><strong>Orchestra:</strong> Alyn Ainsworth and his Orchestra</li>
<li><strong>Musical Director:</strong> Alyn Ainsworth</li>
<li><strong>Vocal Backings:</strong> The Third Kind</li>
<li><strong>Choreography:</strong> <a href="/2023-05-21-dougie-squires">Dougie Squires</a></li>
<li><strong>Sound:</strong> Len Shorey</li>
<li><strong>Lighting:</strong> Eric Wallis</li>
<li><strong>Designer:</strong> John O'Hara</li>
<li><strong>Designer:</strong> Nigel Curzon</li>
<li><strong>Production</strong> David G. Hillier</li>
</ul>
</div></div></div>
</figure>

<style>
.CardLayout-Margin {margin: auto;}
.CardLayout-Height1 {height:531.5px;}
.CardLayout-Height2 {height:400.5px;}
@media screen and (orientation:portrait) {.CardLayout-Height1, .CardLayout-Height2 {height: unset;}}
</style>
