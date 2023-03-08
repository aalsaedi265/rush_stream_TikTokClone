

export default{
    //the table information
    name:'postedBy',
    title:'Posted by',
    type: 'reference', // connect two different documuments
    to: [{type:'user'}] //one to many  user has many posts 

}