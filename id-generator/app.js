const uuidv1 = require('uuid/v1');
let response;

exports.lambdaHandler = async (event, context) => {
    try {
        const uuid = uuidv1();
        response = {
            'statusCode': 200,
            'body': JSON.stringify({
                unique_id: uuid,
            })
        }
    } catch (err) {
        console.log(err);
        return err;
    }

    return response
};
