---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% include base_path %}

<h3> sergio </h3>

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
