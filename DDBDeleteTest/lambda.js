let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {

    ddb.delete({
        TableName: 'BTMenu',
        Key: { 'itemCode': 'CHIKNPZ' }
    }).promise().then(function (data) {
        console.log("Deleted", data);
        callback(null, data);

    }).catch(function (err) {
        console.log("Error", err);
        callback(err);
    });
}