---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<h2> Journals </h2>

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}

<h2> International Conferences </h2>

{% for post in site.publications/journals reversed %}
  {% include archive-single.html %}
{% endfor %}

