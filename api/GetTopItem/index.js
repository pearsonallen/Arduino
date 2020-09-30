let azure = require("azure-storage");
module.exports = async function (context, req) {
    context.res = {
        body: await GetValue()
    }
}

async function GetValue() {
    let tableSvc = azure.createTableService('apteraarduino',process.env["AzureTableStorageAccessKey"]);

    let lstHr = new Date(Date.now.ear)

    let query = new azure.TableQuery()
        .top(1)
        .where('Timestamp >= ?date?', new Date(new Date().setSeconds(-10)));
        
    let r = await queryEntities(tableSvc, 'cpdata', query, null);
    return r.entries[0].value._;
}

async function queryEntities(tableService, ...args) {
    return new Promise((resolve, reject) => {
        let promiseHandling = (err, result) => {
            if (err) {
                reject(err);
            } else {
                resolve(result);
            }
        };
        args.push(promiseHandling);
        tableService.queryEntities.apply(tableService, args);
    });
};