<template>
  <div>
    <div class="container my-5 flex">
      <div class="notfound flex">
          <div class="text-center">
              <h2> 404 </h2>
          <h3>Pagina no encontrada</h3>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flex{
    display: flex;
    justify-content: center;
    align-items: center;
}
h2{
    font-size: 200px;
}
.notfound {
  width: 640px;
  height: 480px;
  background-image: radial-gradient(
    circle at 114.09% 20.12%,
    #ffdde2 0,
    #ffdddc 3.33%,
    #ffded7 6.67%,
    #ffdfd3 10%,
    #ffe0cf 13.33%,
    #ffe2cb 16.67%,
    #ffe3c8 20%,
    #ffe5c5 23.33%,
    #ffe6c4 26.67%,
    #fee8c3 30%,
    #f8eac3 33.33%,
    #f3ecc3 36.67%,
    #edeec5 40%,
    #e6efc7 43.33%,
    #e0f1ca 46.67%,
    #daf2cd 50%,
    #d4f3d1 53.33%,
    #cef4d6 56.67%,
    #c9f5db 60%,
    #c3f6e0 63.33%,
    #bff6e5 66.67%,
    #bbf7eb 70%,
    #b8f7f0 73.33%,
    #b6f6f6 76.67%,
    #b5f6fb 80%,
    #b5f6ff 83.33%,
    #b7f5ff 86.67%,
    #b9f4ff 90%,
    #bdf3ff 93.33%,
    #c1f1ff 96.67%,
    #c7f0ff 100%
  );
}
</style>