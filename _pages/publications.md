---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<h2> Journals </h2>
{% for post in site.publications reversed %}
  {% if post.type == "journal" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

<h2> International Conferences </h2>
{% for post in site.publications reversed %}
  {% if post.type == "conference" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

<h2> International Workshops </h2>
{% for post in site.publications reversed %}
  {% if post.type == "workshop" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

<h2> Books and Chapters </h2>
{% for post in site.publications reversed %}
  {% if post.type == "book" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

<h2> National Conferences </h2>
{% for post in site.publications reversed %}
  {% if post.type == "national" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

<h2> Posters </h2>
{% for post in site.publications reversed %}
  {% if post.type == "poster" %}
    {% include archive-single.html %}
  {% endif %}
{% endfor %}

