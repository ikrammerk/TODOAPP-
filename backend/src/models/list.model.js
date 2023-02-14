import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  }
},
  {
    versionKey: false
  });

const ListSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tasks: [TaskSchema],
},
  {
    versionKey: false
  });

const List = mongoose.model("lists", ListSchema);

export default List;