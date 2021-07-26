<script lang="ts" context="module">
    export type WorkplaceInfo = {
        name: string
        startDate: Date
        endDate?: Date
        description: string
        technologiesUsed: string[]
    };
</script>

<script lang="ts">
    import { Card, CardText, CardTitle, Chip } from "svelte-materialify"

    export let workspaceInfo: WorkplaceInfo
</script>

<Card shaped class="ma-2">
    <CardTitle>{workspaceInfo.name}</CardTitle>
    <div class="text-body-1">
        {workspaceInfo.startDate.toLocaleDateString()} to {workspaceInfo.endDate?.toLocaleDateString() ??
            "now"}
    </div>
    <CardText>
        <div class="text-body-2">{workspaceInfo.description}</div>
    </CardText>
    <CardText><div class="text-subtitle-1">Technologies</div></CardText>
    {#each workspaceInfo.technologiesUsed as technology}
        <Chip label class="ma-2 primary-color">{technology}</Chip>
    {/each}
</Card>
