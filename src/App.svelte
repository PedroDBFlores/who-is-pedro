<script lang="ts">
    import { colorScheme, Grid, SvelteUIProvider } from "@svelteuidev/core";
    import Heading from "./components/heading.svelte";
    import About from "./components/about.svelte";
    import ProfessionalPath from "./components/professional-path.svelte";

    function toggleTheme() {
        colorScheme.update((v) => (v === "light" ? "dark" : "light"));
    }
</script>

<main>
    <SvelteUIProvider withGlobalStyles themeObserver={$colorScheme}>
        <Grid spacing="md" cols={3}>
            <Grid.Col>
                <Heading changeTheme={toggleTheme} />
            </Grid.Col>
            <Grid.Col span={3}>
                <About />
            </Grid.Col>
            <Grid.Col span={3}>
                <ProfessionalPath />
            </Grid.Col>
        </Grid>
    </SvelteUIProvider>
</main>

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
