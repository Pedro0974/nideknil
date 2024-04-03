// Esta é a definição da classe Vaga, que representa uma vaga de emprego.
// Cada objeto Vaga possui propriedades como título, empresa, localização, descrição da vaga, requisitos, salário e datas de início e término.
// O construtor da classe inicializa essas propriedades com os valores fornecidos ao criar uma nova instância de Vaga.
// Esta classe é exportada para ser utilizada em outros arquivos que necessitam representar informações sobre vagas de emprego.

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