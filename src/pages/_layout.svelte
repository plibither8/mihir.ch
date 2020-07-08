<script>
  import Nav from '../components/Nav.svelte'
  import Footer from '../components/Footer.svelte'
</script>

<body>
  <Nav />

  <slot />

  <Footer />
</body>

<style lang='stylus' global>
  @require "../styles/base"
</style>
