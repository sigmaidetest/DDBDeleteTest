let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {

    let itemCode = 'CHIKNPZ';
    ddb.delete({
        TableName: 'BTMenu',
        Key: {
            'itemCode': itemCode
        }
    }).promise().then(function (data) {
        console.log("Deleted", itemCode, data);
        callback(null, data);

    }).catch(function (err) {
        console.log("Error", itemCode, err);
        callback(err);
    });
}