function compareArrays(arr1, arr2) {
    // return JSON.stringify(arr1) === JSON.stringify(arr2);

    // return arr1.toString() === arr2.toString();

    // return arr1.length === arr2.length && arr1.every((value, index) => value == arr2[index]);

    if (arr1.length !== arr2.length) {
        return false;
      }
    
      for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
          return false;
        }
        return true;
      }

    /*

    if (arr1 instanceof Array && arr2 instanceof Array) {
        if (arr1.length !== arr2.length) {
          return false;
        }
    
        for (let i = 0; i< arr1.length; i++) {
          if (!compareArrays(arr1[i], arr2[i])) {
            return false;
          }
        }
        return true;
      }
      return arr1 === arr2;

    */
}

function getUsersNamesInAgeRange(users, gender) {

    /*
    
    let male = users.filter((item) => item.gender === "мужской");
    let female = users.filter((item) => item.gender === "женский");
    
    if (users.length !== 0) {
        if (gender === "мужской") {
            return male.reduce((prev, user) => prev + user.age, 0) / male.length;
        } else if (gender === "женский") {
            return female.reduce((prev, user) => prev + user.age, 0) / female.length;
        } else {
            return 0;
        }
    } else {
        return 0;
    }

    */

    let filteredUsers = users.filter((item) => item.gender === gender);

    if (filteredUsers.length === 0) return 0;
    return filteredUsers.reduce((prev, user) => prev + user.age, 0) / filteredUsers.length;
}
