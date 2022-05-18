import http from "../http-common";

class CompanyDiversityService{

    getAllCompanies(){
        return http.get("/companies"); 
    }

    getAllCompaniesByData(params){
        console.info(params);
        return http.get("/companies", { params }); 
    }

    getCompanyByName(companyName:string){
        console.info(companyName);
        return http.get('/companies/'+companyName); 
    }

    getCompaniesByName(companyName:string){
        console.info(companyName);
        return http.get('/companies/'+companyName); 
    }

    updateCompanyDiversityInformation(data){
        return http.post("company-diversity",data)
    }

}

export default new CompanyDiversityService();