<template>
    <li>
        <h2>{{ team.id }}</h2>
        <h3>{{ team.name }}</h3>
    </li>
</template>

<script>
export default {
    props: ['team']
}
</script>