class Vaga {
    constructor(
            id, 
            title, 
            company, 
            location, 
            description, 
            requirements, 
            salary, 
            datePosted, 
            deadline
        ) {

        this.id = id;
        this.title = title;
        this.company = company;
        this.location = location;
        this.description = description;
        this.requirements = requirements;
        this.salary = salary;
        this.datePosted = datePosted;
        this.deadline = deadline

    }
}

export default Vaga;