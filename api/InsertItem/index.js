var azure = require("azure-storage");
const { v4: uuidv4 } = require('uuid');

module.exports = async function (context, req) {
    const value = req.query.value;
    
    var tableSvc = azure.createTableService('apteraarduino','NO3JnRJS2T0K7+0uicXmnDZySW6Tci7iin3jlPV1lz98gx0WDKG802orMoeLMDqBwUGd4/9nfqrtblRBShrwnA==');
    
    var entity = {
        PartitionKey: {'_':'chrisp_1'},
        RowKey: {'_':uuidv4()},
        value: {'_':value}
    };

    tableSvc.insertEntity('cpdata',entity,function(error, result, response) {
        if (!error){
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: 'Good'//responseMessage
            };
        } else {
            context.res = {
                // status: 200, /* Defaults to 200 */
                body: 'Error'//responseMessage
            };
        }
    });

    context.log('JavaScript HTTP trigger function processed a request.');
}