<template>
    <ion-icon :name="icon" :class="customClass"></ion-icon>
</template>

<script>
export default {
    props: ['icon', 'customClass']
}
</script>