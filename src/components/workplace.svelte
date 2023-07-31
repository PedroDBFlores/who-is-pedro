<script lang="ts" context="module">
    export type WorkplaceInfo = {
        name: string;
        startDate: Date;
        endDate?: Date;
        description: string;
        technologiesUsed: string[];
    };
</script>

<script lang="ts">
    import { Card, Chip, Text } from "@svelteuidev/core";

    export let workspaceInfo: WorkplaceInfo;
</script>

<Card shadow="md" padding="lg" withBorder>
    <Card.Section>
        <Text>{workspaceInfo.name}</Text>
        <Text>
            {workspaceInfo.startDate.toLocaleDateString()} to {workspaceInfo.endDate?.toLocaleDateString() ??
                "now"}
        </Text>
    </Card.Section>
    <Text>{workspaceInfo.description}</Text>
    <p>Technologies</p>
    {#each workspaceInfo.technologiesUsed as technology}
        <Chip disabled>{technology}</Chip>
    {/each}
</Card>
