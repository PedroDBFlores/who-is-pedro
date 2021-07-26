<script lang="ts">
    import {MaterialApp} from "svelte-materialify"
    import Heading from "./components/heading.svelte"
    import About from "./components/about.svelte"
    import ProfessionalPath from "./components/professional-path.svelte"

    let theme: "dark" | "light" = "light"

    function toggleTheme() {
        if (theme === "light") {
            theme = "dark"
        } else {
            theme = "light"
        }
    }
</script>

<MaterialApp {theme}>
    <main>
        <Heading changeTheme={toggleTheme}/>
        <div class="pa-5">
            <About/>
        </div>
        <div class="pa-5">
            <ProfessionalPath/>
        </div>
    </main>
</MaterialApp>

<style>
    main {
        text-align: center;
        padding: 1em;
        max-width: 240px;
        margin: 0 auto;
    }

    @media (min-width: 640px) {
        main {
            max-width: none;
        }
    }
</style>
