<script lang="ts">
    import type { WorkplaceInfo } from "./workplace.svelte";
    import Workspace from "./workplace.svelte";

    const workplaces: WorkplaceInfo[] = [
        {
            name: "Viagens Abreu",
            startDate: new Date("11/15/2015"),
            endDate: new Date("08/01/2020"),
            description:
                "First actual job and as such, did learn a lot about programming in general. Thanks to all the colleagues that worked with me there, \
                 you taught me alot.\
                 I developed both frontend and backend (and database at one point, becoming almost fullstack since deployment was out of our hands)\
                 For the physical stores located all around Portugal. \
                 However, there comes a time where one needs more...",
            technologiesUsed: [
                "C#",
                "WCF",
                "WPF",
                "ASP.NET",
                "SQL Server",
                "AngularJS",
            ],
        },
        {
            name: "Volkswagen Digital Solutions",
            startDate: new Date("01/20/2020"),
            description: "New challenge that has completely changed and pushed me to be a better version of myself. Currently developing a application that helps customers easily enrol \
            in Volkswagen's digital ecosystem. Also for some months developed a project around managing onboarding and offboarding of colleagues, so the management of various accounts could be \
            easily done.",
            technologiesUsed: [
                "Kotlin",
                "React",
                "Node",
                "Golang",
                "MySQL",
                "Express",
            ],
        },
    ];
</script>

<div>
    <h4 class="text-left">Professional Path</h4>
    <div class="d-flex justify-center mt-4 mb-4">
        <div style="flex-grow:1;max-width:650px;">
            {#each workplaces as workplace}
                <Workspace workspaceInfo={workplace} />
            {/each}
        </div>
    </div>
</div>
