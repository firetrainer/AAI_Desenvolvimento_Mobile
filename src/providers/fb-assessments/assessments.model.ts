class Assessments {
    constructor(
        public id: string,
        public date: string,
        public userEmail: string,
        public id_trainer: string,
        public id_customer: string,
        public description: string,
        public classification: string,
        public evaluation: string,
    ) { }
}

export { Assessments }