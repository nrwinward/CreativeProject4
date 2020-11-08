<template>
    <div class="starships">
        <h1>Overview of the Spaceships</h1>
        <hr>
        <ShipList :ships="ships" />
    </div>
</template>

<script>
    import ShipList from "../components/Ships.vue"
    export default {
        name: 'Starships',
        components: {
            ShipList
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
