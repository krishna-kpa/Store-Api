const product = require('../models/product')




const getAllProducts  = async (req,res)=>{
    const {featured,company,name,sort,fields,numericFilter} = req.query
    const queryObject = {}
    // General Queries
    if(featured){
        queryObject.featured = featured=='true'?true:false;
    }
    if(company){
        queryObject.company = {$regex:company, $options:"i"}
    }
    if(name){
        queryObject.name = {$regex:name, $options:"i"}
    }

    //Numeric Filters

    if(numericFilter){

        const operatorMap={
            '>':'$gt',
            '>=':'$gte',
            '=':'$eq',
            '<':'$lt',
            '<=':'$lte'
        }

        const resgex = /\b(>|>=|=|<|<=)\b/g
        let filters = numericFilter.replace(
            regex,
            (match)=>'-'+operatorMap[match]+'-'
        )
        let options = ['price','rating']
        filters = filters.split(',').forEach((item)=>{
            let [field,operator,value]=item.split('-')
            if(options.includes(field)){
                queryObject[field]={[operator]:Number(value)}
            }
        })
    }




    let result = product.find(queryObject)
    //sorting
    if(sort){
        let sortList = sort.split(',').join(' ');
        result = result.sort(sortList)
    }else{
        result = result.sort('createdAt')
    }
    //selecting fields
    if(fields){
        let fieldList = fields.split(',').join(' ')
        result = result.select(fieldList)
    }else{
        result = result
    }
    // pagination
    let page = Number(req.query.page)||1
    let limit = Number(req.query.limit)||10
    let skip = (page-1)*limit
    result = result.skip(skip).limit(limit)
    let products = await result
    res.status(200).json({nbHits:products.length,Products : products})
}
const getAllProductsStatic = async (req,res)=>{
    const products = await product.find()
    res.json({product:products,nbHits:products.length})
}

module.exports = {getAllProducts,getAllProductsStatic}