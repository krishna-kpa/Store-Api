# Store API
This is a Store API build using Node js, Express and Mongoose
### Getting started

### Routes Available
1. http://localhost:3000/api/v1/products?queries
2. http://localhost:3000/api/v1/products/static (For refference)
### API query options
1. name= String                                       -- for showing result with specific names
2. featured= true or false(Boolean)                   -- for showing result with featured or not
3. company= String                                    -- for showing result with specific company
4. numericFilters= options[price,rating]              -- for showing result with numeric filters
5. sort= options[name,price,rating,createdAt,company] -- for showing result with sorted list
6. fields=String                                      -- for showing result with specific fields
