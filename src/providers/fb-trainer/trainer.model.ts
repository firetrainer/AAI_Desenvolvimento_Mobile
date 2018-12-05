class Trainer {
    constructor(
        public id: string,
        public date: string,
        public name: string,
        public age: number,
        public cpf: string,
        public foneNumber: string,
        public userEmail: string,
        public password: string,
        public imgPath: string,
        public about_me: string,
        public skill_01: string,
        public skill_02: string,
        public exp_date: string,
        public evaluation_level: number,
        public evaluation_count: number,
        public qtt_students: number,
        public qtt_classes: number,
        public experience: number,
        public location: string
    ) { }
}

export { Trainer }