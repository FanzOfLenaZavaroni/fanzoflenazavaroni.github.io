---
layout: post-no-comments
title: Biographies
maintitle: Biographies
subtitle: Lena Zavaroni’s biography, plus brief biographies of those who guided her journey or performed with her on stage or screen.
---

<figure class="fig3">
<div class="CardLayout">
<div class="CardItem">
<ul>
  {% for post in site.categories.Biography reversed %}
    {% if post.url %}
        <li> ——: <a href="{{ post.url }}"><strong>{{ post.maintitle }}</strong> 
        (<strong>Born:</strong> {% assign born_parts = post.born | split: "-" %}
        {% if born_parts.size == 3 %}
            {{ post.born | date: "%-d %B %Y" }}
        {% elsif born_parts.size == 2 %}
            {{ born_parts[1] | replace: "01", "January"
                             | replace: "02", "February"
                             | replace: "03", "March"
                             | replace: "04", "April"
                             | replace: "05", "May"
                             | replace: "06", "June"
                             | replace: "07", "July"
                             | replace: "08", "August"
                             | replace: "09", "September"
                             | replace: "10", "October"
                             | replace: "11", "November"
                             | replace: "12", "December"
            }} {{ born_parts[0] }}
        {% else %}
            {{ post.born }}
        {% endif %}
        {% if post.died %}
            , <strong>Died:</strong> {% assign died_parts = post.died | split: "-" %}
            {% if died_parts.size == 3 %}
                {{ post.died | date: "%-d %B %Y" }}
            {% elsif died_parts.size == 2 %}
                {{ died_parts[1] | replace: "01", "January"
                                 | replace: "02", "February"
                                 | replace: "03", "March"
                                 | replace: "04", "April"
                                 | replace: "05", "May"
                                 | replace: "06", "June"
                                 | replace: "07", "July"
                                 | replace: "08", "August"
                                 | replace: "09", "September"
                                 | replace: "10", "October"
                                 | replace: "11", "November"
                                 | replace: "12", "December"
                }} {{ died_parts[0] }}
            {% else %}
                {{ post.died }}
            {% endif %}
        {% endif %})</a></li>
    {% endif %}
  {% endfor %}
</ul>

</div>
</div>
</figure>

