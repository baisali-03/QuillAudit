const explorer = {
    id:"1",
    name: "Example Folder",
    isFolder: true,
    items: [
      {
        id:"2",
        name: "Sample Folder",
        isFolder: true,
        items: [
            {
                id:"3",
                name: "Folder",
                isFolder: false,
                items: []
              },
          {
            id:"4",
            name: "Folder 123",
            isFolder: true,
            items: [
              {
                id:"5",
                name: "Example_File_1",
                isFolder: false,
                items: []
              },
              {
                id:"6",
                name: "Example_File_2",
                isFolder: false,
                items: []
              },
              {
                id:"6",
                name: "Example_File_321",
                isFolder: false,
                items: []
              }
            ]
          }
          
        ]
      },
      
      {
        id:"11",
        name: "Sample File",
        isFolder: false,
        items: []
      }
    ]
  };
  
  export default explorer;