<script>
export default {
    name: 'ProjectCard',
    data() {
        return {
            contentMaxLenght: 50
        }
    },
    props: {
        project: Object,
    },
    methods: {
        truncateText(text) {
            if (text && text.length > this.contentMaxLenght) {
                return text.substr(0, this.contentMaxLenght) + '...'
            }
            return text;
        }
    }
}
</script>

<template>
    <div class="col-3">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">{{ project.title }}</h3>
                <p class="text-danger" v-for="technology in project.technologies" :key="technology.id">
                    #{{ technology.title }}
                </p>
                <p class="text-end text-warning">{{ project.type ? project.type.name : 'No Type Assigned' }}</p>
                <p class="card-text">{{ truncateText(project.content) }}</p>
                <a href="" class="btn btn-primary"></a>
            </div>
        </div>
    </div>
</template>