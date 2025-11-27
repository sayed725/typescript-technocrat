// union |

type UserRole = "admin" | "user" | "mod";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "Admin Dashboardd";
  } else if (role === "user") {
    return "User dashboard";
  } else {
    return "mod dashboard";
  }
};

getDashboard("mod");

// intersection & 

type Employee = {
  id: string;
  name: string;
  phoneNo: string;
};

type Manager = {
  designation: string;
  teamSize: number;
};

type EmployeeManager = Employee & Manager;

const ChowdhuryShaheb: EmployeeManager = {
  id: "123",
  name: "Chowdhury Shaheb",
  phoneNo: "017",
  designation: "manager",
  teamSize: 20,
};