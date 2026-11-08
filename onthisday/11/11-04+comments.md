---
layout: onthisday
title: On This Day &#124; 4 November &#124; Lena Zavaroni's Birthday
maintitle: "On This Day:  4 November"
subtitle: Some entries are informational only and do not link to a full post when there isn’t enough information to create one.
description: Lena Zavaroni's birthday is celebrated on 4 November. This page includes additional comments and details.
categories: [On This Day]
---

<div style="background-color: #f3f3f3; padding: 10px; border-radius: 5px; text-align: center; display: flex; justify-content: space-evenly;">
<a href="/onthisday/11/11-03">« Previous Day</a>
<div style="position: relative; display: inline-block;">
  <span style="position: absolute; width: 100%; left: 0; text-align: center;">
    <a href="/onthisday/11/11-04">[ Happy Birthday Lena ]</a>
  </span>
  <span style="visibility:hidden;">[ Visit Leap Year February 29 ]</span>
</div>
<a href="/onthisday/11/11-05">Next Day »</a>
</div>
<br />
{% if site.categories.OnThisDay4November == null %}
<h2>Sorry no known details for today</h2>
{% else %}
{% for post in site.categories.OnThisDay4November reversed %}
{% unless post.before contains '<span id="age' %}<strong>{{ post.before }}</strong>{% endunless %}
<strong>{{ post.date | date: "%e %B %Y" }}</strong>
{% unless post.after contains '<span id="age' %}<strong>{{ post.after }}</strong>{% endunless %}
<ul>
{% if post.onthisdaylink == false %}
    <li><strong>{{ post.maintitle }}</strong> - {{ post.post_description }}</li>
{% else %}
    <li><a class="{{ post.class }}" href="{{ post.url }}"><strong>{{ post.maintitle }}</strong> - {{ post.post_description }}</a></li>
{% endif %}
</ul>
{% endfor %}
{% endif %}
