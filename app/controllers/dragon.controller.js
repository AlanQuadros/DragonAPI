const Dragon = require("../models/dragon.model.js");

exports.findAll = async (req, res) => {
  try {
    const dragons = await Dragon.findAll()
    res.status(200).send(dragons)
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao buscar os dragões."
    });
  }
};

exports.create = async (req, res) => {
  try {
    await Dragon.create({
      name: req.body.name,
      type: req.body.type,
    })
    res.status(201).send({ success: 'Dragão criado com sucesso' })
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao criar o dragão."
    });
  }
}

exports.update = async (req, res) => {
  try {
    await Dragon.update({
      name: req.body.name,
      type: req.body.type,
    }, {
      where: { id: req.params.id }
    })
    res.status(202).send({ success: 'Dragão atualizado com sucesso' })
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao atualizar o dragão."
    });
  }
}

exports.delete = async (req, res) => {
  try {
    await Dragon.destroy({
      where: { id: req.params.id }
    })
    res.status(202).send({ success: 'Dragão deletado com sucesso' })
  } catch (error) {
    res.status(500).send({
      message: error.message || "Erro ao deletar o dragão."
    });
  }
}
