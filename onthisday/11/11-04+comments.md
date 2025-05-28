---
layout: onthisday
title: On This Day &#124; 4 November &#124; Lena Zavaroni's Birthday
maintitle: On This Day — 4 November — Lena Zavaroni's Birthday
description: Lena Zavaroni's birthday is celebrated on 4 November. This page includes additional comments and details.
categories: [On This Day]
---

{% if site.categories.OnThisDay4November == null %}
<h2>Sorry no known details for today</h2>
{% else %}
{% for post in site.categories.OnThisDay4November reversed %}
<strong>{{ post.before }}{{ post.date | date: "%e %B %Y" }}{{ post.after }}</strong>
<ul>
<li> ——: <a class="{{ post.class }}" href="{{ post.url }}"><strong>{{ post.maintitle }}</strong> - {{ post.post_description }}</a></li>
</ul>
{% endfor %}
{% endif %}
<br />
<div style="background-color: #f3f3f3; padding: 10px; border-radius: 5px; text-align: center; display: flex; justify-content: space-evenly;">
<a href="/onthisday/11/11-03">« Previous Day</a>
<span style="visibility:hidden;">[ Visit Leap Year February 29 ]</span>
<a href="/onthisday/11/11-05">Next Day »</a>
</div>
