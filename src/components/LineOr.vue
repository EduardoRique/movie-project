<template>
  <div class="line">
    ou
  </div>
</template>
<script>
export default {
  name: 'LineOr'
}
</script>

<style lang="scss">
.line {
  display: flex;
  align-items: center;
  text-align: center;
  color: #ff0000;
  &::before, &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #ff0000;
  }
  &:not(:empty)::before {
    margin-right: .56em;
  }
  &:not(:empty)::after {
    margin-left: .56em;
  }
}
</style>