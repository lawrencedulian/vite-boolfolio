<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'SingleProject',
    data() {
        return {
            store,
            project: {}
        }
    },
    created() {
        const slug = this.$route.params.slug;
        axios.get(`${this.store.apiBaseUrl}/api/projects/${slug}`).then(resp => {
            if (resp.data.success) {
                this.project = resp.data.project;
            } else {
                this.$router.push({ name: "not-found" });
            };
        });
    },
    computed: {
        type() {
            return this.project.type ? this.project.type.name : 'No Type';
        }
    }
}
</script>

<template>
    <main>
        <div class="container mt-3">
            <h2 class="text-center">{{ project.title }}</h2>
            <h3 class="text-center text-success">{{ type }}</h3>
            <div class="d-flex justify-content-between">
                <h5>{{ project.created_at }}</h5>
                <p> {{ project.slug }}</p>
            </div>
            <p class="mt-3">{{ project.content }}</p>
        </div>
    </main>
</template>