# Custom Dots

```html
<n-carousel>
  <img
    class="carousel-img"
    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel1.jpeg"
  />
  <img
    class="carousel-img"
    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel2.jpeg"
  />
  <img
    class="carousel-img"
    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel3.jpeg"
  />
  <img
    class="carousel-img"
    src="https://naive-ui.oss-cn-beijing.aliyuncs.com/carousel-img/carousel4.jpeg"
  />
  <template #dots="{total, current, placement, to}">
    <span class="custom-dots"> {{current + 1}} / {{total}} </span>
  </template>
</n-carousel>
```

```css
.carousel-img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.custom-dots {
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
  transform: translateY(5px);
}
```
