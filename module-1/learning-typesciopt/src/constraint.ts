// constraint : strict rules deya

type Student = { id: number; name: string; dateOfBirth: string; class: string };

const addStudentToCourse1 = <T extends Student>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const studentt1 = {
  id: 123,
  name: "Mezba Hossain",
  hasPen: true,
};

const studentt2 = {
  id: 321,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const studentt3 = {
  id: 444,
  name: "Abdur Rakib Islam",
  hasWatch: true,
  dateOfBirth: "20-20-2020",
  class: "1",
  isloll: false,
};

const constraintResult1 = addStudentToCourse1(studentt3);
console.log(constraintResult1);