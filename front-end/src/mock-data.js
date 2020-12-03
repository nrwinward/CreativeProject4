let mock = [{
        id: 1,
        name: "CR90 corvette",
        model: "CR90 corvette",
        "manufacturer": "Corellian Engineering Corporation",
        "cost_in_credits": "3,500,000",
        "length": "150",
        "max_atmosphering_speed": "950",
        "crew": "30-165",
        "passengers": "600",
        "cargo_capacity": "3,000,000",
        "consumables": "1 year",
        "hyperdrive_rating": "2.0",
        "MGLT": "60",
        "starship_class": "corvette",
        image: "corvette.jpg",
        starred: false
    },
    {
        id: 2,
        name: "Star Destroyer",
        model: "Imperial I-class Star Destroyer",
        "manufacturer": "Kuat Drive Yards",
        "cost_in_credits": "150,000,000",
        "length": "1,600",
        "max_atmosphering_speed": "975",
        "crew": "47,060",
        "passengers": "n/a",
        "cargo_capacity": "36,000,000",
        "consumables": "2 years",
        "hyperdrive_rating": "2.0",
        "MGLT": "60",
        "starship_class": "Star Destroyer",
        image: "stardestroyer.jpeg",
        starred: false
    },
    {
        id: 3,
        name: "Death Star",
        model: "DS-1 Orbital Battle Station",
        "manufacturer": "Sienar Fleet Systems",
        "cost_in_credits": "1,000,000,000,000",
        "length": "120,000",
        "max_atmosphering_speed": "0",
        "crew": "342,953",
        "passengers": "843,342",
        "cargo_capacity": "1,000,000,000,000",
        "consumables": "3 years",
        "hyperdrive_rating": "4.0",
        "MGLT": "10",
        "starship_class": "Deep Space Mobile Battlestation",
        image: "deathstar.jpeg",
        starred: false
    },
    {
        id: 4,
        name: "Millennium Falcon",
        model: "YT-1300 light freighter",
        "manufacturer": "Corellian Engineering",
        "cost_in_credits": "100,000",
        "length": "34.37",
        "max_atmosphering_speed": "1050",
        "crew": "4",
        "passengers": "6",
        "cargo_capacity": "100,000",
        "consumables": "2 months",
        "hyperdrive_rating": "0.5",
        "MGLT": "75",
        "starship_class": "Light freighter",
        image: "falcon.jpg",
        starred: false
    },
    {
        id: 5,
        name: "Y-wing",
        model: "BTL Y-wing",
        "manufacturer": "Koensayr Manufacturing",
        "cost_in_credits": "134,999",
        "length": "14",
        "max_atmosphering_speed": "1000",
        "crew": "2",
        "passengers": "0",
        "cargo_capacity": "110",
        "consumables": "1 week",
        "hyperdrive_rating": "1.0",
        "MGLT": "80",
        "starship_class": "assault starfighter",
        image: "yWing.jpeg",
        starred: false
    },
    {
        id: 6,
        name: "X-wing",
        model: "T-65 X-wing",
        "manufacturer": "Incom Corporation",
        "cost_in_credits": "149,999",
        "length": "12.5",
        "max_atmosphering_speed": "1050",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "110",
        "consumables": "1 week",
        "hyperdrive_rating": "1.0",
        "MGLT": "100",
        "starship_class": "Starfighter",
        image: "xWing2.jpg",
        starred: false
    },
    {
        id: 7,
        name: "TIE Advanced x1",
        model: "Twin Ion Engine Advanced x1",
        "manufacturer": "Sienar Fleet Systems",
        "cost_in_credits": "unknown",
        "length": "9.2",
        "max_atmosphering_speed": "1200",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "150",
        "consumables": "5 days",
        "hyperdrive_rating": "1.0",
        "MGLT": "105",
        "starship_class": "Starfighter",
        image: "TIEAdvanced.jpg",
        starred: false
    },
    {
        id: 8,
        name: "Executor",
        model: "Executor-class star dreadnought",
        "manufacturer": "Kuat Drive Yards, Fondor Shipyards",
        "cost_in_credits": "1,143,350,000",
        "length": "19000",
        "max_atmosphering_speed": "n/a",
        "crew": "279,144",
        "passengers": "38000",
        "cargo_capacity": "250,000,000",
        "consumables": "6 years",
        "hyperdrive_rating": "2.0",
        "MGLT": "40",
        "starship_class": "Star dreadnought",
        image: "executor.png",
        starred: false
    },
    {
        id: 9,
        name: "Rebel transport",
        model: "GR-75 medium transport",
        "manufacturer": "Gallofree Yards, Inc.",
        "cost_in_credits": "unknown",
        "length": "90",
        "max_atmosphering_speed": "650",
        "crew": "6",
        "passengers": "90",
        "cargo_capacity": "19,000,000",
        "consumables": "6 months",
        "hyperdrive_rating": "4.0",
        "MGLT": "20",
        "starship_class": "Medium transport",
        image: "rebeltransport.png",
        starred: false
    },
    {
        id: 10,
        name: "Slave 1",
        model: "Firespray-31",
        "manufacturer": "Kuat Systems Engineering",
        "cost_in_credits": "unknown",
        "length": "21.5",
        "max_atmosphering_speed": "1000",
        "crew": "1",
        "passengers": "6",
        "cargo_capacity": "70,000",
        "consumables": "1 month",
        "hyperdrive_rating": "3.0",
        "MGLT": "70",
        "starship_class": "Patrol craft",
        image: "slave1.png",
        starred: false
    },
    {
        id: 11,
        name: "Imperial shuttle",
        model: "Lambda-class T-4a shuttle",
        "manufacturer": "Sienar Fleet Systems",
        "cost_in_credits": "240,000",
        "length": "20",
        "max_atmosphering_speed": "850",
        "crew": "6",
        "passengers": "20",
        "cargo_capacity": "80,000",
        "consumables": "2 months",
        "hyperdrive_rating": "1.0",
        "MGLT": "50",
        "starship_class": "Armed government transport",
        image: "shuttle.png",
        starred: false
    },
    {
        id: 12,
        name: "EF76 Nebulon-B",
        model: "EF76 Nebulon-B escort frigate",
        "manufacturer": "Kuat Drive Yards",
        "cost_in_credits": "8,500,000",
        "length": "300",
        "max_atmosphering_speed": "800",
        "crew": "854",
        "passengers": "75",
        "cargo_capacity": "6,000,000",
        "consumables": "2 years",
        "hyperdrive_rating": "2.0",
        "MGLT": "40",
        "starship_class": "Escort ship",
        image: "nebulonb.jpg",
        starred: false
    },
    {
        id: 13,
        name: "Calamari Cruiser",
        model: "MC80 Liberty type Star Cruiser",
        "manufacturer": "Mon Calamari shipyards",
        "cost_in_credits": "104,000,000",
        "length": "1200",
        "max_atmosphering_speed": "n/a",
        "crew": "5400",
        "passengers": "1200",
        "cargo_capacity": "unknown",
        "consumables": "2 years",
        "hyperdrive_rating": "1.0",
        "MGLT": "60",
        "starship_class": "Star Cruiser",
        image: "moncalamari.jpg",
        starred: false
    },
    {
        id: 14,
        name: "A-wing",
        model: "RZ-1 A-wing Interceptor",
        "manufacturer": "Incom Corporation",
        "cost_in_credits": "175,000",
        "length": "9.6",
        "max_atmosphering_speed": "1300",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "40",
        "consumables": "1 week",
        "hyperdrive_rating": "1.0",
        "MGLT": "120",
        "starship_class": "Starfighter",
        image: "aWing.png",
        starred: false
    },
    {
        id: 15,
        name: "B-wing",
        model: "A/SF-01 B-wing starfighter",
        "manufacturer": "Slayn & Korpil",
        "cost_in_credits": "220,000",
        "length": "16.9",
        "max_atmosphering_speed": "950",
        "crew": "1",
        "passengers": "0",
        "cargo_capacity": "45",
        "consumables": "1 week",
        "hyperdrive_rating": "2.0",
        "MGLT": "91",
        "starship_class": "Assault Starfighter",
        image: "bWing.jpg",
        starred: false
    }
];

export default mock;
