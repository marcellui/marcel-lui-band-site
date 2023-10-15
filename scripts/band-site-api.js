export class BandSiteAPI{
    constructor(apiKey){
        this.apiKey = apiKey;
        this.baseURL = "https://project-1-api.herokuapp.com";
        
    }

    async postComment(comment){
        try{
            const response = await axios.post(`${this.baseURL}/comments?api_key=${this.apiKey}`, comment)
            console.log(response);
        } catch (error){
            console.log(error)
        }
    }

    async getComments(){
        try{
            const response = await axios.get(`${this.baseURL}/comments?api_key=${this.apiKey}`)
            console.log(response.data);
            return response.data;
        } catch (error){
            console.log(error)
        }
    }

    async getShows(){
        try{
            const response = await axios.get(`${this.baseURL}/showdates?api_key=${this.apiKey}`)
            console.log(response.data);
            return response.data;
        } catch (error){
            console.log(error)
        }
    }

}
