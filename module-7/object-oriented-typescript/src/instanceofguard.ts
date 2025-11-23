//oop : instance of type guard/ type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getSleep(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta ghumay`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta study kore`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  doTeach(numOfhours: number) {
    console.log(`${this.name} doinik ${numOfhours} ghonta poray`);
  }
}

// function guard

const isStudent = (user: Person) => {
  return user instanceof Student; // user is Student here
};

const isTeacher = (user: Person) => {
  return user instanceof Teacher; // user is Teacher here
};

const getUserInfo = (user: Person) => {
  if (isStudent(user)) {
    user.doStudy(5);
  } else if (isTeacher(user)) {
    user.doTeach(5);
  } else {
    user.getSleep(8);
  }
};

const student1 = new Student("Mr. Fakibaaz student");
const teacher1 = new Teacher("Mr. Smart Teacher");
const person1 = new Person("Mr. Common Person");

getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);
