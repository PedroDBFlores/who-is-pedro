<script lang="ts">
    export let changeTheme: () => void;

    import { Button, Icon } from "svelte-materialify";
    import { mdiWeatherSunny } from "@mdi/js";
</script>

<div class="d-flex justify-space-between">
    <h2>Who is Pedro Flores?</h2>
    <Button
        aria-label="Toggle theme"
        on:click={changeTheme}
        icon
        class="gray-text"
    >
        <Icon path={mdiWeatherSunny} />
    </Button>
</div>
