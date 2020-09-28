var azure = require("azure-storage");
const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {

    var tableSvc = azure.createTableService('apteraarduino',process.env["AzureTableStorageAccessKey"]);
    var query = new azure.TableQuery()
        .select(['value'])
        .top(1);
        .where('Timestamp ge datetime 2020-09-28T02:46:47.135Z');
        
    
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