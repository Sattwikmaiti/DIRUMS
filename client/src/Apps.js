import React,{useState} from 'react'
import "./App.css"



  
const Apps = () => {
    



   
    const Sub= ({parent,grandparent})=>{
        
        const filteredData = data.filter(item => item.parent && item.parent.name === parent &&   item.parent.parent && item.parent.parent.name===grandparent);
        return (
            
                 <div class="dropdown-item">
               <h3 class="item-heading">{parent}</h3>
              {filteredData.map(item => (
                // Render your dropdown items here
                <div class="item-list">
                <div class="item-list-info">
                  <p>{item.name}</p>
                 
                </div>
              </div>
                
              ))}
              </div>
            
          );
    }
     
    const MegaDropdown = ({ parentName }) => {
        
        const filteredData = data.filter(item => item.parent && item.parent.name === parentName);
      
        return (
          
            <div className={`dropdown ${parentName}`}>
                  <div class="dropdown-inner">
              
            {filteredData.map(item => (

             
              <Sub key={item.id} parent={item.name} grandparent={parentName}/>
             
            ))}
            </div>
            
            </div>
          
        );
      };
    const  data= [
            {
                "id": "65c5ce405313c509f167fc86",
                "name": "Artworks",
                "link": "/artworks",
                "createdAt": "2024-02-09T07:03:28.176Z",
                "updatedAt": "2024-02-19T11:29:29.883Z",
                "parent": null
            },
            {
                "id": "65c5ce695313c509f167fcdd",
                "name": "Paintings",
                "parent": {
                    "id": "65c5ce405313c509f167fc86",
                    "name": "Artworks",
                    "link": "/artworks",
                    "createdAt": "2024-02-09T07:03:28.176Z",
                    "updatedAt": "2024-02-19T11:29:29.883Z",
                    "parent": null
                },
                "link": "/paintings",
                "createdAt": "2024-02-09T07:04:09.272Z",
                "updatedAt": "2024-02-09T07:04:09.272Z"
            },
            {
                "id": "65c5cea95313c509f167fd37",
                "name": "Folk Art",
                "parent": {
                    "id": "65c5ce405313c509f167fc86",
                    "name": "Artworks",
                    "link": "/artworks",
                    "createdAt": "2024-02-09T07:03:28.176Z",
                    "updatedAt": "2024-02-19T11:29:29.883Z",
                    "parent": null
                },
                "link": "/folk-arrt",
                "createdAt": "2024-02-09T07:05:13.311Z",
                "updatedAt": "2024-02-09T07:05:13.311Z"
            },
            {
                "id": "65c5cebf5313c509f167fd73",
                "name": "Religious",
                "parent": {
                    "id": "65c5ce405313c509f167fc86",
                    "name": "Artworks",
                    "link": "/artworks",
                    "createdAt": "2024-02-09T07:03:28.176Z",
                    "updatedAt": "2024-02-19T11:29:29.883Z",
                    "parent": null
                },
                "link": "/religious",
                "createdAt": "2024-02-09T07:05:35.066Z",
                "updatedAt": "2024-02-09T07:05:35.066Z"
            },
            {
                "id": "65c5ced75313c509f167fdaf",
                "name": "Acrylic",
                "parent": {
                    "id": "65c5ce695313c509f167fcdd",
                    "name": "Paintings",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/paintings",
                    "createdAt": "2024-02-09T07:04:09.272Z",
                    "updatedAt": "2024-02-09T07:04:09.272Z"
                },
                "link": "/acrylic",
                "createdAt": "2024-02-09T07:05:59.445Z",
                "updatedAt": "2024-02-09T07:05:59.445Z"
            },
            {
                "id": "65c5cef45313c509f167fdec",
                "name": "Watercolor",
                "parent": {
                    "id": "65c5ce695313c509f167fcdd",
                    "name": "Paintings",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/paintings",
                    "createdAt": "2024-02-09T07:04:09.272Z",
                    "updatedAt": "2024-02-09T07:04:09.272Z"
                },
                "link": "/watercolor",
                "createdAt": "2024-02-09T07:06:28.862Z",
                "updatedAt": "2024-02-09T07:06:28.862Z"
            },
            {
                "id": "65c5cf1e5313c509f167fe14",
                "name": "Oil Paintings",
                "parent": {
                    "id": "65c5ce695313c509f167fcdd",
                    "name": "Paintings",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/paintings",
                    "createdAt": "2024-02-09T07:04:09.272Z",
                    "updatedAt": "2024-02-09T07:04:09.272Z"
                },
                "link": "/oil-paintings",
                "createdAt": "2024-02-09T07:07:10.014Z",
                "updatedAt": "2024-02-09T07:07:10.014Z"
            },
            {
                "id": "65c5cf465313c509f167fe51",
                "name": "Mix Media Paintings ",
                "parent": {
                    "id": "65c5ce695313c509f167fcdd",
                    "name": "Paintings",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/paintings",
                    "createdAt": "2024-02-09T07:04:09.272Z",
                    "updatedAt": "2024-02-09T07:04:09.272Z"
                },
                "link": "/mix-media-paintings ",
                "createdAt": "2024-02-09T07:07:50.784Z",
                "updatedAt": "2024-02-09T07:07:50.784Z"
            },
            {
                "id": "65c5d0115313c509f167fe79",
                "name": "Ink On Paper Paintings",
                "parent": {
                    "id": "65c5ce695313c509f167fcdd",
                    "name": "Paintings",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/paintings",
                    "createdAt": "2024-02-09T07:04:09.272Z",
                    "updatedAt": "2024-02-09T07:04:09.272Z"
                },
                "link": "/ink-on-paper-paintings",
                "createdAt": "2024-02-09T07:11:13.420Z",
                "updatedAt": "2024-02-09T07:11:13.420Z"
            },
            {
                "id": "65c5d02c5313c509f167fea1",
                "name": "Wildlife Paintings",
                "parent": {
                    "id": "65c5ce695313c509f167fcdd",
                    "name": "Paintings",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/paintings",
                    "createdAt": "2024-02-09T07:04:09.272Z",
                    "updatedAt": "2024-02-09T07:04:09.272Z"
                },
                "link": "/wildlife-paintings",
                "createdAt": "2024-02-09T07:11:40.851Z",
                "updatedAt": "2024-02-09T07:11:40.851Z"
            },
            {
                "id": "65c5d0425313c509f167fec9",
                "name": "Natural Landscape",
                "parent": {
                    "id": "65c5ce695313c509f167fcdd",
                    "name": "Paintings",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/paintings",
                    "createdAt": "2024-02-09T07:04:09.272Z",
                    "updatedAt": "2024-02-09T07:04:09.272Z"
                },
                "link": "/natural-landscape",
                "createdAt": "2024-02-09T07:12:02.461Z",
                "updatedAt": "2024-02-09T07:12:02.461Z"
            },
            {
                "id": "65c5d05e5313c509f167fef7",
                "name": "Home Office Art",
                "parent": {
                    "id": "65c5ce695313c509f167fcdd",
                    "name": "Paintings",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/paintings",
                    "createdAt": "2024-02-09T07:04:09.272Z",
                    "updatedAt": "2024-02-09T07:04:09.272Z"
                },
                "link": "/home-office-art",
                "createdAt": "2024-02-09T07:12:30.388Z",
                "updatedAt": "2024-02-09T07:12:30.388Z"
            },
            {
                "id": "65c5d0895313c509f167ff25",
                "name": "Madhubani Art",
                "parent": {
                    "id": "65c5cea95313c509f167fd37",
                    "name": "Folk Art",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/folk-arrt",
                    "createdAt": "2024-02-09T07:05:13.311Z",
                    "updatedAt": "2024-02-09T07:05:13.311Z"
                },
                "link": "/madhubani-art",
                "createdAt": "2024-02-09T07:13:13.334Z",
                "updatedAt": "2024-02-09T07:13:13.334Z"
            },
            {
                "id": "65c5d0a15313c509f167ff4d",
                "name": "Mandala Art",
                "parent": {
                    "id": "65c5cea95313c509f167fd37",
                    "name": "Folk Art",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/folk-arrt",
                    "createdAt": "2024-02-09T07:05:13.311Z",
                    "updatedAt": "2024-02-09T07:05:13.311Z"
                },
                "link": "/mandala-art",
                "createdAt": "2024-02-09T07:13:37.899Z",
                "updatedAt": "2024-02-09T07:13:37.899Z"
            },
            {
                "id": "65c5d0c35313c509f167ff75",
                "name": "Gond Art",
                "parent": {
                    "id": "65c5cea95313c509f167fd37",
                    "name": "Folk Art",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/folk-arrt",
                    "createdAt": "2024-02-09T07:05:13.311Z",
                    "updatedAt": "2024-02-09T07:05:13.311Z"
                },
                "link": "/gond-art",
                "createdAt": "2024-02-09T07:14:11.573Z",
                "updatedAt": "2024-02-09T07:14:11.573Z"
            },
            {
                "id": "65c5d0e15313c509f167ff9d",
                "name": "Bhil Art",
                "parent": {
                    "id": "65c5cea95313c509f167fd37",
                    "name": "Folk Art",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/folk-arrt",
                    "createdAt": "2024-02-09T07:05:13.311Z",
                    "updatedAt": "2024-02-09T07:05:13.311Z"
                },
                "link": "/bhil-art",
                "createdAt": "2024-02-09T07:14:41.604Z",
                "updatedAt": "2024-02-09T07:14:41.604Z"
            },
            {
                "id": "65c5d0f95313c509f167ffc5",
                "name": "Dhokra Art",
                "parent": {
                    "id": "65c5cea95313c509f167fd37",
                    "name": "Folk Art",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/folk-arrt",
                    "createdAt": "2024-02-09T07:05:13.311Z",
                    "updatedAt": "2024-02-09T07:05:13.311Z"
                },
                "link": "/dhokra-art",
                "createdAt": "2024-02-09T07:15:05.338Z",
                "updatedAt": "2024-02-09T07:15:05.338Z"
            },
            {
                "id": "65c5d11b5313c509f167fff3",
                "name": "Pattachitra Art",
                "parent": {
                    "id": "65c5cea95313c509f167fd37",
                    "name": "Folk Art",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/folk-arrt",
                    "createdAt": "2024-02-09T07:05:13.311Z",
                    "updatedAt": "2024-02-09T07:05:13.311Z"
                },
                "link": "/pattachitra-art",
                "createdAt": "2024-02-09T07:15:39.043Z",
                "updatedAt": "2024-02-09T07:15:39.043Z"
            },
            {
                "id": "65c5d1625313c509f1680021",
                "name": "Lord Buddha Painting",
                "parent": {
                    "id": "65c5cebf5313c509f167fd73",
                    "name": "Religious",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/religious",
                    "createdAt": "2024-02-09T07:05:35.066Z",
                    "updatedAt": "2024-02-09T07:05:35.066Z"
                },
                "link": "/lord-buddha-painting",
                "createdAt": "2024-02-09T07:16:50.161Z",
                "updatedAt": "2024-02-09T07:16:50.161Z"
            },
            {
                "id": "65c5d1845313c509f168004f",
                "name": "Lord Krishna Painting",
                "parent": {
                    "id": "65c5cebf5313c509f167fd73",
                    "name": "Religious",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/religious",
                    "createdAt": "2024-02-09T07:05:35.066Z",
                    "updatedAt": "2024-02-09T07:05:35.066Z"
                },
                "link": "/lord-krishna-painting",
                "createdAt": "2024-02-09T07:17:24.276Z",
                "updatedAt": "2024-02-09T07:17:24.276Z"
            },
            {
                "id": "65c5d1a55313c509f168008f",
                "name": "Lord Shiva Painting",
                "parent": {
                    "id": "65c5cebf5313c509f167fd73",
                    "name": "Religious",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/religious",
                    "createdAt": "2024-02-09T07:05:35.066Z",
                    "updatedAt": "2024-02-09T07:05:35.066Z"
                },
                "link": "/lord-shiva-painting",
                "createdAt": "2024-02-09T07:17:57.494Z",
                "updatedAt": "2024-02-09T07:17:57.494Z"
            },
            {
                "id": "65c5d1be5313c509f16800c3",
                "name": "Lord Vishnu Painting",
                "parent": {
                    "id": "65c5cebf5313c509f167fd73",
                    "name": "Religious",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/religious",
                    "createdAt": "2024-02-09T07:05:35.066Z",
                    "updatedAt": "2024-02-09T07:05:35.066Z"
                },
                "link": "/lord-vishnu-painting",
                "createdAt": "2024-02-09T07:18:22.067Z",
                "updatedAt": "2024-02-09T07:18:22.067Z"
            },
            {
                "id": "65c5d1df5313c509f16800f7",
                "name": "Lord Ganesha Painting",
                "parent": {
                    "id": "65c5cebf5313c509f167fd73",
                    "name": "Religious",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/religious",
                    "createdAt": "2024-02-09T07:05:35.066Z",
                    "updatedAt": "2024-02-09T07:05:35.066Z"
                },
                "link": "/lord-ganesha-painting",
                "createdAt": "2024-02-09T07:18:55.853Z",
                "updatedAt": "2024-02-09T07:18:55.853Z"
            },
            {
                "id": "65c5d1f55313c509f1680129",
                "name": "Lord Hanuman Painting",
                "parent": {
                    "id": "65c5cebf5313c509f167fd73",
                    "name": "Religious",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/religious",
                    "createdAt": "2024-02-09T07:05:35.066Z",
                    "updatedAt": "2024-02-09T07:05:35.066Z"
                },
                "link": "/lord-hanuman-painting",
                "createdAt": "2024-02-09T07:19:17.712Z",
                "updatedAt": "2024-02-09T07:19:17.712Z"
            },
            {
                "id": "65c5d2235313c509f168015f",
                "name": "Maa Durga Painting",
                "parent": {
                    "id": "65c5cebf5313c509f167fd73",
                    "name": "Religious",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/religious",
                    "createdAt": "2024-02-09T07:05:35.066Z",
                    "updatedAt": "2024-02-09T07:05:35.066Z"
                },
                "link": "/maa-durga-painting",
                "createdAt": "2024-02-09T07:20:03.133Z",
                "updatedAt": "2024-02-09T07:20:03.133Z"
            },
            {
                "id": "65c5d23e5313c509f1680199",
                "name": "Maa Lakshmi Painting",
                "parent": {
                    "id": "65c5cebf5313c509f167fd73",
                    "name": "Religious",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/religious",
                    "createdAt": "2024-02-09T07:05:35.066Z",
                    "updatedAt": "2024-02-09T07:05:35.066Z"
                },
                "link": "/maa-lakshmi-painting",
                "createdAt": "2024-02-09T07:20:30.244Z",
                "updatedAt": "2024-02-09T07:20:30.244Z"
            },
            {
                "id": "65c5d25e5313c509f16801cd",
                "name": "Maa Saraswati Painting",
                "parent": {
                    "id": "65c5cebf5313c509f167fd73",
                    "name": "Religious",
                    "parent": {
                        "id": "65c5ce405313c509f167fc86",
                        "name": "Artworks",
                        "link": "/artworks",
                        "createdAt": "2024-02-09T07:03:28.176Z",
                        "updatedAt": "2024-02-19T11:29:29.883Z",
                        "parent": null
                    },
                    "link": "/religious",
                    "createdAt": "2024-02-09T07:05:35.066Z",
                    "updatedAt": "2024-02-09T07:05:35.066Z"
                },
                "link": "/maa-saraswati-painting",
                "createdAt": "2024-02-09T07:21:02.759Z",
                "updatedAt": "2024-02-09T07:21:02.759Z"
            },
            {
                "id": "65c5d29d5313c509f1680216",
                "name": "Home & Living",
                "link": "/home-living",
                "createdAt": "2024-02-09T07:22:05.003Z",
                "updatedAt": "2024-02-19T11:30:07.016Z",
                "parent": null
            },
            {
                "id": "65c5d2c25313c509f168023c",
                "name": "Wall Decor",
                "parent": {
                    "id": "65c5d29d5313c509f1680216",
                    "name": "Home & Living",
                    "link": "/home-living",
                    "createdAt": "2024-02-09T07:22:05.003Z",
                    "updatedAt": "2024-02-19T11:30:07.016Z",
                    "parent": null
                },
                "link": "/wall-decor",
                "createdAt": "2024-02-09T07:22:42.915Z",
                "updatedAt": "2024-02-09T07:22:42.915Z"
            },
            {
                "id": "65c5d2e75313c509f168027b",
                "name": "Wall Clocks",
                "parent": {
                    "id": "65c5d29d5313c509f1680216",
                    "name": "Home & Living",
                    "link": "/home-living",
                    "createdAt": "2024-02-09T07:22:05.003Z",
                    "updatedAt": "2024-02-19T11:30:07.016Z",
                    "parent": null
                },
                "link": "/wall-clocks",
                "createdAt": "2024-02-09T07:23:19.017Z",
                "updatedAt": "2024-02-09T07:23:19.017Z"
            },
            {
                "id": "65c5d3055313c509f16802ae",
                "name": "Table Decor",
                "parent": {
                    "id": "65c5d29d5313c509f1680216",
                    "name": "Home & Living",
                    "link": "/home-living",
                    "createdAt": "2024-02-09T07:22:05.003Z",
                    "updatedAt": "2024-02-19T11:30:07.016Z",
                    "parent": null
                },
                "link": "/table-decor",
                "createdAt": "2024-02-09T07:23:49.067Z",
                "updatedAt": "2024-02-09T07:23:49.067Z"
            },
            {
                "id": "65c5d3175313c509f16802e7",
                "name": "Trays",
                "parent": {
                    "id": "65c5d29d5313c509f1680216",
                    "name": "Home & Living",
                    "link": "/home-living",
                    "createdAt": "2024-02-09T07:22:05.003Z",
                    "updatedAt": "2024-02-19T11:30:07.016Z",
                    "parent": null
                },
                "link": "/trays",
                "createdAt": "2024-02-09T07:24:07.651Z",
                "updatedAt": "2024-02-09T07:24:07.651Z"
            },
            {
                "id": "65c5d3265313c509f168031a",
                "name": "Coasters",
                "parent": {
                    "id": "65c5d29d5313c509f1680216",
                    "name": "Home & Living",
                    "link": "/home-living",
                    "createdAt": "2024-02-09T07:22:05.003Z",
                    "updatedAt": "2024-02-19T11:30:07.016Z",
                    "parent": null
                },
                "link": "/coasters",
                "createdAt": "2024-02-09T07:24:22.198Z",
                "updatedAt": "2024-02-09T07:24:22.198Z"
            },
            {
                "id": "65c5d3345313c509f168034d",
                "name": "Resin",
                "parent": {
                    "id": "65c5d29d5313c509f1680216",
                    "name": "Home & Living",
                    "link": "/home-living",
                    "createdAt": "2024-02-09T07:22:05.003Z",
                    "updatedAt": "2024-02-19T11:30:07.016Z",
                    "parent": null
                },
                "link": "/resin",
                "createdAt": "2024-02-09T07:24:36.743Z",
                "updatedAt": "2024-02-09T07:24:36.743Z"
            },
            {
                "id": "65c5d3485313c509f1680380",
                "name": "Lippan",
                "parent": {
                    "id": "65c5d29d5313c509f1680216",
                    "name": "Home & Living",
                    "link": "/home-living",
                    "createdAt": "2024-02-09T07:22:05.003Z",
                    "updatedAt": "2024-02-19T11:30:07.016Z",
                    "parent": null
                },
                "link": "/lippan",
                "createdAt": "2024-02-09T07:24:56.010Z",
                "updatedAt": "2024-02-09T07:24:56.010Z"
            },
            {
                "id": "65c5d35f5313c509f16803b3",
                "name": "Photo Frame",
                "parent": {
                    "id": "65c5d29d5313c509f1680216",
                    "name": "Home & Living",
                    "link": "/home-living",
                    "createdAt": "2024-02-09T07:22:05.003Z",
                    "updatedAt": "2024-02-19T11:30:07.016Z",
                    "parent": null
                },
                "link": "/photo-frame",
                "createdAt": "2024-02-09T07:25:19.451Z",
                "updatedAt": "2024-02-09T07:25:19.451Z"
            },
            {
                "id": "65c5d3705313c509f16803e6",
                "name": "Candle Holders",
                "parent": {
                    "id": "65c5d29d5313c509f1680216",
                    "name": "Home & Living",
                    "link": "/home-living",
                    "createdAt": "2024-02-09T07:22:05.003Z",
                    "updatedAt": "2024-02-19T11:30:07.016Z",
                    "parent": null
                },
                "link": "/candle-holders",
                "createdAt": "2024-02-09T07:25:36.059Z",
                "updatedAt": "2024-02-09T07:25:36.059Z"
            },
            {
                "id": "65c5d3825313c509f1680419",
                "name": "Pooja Essentials",
                "parent": {
                    "id": "65c5d29d5313c509f1680216",
                    "name": "Home & Living",
                    "link": "/home-living",
                    "createdAt": "2024-02-09T07:22:05.003Z",
                    "updatedAt": "2024-02-19T11:30:07.016Z",
                    "parent": null
                },
                "link": "/pooja-essentials",
                "createdAt": "2024-02-09T07:25:54.376Z",
                "updatedAt": "2024-02-09T07:25:54.376Z"
            },
            {
                "id": "65c5d3975313c509f168044c",
                "name": "Decorative Pot & Planters",
                "parent": {
                    "id": "65c5d29d5313c509f1680216",
                    "name": "Home & Living",
                    "link": "/home-living",
                    "createdAt": "2024-02-09T07:22:05.003Z",
                    "updatedAt": "2024-02-19T11:30:07.016Z",
                    "parent": null
                },
                "link": "/decorative-pot-planters",
                "createdAt": "2024-02-09T07:26:15.754Z",
                "updatedAt": "2024-02-09T07:26:15.754Z"
            },
            {
                "id": "65c5d5fd5313c509f168048b",
                "name": "Wall Art & Paintings",
                "parent": {
                    "id": "65c5d2c25313c509f168023c",
                    "name": "Wall Decor",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/wall-decor",
                    "createdAt": "2024-02-09T07:22:42.915Z",
                    "updatedAt": "2024-02-09T07:22:42.915Z"
                },
                "link": "/wall-art-paintings",
                "createdAt": "2024-02-09T07:36:29.699Z",
                "updatedAt": "2024-02-09T07:36:29.699Z"
            },
            {
                "id": "65c5d6135313c509f16804cb",
                "name": "Wall Plates",
                "parent": {
                    "id": "65c5d2c25313c509f168023c",
                    "name": "Wall Decor",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/wall-decor",
                    "createdAt": "2024-02-09T07:22:42.915Z",
                    "updatedAt": "2024-02-09T07:22:42.915Z"
                },
                "link": "/wall-plates",
                "createdAt": "2024-02-09T07:36:51.754Z",
                "updatedAt": "2024-02-09T07:36:51.754Z"
            },
            {
                "id": "65c5d64c5313c509f1680505",
                "name": "Embroidery Hoops",
                "parent": {
                    "id": "65c5d2c25313c509f168023c",
                    "name": "Wall Decor",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/wall-decor",
                    "createdAt": "2024-02-09T07:22:42.915Z",
                    "updatedAt": "2024-02-09T07:22:42.915Z"
                },
                "link": "/embroidery-hoops",
                "createdAt": "2024-02-09T07:37:48.026Z",
                "updatedAt": "2024-02-09T07:37:48.026Z"
            },
            {
                "id": "65c5d65f5313c509f168053f",
                "name": "Photo Frames",
                "parent": {
                    "id": "65c5d2c25313c509f168023c",
                    "name": "Wall Decor",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/wall-decor",
                    "createdAt": "2024-02-09T07:22:42.915Z",
                    "updatedAt": "2024-02-09T07:22:42.915Z"
                },
                "link": "/photo-frames",
                "createdAt": "2024-02-09T07:38:07.183Z",
                "updatedAt": "2024-02-09T07:38:07.183Z"
            },
            {
                "id": "65c5d6a35313c509f168058b",
                "name": "Modern Clocks",
                "parent": {
                    "id": "65c5d2e75313c509f168027b",
                    "name": "Wall Clocks",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/wall-clocks",
                    "createdAt": "2024-02-09T07:23:19.017Z",
                    "updatedAt": "2024-02-09T07:23:19.017Z"
                },
                "link": "/omdern-clocks",
                "createdAt": "2024-02-09T07:39:15.385Z",
                "updatedAt": "2024-02-09T07:39:15.385Z"
            },
            {
                "id": "65c5d6cb5313c509f16805c5",
                "name": "Resin Clocks",
                "parent": {
                    "id": "65c5d2e75313c509f168027b",
                    "name": "Wall Clocks",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/wall-clocks",
                    "createdAt": "2024-02-09T07:23:19.017Z",
                    "updatedAt": "2024-02-09T07:23:19.017Z"
                },
                "link": "/resin-clocks",
                "createdAt": "2024-02-09T07:39:55.702Z",
                "updatedAt": "2024-02-09T07:39:55.702Z"
            },
            {
                "id": "65c5d7585313c509f1680677",
                "name": "Lippan Clocks",
                "parent": {
                    "id": "65c5d2e75313c509f168027b",
                    "name": "Wall Clocks",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/wall-clocks",
                    "createdAt": "2024-02-09T07:23:19.017Z",
                    "updatedAt": "2024-02-09T07:23:19.017Z"
                },
                "link": "/lippan-clocks",
                "createdAt": "2024-02-09T07:42:16.716Z",
                "updatedAt": "2024-02-09T07:42:16.716Z"
            },
            {
                "id": "65c5d79d5313c509f16806d5",
                "name": "Decorative Trays",
                "parent": {
                    "id": "65c5d3055313c509f16802ae",
                    "name": "Table Decor",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/table-decor",
                    "createdAt": "2024-02-09T07:23:49.067Z",
                    "updatedAt": "2024-02-09T07:23:49.067Z"
                },
                "link": "/decorative-trays",
                "createdAt": "2024-02-09T07:43:25.439Z",
                "updatedAt": "2024-02-09T07:43:25.439Z"
            },
            {
                "id": "65c5d7c25313c509f1680709",
                "name": "Elegant Coasters",
                "parent": {
                    "id": "65c5d3055313c509f16802ae",
                    "name": "Table Decor",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/table-decor",
                    "createdAt": "2024-02-09T07:23:49.067Z",
                    "updatedAt": "2024-02-09T07:23:49.067Z"
                },
                "link": "/elegant-coasters",
                "createdAt": "2024-02-09T07:44:02.399Z",
                "updatedAt": "2024-02-09T07:44:02.399Z"
            },
            {
                "id": "65c5d7d15313c509f1680743",
                "name": "Dhokra",
                "parent": {
                    "id": "65c5d3055313c509f16802ae",
                    "name": "Table Decor",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/table-decor",
                    "createdAt": "2024-02-09T07:23:49.067Z",
                    "updatedAt": "2024-02-09T07:23:49.067Z"
                },
                "link": "/dhokra",
                "createdAt": "2024-02-09T07:44:17.648Z",
                "updatedAt": "2024-02-09T07:44:17.648Z"
            },
            {
                "id": "65c5d7e45313c509f168077d",
                "name": "Vases",
                "parent": {
                    "id": "65c5d3055313c509f16802ae",
                    "name": "Table Decor",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/table-decor",
                    "createdAt": "2024-02-09T07:23:49.067Z",
                    "updatedAt": "2024-02-09T07:23:49.067Z"
                },
                "link": "/vases",
                "createdAt": "2024-02-09T07:44:36.408Z",
                "updatedAt": "2024-02-09T07:44:36.408Z"
            },
            {
                "id": "65c5d8025313c509f16807bd",
                "name": "Wooden Trays",
                "parent": {
                    "id": "65c5d3175313c509f16802e7",
                    "name": "Trays",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/trays",
                    "createdAt": "2024-02-09T07:24:07.651Z",
                    "updatedAt": "2024-02-09T07:24:07.651Z"
                },
                "link": "/wooden-trays",
                "createdAt": "2024-02-09T07:45:06.919Z",
                "updatedAt": "2024-02-09T07:45:06.919Z"
            },
            {
                "id": "65c5d81a5313c509f16807f7",
                "name": "Pattachitra Trays",
                "parent": {
                    "id": "65c5d3175313c509f16802e7",
                    "name": "Trays",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/trays",
                    "createdAt": "2024-02-09T07:24:07.651Z",
                    "updatedAt": "2024-02-09T07:24:07.651Z"
                },
                "link": "/pattachitra-trays",
                "createdAt": "2024-02-09T07:45:30.862Z",
                "updatedAt": "2024-02-09T07:45:30.862Z"
            },
            {
                "id": "65c5d8335313c509f168082b",
                "name": "Resin Trays",
                "parent": {
                    "id": "65c5d3175313c509f16802e7",
                    "name": "Trays",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/trays",
                    "createdAt": "2024-02-09T07:24:07.651Z",
                    "updatedAt": "2024-02-09T07:24:07.651Z"
                },
                "link": "/tesin-trays",
                "createdAt": "2024-02-09T07:45:55.856Z",
                "updatedAt": "2024-02-09T07:45:55.856Z"
            },
            {
                "id": "65c5d84d5313c509f1680871",
                "name": "Trays",
                "parent": {
                    "id": "65c5d3345313c509f168034d",
                    "name": "Resin",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/resin",
                    "createdAt": "2024-02-09T07:24:36.743Z",
                    "updatedAt": "2024-02-09T07:24:36.743Z"
                },
                "link": "/trays",
                "createdAt": "2024-02-09T07:46:21.867Z",
                "updatedAt": "2024-02-09T07:46:21.867Z"
            },
            {
                "id": "65c5d8675313c509f16808ab",
                "name": "Tea Light Holders",
                "parent": {
                    "id": "65c5d3345313c509f168034d",
                    "name": "Resin",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/resin",
                    "createdAt": "2024-02-09T07:24:36.743Z",
                    "updatedAt": "2024-02-09T07:24:36.743Z"
                },
                "link": "/tea-light-holders",
                "createdAt": "2024-02-09T07:46:47.073Z",
                "updatedAt": "2024-02-09T07:46:47.073Z"
            },
            {
                "id": "65c5d8935313c509f16808df",
                "name": "Pooja thalis",
                "parent": {
                    "id": "65c5d3345313c509f168034d",
                    "name": "Resin",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/resin",
                    "createdAt": "2024-02-09T07:24:36.743Z",
                    "updatedAt": "2024-02-09T07:24:36.743Z"
                },
                "link": "/pooja-thalis",
                "createdAt": "2024-02-09T07:47:31.598Z",
                "updatedAt": "2024-02-09T07:47:31.598Z"
            },
            {
                "id": "65c5d8bb5313c509f1680967",
                "name": "Key Chains",
                "parent": {
                    "id": "65c5d3345313c509f168034d",
                    "name": "Resin",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/resin",
                    "createdAt": "2024-02-09T07:24:36.743Z",
                    "updatedAt": "2024-02-09T07:24:36.743Z"
                },
                "link": "/key-chains",
                "createdAt": "2024-02-09T07:48:11.565Z",
                "updatedAt": "2024-02-09T07:48:11.565Z"
            },
            {
                "id": "65c5d8ce5313c509f168099b",
                "name": "Coasters",
                "parent": {
                    "id": "65c5d3345313c509f168034d",
                    "name": "Resin",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/resin",
                    "createdAt": "2024-02-09T07:24:36.743Z",
                    "updatedAt": "2024-02-09T07:24:36.743Z"
                },
                "link": "/coasters",
                "createdAt": "2024-02-09T07:48:30.007Z",
                "updatedAt": "2024-02-09T07:48:30.007Z"
            },
            {
                "id": "65c5d8f05313c509f16809cf",
                "name": "Photo Frames",
                "parent": {
                    "id": "65c5d3345313c509f168034d",
                    "name": "Resin",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/resin",
                    "createdAt": "2024-02-09T07:24:36.743Z",
                    "updatedAt": "2024-02-09T07:24:36.743Z"
                },
                "link": "/photo-frames",
                "createdAt": "2024-02-09T07:49:04.164Z",
                "updatedAt": "2024-02-09T07:49:04.164Z"
            },
            {
                "id": "65c5d9025313c509f1680a03",
                "name": "Clocks",
                "parent": {
                    "id": "65c5d3345313c509f168034d",
                    "name": "Resin",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/resin",
                    "createdAt": "2024-02-09T07:24:36.743Z",
                    "updatedAt": "2024-02-09T07:24:36.743Z"
                },
                "link": "/clocks",
                "createdAt": "2024-02-09T07:49:22.699Z",
                "updatedAt": "2024-02-09T07:49:22.699Z"
            },
            {
                "id": "65c5d9285313c509f1680a37",
                "name": "Wall Hangings",
                "parent": {
                    "id": "65c5d3485313c509f1680380",
                    "name": "Lippan",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/lippan",
                    "createdAt": "2024-02-09T07:24:56.010Z",
                    "updatedAt": "2024-02-09T07:24:56.010Z"
                },
                "link": "/wall-hangings",
                "createdAt": "2024-02-09T07:50:00.612Z",
                "updatedAt": "2024-02-09T07:50:00.612Z"
            },
            {
                "id": "65c5d93e5313c509f1680a6b",
                "name": "Photo Frames",
                "parent": {
                    "id": "65c5d3485313c509f1680380",
                    "name": "Lippan",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/lippan",
                    "createdAt": "2024-02-09T07:24:56.010Z",
                    "updatedAt": "2024-02-09T07:24:56.010Z"
                },
                "link": "/photo-frames",
                "createdAt": "2024-02-09T07:50:22.133Z",
                "updatedAt": "2024-02-09T07:50:22.133Z"
            },
            {
                "id": "65c5d9535313c509f1680a9f",
                "name": "Tea Light Holders",
                "parent": {
                    "id": "65c5d3485313c509f1680380",
                    "name": "Lippan",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/lippan",
                    "createdAt": "2024-02-09T07:24:56.010Z",
                    "updatedAt": "2024-02-09T07:24:56.010Z"
                },
                "link": "/tea-light-holders",
                "createdAt": "2024-02-09T07:50:43.327Z",
                "updatedAt": "2024-02-09T07:50:43.327Z"
            },
            {
                "id": "65c5d9625313c509f1680ad3",
                "name": "Mirror",
                "parent": {
                    "id": "65c5d3485313c509f1680380",
                    "name": "Lippan",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/lippan",
                    "createdAt": "2024-02-09T07:24:56.010Z",
                    "updatedAt": "2024-02-09T07:24:56.010Z"
                },
                "link": "/mirror",
                "createdAt": "2024-02-09T07:50:58.337Z",
                "updatedAt": "2024-02-09T07:50:58.337Z"
            },
            {
                "id": "65c5d9975313c509f1680b4f",
                "name": "Candles",
                "link": "/candles",
                "createdAt": "2024-02-09T07:51:51.218Z",
                "updatedAt": "2024-02-19T11:33:46.226Z",
                "parent": {
                    "id": "65c5d29d5313c509f1680216",
                    "name": "Home & Living",
                    "link": "/home-living",
                    "createdAt": "2024-02-09T07:22:05.003Z",
                    "updatedAt": "2024-02-19T11:30:07.016Z",
                    "parent": null
                }
            },
            {
                "id": "65c5d9a95313c509f1680b7b",
                "name": "Decorative Candles",
                "parent": {
                    "id": "65c5d9975313c509f1680b4f",
                    "name": "Candles",
                    "link": "/candles",
                    "createdAt": "2024-02-09T07:51:51.218Z",
                    "updatedAt": "2024-02-19T11:33:46.226Z",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    }
                },
                "link": "/decorative-candles",
                "createdAt": "2024-02-09T07:52:09.472Z",
                "updatedAt": "2024-02-09T07:52:09.472Z"
            },
            {
                "id": "65c5d9bf5313c509f1680bae",
                "name": "Tea Light Candle",
                "parent": {
                    "id": "65c5d9975313c509f1680b4f",
                    "name": "Candles",
                    "link": "/candles",
                    "createdAt": "2024-02-09T07:51:51.218Z",
                    "updatedAt": "2024-02-19T11:33:46.226Z",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    }
                },
                "link": "/tea-light-candle",
                "createdAt": "2024-02-09T07:52:31.666Z",
                "updatedAt": "2024-02-09T07:52:31.666Z"
            },
            {
                "id": "65c5da065313c509f1680c23",
                "name": "Modern Frames",
                "parent": {
                    "id": "65c5d35f5313c509f16803b3",
                    "name": "Photo Frame",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/photo-frame",
                    "createdAt": "2024-02-09T07:25:19.451Z",
                    "updatedAt": "2024-02-09T07:25:19.451Z"
                },
                "link": "/modern-frames",
                "createdAt": "2024-02-09T07:53:42.392Z",
                "updatedAt": "2024-02-09T07:53:42.392Z"
            },
            {
                "id": "65c5da1b5313c509f1680c5d",
                "name": "Resin Frames",
                "parent": {
                    "id": "65c5d35f5313c509f16803b3",
                    "name": "Photo Frame",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/photo-frame",
                    "createdAt": "2024-02-09T07:25:19.451Z",
                    "updatedAt": "2024-02-09T07:25:19.451Z"
                },
                "link": "/resin-frames",
                "createdAt": "2024-02-09T07:54:03.749Z",
                "updatedAt": "2024-02-09T07:54:03.749Z"
            },
            {
                "id": "65c5da305313c509f1680c91",
                "name": "Lippan Frames",
                "parent": {
                    "id": "65c5d35f5313c509f16803b3",
                    "name": "Photo Frame",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/photo-frame",
                    "createdAt": "2024-02-09T07:25:19.451Z",
                    "updatedAt": "2024-02-09T07:25:19.451Z"
                },
                "link": "/lippan-frames",
                "createdAt": "2024-02-09T07:54:24.373Z",
                "updatedAt": "2024-02-09T07:54:24.373Z"
            },
            {
                "id": "65c5dac45313c509f1680db2",
                "name": "Resin Candle Holders",
                "parent": {
                    "id": "65c5d3705313c509f16803e6",
                    "name": "Candle Holders",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/candle-holders",
                    "createdAt": "2024-02-09T07:25:36.059Z",
                    "updatedAt": "2024-02-09T07:25:36.059Z"
                },
                "link": "/resin-candle-holders",
                "createdAt": "2024-02-09T07:56:52.923Z",
                "updatedAt": "2024-02-09T07:56:52.923Z"
            },
            {
                "id": "65c5dae75313c509f1680de6",
                "name": "Tea Light Holders",
                "parent": {
                    "id": "65c5d3705313c509f16803e6",
                    "name": "Candle Holders",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/candle-holders",
                    "createdAt": "2024-02-09T07:25:36.059Z",
                    "updatedAt": "2024-02-09T07:25:36.059Z"
                },
                "link": "/tea-light-holders",
                "createdAt": "2024-02-09T07:57:27.353Z",
                "updatedAt": "2024-02-09T07:57:27.353Z"
            },
            {
                "id": "65c5db085313c509f1680e35",
                "name": "Spiritual Wall Hangings",
                "parent": {
                    "id": "65c5d3825313c509f1680419",
                    "name": "Pooja Essentials",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/pooja-essentials",
                    "createdAt": "2024-02-09T07:25:54.376Z",
                    "updatedAt": "2024-02-09T07:25:54.376Z"
                },
                "link": "/spiritual-wallhangings",
                "createdAt": "2024-02-09T07:58:00.007Z",
                "updatedAt": "2024-02-09T07:58:00.007Z"
            },
            {
                "id": "65c5db1b5313c509f1680e6f",
                "name": "Pooja Thali",
                "parent": {
                    "id": "65c5d3825313c509f1680419",
                    "name": "Pooja Essentials",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/pooja-essentials",
                    "createdAt": "2024-02-09T07:25:54.376Z",
                    "updatedAt": "2024-02-09T07:25:54.376Z"
                },
                "link": "/pooja-thali",
                "createdAt": "2024-02-09T07:58:19.120Z",
                "updatedAt": "2024-02-09T07:58:19.120Z"
            },
            {
                "id": "65c5db2a5313c509f1680ea3",
                "name": "Diya",
                "parent": {
                    "id": "65c5d3825313c509f1680419",
                    "name": "Pooja Essentials",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/pooja-essentials",
                    "createdAt": "2024-02-09T07:25:54.376Z",
                    "updatedAt": "2024-02-09T07:25:54.376Z"
                },
                "link": "/diya",
                "createdAt": "2024-02-09T07:58:34.793Z",
                "updatedAt": "2024-02-09T07:58:34.793Z"
            },
            {
                "id": "65c5db445313c509f1680ed7",
                "name": "Incense Burner",
                "parent": {
                    "id": "65c5d3825313c509f1680419",
                    "name": "Pooja Essentials",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/pooja-essentials",
                    "createdAt": "2024-02-09T07:25:54.376Z",
                    "updatedAt": "2024-02-09T07:25:54.376Z"
                },
                "link": "/incense-burner",
                "createdAt": "2024-02-09T07:59:00.939Z",
                "updatedAt": "2024-02-09T07:59:00.939Z"
            },
            {
                "id": "65c5db565313c509f1680f0b",
                "name": "God Idols",
                "parent": {
                    "id": "65c5d3825313c509f1680419",
                    "name": "Pooja Essentials",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/pooja-essentials",
                    "createdAt": "2024-02-09T07:25:54.376Z",
                    "updatedAt": "2024-02-09T07:25:54.376Z"
                },
                "link": "/god-idols",
                "createdAt": "2024-02-09T07:59:18.956Z",
                "updatedAt": "2024-02-09T07:59:18.956Z"
            },
            {
                "id": "65c5db705313c509f1680f5a",
                "name": "Terracotta Planters",
                "parent": {
                    "id": "65c5d3975313c509f168044c",
                    "name": "Decorative Pot & Planters",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/decorative-pot-planters",
                    "createdAt": "2024-02-09T07:26:15.754Z",
                    "updatedAt": "2024-02-09T07:26:15.754Z"
                },
                "link": "/terracotta-planters",
                "createdAt": "2024-02-09T07:59:44.461Z",
                "updatedAt": "2024-02-09T07:59:44.461Z"
            },
            {
                "id": "65c5db895313c509f1680f8e",
                "name": "Terracotta Pots",
                "parent": {
                    "id": "65c5d3975313c509f168044c",
                    "name": "Decorative Pot & Planters",
                    "parent": {
                        "id": "65c5d29d5313c509f1680216",
                        "name": "Home & Living",
                        "link": "/home-living",
                        "createdAt": "2024-02-09T07:22:05.003Z",
                        "updatedAt": "2024-02-19T11:30:07.016Z",
                        "parent": null
                    },
                    "link": "/decorative-pot-planters",
                    "createdAt": "2024-02-09T07:26:15.754Z",
                    "updatedAt": "2024-02-09T07:26:15.754Z"
                },
                "link": "/terracotta-pots",
                "createdAt": "2024-02-09T08:00:09.779Z",
                "updatedAt": "2024-02-09T08:00:09.779Z"
            },
            {
                "id": "65c5dc7b5313c509f168100e",
                "name": "Jewellery & Accesorries",
                "parent": null,
                "link": "/jewellery-accesorries",
                "createdAt": "2024-02-09T08:04:11.959Z",
                "updatedAt": "2024-02-09T08:04:11.959Z"
            },
            {
                "id": "65c5dc955313c509f1681034",
                "name": "Earrings",
                "parent": {
                    "id": "65c5dc7b5313c509f168100e",
                    "name": "Jewellery & Accesorries",
                    "parent": null,
                    "link": "/jewellery-accesorries",
                    "createdAt": "2024-02-09T08:04:11.959Z",
                    "updatedAt": "2024-02-09T08:04:11.959Z"
                },
                "link": "/earrings",
                "createdAt": "2024-02-09T08:04:37.119Z",
                "updatedAt": "2024-02-09T08:04:37.119Z"
            },
            {
                "id": "65c5dca35313c509f1681067",
                "name": "Keyrings",
                "parent": {
                    "id": "65c5dc7b5313c509f168100e",
                    "name": "Jewellery & Accesorries",
                    "parent": null,
                    "link": "/jewellery-accesorries",
                    "createdAt": "2024-02-09T08:04:11.959Z",
                    "updatedAt": "2024-02-09T08:04:11.959Z"
                },
                "link": "/keyrings",
                "createdAt": "2024-02-09T08:04:51.715Z",
                "updatedAt": "2024-02-09T08:04:51.715Z"
            },
            {
                "id": "65c5dcb85313c509f168109a",
                "name": "Jewellery Set",
                "parent": {
                    "id": "65c5dc7b5313c509f168100e",
                    "name": "Jewellery & Accesorries",
                    "parent": null,
                    "link": "/jewellery-accesorries",
                    "createdAt": "2024-02-09T08:04:11.959Z",
                    "updatedAt": "2024-02-09T08:04:11.959Z"
                },
                "link": "/jewellery-set",
                "createdAt": "2024-02-09T08:05:12.447Z",
                "updatedAt": "2024-02-09T08:05:12.447Z"
            },
            {
                "id": "65c5dcc75313c509f16810cd",
                "name": "Resin",
                "parent": {
                    "id": "65c5dc955313c509f1681034",
                    "name": "Earrings",
                    "parent": {
                        "id": "65c5dc7b5313c509f168100e",
                        "name": "Jewellery & Accesorries",
                        "parent": null,
                        "link": "/jewellery-accesorries",
                        "createdAt": "2024-02-09T08:04:11.959Z",
                        "updatedAt": "2024-02-09T08:04:11.959Z"
                    },
                    "link": "/earrings",
                    "createdAt": "2024-02-09T08:04:37.119Z",
                    "updatedAt": "2024-02-09T08:04:37.119Z"
                },
                "link": "/resin",
                "createdAt": "2024-02-09T08:05:27.706Z",
                "updatedAt": "2024-02-09T08:05:27.706Z"
            },
            {
                "id": "65c5dce25313c509f168110d",
                "name": "Quilling",
                "parent": {
                    "id": "65c5dc955313c509f1681034",
                    "name": "Earrings",
                    "parent": {
                        "id": "65c5dc7b5313c509f168100e",
                        "name": "Jewellery & Accesorries",
                        "parent": null,
                        "link": "/jewellery-accesorries",
                        "createdAt": "2024-02-09T08:04:11.959Z",
                        "updatedAt": "2024-02-09T08:04:11.959Z"
                    },
                    "link": "/earrings",
                    "createdAt": "2024-02-09T08:04:37.119Z",
                    "updatedAt": "2024-02-09T08:04:37.119Z"
                },
                "link": "/quilling",
                "createdAt": "2024-02-09T08:05:54.652Z",
                "updatedAt": "2024-02-09T08:05:54.652Z"
            },
            {
                "id": "65c5dcf75313c509f1681141",
                "name": "Bead & Mirror",
                "parent": {
                    "id": "65c5dc955313c509f1681034",
                    "name": "Earrings",
                    "parent": {
                        "id": "65c5dc7b5313c509f168100e",
                        "name": "Jewellery & Accesorries",
                        "parent": null,
                        "link": "/jewellery-accesorries",
                        "createdAt": "2024-02-09T08:04:11.959Z",
                        "updatedAt": "2024-02-09T08:04:11.959Z"
                    },
                    "link": "/earrings",
                    "createdAt": "2024-02-09T08:04:37.119Z",
                    "updatedAt": "2024-02-09T08:04:37.119Z"
                },
                "link": "/bead-mirror",
                "createdAt": "2024-02-09T08:06:15.491Z",
                "updatedAt": "2024-02-09T08:06:15.491Z"
            },
            {
                "id": "65c5dd0a5313c509f1681175",
                "name": "Clay",
                "parent": {
                    "id": "65c5dc955313c509f1681034",
                    "name": "Earrings",
                    "parent": {
                        "id": "65c5dc7b5313c509f168100e",
                        "name": "Jewellery & Accesorries",
                        "parent": null,
                        "link": "/jewellery-accesorries",
                        "createdAt": "2024-02-09T08:04:11.959Z",
                        "updatedAt": "2024-02-09T08:04:11.959Z"
                    },
                    "link": "/earrings",
                    "createdAt": "2024-02-09T08:04:37.119Z",
                    "updatedAt": "2024-02-09T08:04:37.119Z"
                },
                "link": "/clay",
                "createdAt": "2024-02-09T08:06:34.068Z",
                "updatedAt": "2024-02-09T08:06:34.068Z"
            },
            {
                "id": "65c5dd195313c509f16811a9",
                "name": "Fabric",
                "parent": {
                    "id": "65c5dc955313c509f1681034",
                    "name": "Earrings",
                    "parent": {
                        "id": "65c5dc7b5313c509f168100e",
                        "name": "Jewellery & Accesorries",
                        "parent": null,
                        "link": "/jewellery-accesorries",
                        "createdAt": "2024-02-09T08:04:11.959Z",
                        "updatedAt": "2024-02-09T08:04:11.959Z"
                    },
                    "link": "/earrings",
                    "createdAt": "2024-02-09T08:04:37.119Z",
                    "updatedAt": "2024-02-09T08:04:37.119Z"
                },
                "link": "/fabric",
                "createdAt": "2024-02-09T08:06:49.661Z",
                "updatedAt": "2024-02-09T08:06:49.661Z"
            },
            {
                "id": "65c5dd3a5313c509f16811f5",
                "name": "Resin Jewellery",
                "parent": {
                    "id": "65c5dcb85313c509f168109a",
                    "name": "Jewellery Set",
                    "parent": {
                        "id": "65c5dc7b5313c509f168100e",
                        "name": "Jewellery & Accesorries",
                        "parent": null,
                        "link": "/jewellery-accesorries",
                        "createdAt": "2024-02-09T08:04:11.959Z",
                        "updatedAt": "2024-02-09T08:04:11.959Z"
                    },
                    "link": "/jewellery-set",
                    "createdAt": "2024-02-09T08:05:12.447Z",
                    "updatedAt": "2024-02-09T08:05:12.447Z"
                },
                "link": "/resin-jewellery",
                "createdAt": "2024-02-09T08:07:22.830Z",
                "updatedAt": "2024-02-09T08:07:22.830Z"
            },
            {
                "id": "65c5dd4d5313c509f1681229",
                "name": "Quilling Jewellery",
                "parent": {
                    "id": "65c5dcb85313c509f168109a",
                    "name": "Jewellery Set",
                    "parent": {
                        "id": "65c5dc7b5313c509f168100e",
                        "name": "Jewellery & Accesorries",
                        "parent": null,
                        "link": "/jewellery-accesorries",
                        "createdAt": "2024-02-09T08:04:11.959Z",
                        "updatedAt": "2024-02-09T08:04:11.959Z"
                    },
                    "link": "/jewellery-set",
                    "createdAt": "2024-02-09T08:05:12.447Z",
                    "updatedAt": "2024-02-09T08:05:12.447Z"
                },
                "link": "/quilling-jewellery",
                "createdAt": "2024-02-09T08:07:41.742Z",
                "updatedAt": "2024-02-09T08:07:41.742Z"
            },
            {
                "id": "65c5dd655313c509f1681269",
                "name": "Sea - Sell Jewellery",
                "parent": {
                    "id": "65c5dcb85313c509f168109a",
                    "name": "Jewellery Set",
                    "parent": {
                        "id": "65c5dc7b5313c509f168100e",
                        "name": "Jewellery & Accesorries",
                        "parent": null,
                        "link": "/jewellery-accesorries",
                        "createdAt": "2024-02-09T08:04:11.959Z",
                        "updatedAt": "2024-02-09T08:04:11.959Z"
                    },
                    "link": "/jewellery-set",
                    "createdAt": "2024-02-09T08:05:12.447Z",
                    "updatedAt": "2024-02-09T08:05:12.447Z"
                },
                "link": "/sea-sell-jewellery",
                "createdAt": "2024-02-09T08:08:05.252Z",
                "updatedAt": "2024-02-09T08:08:05.252Z"
            },
            {
                "id": "65c5dd775313c509f16812a3",
                "name": "Clay Jewellery",
                "parent": {
                    "id": "65c5dcb85313c509f168109a",
                    "name": "Jewellery Set",
                    "parent": {
                        "id": "65c5dc7b5313c509f168100e",
                        "name": "Jewellery & Accesorries",
                        "parent": null,
                        "link": "/jewellery-accesorries",
                        "createdAt": "2024-02-09T08:04:11.959Z",
                        "updatedAt": "2024-02-09T08:04:11.959Z"
                    },
                    "link": "/jewellery-set",
                    "createdAt": "2024-02-09T08:05:12.447Z",
                    "updatedAt": "2024-02-09T08:05:12.447Z"
                },
                "link": "/clay-jewellery",
                "createdAt": "2024-02-09T08:08:23.833Z",
                "updatedAt": "2024-02-09T08:08:23.833Z"
            },
            {
                "id": "65c5dd895313c509f16812dd",
                "name": "Fabric Jewellery",
                "parent": {
                    "id": "65c5dcb85313c509f168109a",
                    "name": "Jewellery Set",
                    "parent": {
                        "id": "65c5dc7b5313c509f168100e",
                        "name": "Jewellery & Accesorries",
                        "parent": null,
                        "link": "/jewellery-accesorries",
                        "createdAt": "2024-02-09T08:04:11.959Z",
                        "updatedAt": "2024-02-09T08:04:11.959Z"
                    },
                    "link": "/jewellery-set",
                    "createdAt": "2024-02-09T08:05:12.447Z",
                    "updatedAt": "2024-02-09T08:05:12.447Z"
                },
                "link": "/fabric-jewellery",
                "createdAt": "2024-02-09T08:08:41.576Z",
                "updatedAt": "2024-02-09T08:08:41.576Z"
            },
            {
                "id": "65c5dd9d5313c509f168131d",
                "name": "Wood Jewellery",
                "parent": {
                    "id": "65c5dcb85313c509f168109a",
                    "name": "Jewellery Set",
                    "parent": {
                        "id": "65c5dc7b5313c509f168100e",
                        "name": "Jewellery & Accesorries",
                        "parent": null,
                        "link": "/jewellery-accesorries",
                        "createdAt": "2024-02-09T08:04:11.959Z",
                        "updatedAt": "2024-02-09T08:04:11.959Z"
                    },
                    "link": "/jewellery-set",
                    "createdAt": "2024-02-09T08:05:12.447Z",
                    "updatedAt": "2024-02-09T08:05:12.447Z"
                },
                "link": "/wood-jewellery",
                "createdAt": "2024-02-09T08:09:01.440Z",
                "updatedAt": "2024-02-09T08:09:01.440Z"
            },
            {
                "id": "65c5ddae5313c509f1681357",
                "name": "Kundan Jewellery",
                "parent": {
                    "id": "65c5dcb85313c509f168109a",
                    "name": "Jewellery Set",
                    "parent": {
                        "id": "65c5dc7b5313c509f168100e",
                        "name": "Jewellery & Accesorries",
                        "parent": null,
                        "link": "/jewellery-accesorries",
                        "createdAt": "2024-02-09T08:04:11.959Z",
                        "updatedAt": "2024-02-09T08:04:11.959Z"
                    },
                    "link": "/jewellery-set",
                    "createdAt": "2024-02-09T08:05:12.447Z",
                    "updatedAt": "2024-02-09T08:05:12.447Z"
                },
                "link": "/kundan-jewellery",
                "createdAt": "2024-02-09T08:09:18.805Z",
                "updatedAt": "2024-02-09T08:09:18.805Z"
            },
            {
                "id": "65c5ddd25313c509f1681397",
                "name": "Kitchen & Dining",
                "link": "/kitchen-dining",
                "createdAt": "2024-02-09T08:09:54.161Z",
                "updatedAt": "2024-02-19T11:28:34.449Z",
                "parent": null
            },
            {
                "id": "65c5dde35313c509f16813bd",
                "name": "Drinkware",
                "parent": {
                    "id": "65c5ddd25313c509f1681397",
                    "name": "Kitchen & Dining",
                    "link": "/kitchen-dining",
                    "createdAt": "2024-02-09T08:09:54.161Z",
                    "updatedAt": "2024-02-19T11:28:34.449Z",
                    "parent": null
                },
                "link": "/drinkware",
                "createdAt": "2024-02-09T08:10:11.540Z",
                "updatedAt": "2024-02-09T08:10:11.540Z"
            },
            {
                "id": "65c5ddf15313c509f16813fc",
                "name": "Serveware",
                "parent": {
                    "id": "65c5ddd25313c509f1681397",
                    "name": "Kitchen & Dining",
                    "link": "/kitchen-dining",
                    "createdAt": "2024-02-09T08:09:54.161Z",
                    "updatedAt": "2024-02-19T11:28:34.449Z",
                    "parent": null
                },
                "link": "/serveware",
                "createdAt": "2024-02-09T08:10:25.808Z",
                "updatedAt": "2024-02-09T08:10:25.808Z"
            },
            {
                "id": "65c5de035313c509f168143b",
                "name": "Tableware",
                "parent": {
                    "id": "65c5ddd25313c509f1681397",
                    "name": "Kitchen & Dining",
                    "link": "/kitchen-dining",
                    "createdAt": "2024-02-09T08:09:54.161Z",
                    "updatedAt": "2024-02-19T11:28:34.449Z",
                    "parent": null
                },
                "link": "/tableware",
                "createdAt": "2024-02-09T08:10:43.033Z",
                "updatedAt": "2024-02-09T08:10:43.033Z"
            },
            {
                "id": "65c5de175313c509f1681474",
                "name": "Coffee Mugs",
                "parent": {
                    "id": "65c5dde35313c509f16813bd",
                    "name": "Drinkware",
                    "parent": {
                        "id": "65c5ddd25313c509f1681397",
                        "name": "Kitchen & Dining",
                        "link": "/kitchen-dining",
                        "createdAt": "2024-02-09T08:09:54.161Z",
                        "updatedAt": "2024-02-19T11:28:34.449Z",
                        "parent": null
                    },
                    "link": "/drinkware",
                    "createdAt": "2024-02-09T08:10:11.540Z",
                    "updatedAt": "2024-02-09T08:10:11.540Z"
                },
                "link": "/coffee-mugs",
                "createdAt": "2024-02-09T08:11:03.165Z",
                "updatedAt": "2024-02-09T08:11:03.165Z"
            },
            {
                "id": "65c5de2a5313c509f16814a8",
                "name": "Water Bottles",
                "parent": {
                    "id": "65c5dde35313c509f16813bd",
                    "name": "Drinkware",
                    "parent": {
                        "id": "65c5ddd25313c509f1681397",
                        "name": "Kitchen & Dining",
                        "link": "/kitchen-dining",
                        "createdAt": "2024-02-09T08:09:54.161Z",
                        "updatedAt": "2024-02-19T11:28:34.449Z",
                        "parent": null
                    },
                    "link": "/drinkware",
                    "createdAt": "2024-02-09T08:10:11.540Z",
                    "updatedAt": "2024-02-09T08:10:11.540Z"
                },
                "link": "/water-bottles",
                "createdAt": "2024-02-09T08:11:22.664Z",
                "updatedAt": "2024-02-09T08:11:22.664Z"
            },
            {
                "id": "65c5de3b5313c509f16814dc",
                "name": "Teacups Set",
                "parent": {
                    "id": "65c5dde35313c509f16813bd",
                    "name": "Drinkware",
                    "parent": {
                        "id": "65c5ddd25313c509f1681397",
                        "name": "Kitchen & Dining",
                        "link": "/kitchen-dining",
                        "createdAt": "2024-02-09T08:09:54.161Z",
                        "updatedAt": "2024-02-19T11:28:34.449Z",
                        "parent": null
                    },
                    "link": "/drinkware",
                    "createdAt": "2024-02-09T08:10:11.540Z",
                    "updatedAt": "2024-02-09T08:10:11.540Z"
                },
                "link": "/teacups-set",
                "createdAt": "2024-02-09T08:11:39.501Z",
                "updatedAt": "2024-02-09T08:11:39.501Z"
            },
            {
                "id": "65c5de4d5313c509f1681510",
                "name": "Glass Set",
                "parent": {
                    "id": "65c5dde35313c509f16813bd",
                    "name": "Drinkware",
                    "parent": {
                        "id": "65c5ddd25313c509f1681397",
                        "name": "Kitchen & Dining",
                        "link": "/kitchen-dining",
                        "createdAt": "2024-02-09T08:09:54.161Z",
                        "updatedAt": "2024-02-19T11:28:34.449Z",
                        "parent": null
                    },
                    "link": "/drinkware",
                    "createdAt": "2024-02-09T08:10:11.540Z",
                    "updatedAt": "2024-02-09T08:10:11.540Z"
                },
                "link": "/glass-set",
                "createdAt": "2024-02-09T08:11:57.885Z",
                "updatedAt": "2024-02-09T08:11:57.885Z"
            },
            {
                "id": "65c5de5c5313c509f1681544",
                "name": "Fabric",
                "parent": {
                    "id": "65c5dde35313c509f16813bd",
                    "name": "Drinkware",
                    "parent": {
                        "id": "65c5ddd25313c509f1681397",
                        "name": "Kitchen & Dining",
                        "link": "/kitchen-dining",
                        "createdAt": "2024-02-09T08:09:54.161Z",
                        "updatedAt": "2024-02-19T11:28:34.449Z",
                        "parent": null
                    },
                    "link": "/drinkware",
                    "createdAt": "2024-02-09T08:10:11.540Z",
                    "updatedAt": "2024-02-09T08:10:11.540Z"
                },
                "link": "/fabric",
                "createdAt": "2024-02-09T08:12:12.304Z",
                "updatedAt": "2024-02-09T08:12:12.304Z"
            },
            {
                "id": "65c5de6f5313c509f168157e",
                "name": "Serving Tray",
                "parent": {
                    "id": "65c5ddf15313c509f16813fc",
                    "name": "Serveware",
                    "parent": {
                        "id": "65c5ddd25313c509f1681397",
                        "name": "Kitchen & Dining",
                        "link": "/kitchen-dining",
                        "createdAt": "2024-02-09T08:09:54.161Z",
                        "updatedAt": "2024-02-19T11:28:34.449Z",
                        "parent": null
                    },
                    "link": "/serveware",
                    "createdAt": "2024-02-09T08:10:25.808Z",
                    "updatedAt": "2024-02-09T08:10:25.808Z"
                },
                "link": "/serving-tray",
                "createdAt": "2024-02-09T08:12:31.216Z",
                "updatedAt": "2024-02-09T08:12:31.216Z"
            },
            {
                "id": "65c5de7e5313c509f16815b8",
                "name": "Tray Set",
                "parent": {
                    "id": "65c5ddf15313c509f16813fc",
                    "name": "Serveware",
                    "parent": {
                        "id": "65c5ddd25313c509f1681397",
                        "name": "Kitchen & Dining",
                        "link": "/kitchen-dining",
                        "createdAt": "2024-02-09T08:09:54.161Z",
                        "updatedAt": "2024-02-19T11:28:34.449Z",
                        "parent": null
                    },
                    "link": "/serveware",
                    "createdAt": "2024-02-09T08:10:25.808Z",
                    "updatedAt": "2024-02-09T08:10:25.808Z"
                },
                "link": "/tray-set",
                "createdAt": "2024-02-09T08:12:46.841Z",
                "updatedAt": "2024-02-09T08:12:46.841Z"
            },
            {
                "id": "65c5de8e5313c509f16815ec",
                "name": "Coasters",
                "parent": {
                    "id": "65c5de035313c509f168143b",
                    "name": "Tableware",
                    "parent": {
                        "id": "65c5ddd25313c509f1681397",
                        "name": "Kitchen & Dining",
                        "link": "/kitchen-dining",
                        "createdAt": "2024-02-09T08:09:54.161Z",
                        "updatedAt": "2024-02-19T11:28:34.449Z",
                        "parent": null
                    },
                    "link": "/tableware",
                    "createdAt": "2024-02-09T08:10:43.033Z",
                    "updatedAt": "2024-02-09T08:10:43.033Z"
                },
                "link": "/coasters",
                "createdAt": "2024-02-09T08:13:02.063Z",
                "updatedAt": "2024-02-09T08:13:02.063Z"
            },
            {
                "id": "65c5de9e5313c509f1681626",
                "name": "Kettle",
                "parent": {
                    "id": "65c5de035313c509f168143b",
                    "name": "Tableware",
                    "parent": {
                        "id": "65c5ddd25313c509f1681397",
                        "name": "Kitchen & Dining",
                        "link": "/kitchen-dining",
                        "createdAt": "2024-02-09T08:09:54.161Z",
                        "updatedAt": "2024-02-19T11:28:34.449Z",
                        "parent": null
                    },
                    "link": "/tableware",
                    "createdAt": "2024-02-09T08:10:43.033Z",
                    "updatedAt": "2024-02-09T08:10:43.033Z"
                },
                "link": "/kettle",
                "createdAt": "2024-02-09T08:13:18.290Z",
                "updatedAt": "2024-02-09T08:13:18.290Z"
            },
            {
                "id": "65c5deb15313c509f1681666",
                "name": "Gifting",
                "link": "/gifting",
                "createdAt": "2024-02-09T08:13:37.264Z",
                "updatedAt": "2024-02-19T11:27:30.496Z",
                "parent": null
            },
            {
                "id": "65c5dec35313c509f1681692",
                "name": "Corporate Gifts",
                "parent": {
                    "id": "65c5deb15313c509f1681666",
                    "name": "Gifting",
                    "link": "/gifting",
                    "createdAt": "2024-02-09T08:13:37.264Z",
                    "updatedAt": "2024-02-19T11:27:30.496Z",
                    "parent": null
                },
                "link": "/corporate-gifts",
                "createdAt": "2024-02-09T08:13:55.161Z",
                "updatedAt": "2024-02-09T08:13:55.161Z"
            },
            {
                "id": "65c5ded45313c509f16816cb",
                "name": "Anniversary Gifts",
                "parent": {
                    "id": "65c5deb15313c509f1681666",
                    "name": "Gifting",
                    "link": "/gifting",
                    "createdAt": "2024-02-09T08:13:37.264Z",
                    "updatedAt": "2024-02-19T11:27:30.496Z",
                    "parent": null
                },
                "link": "/anniversary-fifts",
                "createdAt": "2024-02-09T08:14:12.250Z",
                "updatedAt": "2024-02-09T08:14:12.250Z"
            },
            {
                "id": "65c5dee75313c509f16816fe",
                "name": "Birthday Gifts",
                "parent": {
                    "id": "65c5deb15313c509f1681666",
                    "name": "Gifting",
                    "link": "/gifting",
                    "createdAt": "2024-02-09T08:13:37.264Z",
                    "updatedAt": "2024-02-19T11:27:30.496Z",
                    "parent": null
                },
                "link": "/birthday-gifts",
                "createdAt": "2024-02-09T08:14:31.611Z",
                "updatedAt": "2024-02-09T08:14:31.611Z"
            },
            {
                "id": "65c5df035313c509f1681731",
                "name": "Gift Hampers",
                "parent": {
                    "id": "65c5deb15313c509f1681666",
                    "name": "Gifting",
                    "link": "/gifting",
                    "createdAt": "2024-02-09T08:13:37.264Z",
                    "updatedAt": "2024-02-19T11:27:30.496Z",
                    "parent": null
                },
                "link": "/gift-hampers",
                "createdAt": "2024-02-09T08:14:59.681Z",
                "updatedAt": "2024-02-09T08:14:59.681Z"
            },
            {
                "id": "65c5df1c5313c509f1681764",
                "name": "Personalized Gifts",
                "parent": {
                    "id": "65c5deb15313c509f1681666",
                    "name": "Gifting",
                    "link": "/gifting",
                    "createdAt": "2024-02-09T08:13:37.264Z",
                    "updatedAt": "2024-02-19T11:27:30.496Z",
                    "parent": null
                },
                "link": "/personalized-gifts",
                "createdAt": "2024-02-09T08:15:24.530Z",
                "updatedAt": "2024-02-09T08:15:24.530Z"
            },
            {
                "id": "65c5df345313c509f16817a3",
                "name": "Valentineâ€™s Day Special",
                "parent": {
                    "id": "65c5deb15313c509f1681666",
                    "name": "Gifting",
                    "link": "/gifting",
                    "createdAt": "2024-02-09T08:13:37.264Z",
                    "updatedAt": "2024-02-19T11:27:30.496Z",
                    "parent": null
                },
                "link": "/valentines-day-special",
                "createdAt": "2024-02-09T08:15:48.731Z",
                "updatedAt": "2024-02-09T08:15:48.731Z"
            },
            {
                "id": "65c5df545313c509f16817e2",
                "name": "Art & Collectibles ",
                "link": "/art-collectibles ",
                "createdAt": "2024-02-09T08:16:20.520Z",
                "updatedAt": "2024-02-19T11:26:40.250Z",
                "parent": null
            },
            {
                "id": "65c5df645313c509f168181a",
                "name": "Sculpture",
                "parent": {
                    "id": "65c5df545313c509f16817e2",
                    "name": "Art & Collectibles ",
                    "link": "/art-collectibles ",
                    "createdAt": "2024-02-09T08:16:20.520Z",
                    "updatedAt": "2024-02-19T11:26:40.250Z",
                    "parent": null
                },
                "link": "/sculpture",
                "createdAt": "2024-02-09T08:16:36.415Z",
                "updatedAt": "2024-02-09T08:16:36.415Z"
            },
            {
                "id": "65c5df715313c509f168184d",
                "name": "Masterpices",
                "parent": {
                    "id": "65c5df545313c509f16817e2",
                    "name": "Art & Collectibles ",
                    "link": "/art-collectibles ",
                    "createdAt": "2024-02-09T08:16:20.520Z",
                    "updatedAt": "2024-02-19T11:26:40.250Z",
                    "parent": null
                },
                "link": "/masterpices",
                "createdAt": "2024-02-09T08:16:49.243Z",
                "updatedAt": "2024-02-09T08:16:49.243Z"
            }
        
    ]

    const [clickedItem, setClickedItem] = useState(null);
    const handleOnClick = (name) => {
        setClickedItem(name);
        console.log(name);
    };

  return (
    <div className="App">

      <nav className="navigation"> 
            {data.filter(item => !item.parent).map((i, index) => (
                <li className="nav_list nav_list_menu">
                      <p  key={index} onMouseOver={() => handleOnClick(i.name)} href={i.name} className="nav_link">
                      {clickedItem && <MegaDropdown parentName={clickedItem}/>}
                  <span>{i.name}</span>
                 
                </p>
                     
                </li>
               
            ))}

            <p> </p>
        </nav>
     
    </div>
  )
}

export default Apps
