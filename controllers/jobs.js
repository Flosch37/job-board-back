const Job = require('../model/job');

const getJobs = async (req, res) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getJobById = (req, res) => {
  const jobId = req.params.jobId;
  Job.findOne({ id: jobId })
    .then((job) => {
      console.log(job.requirements.items)
      if (job) {
        res.json(job);
      } else {
        res.status(404).json({ message: 'Job not found' });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: err.message });
    });
};

const createJob = async (req, res) => {

  const job = new Job({
    id: req.body.id,
    postedSince: req.body.postedSince,
    title: req.body.title,
    company: req.body.company,
    type: req.body.type,
    location: req.body.location,
    description: req.body.description,
    requirements: req.body.requirements,
    whatwedo: req.body.whatwedo
  });


  try {
    const newJob = await job.save();
    res.status(201).json(newJob);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const updateFields = {
      id: req.body.id,
      postedSince: req.body.postedSince,
      title: req.body.title,
      company: req.body.company,
      type: req.body.type,
      location: req.body.location,
      description: req.body.description,
      requirements: req.body.requirements,
      whatwedo: req.body.whatwedo
    };
    const job = await Job.findOneAndUpdate({id: jobId}, updateFields, {new: true});
    if (job) {
      res.json(job);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



const deleteJob = async (req, res) => {
  try {
    const jobId = req.params.jobId;
    const job = await Job.findOneAndDelete({id: jobId});
    
    if (job) {
      res.json({ message: 'Job deleted successfully' });
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



module.exports = { getJobs, getJobById, createJob, updateJob, deleteJob };
