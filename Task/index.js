module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    if(req.method === 'GET') {
        context.res = await get(req);
    }

    if(req.method === 'POST') {
        context.res =  await post(req);
    }
};

async function get(context, req) {
    // Example
    return {
        // status: 200, /* Defaults to 200 */
        body: 'this is a GET response'
    };
}

async function post(req) {
    // Example
    return {
        // status: 200, /* Defaults to 200 */
        body: 'this is a POST response'
    };
}