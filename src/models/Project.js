import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  images: [String],
  purpose: String,
  technologies: [String],
  githubLink: String,
  liveDemo: String,
});

export default mongoose.model("Project", projectSchema);
