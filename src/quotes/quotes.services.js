const quoteController = require('./quotes.controllers')

const getAllQuotes = (req, res) => {

  //* quoteController.findAllquotes()
  //* try {
  //*   const data = await quoteController.findAllquotes()
  //*   res.status(200).json(data)
  //* } catch (error) {
  //*   res.status(400).json({ message: error.message })
  //* }

  quoteController.findAllquotes()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(error => {
      res.status(400).json({ message: error.message })
    })

};

const getQuoteById = (req, res) => {
  const id = req.params.id
  quoteController.findQuoteById(id)

    .then(data => {
      if (data) {
        res.status(200).json(data)
      } else {
        res.status(404).json({ message: 'Invalid Quote ID' })
      }
    })
    .catch(error => {
      res.status(400).json({ message: error.message })
    });
};

const postQuote = (req, res) => {
  const { quote, author, year } = req.body;
  quoteController.createQuote({ quote, author, year })
    .then(data => {
      res.status(201).json(data)
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}

const patchQuote = (req, res) => {
  const id = req.params.id
  const { quote, author, year } = req.body
  quoteController.updateQuote(id, { quote, author, year })
    .then(data => {
      if (data) {
        res.status(200).json({ message: 'Quote update succesfully whit id' + id })
      } else {
        res.status(404).json({ message: 'Invalid Quote ID, update failed' })
      }
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}

const deleteQuote = (req, res) => {
  const id = req.params.id;
  quoteController.deleteQuote(id)
    .then(data => {
      if (data) {
        res.status(204).json({ message: 'Quote delete succesfully whit id' + id })
      } else {
        res.status(404).json({ message: 'Invalid Quote ID, delete failed' })
      }
    })
    .catch(err => {
      res.status(400).json({ message: err.message })
    })
}

module.exports = {
  getAllQuotes,
  getQuoteById,
  postQuote,
  patchQuote,
  deleteQuote
}