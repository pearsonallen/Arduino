let azure = require("azure-storage");
module.exports = async function (context, req) {
    context.res = {
        body: await GetValue()
    }
}

async function GetValue() {
    let tableSvc = azure.createTableService('apteraarduino',process.env["AzureTableStorageAccessKey"]);
    let query = new azure.TableQuery()
        .top(1)
        .where('RowKey eq ?','000062ce-81c4-4c2d-9d7d-8a56be704c1d');
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