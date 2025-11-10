// spread operator

// const friends = ["Rahim", "Karim"];

const schoolFriends = ["pintu", "chintu", "bulbul"];

const collegeFriends = ["Mr. Smart", "Mr very very smart"];

// const friends = ["Rahim", "Karim", ["pintu", "chintu", "bulbul"]];

// friends.push(...schoolFriends);
// friends.push(...collegeFriends);

// console.log(friends);

const userDetails = { name: "Mezba", phoneNo: "0170000000" };

const otherInfo = { hobby: "outing", favouriteColor: "Black" };

const userInfo = { ...userDetails, ...otherInfo };

// console.log(userInfo);


const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) =>
    console.log(`Send invitation to ${friend}`)
  );
};

sendInvite("pintu", "cinthu", "bulbul", "chulbul", "mezba");