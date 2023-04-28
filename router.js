const router = require("express").Router();
const { getJobs, createJob, getJobById, updateJob, deleteJob } = require("./controllers/jobs");

router.get("/jobs", getJobs);
router.get("/jobs/:jobId", getJobById);
router.post("/jobs", createJob);
router.put("/jobs/:jobId", updateJob);
router.delete("/jobs/:jobId", deleteJob);

module.exports = router;
