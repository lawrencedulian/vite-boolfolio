<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';

export default {
    name: "AppMain",
    components: { ProjectCard },
    data() {
        return {
            projects: [],
        };
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            axios.get("http://127.0.0.1:8000/api/projects").then(resp => {
                this.projects = resp.data.results;
            });
        },
    },
}

</script>

<template>
    <div class="container">
        <h2 class=" text-center">Projects</h2>
        <div class="row row-cols-4 justify-content-center g-3">
            <ProjectCard :project="project" v-for="project in projects" :key="project.id" />
        </div>
    </div>
</template>

