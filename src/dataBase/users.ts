interface IUser {
    id: string,
    username: string,
    email: string,
    password: string,
    accountNumber: string,
    currentAccount: number,
};

interface IUsers {
    users: Array<User>,
    getData: () => Array<User>,
    updateData: () => void,
}

class Users implements IUsers {
    users: Array<User> = [
        {
            id: "0",
            username: 'admin', 
            email: 'admin@admin.com',
            password: 'admin',
            accountNumber: '4343720042819218',
            currentAccount: 25000,
        },
        {
            id: "1",
            username: 'paxom4ik',
            email: 'paxom4ik@gmail.com',
            password: '1234',
            accountNumber: '4343720042819219',
            currentAccount: 17000,
        },
        {
            id: "2",
            username: "Kokosik11",
            email: 'kokosik11@gmail.com',
            password: "SuperHard123Password",
            accountNumber: '4343720042819220',
            currentAccount: 18000,
        }
    ]

    getData() {
        return this.users;
    }

    updateData() {}
}
class User implements IUser {
    id: string;
    username: string;
    email: string;
    password: string;
    accountNumber: string;
    currentAccount: number;
    constructor(id: string, username: string, email: string, password: string, accountNumber: string, currentAccount: number) {
        this.id = id;
        this.username = username;
        this.email = email;
        this.password = password;
        this.accountNumber = accountNumber;
        this.currentAccount = currentAccount;
    }
} 

export default Users;