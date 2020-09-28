var azure = require("azure-storage");
module.exports = async function (context, req) {
    var tableSvc = azure.createTableService('apteraarduino',process.env["AzureTableStorageAccessKey"]);
    var query = new azure.TableQuery()
        .top(1)
        .where('RowKey eq ?','000062ce-81c4-4c2d-9d7d-8a56be704c1d');
    
    tableSvc.queryEntities('cpdata', query, null, function(error, result, response) {
    if (!error) {
        // result.entries contains entities matching the query
        
        context.res = {
        // status: 200, /* Defaults to 200 */
        headers: {
            'Content-Type': 'application/json'
        },
        body: result.entries[0].value._
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