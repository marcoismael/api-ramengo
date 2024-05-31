export default class GetProteinService {
    async getProteins() {
        const proteins = [
            {
                "id": "1",
                "imageInactive": "https://tech.redventures.com.br/icons/pork/inactive.svg",
                "imageActive": "https://tech.redventures.com.br/icons/pork/active.svg",
                "name": "Chasu",
                "description": "A sliced flavourful pork meat with a selection of season vegetables.",
                "price": 10
            }
        ]
        return proteins;
    };
};