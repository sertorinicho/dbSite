---
title: "Match Reports"
layout: "layouts/base.njk"
---

## 📝 Our Matches

<ul>
  {% for post in collections.all %}
    {% if post.inputPath.startsWith('./posts/') %}
      <li>
        <a href="{{ '/posts/' | url }}">{{ post.data.title }}</a>
      </li>
    {% endif %}
  {% endfor %}
</ul>
