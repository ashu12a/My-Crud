const Joi = require("joi");
const Content = require("../model/Content");

const contentController = {
  async create(req, res, next) {
    const contentCreateSchema = Joi.object({
      title: Joi.string().required(),
      lang: Joi.string().required(),
      content: Joi.string().required(),
    });
    // validate user input
    const { error } = contentCreateSchema.validate(req.body);

    // if error occured -> return error by middleware
    if (error) {
      return next(error);
    }

    // Getting All Values using the request
    const { title, content ,lang } = req.body;

    //Store In DB
    try {
      const createContent = new Content({
        title, content ,lang
      });
      result = await createContent.save();
      res.status(201).json({ msg: "Added Successfully" });
    } catch (error) {
      next(error);
    }
  },
  async getAll(req, res, next) {
    try {
      const data = await Content.find();
      res.status(200).json(data);
    } catch (error) {
      return next(error);
    }
  },
  async getById(req, res, next) {
    // Getting All Values using the request
    const _id = req.params.id;
    try {
      const singledata = await Content.findById(_id);
      res.status(200).json(singledata);
    } catch (error) {
      return next(error);
    }
  },
  async update(req, res, next) {
    // Creating UserRegister Schema 
    const contentRegisterSchema = Joi.object({
      title: Joi.string().required(),
      content: Joi.string().required(),
      lang: Joi.string().required(),
    });

    // validate user input
    const { error } = contentRegisterSchema.validate(req.body);

    // if error occured -> return error by middleware
    if (error) {
      return next(error);
    }

    try {
      const contentToUpdate = req.body;

      const _id = req.params.id;

      await Content.findByIdAndUpdate(
        _id,
        contentToUpdate,
        { new: true }
      );

      return res.status(201).json({ msg: "Updated Successfully" });
    } catch (error) {
      return next(error);
    }
  },
  async delete(req, res, next) {
    const id = req.params.id;
    try {
      await Content.findByIdAndDelete(id);
      res.status(200).json({ msg: "Deleted Successfully" });
    } catch (error){
      return next(error);
    }
  },
};

module.exports = contentController;
