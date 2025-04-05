import { newPet } from "../payloads/PetPayloads";
import { SpartiNet } from "@spartify.io/spartify-engine";

const SpartAPI = new SpartiNet().HTTP;

class PetService {
    static addPet() {
        SpartAPI.BaseUrl("https://petstore.swagger.io/v2/");
        SpartAPI.setUrl("pet");
        SpartAPI.requestPost(newPet).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.name).to.eq(newPet.name);
            expect(response.body.status).to.eq(newPet.status);
            expect(response.body.category.name).to.eq(newPet.category.name);
            SpartAPI.setValue("petId", response.body.id);
        });
    }

    static findPetsByStatus(status: string) {
        SpartAPI.setUrl(`pet/findByStatus?status=${status}`);
        SpartAPI.requestGet().then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an("array");
            expect(response.body.length).to.be.greaterThan(0);

        });
    }
}

export default PetService;
