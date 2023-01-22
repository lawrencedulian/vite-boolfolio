<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue';
import { store } from '../store';
import AppLoader from './AppLoader.vue';

export default {
    name: "AppMain",
    components: { ProjectCard, AppLoader },
    data() {
        return {
            projects: [],
            store,
            loading: false
        };
    },
    created() {
        this.getProjects();
    },
    methods: {
        getProjects() {
            this.loading = true;
            axios.get(`${this.store.apiBaseUrl}/api/projects`).then(resp => {
                this.projects = resp.data.results;
                this.loading = false;
            });
        },
    },
}

</script>

<template>
    <div class="container">
        <h2 class=" text-center">Projects</h2>
        <AppLoader v-if="loading" />
        <div v-else class="row row-cols-4 justify-content-center g-3">
            <ProjectCard :project="project" v-for="project in projects" :key="project.id" />
        </div>
    </div>
</template>

