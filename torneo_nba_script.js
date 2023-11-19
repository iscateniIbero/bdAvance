// Colección: Equipos
db.createCollection("equipos")
db.equipos.insertMany([
    { "nombre": "Los Angeles Lakers", "entrenador": "Frank Vogel", "jugadores": ["LeBron James", "Anthony Davis", "Russell Westbrook", "Carmelo Anthony", "Dwight Howard", "Talen Horton-Tucker"] },
    { "nombre": "Brooklyn Nets", "entrenador": "Steve Nash", "jugadores": ["Kevin Durant", "James Harden", "Kyrie Irving", "Blake Griffin", "Joe Harris", "DeAndre Jordan"] },
    { "nombre": "Golden State Warriors", "entrenador": "Steve Kerr", "jugadores": ["Stephen Curry", "Klay Thompson", "Draymond Green", "Andrew Wiggins", "Kevon Looney", "Jordan Poole"] },
    { "nombre": "Miami Heat", "entrenador": "Erik Spoelstra", "jugadores": ["Jimmy Butler", "Bam Adebayo", "Kyle Lowry", "Tyler Herro", "Duncan Robinson", "P.J. Tucker"] },
    { "nombre": "Phoenix Suns", "entrenador": "Monty Williams", "jugadores": ["Devin Booker", "Chris Paul", "Deandre Ayton", "Mikal Bridges", "Jae Crowder", "Cameron Johnson"] },
    { "nombre": "Milwaukee Bucks", "entrenador": "Mike Budenholzer", "jugadores": ["Giannis Antetokounmpo", "Jrue Holiday", "Khris Middleton", "Brook Lopez", "Donte DiVincenzo", "Pat Connaughton"] }
])

// Colección: Jugadores
db.createCollection("jugadores")
db.jugadores.insertMany([
    { "nombre": "LeBron James", "numero_camiseta": 23, "posicion": "Alero", "equipo": "Los Angeles Lakers" },
    { "nombre": "Kevin Durant", "numero_camiseta": 7, "posicion": "Ala-Pívot", "equipo": "Brooklyn Nets" },
    { "nombre": "Stephen Curry", "numero_camiseta": 30, "posicion": "Base", "equipo": "Golden State Warriors" },
    { "nombre": "Jimmy Butler", "numero_camiseta": 22, "posicion": "Alero", "equipo": "Miami Heat" },
    { "nombre": "Devin Booker", "numero_camiseta": 1, "posicion": "Escolta", "equipo": "Phoenix Suns" },
    { "nombre": "Giannis Antetokounmpo", "numero_camiseta": 34, "posicion": "Ala-Pívot", "equipo": "Milwaukee Bucks" }
])

// Colección: Encuentros
db.createCollection("encuentros")
db.encuentros.insertMany([
    { "equipo_local": "Los Angeles Lakers", "equipo_visitante": "Brooklyn Nets", "fecha": "2023-05-15", "resultado": "105-102" },
    { "equipo_local": "Golden State Warriors", "equipo_visitante": "Miami Heat", "fecha": "2023-05-16", "resultado": "98-110" },
    { "equipo_local": "Phoenix Suns", "equipo_visitante": "Milwaukee Bucks", "fecha": "2023-05-17", "resultado": "112-108" },
    { "equipo_local": "Brooklyn Nets", "equipo_visitante": "Golden State Warriors", "fecha": "2023-05-18", "resultado": "115-109" },
    { "equipo_local": "Miami Heat", "equipo_visitante": "Phoenix Suns", "fecha": "2023-05-19", "resultado": "106-98" },
    { "equipo_local": "Milwaukee Bucks", "equipo_visitante": "Los Angeles Lakers", "fecha": "2023-05-20", "resultado": "120-115" }
])

// Colección: Árbitros
db.createCollection("arbitros")
db.arbitros.insertMany([
    { "nombre": "John Smith", "experiencia": "5 años", "encuentros_dirigidos": [1, 3, 5] },
    { "nombre": "Emily Davis", "experiencia": "3 años", "encuentros_dirigidos": [2, 4, 6] },
    { "nombre": "Michael Johnson", "experiencia": "7 años", "encuentros_dirigidos": [1, 3, 6] },
    { "nombre": "Jessica Brown", "experiencia": "4 años", "encuentros_dirigidos": [2, 4, 5] }
])

// Colección: Resultados
db.createCollection("resultados")
db.resultados.insertMany([
    { "encuentro_id": 1, "equipo_ganador": "Los Angeles Lakers", "puntos_anotados": 105, "jugador_destacado": "LeBron James" },
    { "encuentro_id": 2, "equipo_ganador": "Miami Heat", "puntos_anotados": 110, "jugador_destacado": "Jimmy Butler" },
    { "encuentro_id": 3, "equipo_ganador": "Phoenix Suns", "puntos_anotados": 112, "jugador_destacado": "Devin Booker" },
    { "encuentro_id": 4, "equipo_ganador": "Brooklyn Nets", "puntos_anotados": 115, "jugador_destacado": "Kevin Durant" },
    { "encuentro_id": 5, "equipo_ganador": "Miami Heat", "puntos_anotados": 106, "jugador_destacado": "Bam Adebayo" },
    { "encuentro_id": 6, "equipo_ganador": "Milwaukee Bucks", "puntos_anotados": 120, "jugador_destacado": "Giannis Antetokounmpo" }
])
