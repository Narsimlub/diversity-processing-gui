import http from "../http-common";

class CompanyDiversityService{

    getAllCompanies(){
        return http.get("/companies"); 
    }

    getAllCompaniesByData(params){
        return http.get("/companies", { params }); 
    }

    getCompanyByName(companyName:string){
        return http.get('/companies/'+companyName); 
    }

    updateCompanyDiversityInformation(data){
        return http.post("company-diversity",data)
    }

}

export default new CompanyDiversityService();