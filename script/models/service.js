function Service() {
    this.getLstApps = function(formTNS) {
        return axios({
            url: "https://63371a0e5327df4c43cfe7e8.mockapi.io/sesc/" + formTNS,
            method: "GET",
        });
    };

    this.deleteAppApi = function(formTNS,id) {
        return axios({
            url: "https://63371a0e5327df4c43cfe7e8.mockapi.io/sesc/" + formTNS + "/" + id,
            method: "DELETE",
        });
    };

    this.addAppApi = function(formTNS,app) {
        return axios({
            url: "https://63371a0e5327df4c43cfe7e8.mockapi.io/sesc/" + formTNS,
            method: "POST",
            data: app,
        });
    };

    this.getAppById = function(formTNS,id) {
        return axios({
            url: "https://63371a0e5327df4c43cfe7e8.mockapi.io/sesc/" + formTNS + "/" + id,
            method: "GET",
        });
    };

    this.saveAppApi = function(formTNS,app) {
        return axios({
            url: "https://63371a0e5327df4c43cfe7e8.mockapi.io/sesc/" + formTNS + "/" + id,
            method: "PUT",
            data: app,
        });
    }
}