import mongoose from 'mongoose';


// Team Member Schema
const TeamMemberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String },
  position: { type: String }
});

// General Team Schema
const TeamSchema = new mongoose.Schema({
  generalImage: { type: String },
  generalDescription: { type: String },
  members: [TeamMemberSchema]
});

// Developer Team Member Schema
const DeveloperSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  image: { type: String }
});

// Exporting models
const Team = mongoose.model('Team', TeamSchema);
const DeveloperTeam = mongoose.model('DeveloperTeam', DeveloperSchema);

module.exports = { Team, DeveloperTeam };
