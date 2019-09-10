const routes = [{
    path: '/',
    component: () =>
        import ('layouts/MyLayout.vue'),
    children: [
        { path: '', component: () =>
                import ('pages/Index.vue') },
        { path: '/about', component: () =>
                import ('pages/About.vue') },
        { path: '/videos', component: () =>
                import ('pages/Videos.vue') }
    ]
}]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
    routes.push({
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    })
}

export default routes