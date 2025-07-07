const products = [
  {
    id: 1,
    name: "ASUS TUF 27 inch FHD 180Hz 1ms GTG IPS LED G-Sync FreeSync Gaming Monitor (VG279Q3A)",
    image: "/assets/products/ASUS TUF 27 inch FHD 180Hz 1ms GTG IPS LED G-Sync FreeSync Gaming Monitor (VG279Q3A).jpg",
    category: "Monitors",
    brand: "Asus",
    price: 349.99,      // Normal price
    salePrice: 299.99,  // sale price
    isOnSale: true
  },
  {
    id: 2,
    name: "ASUS Vivobook S15 15.6 FHD Laptop",
    image: "/assets/products/ASUS Vivobook S15 15.6 FHD Laptop.jpg",
    category: "Laptops",
    brand: "Asus",
    price: 649.99,      // Normal price
    salePrice: 507.99,  // sale price
    isOnSale: true
  },
  {
    id: 3,
    name: "Acer 27 inch QHD 200Hz 0.5ms GTG IPS LED FreeSync Gaming Monitor (XV270U X1) - Black",
    image: "/assets/products/Acer 27 inch QHD 200Hz 0.5ms GTG IPS LED FreeSync Gaming Monitor (XV270U X1) - Black.jpg",
    category: "Monitors",
    brand: "Acer",
    price: 600.99,      // Normal price
    salePrice: 450.99,  // sale price
    isOnSale: true
  },
  {
    id: 4,
    name: "Acer Aspire 5 15.6 FHD LCD Laptop",
    image: "/assets/products/Acer Aspire 5 15.6 FHD LCD Laptop.jpg",
    category: "Laptops",
    brand: "Acer",
    price: 800.00,      // Normal price
    salePrice: 699.99,  // sale price
    isOnSale: true
  },
  {
    id: 5,
    name: "Acer Iconia Tab M10 Tablet with Bumper Case Included",
    image: "/assets/products/Acer Iconia Tab M10 Tablet with Bumper Case Included.jpg",
    category: "Tablets",
    brand: "Acer",
    price: 600.99,      // Normal price
    isOnSale: false
  },
  {
    id: 6,
    name: "Acer Nitro 23.8 inches FHD 180Hz 0.5ms GTG IPS LED FreeSync Gaming Monitor (XV240Y)",
    image: "/assets/products/Acer Nitro 23.8 inches FHD 180Hz 0.5ms GTG IPS LED FreeSync Gaming Monitor (XV240Y).jpg",
    category: "Monitors",
    brand: "Acer",
    price: 400.99,      // Normal price
    isOnSale: false
  },
  {
    id: 7,
    name: "Apple 16 MacBook Pro",
    image: "/assets/products/Apple 16 MacBook Pro.jpg",
    category: "Laptops",
    brand: "Apple",
    price: 1400.99,      // Normal price
    isOnSale: false

  },
  {
    id: 8,
    name: "Apple MacBook Air 15.3",
    image: "/assets/products/Apple MacBook Air 15.3.jpg",
    category: "Laptops",
    brand: "Apple",
    price: 1800.99,      // Normal price
    isOnSale: false
  },
  {
    id: 9,
    name: "Apple iPhone 14 Pro Max - Purple",
    image: "/assets/products/Apple iPhone 14 Pro Max - Purple.jpg",
    category: "Phones",
    brand: "Apple",
    price: 1400.99,      // Normal price
    isOnSale: false
  },
  {
    id: 10,
    name: "Apple iPhone 16 Plus - Pink",
    image: "/assets/products/Apple iPhone 16 Plus - Pink.jpg",
    category: "Phones",
    brand: "Apple",
    price: 1400.99,      // Normal price
    isOnSale: false

  },
  {
    id: 11,
    name: "Apple iPhone 16 Pro - Titanium",
    image: "/assets/products/Apple iPhone 16 Pro - Titanium.jpg",
    category: "Phones",
    brand: "Apple",
    price: 1400.99,      // Normal price
    isOnSale: false

  },
  {
    id: 12,
    name: "Apple wireless airpods",
    image: "/assets/products/Apple wireless earbuds.jpg",
    category: "Earbuds",
    brand: "Apple",
    price: 270.99,      // Normal price
    isOnSale: false

  },
  {
    id: 13,
    name: "Asus Zenbook A14 14 Copilot+ PC Laptop",
    image: "/assets/products/Asus Zenbook A14 14 Copilot+ PC Laptop.jpg",
    category: "Laptops",
    brand: "Asus",
    price: 1000.99,      // Normal price
    isOnSale: false

  },
  {
    id: 14,
    name: "Beats By Dr. Dre Solo 4 On-Ear Sound Isolating Bluetooth Headphones - Cloud Pink",
    image: "/assets/products/Beats By Dr. Dre Solo 4 On-Ear Sound Isolating Bluetooth Headphones - Cloud Pink.jpg",
    category: "Headphones",
    brand: "Beats",
    price: 300.99,      // Normal price
    isOnSale: false

  },
  {
    id: 15,
    name: "Brother HL-L2405W Home Office-Ready Monochrome Laser Printer",
    image: "/assets/products/Brother HL-L2405W Home Office-Ready Monochrome Laser Printer.jpg",
    category: "Printers",
    brand: "Brother",
    price: 1000.99,      // Normal price
    isOnSale: false

  },
  {
    id: 16,
    name: "Brother MFC-L3780CDW Wireless All-in-One Colour Laser Printerjpeg",
    image: "/assets/products/Brother MFC-L3780CDW Wireless All-in-One Colour Laser Printer.jpg",
    category: "Printers",
    brand: "Brother",
    price: 1000.99,      // Normal price
    isOnSale: false

  },
  {
    id: 17,
    name: "CRUA 30Inch Ultrawide Curved Monitor",
    image: "/assets/products/CRUA 30Inch Ultrawide Curved Monitor.jpg",
    category: "Monitors",
    brand: "CRUA",
    price: 9600.99,      // Normal price
    isOnSale: false

  },
  {
    id: 18,
    name: "Canon Color imageCLASS LBP633Cdw Wireless Mobile‐Ready Color Laser Printer",
    image: "/assets/products/Canon Color imageCLASS LBP633Cdw Wireless Mobile‐Ready Color Laser Printer.jpg",
    category: "Printers",
    brand: "Canon",
    price: 1000.99,      // Normal price
    isOnSale: false

  },
  {
    id: 19,
    name: "Canon EOS 5D Mark IV Full Frame DSLR Camera",
    image: "/assets/products/Canon EOS 5D Mark IV Full Frame DSLR Camera.jpg",
    category: "Cameras",
    brand: "Canon",
    price: 1900.99,      // Normal price
    isOnSale: false

  },
  {
    id: 20,
    name: "Canon EOS Rebel T100 DSLR Camera wEF-S 18-55mm f3.5-5.6 DC III Lens",
    image: "/assets/products/Canon EOS Rebel T100 DSLR Camera wEF-S 18-55mm f3.5-5.6 DC III Lens.jpg",
    category: "Cameras",
    brand: "Canon",
    price: 2400.99,      // Normal price
    isOnSale: false

  },
  {
    id: 21,
    name: "Canon EOS Rebel T7 DSLR Camera with 18-55mm IS Lens Kit",
    image: "/assets/products/Canon EOS Rebel T7 DSLR Camera with 18-55mm IS Lens Kit.jpg",
    category: "Cameras",
    brand: "Canon",
    price: 2200.99,      // Normal price
    isOnSale: false

  },
  {
    id: 22,
    name: "Canon MEGATANK PIXMA G4280 Wireless MegaTank All-in-One Printer",
    image: "/assets/products/Canon MEGATANK PIXMA G4280 Wireless MegaTank All-in-One Printer.jpg",
    category: "Printers",
    brand: "Canon",
    price: 700.99,      // Normal price
    isOnSale: false

  },
  {
    id: 23,
    name: "Canon Pixma TR4720 Wireless All-In-One Printer",
    image: "/assets/products/Canon Pixma TR4720 Wireless All-In-One Printer.jpg",
    category: "Printers",
    brand: "Canon",
    price: 1000.99,      // Normal price
    isOnSale: false

  },
  {
    id: 24,
    name: "Canon imageCLASS MF654Cdw 3-in-One Wireless Colour Laser Printer",
    image: "/assets/products/Canon imageCLASS MF654Cdw 3-in-One Wireless Colour Laser Printer.jpg",
    category: "Printers",
    brand: "Canon",
    price: 1050.99,      // Normal price
    isOnSale: false

  },
  {
    id: 25,
    name: "Doogee Blade20 Ultra Rugged Phone",
    image: "/assets/products/Doogee Blade20 Ultra Rugged Phone.jpg",
    category: "Phones",
    brand: "Doogee",
    price: 100.99,      // Normal price
    isOnSale: false

  },
  {
    id: 26,
    name: "EPSON WorkForce Pro WF-4820 All-in-One Printer",
    image: "/assets/products/EPSON WorkForce Pro WF-4820 All-in-One Printer.jpg",
    category: "Printers",
    brand: "Epson",
    price: 1400.99,      // Normal price
    isOnSale: false

  },
  {
    id: 27,
    name: "Epson Expression Home XP-4200 Wireless Colour Inkjet All-in-One Printer",
    image: "/assets/products/Epson Expression Home XP-4200 Wireless Colour Inkjet All-in-One Printer.jpg",
    category: "Printers",
    brand: "Epson",
    price: 1500.99,      // Normal price
    isOnSale: false

  },
  {
    id: 28,
    name: "Fujifilm Instax Wide 400 Instant Camera - Green",
    image: "/assets/products/Fujifilm Instax Wide 400 Instant Camera - Green.jpg",
    category: "Cameras",
    brand: "Fujifilm",
    price: 100.99,      // Normal price
    isOnSale: false

  },
  {
    id: 29,
    name: "Fujifilm X-T30 II Mirrorless Camera with 15-45mm Lens Kit - Silver",
    image: "/assets/products/Fujifilm X-T30 II Mirrorless Camera with 15-45mm Lens Kit - Silver.jpg",
    category: "Cameras",
    brand: "Fujifilm",
    price: 200.99,      // Normal price
    isOnSale: false

  },
  {
    id: 30,
    name: "HP 14 Laptop PC",
    image: "/assets/products/HP 14 Laptop PC.jpg",
    category: "Laptops",
    brand: "HP",
    price: 1400.99,      // Normal price
    isOnSale: false

  },
  {
    id: 31,
    name: "HP 17 - Laptop",
    image: "/assets/products/HP 17 - Laptop.jpg",
    category: "Laptops",
    brand: "HP",
    price: 1500.99,      // Normal price
    isOnSale: false

  },
  {
    id: 32,
    name: "HP DeskJet 4275e All-in-One Printer",
    image: "/assets/products/HP DeskJet 4275e All-in-One Printer.jpg",
    category: "Printers",
    brand: "HP",
    price: 1300.99,      // Normal price
    isOnSale: false

  },
  {
    id: 33,
    name: "HP OfficeJet Pro 9125e Wireless All-in-One Colour Inkjet Printer",
    image: "/assets/products/HP OfficeJet Pro 9125e Wireless All-in-One Colour Inkjet Printer.jpg",
    category: "Printers",
    brand: "HP",
    price: 980.99,      // Normal price
    isOnSale: false

  },
  {
    id: 34,
    name: "HP Omnibook 5 Flip 14 Laptop",
    image: "/assets/products/HP Omnibook 5 Flip 14 Laptop.jpg",
    category: "Laptops",
    brand: "HP",
    price: 1300.99,      // Normal price
    isOnSale: false

  },
  {
    id: 35,
    name: "JBL Tune 520BT On-Ear Sound Isolating Bluetooth Headphones - Black",
    image: "/assets/products/JBL Tune 520BT On-Ear Sound Isolating Bluetooth Headphones - Black.jpg",
    category: "Headphones",
    brand: "JBL",
    price: 400.99,      // Normal price
    isOnSale: false

  },
  {
    id: 36,
    name: "LG 24 inch FHD 100Hz 5ms IPS FreeSync Monitor (24MR400) - Black",
    image: "/assets/products/LG 24 inch FHD 100Hz 5ms IPS FreeSync Monitor (24MR400) - Black.jpg",
    category: "Monitors",
    brand: "LG",
    price: 500.99,      // Normal price
    isOnSale: false

  },
  {
    id: 37,
    name: "Lenovo IdeaPad 1i 14 HD TN Laptop",
    image: "/assets/products/Lenovo IdeaPad 1i 14 HD TN Laptop.jpg",
    category: "Laptops",
    brand: "Lenovo",
    price: 1470.99,      // Normal price
    isOnSale: false

  },
  {
    id: 38,
    name: "Lenovo Tab M11 Tablet (Folio Case & Pen Included)",
    image: "/assets/products/Lenovo Tab M11 Tablet (Folio Case & Pen Included).jpg",
    category: "Tablets",
    brand: "Lenovo",
    price: 1100.99,      // Normal price
    isOnSale: false

  },
  {
    id: 39,
    name: "MSI Modern 15.6 Laptop",
    image: "/assets/products/MSI Modern 15.6 Laptop.jpg",
    category: "Laptops",
    brand: "MSI",
    price: 2400.99,      // Normal price
    isOnSale: false

  },
  {
    id: 40,
    name: "Motorola Edge 2025 - 128 GB - Deep Forest",
    image: "/assets/products/Motorola Edge 2025 - 128 GB - Deep Forest.jpg",
    category: "Phones",
    brand: "Motorola",
    price: 400.99,      // Normal price
    isOnSale: false

  },
  {
    id: 41,
    name: "Motorola Razr 2025 - 256 GB - Gibraltar Sea",
    image: "/assets/products/Motorola Razr 2025 - 256 GB - Gibraltar Sea.jpg",
    category: "Phones",
    brand: "Motorola",
    price: 550.99,      // Normal price
    isOnSale: false

  },
  {
    id: 42,
    name: "Motorola moto g PLAY 2024 Cellphone - 64 GB - Sapphire Bluejpeg",
    image: "/assets/products/Motorola moto g PLAY 2024 Cellphone - 64 GB - Sapphire Blue.jpg",
    category: "Phones",
    brand: "Motorola",
    price: 300.99,      // Normal price
    isOnSale: false

  },
  {
    id: 43,
    name: "Nikon D5600 DSLR Camera with 18-55mm VR Lens",
    image: "/assets/products/Nikon D5600 DSLR Camera with 18-55mm VR Lens.jpg",
    category: "Cameras",
    brand: "Nikon",
    price: 2600.99,      // Normal price
    isOnSale: false

  },
  {
    id: 44,
    name: "Noise Cancelling True Wireless Earbuds",
    image: "/assets/products/Noise Cancelling True Wireless Earbuds.jpg", 
    category: "Earbuds",
    brand: "Beats",
    price: 400.99,      // Normal price
    isOnSale: false

  },
  {
    id: 45,
    name: "Polaroid I-2 Instant Camera - Black",
    image: "/assets/products/Polaroid I-2 Instant Camera - Black.jpg",
    category: "Cameras",
    brand: "Polaroid",
    price: 100.99,      // Normal price
    isOnSale: false

  },
  {
    id: 46,
    name: "Samsung 57 inch 8K Ultra HD 240Hz 1ms GTG Curved VA LED FreeSync Gaming Monitor",
    image: "/assets/products/Samsung 57 inch 8K Ultra HD 240Hz 1ms GTG Curved VA LED FreeSync Gaming Monitor.jpg",
    category: "Monitors",
    brand: "Samsung",
    price: 1700.99,      // Normal price
    isOnSale: false

  },
  {
    id: 47,
    name: "Samsung Essential S3 27 inch FHD 100Hz 4ms GTG Curved VA LED Monitor (LS27D368GANXZA) - Black",
    image: "/assets/products/Samsung Essential S3 27 inch FHD 100Hz 4ms GTG Curved VA LED Monitor (LS27D368GANXZA) - Black.jpg",
    category: "Monitors",
    brand: "Samsung",
    price: 900.99,      // Normal price
    isOnSale: false

  },
  {
    id: 48,
    name: "Samsung Essential S3 27 inch FHD 100Hz 5ms GTG IPS LED Monitor (LS27D300GANXZA) - Black",
    image: "/assets/products/Samsung Essential S3 27 inch FHD 100Hz 5ms GTG IPS LED Monitor (LS27D300GANXZA) - Black.jpg",
    category: "Monitors",
    brand: "Samsung",
    price: 700.99,      // Normal price
    isOnSale: false

  },
  {
    id: 49,
    name: "Samsung Galaxy A16 5G - 128GB - Black",
    image: "/assets/products/Samsung Galaxy A16 5G - 128GB - Black.jpg",
    category: "Phones",
    brand: "Samsung",
    price: 1000.99,      // Normal price
    isOnSale: false

  },
  {
    id: 50,
    name: "Samsung Galaxy Book4 Edge 14 Copilot+ PC Laptop",
    image: "/assets/products/Samsung Galaxy Book4 Edge 14 Copilot+ PC Laptop.jpg",
    category: "Laptops",
    brand: "Samsung",
    price: 1400.99,      // Normal price
    isOnSale: false

  },
  {
    id: 51,
    name: "Samsung Galaxy Tab A9+ (Plus)",
    image: "/assets/products/Samsung Galaxy Tab A9+ (Plus).jpg",
    category: "Tablets",
    brand: "Samsung",
    price: 700.99,      // Normal price
    isOnSale: false

  },
  {
    id: 52,
    name: "Samsung Galaxy Tab S10 FE",
    image: "/assets/products/Samsung Galaxy Tab S10 FE.jpg",
    category: "Tablets",
    brand: "Samsung",
    price: 900.99,      // Normal price
    isOnSale: false

  },
  {
    id: 53,
    name: "Samsung Galaxy Tab S6 Lite",
    image: "/assets/products/Samsung Galaxy Tab S6 Lite.jpg",
    category: "Tablets",
    brand: "Samsung",
    price: 800.99,      // Normal price
    isOnSale: false

  },
  {
    id: 54,
    name: "Sony Cyber-shot RX10 IV Wi-Fi 21MP 25x Optical Zoom Digital Camera - Black",
    image: "/assets/products/Sony Cyber-shot RX10 IV Wi-Fi 21MP 25x Optical Zoom Digital Camera - Black.jpg",
    category: "Cameras",
    brand: "Sony",
    price: 1300.99,      // Normal price
    isOnSale: false

  },
  {
    id: 55,
    name: "Sony Cyber-shot ZV-1 Content Creator Vlogger 20.1MP 2.9x Optical Zoom Digital Camera - White",
    image: "/assets/products/Sony Cyber-shot ZV-1 Content Creator Vlogger 20.1MP 2.9x Optical Zoom Digital Camera - White.jpg",
    category: "Cameras",
    brand: "Sony",
    price: 1200.99,      // Normal price
    isOnSale: false

  },
  {
    id: 56,
    name: "Sony WH-1000XM5 Over-Ear Noise Cancelling Bluetooth Headphones - Black",
    image: "/assets/products/Sony WH-1000XM5 Over-Ear Noise Cancelling Bluetooth Headphones - Black.jpg",
    category: "Headphones",
    brand: "Sony",
    price: 400.99,      // Normal price
    isOnSale: false

  },
  {
    id: 57,
    name: "Sony WH-CH720N Over-Ear Noise Cancelling Bluetooth Headphones - Black",
    image: "/assets/products/Sony WH-CH720N Over-Ear Noise Cancelling Bluetooth Headphones - Black.jpg",
    category: "Headphones",
    brand: "Sony",
    price: 330.99,      // Normal price
    isOnSale: false

  },
  {
    id: 58,
    name: "Sony ZV-1F Content Creator Vlogger 20.1MP Digital Camera - Black",
    image: "/assets/products/Sony ZV-1F Content Creator Vlogger 20.1MP Digital Camera - Black.jpg",
    category: "Cameras",
    brand: "Sony",
    price: 1400.99,      // Normal price
    isOnSale: false

  },
  {
    id: 59,
    name: "TCL 303 5.5 - 32 GB - Prime Black",
    image: "/assets/products/TCL 303 5.5 - 32 GB - Prime Black.jpg",
    category: "Phones",
    brand: "TCL",
    price: 170.99,      // Normal price
    isOnSale: false

  },
  {
    id: 60,
    name: "TCL 60 XE NXTPAPER 5G - 128GB - Space Blue",
    image: "/assets/products/TCL 60 XE NXTPAPER 5G - 128GB - Space Blue.jpg",
    category: "Phones",
    brand: "TCL",
    price: 310.99,      // Normal price
    isOnSale: false

  },
  {
    id: 61,
    name: "TCL Flip - 8GB - Black",
    image: "/assets/products/TCL Flip - 8GB - Black.jpg",
    category: "Phones",
    brand: "TCL",
    price: 100.99,      // Normal price
    isOnSale: false

  },
  {
    id: 62,
    name: "iphone 16e - Black",
    image: "/assets/products/iphone 16e - Black.jpg",
    category: "Phones",
    brand: "Apple",
    price: 1400.99,      // Normal price
    isOnSale: false

  }
];

export default products;