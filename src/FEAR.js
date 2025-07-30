const path = require("path"),
      express = require("express"),
      compression = require("compression"),
      cookieParser = require("cookie-parser"),
      cors = require("cors"),
      __dirname1 = path.resolve();


module.exports = FEAR = (( app ) => {
  const env = require("dotenv").config({ path:".env"});
  if ( !env || env.error ) throw env.error;
  this.app = app;

  this.env = env;
  //this.logo = this.env.FEAR_LOGO;
  this.app.set("PORT", 5000);
  this.app.use(express.json({limit: '10mb'}));
//  this.origins = this.env.ALLOWED_ORIGINS.split(',').map(item => item.trim());

/*
  this.app.use(compression());
  this.app.use(cookieParser());

  this.cconfig = {
    credentials: true,
    origin: (origin, callback) => {
      if (!origin || this.origins.indexOf(origin) !== -1) { 
        callback(null, true)
      } else {
        this.log.error("Origin :: " + origin + " :: Not allowed by CORS");
        callback(new Error("Not allowed by CORS"));
      }
    }
  }

*/
  this.app.use((req, res, next) => {
   // this.log.info( "FEAR API Query :: " + req.url );
   console.log('QUERY ' + req.url);

    res.locals.user = req.user;
    next();
  })

  this.app.use(cors()); 


  this.app.use(express.static(path.join(__dirname, 'public'))); // Assuming your SPA files are in a 'public' folder

    // Handle requests for the single page application
  this.app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Send the main HTML file
  });

  //this.app.use(errors.notFound);
  //this.app.use(errors.development);

  return this;

})( express() );


