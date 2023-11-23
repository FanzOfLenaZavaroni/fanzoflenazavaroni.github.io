---
layout: onthisday
title: On This Day &#124; 4 November
maintitle: On This Day — 4 November
description: Details for On This Day are genarated by the posts added to the website so the content is subject to changes/updates over time.
categories: [On This Day]
---

{% if site.categories.OnThisDay4November == null and site.categories.Repeat4November == null %}
<strong>Sorry no known details for today</strong>
{% endif %}

{% if site.categories.OnThisDay4November == null %}
{% else %}
{% for post in site.categories.OnThisDay4November reversed %}
<strong>{{ post.date | date: "%e %B %Y" }} {{ post.more }}</strong>
<ul>
<li> ——: <a href="{{ post.url }}"><strong>{{ post.maintitle }}</strong> - {{ post.post_description }}</a></li>
</ul>
{% endfor %}
{% endif %}

{% if site.categories.Repeat4November == null %}
{% else %}
{% for post in site.categories.Repeat4November reversed %}
<strong>{{ post.date | date: "%e %B %Y" }} {{ post.more }}</strong>
<ul>
<li> ——: <a href="{{ post.url }}"><strong>{{ post.maintitle }}</strong> - {{ post.post_description }}</a></li>
</ul>
{% endfor %}
{% endif %}
