import http from "../http-common";

class CompanyDiversityService{

    getAllCompanies(){
        return http.get("/companies"); 
    }

    getCompanyByName(companyName:string){
        return http.get('/companies/$companyName'); 
    }

    updateCompanyDiversityInformation(data){
        return http.post("company-diversity",data)
    }

}

export default new CompanyDiversityService();