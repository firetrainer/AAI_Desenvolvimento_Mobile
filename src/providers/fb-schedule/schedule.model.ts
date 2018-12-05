class Schedule {
    constructor(
        public id: string,
        public userEmail: string,
        public date: string,
        public customerName: string,
        public trainerName: string,
        public dateSchedule: string,
        public timeSchedule: string,
        public gatheringPlace: string
    ) { }
}

export { Schedule }