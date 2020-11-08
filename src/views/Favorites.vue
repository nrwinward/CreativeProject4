<template>
    <div class="favorites">
        <h1>Favorite Ships</h1>
        <hr>
        <StarredList :ships="ships"/>
    </div>
</template>

<script>
    import StarredList from "../components/Starred.vue"
    export default {
        name: 'Favorites',
        components: {
            StarredList
        },
        data() {
            return {}
        },
        computed: {
            ships() {
                return this.$root.$data.ships;
            }
        },
    }

</script>

<style>
    .favorites {
        min-height: 87.5vh;
    }

</style>
