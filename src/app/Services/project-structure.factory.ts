import { ProjectStructureModel } from '../Models/project-structure.model';

export function ProjectStructureFactory() {
  return (project: ProjectStructureModel): ProjectStructureModel => {
    return project;
  };
}