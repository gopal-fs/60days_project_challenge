export const typeDefs=`
    type continents{
        id:ID!,
        name:String
        countries:[countries]
    },
    type languages{
        id:ID!,
        name:String
    },
    type countries{
        id:ID!,
        name:String,
        continentId:ID,
        languageIds:[String],
        languages:[languages]
    }

    type Query{
        continents:[continents]
        languages:[languages]
        countries:[countries]
    }

    type Mutation{
        addCountry(name:String,continentId:ID,languageIds:String):countries!
    }
    
   
`