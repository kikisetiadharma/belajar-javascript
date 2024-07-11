// Program JavaScript untuk menjumlahkan quantity berdasarkan productCode

let productBin = {
    "requestId": null,
    "data": [
      {
        "id": 100000057465,
        "storageId": 10000008207,
        "code": "A01-01-01-A",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 76,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000057466,
        "storageId": 10000002181,
        "code": "A01-01-01-B",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 71,
        "createdTime": "2021-12-21T13:54:48Z",
      },
      {
        "id": 100000065224,
        "storageId": 10000008884,
        "code": "Tgt00-A-A-01",
        "productId": 110000081009,
        "productName": "FloBrand-DressBSPink",
        "productCode": "FBR00040101",
        "quantity": 10,
        "createdTime": "2022-02-08T10:35:19Z",
      }
    ],
    "message": "success"
  };
  
  const productCode = "FBR00040101"; // productCode yang ingin dicek
  let storageIds = []; // Array untuk menyimpan storageId yang sesuai
  let totalQuantity = 0;
  
  // Iterasi melalui data produk
  productBin.data.forEach((product) => 
  {
    if (product.productCode === productCode) 
    {
      storageIds.push(product.storageId); // Menambahkan storageId ke array
      totalQuantity += product.quantity;
    }
  });
  
  // Menampilkan hasil penjumlahan quantity
  console.log(
    `Total quantity untuk productCode ${productCode} (FloBrand-DressBSPink) adalah ${totalQuantity}`
  );
  
  // (Opsional) Menampilkan storageId yang terkait
  if (storageIds.length > 0) 
  {
    console.log(
      `StorageId terkait: ${storageIds.join(", ")}` // Bergabung dengan storageId menggunakan koma dan spasi
    );
  }
  