class CreatureService {

    url="https://eldenring.fanapis.com/api/creatures";

    async getCreatures() {
        try {
            const response = await fetch(this.url);

            if (!response.ok) {
                throw new Error(response.statusText);
            }

            const { data } = await response.json();
 
            return data;
            
        } catch (e) {
            console.error(e);

            return [];
        }
    }

    async getCreatureWithReturnedUrl(url) {
		try {
			const response = await fetch(url);
			if (!response.ok) throw new Error(response.statusText);
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
	}

    async getCreatureById(id) {
		try {
			const response = await fetch(`${this.url}/${id}`);
			if (!response.ok) throw new Error(response.statusText);
			return await response.json();
		} catch (e) {
			console.error(e);

			return {};
		}
    }
}

export default CreatureService;