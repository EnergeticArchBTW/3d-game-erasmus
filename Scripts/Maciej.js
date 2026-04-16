mapArray[1] = [
// --- ISTNIEJĄCE POMIESZCZENIE (Główne) ---
	[-550, 0, -1000, 0, 0, 0, 900, 200, "Patterns/3.jpg"], // Lewa część ściany
    [550, 0, -1000, 0, 0, 0, 900, 200, "Patterns/3.jpg"],  // Prawa część ściany
    [0, -80, -1000, 0, 0, 0, 200, 40, "Patterns/3.jpg"],   // Nadproże (przejście 200px)
    [-550, 0, -980, 0, 0, 0, 900, 200, "Patterns/3.jpg"], 
    [550, 0, -980, 0, 0, 0, 900, 200, "Patterns/3.jpg"],
    [0, -80, -980, 0, 0, 0, 200, 40, "Patterns/3.jpg"],
    [-100, 20, -990, 0, 90, 0, 20, 160, "Patterns/3.jpg"], 
    [100, 20, -990, 0, 90, 0, 20, 160, "Patterns/3.jpg"],  
    [0, -60, -990, 90, 0, 0, 200, 20, "Patterns/3.jpg"],
    [-1000, 0, -990, 0, 90, 0, 20, 200, "Patterns/3.jpg"], 
    [1000, 0, -990, 0, 90, 0, 20, 200, "Patterns/3.jpg"],
    [0, 0, 1000, 0, 0, 0, 2000, 200, "Patterns/3.jpg"], 
    [0, 0, 980, 0, 0, 0, 2000, 200, "Patterns/3.jpg"],  
    [-1000, 0, 990, 0, 90, 0, 20, 200, "Patterns/3.jpg"], 
    [1000, 0, 990, 0, 90, 0, 20, 200, "Patterns/3.jpg"],  
    [1000, 0, 0, 0, 90, 0, 2000, 200, "Patterns/3.jpg"], 
    [980, 0, 0, 0, 90, 0, 2000, 200, "Patterns/3.jpg"],  
    [-1000, 0, 0, 0, 90, 0, 2000, 200, "Patterns/3.jpg"], 
    [-980, 0, 0, 0, 90, 0, 2000, 200, "Patterns/3.jpg"], 
    [0, 100, 0, 90, 0, 0, 2000, 2000, "#3498db"], // Podłoga (zostaje)
    // SUFIT GŁÓWNY USUNIĘTY

    // --- DŁUGI KORYTARZ (Łącznik) ---
	[-100, 0, -1500, 0, 90, 0, 1000, 200, "#555555"], // Lewa ściana
    [100, 0, -1500, 0, 90, 0, 1000, 200, "#555555"],  // Prawa ściana
    [0, 100, -1500, 90, 0, 0, 200, 1000, "#333333"],  // Podłoga (szeroka na 200)

    // --- NOWE WIELKIE POMIESZCZENIE (SANDBOX) ---
    // Pozycja środka: Z = -4000, Wymiary: 2000x2000
	[0, 0, -3000, 0, 0, 0, 1000, 200, "#e74c3c"],     // Tył
    [-500, 0, -2500, 0, 90, 0, 1000, 200, "#2ecc71"], // Lewo
    [500, 0, -2500, 0, 90, 0, 1000, 200, "#3498db"],  // Prawo
    [0, 100, -2500, 90, 0, 0, 1000, 1000, "#95a5a6"], // Podłoga
	
    // Przednia ściana z otworem na korytarz (Z = -3000)
	[-350, 0, -2000, 0, 0, 0, 600, 200, "#f1c40f"],   // Przód-Lewo
    [350, 0, -2000, 0, 0, 0, 600, 200, "#1abc9c"],    // Przód-Prawo
    [0, -80, -2000, 0, 0, 0, 200, 40, "#34495e"],     // Przód-Nadproże
	// --- Wewnętrzne Ściany (Z DODANYMI KRAWĘDZIAMI) ---
	// Ściana X1 (Prostopadła do Z)
	[500, 0, -500, 0, 0, 0, 1000, 200, "Patterns/3.jpg"],  
	[500, 0, -480, 0, 0, 0, 1000, 200, "Patterns/3.jpg"],  
	[0, 0, -490, 0, 90, 0, 20, 200, "Patterns/3.jpg"],     
	[1000, 0, -490, 0, 90, 0, 20, 200, "Patterns/3.jpg"],  

	// Ściana X2 (Prostopadła do Z)
	[-500, 0, 500, 0, 0, 0, 1000, 200, "Patterns/3.jpg"],   
	[-500, 0, 480, 0, 0, 0, 1000, 200, "Patterns/3.jpg"],   
	[-1000, 0, 490, 0, 90, 0, 20, 200, "Patterns/3.jpg"],  
	[0, 0, 490, 0, 90, 0, 20, 200, "Patterns/3.jpg"],      

	// Ściana X3 (Prostopadła do Z)
	[0, 0, 0, 0, 0, 0, 500, 200, "Patterns/3.jpg"],        
	[0, 0, 20, 0, 0, 0, 500, 200, "Patterns/3.jpg"],        
	[-250, 0, 10, 0, 90, 0, 20, 200, "Patterns/3.jpg"],    
	[250, 0, 10, 0, 90, 0, 20, 200, "Patterns/3.jpg"],     
	
	// Ściana Z1 (Prostopadła do X)
	[-500, 0, -500, 0, 90, 0, 1000, 200, "Patterns/3.jpg"], 
	[-480, 0, -500, 0, 90, 0, 1000, 200, "Patterns/3.jpg"], 
	[-490, 0, -1000, 0, 0, 0, 20, 200, "Patterns/3.jpg"],  
	[-490, 0, 0, 0, 0, 0, 20, 200, "Patterns/3.jpg"],      
	
	// Ściana Z2 (Prostopadła do X)
	[500, 0, 500, 0, 90, 0, 1000, 200, "Patterns/3.jpg"],   
	[480, 0, 500, 0, 90, 0, 1000, 200, "Patterns/3.jpg"],   
	[490, 0, 0, 0, 0, 0, 20, 200, "Patterns/3.jpg"],       
	[490, 0, 1000, 0, 0, 0, 20, 200, "Patterns/3.jpg"],    
	
	// Ściana Z3 (Prostopadła do X)
	[0, 0, 0, 0, 90, 0, 500, 200, "Patterns/3.jpg"],        
	[-20, 0, 0, 0, 90, 0, 500, 200, "Patterns/3.jpg"],      
	[-10, 0, -250, 0, 0, 0, 20, 200, "Patterns/3.jpg"],    
	[-10, 0, 250, 0, 0, 0, 20, 200, "Patterns/3.jpg"]      ,
	

];

/*coinsArray[1] = [
	// --- Lewy Korytarz (Zewnętrzny: X = -750) ---
	[-750, 30, -800, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-750, 30, -600, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-750, 30, -400, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-750, 30, -200, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-750, 30, 0,    0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-750, 30, 200,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-750, 30, 400,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-750, 30, 600,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-750, 30, 800,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],

	// --- Prawy Korytarz (Zewnętrzny: X = 750) ---
	[750, 30, -800, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[750, 30, -600, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[750, 30, -400, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[750, 30, -200, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[750, 30, 0,    0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[750, 30, 200,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[750, 30, 400,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[750, 30, 600,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[750, 30, 800,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],

	// --- Lewy Korytarz (Wewnętrzny: X = -250) ---
	[-250, 30, -800, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-250, 30, -600, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-250, 30, -400, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-250, 30, -200, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-250, 30, 200,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-250, 30, 400,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-250, 30, 600,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-250, 30, 800,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],

	// --- Prawy Korytarz (Wewnętrzny: X = 250) ---
	[250, 30, -800, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[250, 30, -600, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[250, 30, -400, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[250, 30, -200, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[250, 30, 200,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[250, 30, 400,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[250, 30, 600,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[250, 30, 800,  0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	
	// --- Poziome Połączenia W Środku (Oś Z=0) ---
	[-600, 30, 0, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-400, 30, 0, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[-100, 30, 0, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[100, 30, 0, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[400, 30, 0, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20],
	[600, 30, 0, 0, 0, 0, 50, 50, "Patterns/coin.png", 1, 20]
];*/

coinsArray[1] = [
    // --- Lewy Korytarz (Zewnętrzny: X = -750) ---
    [-750, 40, -800, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-750, 40, -600, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-750, 40, -400, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-750, 40, -200, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-750, 40, 0,    0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-750, 40, 200,  0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-750, 40, 400,  0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-750, 40, 600,  0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-750, 40, 800,  0, 0, 0, 50, 50, coin_texture, 50, 20],

    // --- Prawy Korytarz (Zewnętrzny: X = 750) ---
    [750, 40, -800, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [750, 40, -600, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [750, 40, -400, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [750, 40, -200, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [750, 40, 0,    0, 0, 0, 50, 50, coin_texture, 50, 20],
    [750, 40, 200,  0, 0, 0, 50, 50, coin_texture, 50, 20],
    [750, 40, 400,  0, 0, 0, 50, 50, coin_texture, 50, 20],
    [750, 40, 600,  0, 0, 0, 50, 50, coin_texture, 50, 20],
    [750, 40, 800,  0, 0, 0, 50, 50, coin_texture, 50, 20],

    // --- Lewy Korytarz (Wewnętrzny: X = -250) ---
    [-250, 40, -800, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-250, 40, -600, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-250, 40, -400, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-250, 40, -200, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-250, 40, 200,  0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-250, 40, 400,  0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-250, 40, 600,  0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-250, 40, 800,  0, 0, 0, 50, 50, coin_texture, 50, 20],

    // --- Prawy Korytarz (Wewnętrzny: X = 250) ---
    [250, 40, -800, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [250, 40, -600, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [250, 40, -400, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [250, 40, -200, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [250, 40, 200,  0, 0, 0, 50, 50, coin_texture, 50, 20],
    [250, 40, 400,  0, 0, 0, 50, 50, coin_texture, 50, 20],
    [250, 40, 600,  0, 0, 0, 50, 50, coin_texture, 50, 20],
    [250, 40, 800,  0, 0, 0, 50, 50, coin_texture, 50, 20],
    
    // --- Poziome Połączenia W Środku (Oś Z=0) ---
    [-600, 40, 0, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-400, 40, 0, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [-100, 40, 0, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [100, 40, 0, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [400, 40, 0, 0, 0, 0, 50, 50, coin_texture, 50, 20],
    [600, 40, 0, 0, 0, 0, 50, 50, coin_texture, 50, 20]
];

/*finishArray[1] = [
    [0, 0, 980, 0, 0, 0, 120, 120, "Patterns/234.avif", 50]
];*/

finishArray[1] = [
    [0, 100, 980, 0, 0, 0, 320, 320, "Patterns/234.avif"]
];
	
startArray[1] = [
	[-900, 0, -900, 0, 0]
];
keysArray[1] = [
	[90, 30, 900, 0, 0, 0, 50, 50,"Patterns/key.png",50],
	[750, 30, -750, 0, 0, 0, 50, 50,"Patterns/key.png",50]
];