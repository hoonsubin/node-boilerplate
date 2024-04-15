import app from './app.js';

// the entry point for the server application
(() => {
    app().catch((e: Error) => {
        console.log(e);
    });
})();
