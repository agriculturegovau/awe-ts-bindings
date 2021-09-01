require('dotenv').config()
const path = require("path");
const fs = require("fs");
const openapiTS = require("openapi-typescript").default;

async function main(){
  const profile_uri = process.env.PROFILE_SPEC_URI
  const intel_uri = process.env.INTEL_SPEC_URI
  const profile_api = await openapiTS(profile_uri);
  fs.writeFileSync("dist/profile-api.ts", profile_api)
  const intel_api = await openapiTS(intel_uri);
  fs.writeFileSync("dist/intel-api.ts", intel_api)
}

(async () => {
    try {
        var text = await main();
        console.log(text);
    } catch (e) {
      console.debug(e)
        // Deal with the fact the chain failed
    }
})();
