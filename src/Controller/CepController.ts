import CepModel from "../Model/CepModel";

export default class CepController {

    static ceps: CepModel[] = [];

    static async fetchCep(cep: string): Promise<void> {
        try {
            console.log(`Fetching data for CEP: ${cep}`);

            const response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
            const data = await response.json();

            console.log(data);

            if (!data.erro) {
                const cepModel = new CepModel(
                    data.cep,
                    data.logradouro,
                    data.bairro,
                    data.localidade,
                    data.uf
                );
                this.ceps.push(cepModel);
            } else {
                console.log("cep not found");
            }

        } catch (error) {
            console.error("error fetching data:", error);
        }
    }
    static getCeps(): CepModel[] {
        return this.ceps;
    }
}
