import breakhabit from "../models/breakhabit.js";
import sleephabit from "../models/sleephabit.js";
import waterhabit from "../models/waterhabit.js";
import BreakhabitService from "./BreakhabitService.js";
import Service from "./Service.js";
import SleephabitService from "./SleephabitService.js";
import WaterhabitService from "./WaterhabitService.js";

const waterhabitService = new WaterhabitService(waterhabit);
const sleephabitService = new SleephabitService(sleephabit);
const breakhabitService = new BreakhabitService(breakhabit);

class UserService extends Service {
  constructor(model) {
    super(model);
  }

  async findByEmail(email) {
    try {
      const item = await this.model.findOne({ email });
      return item;
    } catch (error) {
      throw error;
    }
  }

  async findByEmailOrCreateIfNotFound(data) {
    try {
      let item = await this.model.findOne({ email: data.email });

      if (!item) {
        item = await this.insert(data);

        await waterhabitService.insert({ userId: item.data._id });
        await sleephabitService.insert({ userId: item.data._id });
        await breakhabitService.insert({ userId: item.data._id });
      }

      return item;
    } catch (error) {
      throw error;
    }
  }

  
  async getStats(userId) {
    try {
      const user = await this.model.findById(userId);

      const waterHabits =  await waterhabitService.getByUserId(userId);
      const sleepHabits =  await sleephabitService.getByUserId(userId);
      const breakHabits =  await breakhabitService.getByUserId(userId);
      
      return {user, waterHabits, sleepHabits, breakHabits};
    } catch (error) {
      throw error;
    }
  }
}

export default UserService;
