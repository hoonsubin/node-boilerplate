import app from './app';

// the entry point for the server application
(() => {
    app().catch((e) => {
        console.log(e);
    });
})();
