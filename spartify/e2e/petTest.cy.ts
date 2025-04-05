import { spartiSuite } from "@spartify.io/spartify-engine";
import PetService from "../service/requests/PetService";

spartiSuite("API Tests", () => {
  it("Should add a new pet and validate in sequence", () => {
    PetService.addPet()
  });

  it("Should retrieve pets by status", () => {
    PetService.findPetsByStatus("available")
  });

});