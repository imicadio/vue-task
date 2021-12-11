<template>
    <ion-icon :name="icon" :class="customClassIcon"></ion-icon>
</template>

<script>
export default {
    props: ['icon', 'customClassIcon']
}
</script>