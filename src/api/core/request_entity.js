class RequestEntity{
    constructor(){
        this.URL = '';
        this.method = '';
        this. body = undefined;
        this.header = undefined;
    }

    setURL(url){
        this.URL = url;
        return this;
    }

    setMethod(method){
        this.method = method;
        return this;
    }

    setBody(url){
        this.body = url;
        return this;
    }

    setHeader(header){
        this.header = header;
        return this;
    }
}

module.exports = RequestEntity;