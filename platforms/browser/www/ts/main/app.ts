declare  let requirejs:any;

requirejs.config({
    baseUrl: 'libs/requirejs',
    paths: {
        app: '../../js',
        knockout: "../../libs/knockout/knockout-min-3.4.1"
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main']);