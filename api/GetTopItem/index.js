var azure = require("azure-storage");
const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {

    var tableSvc = azure.createTableService('apteraarduino',process.env["AzureTableStorageAccessKey"]);
    var query = new azure.TableQuery()
        .top(1);
        
        tableSvc.queryEntities('cpdata', query, null, function(error, result, response) {
        if (!error) {
          // result.entries contains entities matching the query
          context.res = {
            // status: 200, /* Defaults to 200 */
            body: result.entries
            };
        } else {
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: "error"
                };
        }
    });
    

    context.log('JavaScript HTTP trigger function processed a request.');
}