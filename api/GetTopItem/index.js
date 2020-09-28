var azure = require("azure-storage");
const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {

    var query = new azure.TableQuery()
        .select(['value'])
        .top(1)
        .where('timestamp > ?', '2020-09-27');
        context.res = {
            // status: 200, /* Defaults to 200 */
            body: query//responseMessage
        };
    // const value = req.query.value;
    
    // var tableSvc = azure.createTableService('apteraarduino',process.env["AzureTableStorageAccessKey"]);
    
    // var entity = {
    //     PartitionKey: {'_':'chrisp_1'},
    //     RowKey: {'_':uuidv4()},
    //     value: {'_':value}
    // };

    // tableSvc.insertEntity('cpdata',entity,function(error, result, response) {
    //     if (!error){
    //         context.res = {
    //             // status: 200, /* Defaults to 200 */
    //             body: 'Good'//responseMessage
    //         };
    //     } else {
    //         context.res = {
    //             // status: 200, /* Defaults to 200 */
    //             body: 'Error'//responseMessage
    //         };
    //     }
    // });

    context.log('JavaScript HTTP trigger function processed a request.');
}