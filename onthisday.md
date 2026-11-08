---
layout: post-no-comments
title: On This Day
maintitle: On This Day
---

<script>
onload = function () {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, '0');
  const day = String(today.getDate()).padStart(2, '0');

  window.location.href = `/onthisday/${month}/${month}-${day}`;
}
</script>

