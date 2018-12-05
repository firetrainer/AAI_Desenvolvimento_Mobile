class Customer {
    constructor(
        public id: string,
        public userEmail: string,
        public date: string,
        public name: string,
        public age: number,
        public cpf: string,
        public foneNumber: string,
        public password: string,
        public imgPath: string,
        public location: string
    ) { }
}

export { Customer }