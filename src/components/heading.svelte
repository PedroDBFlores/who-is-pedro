<script lang="ts">
    export let changeTheme: () => void;

    import { ActionIcon, Flex, Title, Tooltip } from "@svelteuidev/core";
    import { ComponentBoolean } from "radix-icons-svelte";
</script>

<Flex justify="space-between">
    <Title>Who is Pedro Flores?</Title>
    <Tooltip label="Toggle theme">
        <ActionIcon variant='outline' aria-label="Toggle theme" on:click={changeTheme}>
            <ComponentBoolean />
        </ActionIcon>
    </Tooltip>
</Flex>
