declare  let requirejs:any;

requirejs.config({
    baseUrl: 'libs/requirejs',
    paths: {
        app: '../../js',
        knockout: "../../libs/knockout/knockout-3.4.1.debug"
    }
});

// Start loading the main app file. Put all of
// your application logic in there.
requirejs(['main']);