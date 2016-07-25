<template lang="jade">
  .panel.panel-default
    .panel-heading
      h1.text-center
        | Total Time
    .panel-body
      h1.text-center
        | {{time}} Time
</template>

<script>
  export default {
    props: ['time'],
  };
</script>
