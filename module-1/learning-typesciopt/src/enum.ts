// enum

// set of fixed string leteral ek jaigai rakhe

// type UserRoles = "Admin" | "Editor" | "Viewer";


enum UsersRoles {
    Admin = "Admin",
    Editor = "Editor",
    Viewer = "Viewer",
}

const canHEdit = (role: UsersRoles) => {
  if (role === UsersRoles.Admin || role === UsersRoles.Editor) {
    return true;
  } else return false;
};

const isEditPermission = canHEdit(UsersRoles.Admin);
console.log(isEditPermission);