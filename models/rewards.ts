import { Schema, model } from 'mongoose'

import { IReward } from "../shared/interfaces/userDashboard";


const rewardSchema: Schema = new Schema({
   title: {
      type: String,
      required: true
   },
   services: {
      type: [ {
         title: String,
         points: Number,
      } ],
      required: true
   }
})

export default model<IReward>('Reward', rewardSchema)