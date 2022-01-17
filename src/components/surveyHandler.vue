<template>
  <div>
    <ul class="list-holder">
      <li>
        <button>1</button>
      </li>
      <li>
        <button>2</button>
      </li>
      <li>
        <button>3</button>
      </li>
      <li>
        <button>4</button>
      </li>
    </ul>
    <ul class="list-holder">
      <li>
        <button>1</button>
      </li>
      <li>
        <button>2</button>
      </li>
      <li>
        <button>3</button>
      </li>
      <li>
        <button>4</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
	name: "surveyHandler"
}
</script>

<style scoped>
.list-holder {
    display: flex;
    list-style-type: none;
}
</style>
