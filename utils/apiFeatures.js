class APIFeatures {
    constructor(query, queryStr) {
        this.query = query;
        this.queryStr = queryStr;
    }

    search() {
        let keyword = this.queryStr.keyword ? {
            name : {
                $regex:  this.queryStr.keyword,
                $option: 'i' //case incensitive 
            }
        }: {};
        this.query.find({...keyword})
        return this;
    }
}

module.exports = APIFeatures