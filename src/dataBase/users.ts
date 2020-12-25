interface IUser {
    id: number,
    username: string,
    password: string
};

interface IUsers {
    users: Array<User>,
    getData: () => Array<User>,
    updateData: () => void,
}

class Users implements IUsers {
    users: Array<User> = [
        {
            id: 0,
            username: 'admin', 
            password: 'admin',
        },
        {
            id: 1,
            username: 'paxom4ik',
            password: '1234',
        },
        {
            id: 2,
            username: "Kokosik11",
            password: "SuperHard123Password"
        }
    ]

    getData() {
        return this.users;
    }

    updateData() {}
}
class User implements IUser {
    id: number;
    username: string;
    password: string;
    constructor(id: number, username: string, password: string) {
        this.id = id;
        this.username = username;
        this.password = password;
    }
} 

export default Users;