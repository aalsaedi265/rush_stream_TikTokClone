

export default{
    //the table information
    name:'postedBy',
    title:'Posted by',
    type: 'reference', // connect two different documuments
    to: [{type:'user'}] //one to one  whre post was made by aa spcefic user 

}