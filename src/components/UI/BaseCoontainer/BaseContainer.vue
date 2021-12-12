<template>
    <div class="container" :class="customClass">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: ['customClass']
}
</script>

<style lang="scss">
@import './BaseContainer.scss'
</style>