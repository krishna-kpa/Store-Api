# Store API
This is a Store API build using Node js, Express and Mongoose
### Getting started
#### Project setup
1. Download and Extract the zip file, Open in Vs code or any editor
2. Run the command 'npm i' //this will install all the dependandies
3. Add .env file, set mongoURI and PORT
4. Run command 'npm start'
5. The app will be available on 'http://localhost:3000/'

### Routes Available
1. http://localhost:3000/api/v1/products?queries
2. http://localhost:3000/api/v1/products/static (For refference)
### API query options
![image1](https://github.com/krishna-kpa/Store-Api/blob/main/sample/query.png)

### Queries ({{URL}} = http://localhost:3000/api/v1/ -- setting global variable in postman)

#### 1. name
-- for showing result with specific names <br>
Eg: {{URL}}/products?name=a <br>
returns documents with 'a' containing in its name field <br>

#### 2. featured
-- for showing result with featured or not
Eg: {{URL}}/products?featured=true
returns documents with featured field == true

#### 3. company
-- for showing result with featured or not
Eg: {{URL}}/products?company=a
returns documents with 'a' containing in its company field

#### 4. sort
-- for showing result with sorted list
Eg: {{URL}}/products?sort=-price,name
returns documents with a sorted way in which decreasing order of price and alphabetic order of name

#### 5. fields
-- for showing result with specific fields
Eg: {{URL}}/products?fields=name,price,rating
returns documents with name, price and rating fields in it

#### 6. limit (default value is 10)
-- for showing result with limited no of documents
Eg: {{URL}}/products?limit=4 
returns documents of count 4

#### 7. page (default value is 1)
-- for showing result with each page
Eg: {{URL}}/products?page=2
returns documents of page 2 (since default value of limit is 10, it shows data starts from 11)

#### 8. numericFilters
-- for showing result with numeric filters
Eg: {{URL}}/products?numericFilters=price>31,rating=4.5
returns documents with price greater than 31 and rating equal to 4.5

Combination of these queries can also done
Eg: {{URL}}/products?name=a&featured=true&company=a&sort=-price,name&fields=name,price,rating&page=2&numericFilters=price>31,rating=4.5&limit=4


