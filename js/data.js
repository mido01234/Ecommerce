let products_array= [   // every product specifications is stored in an object
    {
        id:1,
        title:"iphone-13",
        quantity:1,
        desc:"old phone from apple launched at 2021",
        color:"White",
        image:"images/IPhone-13.jpg",
        price:500,
        
    },
    {
        id:2,
        title:"iphone-14",
        quantity:1,
        desc:"old phone from apple launched at 2022",
        color:"Black",
        image:"images/IPhone-14.jpg",
        price:700,
    },
    {
        id:3,
        title:"iphone-15",
        quantity:1,
        desc:"New phone from apple launched at 2023",
        color:"Grey",
        image:"images/IPhone-15.jpg",
        price:1000,
    },
    {
        id:4,
        title:"samsung s23 ultra",
        quantity:1,
        desc:"New phone from samsung launched at 2024",
        color:"white-brown",
        image:"images/samsung-s24-ultra.jpg",
        price:1200,
    },
    {
        id:5,
        title:"oppo reno 7",
        quantity:1,
        desc:"Old phone from oppo launched at 2022",
        color:"Black",
        image:"images/oppo reno 7.jpg",
        price:400,
    }
] 
localStorage.setItem("productsDB",JSON.stringify(products_array))