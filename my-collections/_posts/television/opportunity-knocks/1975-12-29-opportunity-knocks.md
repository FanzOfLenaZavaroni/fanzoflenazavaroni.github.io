---
layout: post
title: Opportunity Knocks &#124; Variety Club Award Show &#124; 29 December 1975
maintitle: Opportunity Knocks
subtitle: Variety Club Award Show (1975)
description: Lena appears as last year's winner, to present the award to the 1975 recipient, The Frank Jennings Syndicate.
media: Thames Television
post_description: Lena appears as last year's winner, to present the award to the 1975 recipient, The Frank Jennings Syndicate.
categories: [Thames, Opportunity-Knocks, Hughie-Green, OnThisDay29December]
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

Lena appears as last year's winner, to present the award to the 1975 recipient, The Frank Jennings Syndicate.

<div class="responsive-video"><iframe width="480" height="360" src="https://www.youtube.com/embed/vYCHI8eQsd0?rel=0amp;start=440" frameborder="0" allowfullscreen></iframe></div>

<br />

<figure class="fig3">
<h2 id="cast"><a href="#cast">Cast</a></h2>
<table>
<tr><th style="width:50%;">Presenter</th><td style="width:50%;">Hughie Green</td></tr>
<tr style="outline: 4px dashed darkorange; outline-offset: -4px;" id="lz"><th>On screen participant</th><td>Lena Zavaroni</td></tr>
<tr><th>On screen participant</th><td>Champagne</td></tr>
<tr><th>On screen participant</th><td>Wayne King</td></tr>
<tr><th>On screen participant</th><td>Tammy Jones</td></tr>
<tr><th>On screen participant</th><td>Tony Monopoly</td></tr>
<tr><th>On screen participant</th><td>Pam Ayres</td></tr>
<tr><th>On screen participant</th><td>The Frank Jennings Syndicate</td></tr>
<tr><th>On screen participant</th><td>Tom O'Connor</td></tr>
<tr><th>On screen participant</th><td>The Wimbledon Lyric Players</td></tr>
</table>
</figure>

<figure class="fig3">
<h2 id="crew"><a href="#crew">Crew</a></h2>
<table>
<tr><th style="width:50%;">Programme associate</th><td style="width:50%;">Doris Barry</td></tr>
<tr><th>Programme associate</th><td>Len Marten</td></tr>
<tr><th>Executive producer</th><td>Jack Andrews</td></tr>
<tr><th>Designer</th><td>Bill Laslett</td></tr>
<tr><th>Producer</th><td>Keith Beckett</td></tr>
<tr><th>Director</th><td>Keith Beckett</td></tr>
<tr><th>Musical accompaniment</th><td>Bob Sharples And his Music</td></tr>
</table>
</figure>

<br />{: .clear}

