const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");

const ReactionSchema = new Schema(
  {
    reactionId: {
      // Mongooses ObjectId data
      type: Schema.Types.ObjectId,
      // Default value is set to a new ObjectId
      default: () => new Types.ObjectId(),
    },

    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },

    username: {
      type: String,
      required: true,
    },

    createdAt: {
      type: Date,
      // default value is current timestamp
      default: Date.now,
      // Use get method to format the timestamp on query
      get: (timestamp) => dateFormat(timestamp),
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);
module.exports = ReactionSchema;