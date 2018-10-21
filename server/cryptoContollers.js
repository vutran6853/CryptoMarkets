let getCryptoname = (req, res, next) => {
  // console.log(req)

  const dbInstance = req.app.get('db');
  // console.log('REQ.PARMA: ', req.params)
  // console.log('REQ.BODY: ', req.body)

  dbInstance.get_coinname()
  .then((response) => {
    // console.log('RESPONSE: ', response)
    res.status(200).send(response)
  })
  .catch((error) => {
    res.status(500).send('Oop, Something have Happen unable to complete this request')
    // console.log(error);
  })

}

let getCryptoImage = (req, res, next) => {
  
  const dbInstance = req.app.get('db');

  dbInstance.getCrypto_Image()
  .then((response) => {
    // console.log('RESPONSE: ', response)
    res.status(200).send(response)
  })
  .catch((error) => {
    res.status(500).send('Oop, Something have Happen unable to complete this request')
    // console.log(error);
  })

}

module.exports = {
  getCryptoname,
  getCryptoImage
}