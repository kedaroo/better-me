import Service from "./Service.js";
import HttpResponse from "../helpers/HttpResponse.js";

class WaterhabitService extends Service {
  constructor(model) {
    super(model);
  }

  async getByUserId(userId) {

    try {
      const item = await this.model.findOne({ userId: userId });

      if (!item) {
        const error = new Error("Item not found");

        error.statusCode = 404;
        throw error;
      }

      return new HttpResponse(item);
    } catch (errors) {
      throw errors;
    }
  }

  async updateByUserId(userId, data) {
    try {
      const item = await this.model.findOneAndUpdate({userId}, data, { new: true });

      return new HttpResponse(item);
    } catch (errors) {
      throw errors;
    }
  }

  async addLog(userId, data) {
    try {
      const item = await this.model.findOneAndUpdate(
        {userId},
        { $push: { logs: {data} } },
        { new: true }
      );

      return item;
    } catch (errors) {
      throw errors;
    }
  }

}

export default WaterhabitService;
