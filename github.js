class Github{
    constructor() {
        this.client_id = '201bd676776d60733833';
        this.client_secret = '41ffe416ce9974c37b0eba6c75e14d3a70c9c711';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
        const profile = await profileResponse.json();
    
        return {
          profile
        }
    }

}