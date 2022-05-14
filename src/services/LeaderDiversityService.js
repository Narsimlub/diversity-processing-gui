import http from "../http-common";

class LeaderDiversityService{

    getAllDiversityLeaders(){
        return http.get("/leaders"); 
    }

    getLeaderDiversityInformation(leaderName:string){
        return http.get('/leaders/$leaderName'); 
    }

    getAllDiversityLeadersUsingCompanyId(companyId:string){
        return http.get('/leaders-details/$companyId'); 
    }

    updateLeaderDiversityInformation(data){
        return http.post("leader-diversity",data)
    }


}

export default new LeaderDiversityService();