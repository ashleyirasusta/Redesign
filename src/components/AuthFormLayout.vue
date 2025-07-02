<template>
  <div class="row row-center">
    <div class="col-12 col-md-6 col-center">
      <section class="auth-section auth-section-center">
        <slot name="left" />
      </section>
    </div>
    <div class="col-12 col-md-6 col-center p-0">
      <section class="brand-section h-100 w-100 position-relative">
        <slot name="right" />
      </section>
    </div>
  </div>
</template> 