requirejs.config({
    baseUrl: 'js',
    paths: {
        app: 'app'
    }
});
requirejs(['app'], function (app) {
    console.log('Modulo APP carregado', app);
});
