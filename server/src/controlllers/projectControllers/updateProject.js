const { Project } = require("../../database/database");

const updateProject = async (projectData) => {
    const {id, name, priority, description } = projectData
    try {
        const projectToUpdate = await Project.findByPk(id);
        if(!projectToUpdate){
            throw new Error("There's no a project with that ID")
        }
        if(!name || !priority || ! description){
            throw new Error("Incomplete data");
        }else{
            const projectUpdated = projectToUpdate.update({name, priority, description});
            return projectUpdated;
        }
    } catch (error) {
        throw error;
    }
}

module.exports = updateProject;