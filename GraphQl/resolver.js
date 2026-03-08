const continents=[
    { "id": "c1", "name": "Asia" },
    { "id": "c2", "name": "Europe" },
    { "id": "c3", "name": "Africa" },
    { "id": "c4", "name": "North America" },
    { "id": "c5", "name": "South America" }
  ]

  const languages=[
    { "id": "l1", "name": "English" },
    { "id": "l2", "name": "Hindi" },
    { "id": "l3", "name": "Mandarin" },
    { "id": "l4", "name": "Spanish" },
    { "id": "l5", "name": "French" },
    { "id": "l6", "name": "Arabic" },
    { "id": "l7", "name": "German" },
    { "id": "l8", "name": "Portuguese" }
  ]


  const countries=[
    {
      "id": "co1",
      "name": "India",
      "continentId": "c1",
      "languageIds": ["l1", "l2"]
    },
    {
      "id": "co2",
      "name": "China",
      "continentId": "c1",
      "languageIds": ["l3"]
    },
    {
      "id": "co3",
      "name": "Germany",
      "continentId": "c2",
      "languageIds": ["l7"]
    },
    {
      "id": "co4",
      "name": "France",
      "continentId": "c2",
      "languageIds": ["l5"]
    },
    {
      "id": "co5",
      "name": "Egypt",
      "continentId": "c3",
      "languageIds": ["l6"]
    },
    {
      "id": "co6",
      "name": "USA",
      "continentId": "c4",
      "languageIds": ["l1"]
    },
    {
      "id": "co7",
      "name": "Brazil",
      "continentId": "c5",
      "languageIds": ["l8"]
    },
    {
      "id": "co8",
      "name": "Mexico",
      "continentId": "c4",
      "languageIds": ["l4"]
    }
  ]

export const resolvers={
    Query:{
        continents:()=> {return continents},
        languages:()=>{return languages},
        countries:()=>{return countries}

    },

    continents:{
        countries:(parent,args,context,info)=>{
            return countries.filter(data=>data.continentId===parent.id);

        }

    },
    countries:{
        
            languages:(parent,args,context,info)=>{
             return languages.filter(data=>parent.languageIds.includes(data.id))
            }
        
    },

    Mutation:{
        addCountry:(parent,args,context,info)=>{
            const newCountry={...args,id:countries.length+1,languageIds:[args.languageIds]}
            countries.push(newCountry);
            return newCountry
        }
    }
}