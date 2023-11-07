import { defineStore } from "pinia"
export const useStarships = defineStore("starships", {
    state: () => ({
        link: 'https://swapi.dev/api/starships/?page=',
        page: 1,
        pageCount: 0,
        count: 0,
        starshipsArr: [],
        people: []
    }),
    actions: {
        async getStarships() {
            fetch(this.link + this.page)
                .then(res => res.json())
                .then(data => {
                    this.starshipsArr = data.results;
                    this.count = data.count;
                    this.getPageCount();
                })
                .catch(error => {
                    console.error('Error fetching data:', error);
                });
        },
        getPageCount() {
            this.pageCount = Math.ceil(this.count / 10)
        },
        anotherPage(index) {
            this.page = index;
            this.getStarships();
        },
        async getPeople(peopleArr) {
            console.log("IMHERE")
            this.people = [];
            const fetchPromises = peopleArr.map(API_PEOPLE_URL =>
                fetch(API_PEOPLE_URL)
                    .then(res => res.json())
                    .catch(error => {
                        console.error('Error fetching data:', error);
                    })
            );

            try {
                const responses = await Promise.all(fetchPromises);
                this.people = responses.filter(data => data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        }
    }
})