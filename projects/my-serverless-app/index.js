module.exports.hello = function (event, context, callback){

  let response = {
      'statusCode': 200,
      'body': "HELLO WORLD!"
  };

  callback(null,response);

};
