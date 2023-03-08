
export default{
    //the table information
    name:'comment',
    title:'Comment',
    type: 'document',
    fields:[
        //colmns where data will be added
        //connected to other tabels
        {
            name:'postedBy',
            title: 'Posted By',
            type: 'postedBy'
        },
        {
            name:'comment',
            title: "Comment" ,
            type: "string"
        }
    ]

}