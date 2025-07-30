#!/usr/bin/env node
const FEAR = require("./src/FEAR");
require("dotenv").config();

(async () => {

    async function start() {
        
        const port = FEAR.app.get("PORT");
        console.log(FEAR.logo);
	FEAR.app.listen( port, (err) => {
	if ( err ) return;
	console.log(`FEAR DREAD API Initialized :: Port ${port}`);
    });

        process.on("unhandledRejection", (error) => { 
            //FEAR.log.error("Promise Error :: ", error);
            process.exit(1);
        });

        process.on("uncaughtException", (err) => {
            //FEAR.log.error("Server Error", err );
            FEAR.app.listen().close(() => {
                process.exit(1);
            })
        });
    }

    await start();

})( FEAR );





