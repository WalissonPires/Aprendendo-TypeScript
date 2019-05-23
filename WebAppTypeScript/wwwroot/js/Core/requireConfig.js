requirejs.config({
    baseUrl: 'js',
    paths: {
        ctrlHome: 'controllers/home'
    }
});
requirejs(['app'], function (app) {
    console.log('Modulo APP carregado', app);
});
