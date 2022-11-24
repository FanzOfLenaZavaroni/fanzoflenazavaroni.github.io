---
layout: page
author: Robcamstone
title: On This Day &#124; 4 November 
maintitle: On This Day
description:
categories: [On This Day]
---

### 4 November

* ——: [1963 - Lena Hilda Zavaroni was born in Rankin Memorial Hospital, Greenock, Inverclyde, Scotland, United Kingdom.](/biography/lena-zavaroni)

{% if site.categories.OnThisDay4November == null %}
{% else %}
{% for post in site.categories.OnThisDay4November reversed %}
<ul>
<li> ——: <a href="{{ post.url }}">{{ post.date | date: "%Y" }} - {{ post.maintitle }} - {{ post.post_description }}</a></li>
</ul>
{% endfor %}
{% endif %}

{% if site.categories.Repeat4November == null %}
{% else %}
{% for post in site.categories.Repeat4November reversed %}
<ul>
<li> ——: <a href="{{ post.url }}">{{ post.date | date: "%Y" }} - Repeat broadcast of {{ post.maintitle }} - {{ post.post_description }}</a></li>
</ul>
{% endfor %}
{% endif %}
