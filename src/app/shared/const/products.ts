import { ImobileProduct } from "../modules/product.interface";

export const mobileProducts : Array<ImobileProduct> = [
    {
      id: 1,
      name: 'iPhone 13',
      brand: 'Apple',
      price: 999,
      image: 'https://i.insider.com/6116b065c040ad0018ce3ea1?width=1009&format=jpeg',
      isAvailable: true,
      rating : 4.9,
      highlights:["128 GB ROM",
        "15.49 cm (6.1 inch) Super Retina XDR Display",
        "12MP + 12MP | 12MP Front Camera",
        "A15 Bionic Chip Processor"]
    },
    {
      id: 2,
      name: 'Samsung Galaxy S21',
      brand: 'Samsung',
      price: 899,
      image: '',
      isAvailable: false,
      rating : 4.5,
      highlights: ["8 GB RAM | 128 GB ROM",
        "16.26 cm (6.4 inch) Full HD+ Display",
        "12MP + 12MP + 8MP (OIS) | 32MP Front Camera",
        "4500 mAh Lithium-ion Battery",
        "Snapdragon 888 Processor"]
    },
    {
      id: 3,
      name: 'Google Pixel 6',
      brand: 'Google',
      price: 799,
      image: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iOS/ios16-iphone13-pro-widgets-home-screen.png',
      isAvailable: false,
      rating : 3.9,
      highlights: [
        "6 GB RAM | 128 GB ROM",
        "15.6 cm (6.14 inch) Full HD+ Display",
        "12.2MP + 12MP | 8MP Front Camera",
        "4410 mAh Battery",
        "Google Tensor Processor"
      ]
    },
    {
      id: 4,
      name: 'OnePlus 9 Pro',
      brand: 'OnePlus',
      price: 899,
      image: '',
      isAvailable: true,
      rating : 2.9,
      highlights: ["12 GB RAM | 256 GB ROM",
        "17.02 cm (6.7 inch) Display",
        "48MP Rear Camera",
        "4500 mAh Battery"]
    },
    {
      id: 5,
      name: 'Xiaomi Mi 11',
      brand: 'Xiaomi',
      price: 699,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
      isAvailable: true,
      rating : 4.8,
      highlights: ["8 GB RAM | 128 GB ROM | Expandable Upto 512 GB",
        "16.64 cm (6.55 inch) Full HD+ Display",
        "64MP + 8MP + 5MP | 16MP Front Camera",
       " 4250 mAh Li-Polymer Battery",
        "Qualcomm Snapdragon 732G Processor"]
    },
    {
      id: 6,
      name: 'Sony Xperia 1 III',
      brand: 'Sony',
      price: 1199,
      image: '',
      isAvailable: true,
      rating : 2.5,
      highlights: ["1 GB RAM | 4 GB ROM | Expandable Upto 32 GB",
        "11.43 cm (4.5 inch) FWVGA Display",
        "5MP Rear Camera | 0.3MP Front Camera",
        "2330 mAh Battery",
        "Qualcomm Snapdragon MSM8226 Processor"]
    },
    {
      id: 7,
      name: 'LG Velvet',
      brand: 'LG',
      price: 599,
      image: '',
      isAvailable: false,
      rating : 1.5,
      highlights:["Air-bubble Proof, Anti Fingerprint, Anti Glare, UV Protection, Washable",
        "Mobile",
        "Edge To Edge Tempered Glass",
       " Removable"]
    },
    {
      id: 8,
      name: 'Huawei P40 Pro',
      brand: 'Huawei',
      price: 899,
      image: '',
      isAvailable: true,
      rating : 3.5,
      highlights:["2 GB RAM | 32 GB ROM | Expandable Upto 512 GB",
        "20.32 cm (8 inch) HD Display",
        "5 MP Primary Camera | 2 MP Front",
        "Android 10 | Battery: 5100 mAh Lithium Polymer",
       "Ideal Usage: Business, Reading and Browsing",
        "Voice Call (Single Sim, LTE)",
        "Processor: MTK MT8768 Octa Core"]
    },
    {
      id: 9,
      name: 'Motorola Moto G Power',
      brand: 'Motorola',
      price: 249,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_RzdvwZ2YQZDdcxwdHPXPk9hRMqtaX3ZbSA&usqp=CAU',
      isAvailable: true,
      rating : 4.5,
      highlights:["4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
        "16.76 cm (6.6 inch) HD+ Display",
        "50MP + 2MP | 16MP Front Camera",
        "6000 mAh Battery",
        "Helio G85 Processor"]
    },
    {
      id: 10,
      name: 'Nokia 8.3',
      brand: 'Nokia',
      price: 499,
      image: '',
      isAvailable: true,
      rating : 4.5,
      highlights: [
        "6 GB RAM | 128 GB ROM",
        "16.55 cm (6.517 inch) Display",
        "50MP Rear Camera",
        "5000 mAh Battery"
      ]
    }
  
  ];