declare const requirejs: any;
requirejs.config({
    baseUrl: 'js',
    paths: {
        ctrlHome: 'controllers/home'
    }
});
requirejs(['app'], (app: any) => {

    console.log('Modulo APP carregado', app);
});