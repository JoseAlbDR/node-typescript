import patientsData from "../data/patients";
import { Patient, NonSsnPatient } from "../types";

const patients: Patient[] = patientsData;

const getPatients = (): NonSsnPatient[] => {
  return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation,
  }));
};

const addPatient = () => {
  return null;
};

export default {
  getPatients,
  addPatient,
};
