<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store';
import AppLoader from '../components/AppLoader.vue';

export default {
    name: "Projects",
    components: { ProjectCard, AppLoader },
    data() {
        return {
            projects: [],
            store,
            currentPage: 1,
            lastPage: null,
            totalProjects: null,
            loading: false
        };
    },
    created() {
        this.getProjects(2);
    },
    methods: {
        getProjects(page) {
            const options = {
                params: {
                    page: page
                }
            }
            this.loading = true;
            axios.get(`${this.store.apiBaseUrl}/api/projects`, options).then(resp => {
                this.projects = resp.data.results.data;
                this.currentPage = resp.data.results.current_page;
                this.lastPage = resp.data.results.last_page;
                this.totalProjects = resp.data.results.total;
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
        <div v-else class="row row-cols-4 justify-content-center g-3 mt-5">
            <ProjectCard :project="project" v-for="project in projects" :key="project.id" />
        </div>
        <nav class="navigation d-flex justify-content-between mt-5">
            <div>
                page {{ currentPage }} in {{ lastPage }}
            </div>
            <div>
                <a class="btn btn-success ms-2" :class="currentPage == 1 ? 'disabled' : ''" href=""
                    @click.prevent="getProjects(currentPage - 1)">Back</a>
                <a class="btn btn-success ms-2" :class="currentPage == lastPage ? 'disabled' : ''" href=""
                    @click.prevent="getProjects(currentPage + 1)">Next</a>
            </div>
        </nav>
    </div>
</template>

