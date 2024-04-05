---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<h2> Journals </h2>

{% for post in site.publications reversed %}
  {% if post.type == "conference" %}
  {% include archive-single.html %}
  {% endif %}
{% endfor %}

<h2> International Conferences </h2>

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

