<script>
export default {
    name: 'AppHeader',
    data() {
        return {
            navigation: [
                {
                    label: 'Home',
                    routerName: 'home'
                },
                {
                    label: 'Projects',
                    routerName: 'projects'
                },
                {
                    label: 'About Us',
                    routerName: 'about'
                }
            ]
        }
    }
}
</script>

<template>
    <header>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li v-for="(navItem, index) in navigation" :key="index" class="nav-item">
                            <router-link :to="{ name: navItem.routerName }" class="nav-link">
                                {{ navItem.label }}
                            </router-link>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="http://127.0.0.1:8000/admin">Admin</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>