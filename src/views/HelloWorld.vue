<template>
  <main class="main">
    <div class="main-content responsive-wrapper">
      <article class="widget">
        <h2>{{ $t("header.home") }}</h2>
        
        <p>
          This sticky header consists of two elements: an
          <strong>outer</strong> and an <strong>inner</strong> container. The
          outer container is taller than the inner — and the inner is centered
          vertically.
        </p>
        <p>
          By utilizing the <code>position: sticky</code> property
          <strong>twice</strong>, both on the header's
          <strong>outer container</strong> and
          <strong>inner container</strong> the outer container will stick to the
          <code>body</code>, while the inner container will stick to the outer
          container.
        </p>
        <p>
          Note that the outer container has a negative <code>top</code> value
          equal to the height difference between the two containers. This causes
          the outer container to stick <strong>above</strong> the
          <code>body</code>, making the inner container stick to the "ceiling"
          on scroll.
        </p>
        <p></p>
      </article>
    </div>
    <div class="main-content responsive-wrapper">
      <article class="widget">
        <p>
          This sticky header consists of two elements: an
          <strong>outer</strong> and an <strong>inner</strong> container. The
          outer container is taller than the inner — and the inner is centered
          vertically.
        </p>
        <p>
          By utilizing the <code>position: sticky</code> property
          <strong>twice</strong>, both on the header's
          <strong>outer container</strong> and
          <strong>inner container</strong> the outer container will stick to the
          <code>body</code>, while the inner container will stick to the outer
          container.
        </p>
        <p>
          Note that the outer container has a negative <code>top</code> value
          equal to the height difference between the two containers. This causes
          the outer container to stick <strong>above</strong> the
          <code>body</code>, making the inner container stick to the "ceiling"
          on scroll.
        </p>
        <p></p>
      </article>
    </div>
  </main>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
