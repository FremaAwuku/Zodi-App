from app.models import db, Compatibility

def seed_compatabilities():
    commit = list()
    """
    ARIES==================================ARIES===================================ARIES
    """

    aries_aries = Compatibility(
        sign_1="Aries",
        sign_2="Aries",
        rating = 6,
        description="Your signs are conjunct. Your styles in love are so similar, it’s uncanny. Your relationship is very intense." ,
    )
    commit.append(aries_aries)

    aries_taurus = Compatibility(
        sign_1="Aries",
        sign_2="Taurus",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",
    )
    commit.append(aries_taurus)

    aries_gemini = Compatibility(
        sign_1="Aries",
        sign_2="Gemini",
        rating = 5 ,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another." ,
    )
    commit.append(aries_gemini)

    aries_cancer = Compatibility(
        sign_1="Aries",
        sign_2="Cancer",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",
    )
    commit.append(aries_cancer)

    aries_leo = Compatibility(
        sign_1="Aries",
        sign_2="Leo",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",
    )
    commit.append(aries_leo)

    aries_virgo = Compatibility(
        sign_1="Aries",
        sign_2="Virgo",
        rating =2 ,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",
    )
    commit.append(aries_virgo)
    aries_libra = Compatibility(
        sign_1="Aries",
        sign_2="Libra",
        rating = 4,
        description= "Your signs are opposite. You find each other fascinating, frustrating, and intriguing – all at the same time!",

    )
    commit.append(aries_libra)
    aries_scorpio = Compatibility(
        sign_1="Aries",
        sign_2="Scorpio",
        rating =2 ,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(aries_scorpio)
    aries_sagittarius = Compatibility(
        sign_1="Aries",
        sign_2="Sagittarius",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting." ,

    )
    commit.append(aries_sagittarius)
    aries_capricorn = Compatibility(
        sign_1="Aries",
        sign_2="Capricorn",
        rating =1 ,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(aries_capricorn)
    aries_aquarius = Compatibility(
        sign_1="Aries",
        sign_2="Aquarius",
        rating = 5,
        description="Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another." ,

    )
    commit.append(aries_aquarius)

    aries_pisces = Compatibility(
        sign_1="Aries",
        sign_2="Aquarius",
        rating = 3,
        description= "your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",

    )
    commit.append(aries_pisces)

    """
   TAURUS==================================TAURUS===================================TAURUS
    """
    taurus_aries = Compatibility(
        sign_1="Taurus",
        sign_2="Aries",
        rating = 3,
        description="Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages." ,

    )
    commit.append(taurus_aries)

    taurus_taurus = Compatibility(
        sign_1="Taurus",
        sign_2="Taurus",
        rating= 6,
        description="Your signs are conjunct. Your styles in love are so similar, it’s uncanny. Your relationship is very intense." ,

    )
    commit.append(taurus_taurus)

    taurus_gemini = Compatibility(
        sign_1="Taurus",
        sign_2="Gemini",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",

    )
    commit.append(taurus_gemini)

    taurus_cancer = Compatibility(
        sign_1="Taurus",
        sign_2="Cancer",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another." ,

    )
    commit.append(taurus_cancer)

    taurus_leo = Compatibility(
        sign_1="Taurus",
        sign_2="Leo",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(taurus_leo)

    taurus_virgo = Compatibility(
        sign_1="Taurus",
        sign_2="Virgo",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(taurus_virgo)

    taurus_libra = Compatibility(
        sign_1="Taurus",
        sign_2="Libra",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(taurus_libra)

    taurus_scorpio = Compatibility(
        sign_1="Taurus",
        sign_2="Scorpio",
        rating =4 ,
        description= "Your signs are opposite. You find each other fascinating, frustrating, and intriguing – all at the same time!",

    )
    commit.append(taurus_scorpio)

    taurus_sagittarius = Compatibility(
        sign_1="Taurus",
        sign_2="Sagittarius",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(taurus_sagittarius)

    taurus_capricorn = Compatibility(
        sign_1="Taurus",
        sign_2="Capricorn",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(taurus_capricorn)

    taurus_aquarius = Compatibility(
        sign_1="Taurus",
        sign_2="Aquarius",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(taurus_aquarius)


    taurus_pisces = Compatibility(
        sign_1="Taurus",
        sign_2="Pisces",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",
    )
    commit.append(taurus_pisces)



    """
 GEMINI==================================GEMINI===================================GEMINI
    """



    gemini_aries = Compatibility(
        sign_1="Gemini",
        sign_2="Aries",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(gemini_aries)

    gemini_taurus = Compatibility(
        sign_1="Gemini",
        sign_2="Gemini",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",

    )
    commit.append(gemini_taurus)

    gemini_gemini = Compatibility(
        sign_1="Gemini",
        sign_2="Gemini",
        rating =6,
        description="Your signs are conjunct. Your styles in love are so similar, it’s uncanny. Your relationship is very intense." ,

    )
    commit.append(gemini_gemini)

    gemini_cancer = Compatibility(
        sign_1="Gemini",
        sign_2="Cancer",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",

    )
    commit.append(gemini_cancer)

    gemini_leo = Compatibility(
        sign_1="Gemini",
        sign_2="Leo",
        rating =5 ,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(gemini_leo)

    gemini_virgo = Compatibility(
        sign_1="Gemini",
        sign_2="Virgo",
        rating = 1,
        description="Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong" ,

    )
    commit.append(gemini_virgo)

    gemini_libra = Compatibility(
        sign_1="Gemini",
        sign_2="Libra",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(gemini_libra)

    gemini_scorpio = Compatibility(
        sign_1="Gemini",
        sign_2="Scorpio",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(gemini_scorpio)

    gemini_sagittarius = Compatibility(
        sign_1="Gemini",
        sign_2="Sagittarius",
        rating = 4,
        description= "Your signs are opposite. You find each other fascinating, frustrating, and intriguing – all at the same time!",

    )
    commit.append(gemini_sagittarius)

    gemini_capricorn = Compatibility(
        sign_1="Gemini",
        sign_2="Capricorn",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(gemini_capricorn)

    gemini_aquarius = Compatibility(
        sign_1="Gemini",
        sign_2="Aquarius",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(gemini_aquarius)


    gemini_pisces = Compatibility(
        sign_1="Gemini",
        sign_2="Pisces",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",
    )
    commit.append(gemini_pisces)


    """
    CANCER==================================CANCER===================================CANCER
    """

    cancer_aries = Compatibility(
        sign_1="Cancer",
        sign_2="Aries",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(cancer_aries)

    cancer_taurus = Compatibility(
        sign_1="Cancer",
        sign_2="Taurus",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(cancer_taurus)

    cancer_gemini = Compatibility(
        sign_1="Cancer",
        sign_2="Gemini",
        rating = 3,
        description="Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages." ,

    )
    commit.append(cancer_gemini)

    cancer_cancer = Compatibility(
        sign_1="Cancer",
        sign_2="Cancer",
        rating= 6,
        description="Your signs are conjunct. Your styles in love are so similar, it’s uncanny. Your relationship is very intense." ,

    )
    commit.append(cancer_cancer)

    cancer_leo = Compatibility(
        sign_1="Cancer",
        sign_2="Leo",
        rating = 3,
        description="Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages." ,

    )
    commit.append(cancer_leo)

    cancer_virgo = Compatibility(
        sign_1="Cancer",
        sign_2="Virgo",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(cancer_virgo)

    cancer_libra = Compatibility(
        sign_1="Cancer",
        sign_2="Libra",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(cancer_libra)

    cancer_scorpio = Compatibility(
        sign_1="Cancer",
        sign_2="Scorpio",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(cancer_scorpio)

    cancer_sagittarius = Compatibility(
        sign_1="Cancer",
        sign_2="Sagittarius",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(cancer_sagittarius)

    cancer_capricorn = Compatibility(
        sign_1="Cancer",
        sign_2="Capricorn",
        rating = 4,
        description= "Your signs are opposite. You find each other fascinating, frustrating, and intriguing – all at the same time!",

    )
    commit.append(cancer_capricorn)

    cancer_aquarius = Compatibility(
        sign_1="Cancer",
        sign_2="Aquarius",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(cancer_aquarius)


    cancer_pisces = Compatibility(
        sign_1="Cancer",
        sign_2="Pisces",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting." ,
    )
    commit.append(cancer_pisces)


    """
    LEO==================================LEO===================================LEO
    """

    leo_aries = Compatibility(
        sign_1="Leo",
        sign_2="Aries",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(leo_aries)

    leo_taurus = Compatibility(
        sign_1="Leo",
        sign_2="Taurus",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(leo_taurus)

    leo_gemini = Compatibility(
        sign_1="Leo",
        sign_2="Gemini",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(leo_gemini)

    leo_cancer = Compatibility(
        sign_1="Leo",
        sign_2="Cancer",
        rating = 3,
        description="Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages." ,

    )
    commit.append(leo_cancer)

    leo_leo = Compatibility(
        sign_1="Leo",
        sign_2="Leo",
        rating= 6,
        description="Your signs are conjunct. Your styles in love are so similar, it’s uncanny. Your relationship is very intense." ,

    )
    commit.append(leo_leo)

    leo_virgo = Compatibility(
        sign_1="Leo",
        sign_2="Virgo",
        rating = 3,
        description="Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages." ,

    )
    commit.append(leo_virgo)

    leo_libra = Compatibility(
        sign_1="Leo",
        sign_2="Libra",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(leo_libra)

    leo_scorpio = Compatibility(
        sign_1="Leo",
        sign_2="Scorpio",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(leo_scorpio)

    leo_sagittarius = Compatibility(
        sign_1="Leo",
        sign_2="Sagittarius",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(leo_sagittarius)

    leo_capricorn = Compatibility(
        sign_1="Leo",
        sign_2="Capricorn",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(leo_capricorn)

    leo_aquarius = Compatibility(
        sign_1="Leo",
        sign_2="Aquarius",
        rating = 4,
        description= "Your signs are opposite. You find each other fascinating, frustrating, and intriguing – all at the same time!",

    )
    commit.append(leo_aquarius)


    leo_pisces = Compatibility(
        sign_1="Leo",
        sign_2="Pisces",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",
    )
    commit.append(leo_pisces)

    """
    VIRGO==================================VIRGO===================================VIRGO
    """

    virgo_aries = Compatibility(
        sign_1="Virgo",
        sign_2="Aries",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(virgo_aries)

    virgo_taurus = Compatibility(
        sign_1="Virgo",
        sign_2="Taurus",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(virgo_taurus)

    virgo_gemini = Compatibility(
        sign_1="Virgo",
        sign_2="Gemini",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(virgo_gemini)

    virgo_cancer = Compatibility(
        sign_1="Virgo",
        sign_2="Cancer",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(virgo_cancer)

    virgo_leo = Compatibility(
        sign_1="Virgo",
        sign_2="Leo",
        rating = 3,
        description="Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages." ,

    )
    commit.append(virgo_leo)

    virgo_virgo = Compatibility(
        sign_1="Virgo",
        sign_2="Virgo",
        rating= 6,
        description="Your signs are conjunct. Your styles in love are so similar, it’s uncanny. Your relationship is very intense." ,

    )
    commit.append(virgo_virgo)

    virgo_libra = Compatibility(
        sign_1="Virgo",
        sign_2="Libra",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",

    )
    commit.append(virgo_libra)

    virgo_scorpio = Compatibility(
        sign_1="Virgo",
        sign_2="Scorpio",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(virgo_scorpio)

    virgo_sagittarius = Compatibility(
        sign_1="Virgo",
        sign_2="Sagittarius",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(virgo_sagittarius)

    virgo_capricorn = Compatibility(
        sign_1="Virgo",
        sign_2="Capricorn",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting." ,

    )
    commit.append(virgo_capricorn)

    virgo_aquarius = Compatibility(
        sign_1="Virgo",
        sign_2="Aquarius",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(virgo_aquarius)


    virgo_pisces = Compatibility(
        sign_1="Virgo",
        sign_2="Pisces",
        rating = 4,
        description="Your signs are opposite. You find each other fascinating, frustrating, and intriguing – all at the same time!" ,
    )
    commit.append(virgo_pisces)

    """
    LIBRA==================================LIBRA===================================LIBRA
    """

    libra_aries = Compatibility(
        sign_1="Libra",
        sign_2="Aries",
        rating = 4,
        description= "Your signs are opposite. You find each other fascinating, frustrating, and intriguing – all at the same time!",

    )
    commit.append(libra_aries)

    libra_taurus = Compatibility(
        sign_1="Libra",
        sign_2="Taurus",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(libra_taurus)

    libra_gemini = Compatibility(
        sign_1="Libra",
        sign_2="Gemini",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting." ,

    )
    commit.append(libra_gemini)

    libra_cancer = Compatibility(
        sign_1="Libra",
        sign_2="Cancer",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(libra_cancer)

    libra_leo = Compatibility(
        sign_1="Libra",
        sign_2="Leo",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(libra_leo)

    libra_virgo = Compatibility(
        sign_1="Libra",
        sign_2="Virgo",
        rating = 3,
        description="Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages." ,

    )
    commit.append(libra_virgo)

    libra_libra = Compatibility(
        sign_1="Libra",
        sign_2="Libra",
        rating= 6,
        description= "Your signs are conjunct. Your styles in love are so similar, it’s uncanny. Your relationship is very intense." ,

    )
    commit.append(libra_libra)

    libra_scorpio = Compatibility(
        sign_1="Libra",
        sign_2="Scorpio",
        rating = 3,
        description="Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages." ,

    )
    commit.append(libra_scorpio)

    libra_sagittarius = Compatibility(
        sign_1="Libra",
        sign_2="Sagittarius",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(libra_sagittarius)

    libra_capricorn = Compatibility(
        sign_1="Libra",
        sign_2="Capricorn",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(libra_capricorn)

    libra_aquarius = Compatibility(
        sign_1="Libra",
        sign_2="Aquarius",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(libra_aquarius)


    libra_pisces = Compatibility(
        sign_1="Libra",
        sign_2="Pisces",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",
    )
    commit.append(libra_pisces)

    """
    SCORPIO==================================SCORPIO===================================SCORPIO
    """

    scorpio_aries = Compatibility(
        sign_1="Scorpio",
        sign_2="Aries",
        rating = 2,
        description="Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary." ,

    )
    commit.append(scorpio_aries)

    scorpio_taurus = Compatibility(
        sign_1="Scorpio",
        sign_2="Taurus",
        rating = 4,
        description= "Your signs are opposite. You find each other fascinating, frustrating, and intriguing – all at the same time!",

    )
    commit.append(scorpio_taurus)

    scorpio_gemini = Compatibility(
        sign_1="Scorpio",
        sign_2="Gemini",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(scorpio_gemini)

    scorpio_cancer = Compatibility(
        sign_1="Scorpio",
        sign_2="Cancer",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(scorpio_cancer)

    scorpio_leo = Compatibility(
        sign_1="Scorpio",
        sign_2="Leo",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(scorpio_leo)

    scorpio_virgo = Compatibility(
        sign_1="Scorpio",
        sign_2="Virgo",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(scorpio_virgo)

    scorpio_libra = Compatibility(
        sign_1="Scorpio",
        sign_2="Libra",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",

    )
    commit.append(scorpio_libra)

    scorpio_scorpio = Compatibility(
        sign_1="Scorpio",
        sign_2="Scorpio",
        rating= 6,
        description="Your signs are conjunct. Your styles in love are so similar, it’s uncanny. Your relationship is very intense." ,

    )
    commit.append(scorpio_scorpio)

    scorpio_sagittarius = Compatibility(
        sign_1="Scorpio",
        sign_2="Sagittarius",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",

    )
    commit.append(scorpio_sagittarius)

    scorpio_capricorn = Compatibility(
        sign_1="Scorpio",
        sign_2="Capricorn",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(scorpio_capricorn)

    scorpio_aquarius = Compatibility(
        sign_1="Scorpio",
        sign_2="Aquarius",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(scorpio_aquarius)


    scorpio_pisces = Compatibility(
        sign_1="Scorpio",
        sign_2="Pisces",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",
    )
    commit.append(scorpio_pisces)

    """
    SAGITTARIUS==================================SAGITTARIUS===================================SAGITTARIUS
    """

    sagittarius_aries = Compatibility(
        sign_1="Sagittarius",
        sign_2="Aries",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(sagittarius_aries)

    sagittarius_taurus = Compatibility(
        sign_1="Sagittarius",
        sign_2="Taurus",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(sagittarius_taurus)

    sagittarius_gemini = Compatibility(
        sign_1="Sagittarius",
        sign_2="Gemini",
        rating = 4,
        description= "Your signs are opposite. You find each other fascinating, frustrating, and intriguing – all at the same time!",

    )
    commit.append(sagittarius_gemini)

    sagittarius_cancer = Compatibility(
        sign_1="Sagittarius",
        sign_2="Cancer",
        rating = 2,
        description="Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary." ,

    )
    commit.append(sagittarius_cancer)

    sagittarius_leo = Compatibility(
        sign_1="Sagittarius",
        sign_2="Leo",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(sagittarius_leo)

    sagittarius_virgo = Compatibility(
        sign_1="Sagittarius",
        sign_2="Virgo",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(sagittarius_virgo)

    sagittarius_libra = Compatibility(
        sign_1="Sagittarius",
        sign_2="Libra",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(sagittarius_libra)

    sagittarius_scorpio = Compatibility(
        sign_1="Sagittarius",
        sign_2="Scorpio",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",

    )
    commit.append(sagittarius_scorpio)

    sagittarius_sagittarius = Compatibility(
        sign_1="Sagittarius",
        sign_2="Sagittarius",
        rating= 6,
        description= "Your signs are conjunct. Your styles in love are so similar, it’s uncanny. Your relationship is very intense." ,

    )
    commit.append(sagittarius_sagittarius)

    sagittarius_capricorn = Compatibility(
        sign_1="Sagittarius",
        sign_2="Capricorn",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",

    )
    commit.append(sagittarius_capricorn)

    sagittarius_aquarius = Compatibility(
        sign_1="Sagittarius",
        sign_2="Aquarius",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(sagittarius_aquarius)


    sagittarius_pisces = Compatibility(
        sign_1="Sagittarius",
        sign_2="Pisces",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",
    )
    commit.append(sagittarius_pisces)

    """
    CAPRICORN==================================CAPRICORN===================================CAPRICORN
    """

    capricorn_aries = Compatibility(
        sign_1="Capricorn",
        sign_2="Aries",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(capricorn_aries)

    capricorn_taurus = Compatibility(
        sign_1="Capricorn",
        sign_2="Taurus",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(capricorn_taurus)

    capricorn_gemini = Compatibility(
        sign_1="Capricorn",
        sign_2="Gemini",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(capricorn_gemini)

    capricorn_cancer = Compatibility(
        sign_1="Capricorn",
        sign_2="Cancer",
        rating = 4,
        description= "Your signs are opposite. You find each other fascinating, frustrating, and intriguing – all at the same time!",

    )
    commit.append(capricorn_cancer)

    capricorn_leo = Compatibility(
        sign_1="Capricorn",
        sign_2="Leo",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(capricorn_leo)

    capricorn_virgo = Compatibility(
        sign_1="Capricorn",
        sign_2="Virgo",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(capricorn_virgo)

    capricorn_libra = Compatibility(
        sign_1="Capricorn",
        sign_2="Libra",
        rating = 1,
        description="Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong" ,

    )
    commit.append(capricorn_libra)

    capricorn_scorpio = Compatibility(
        sign_1="Capricorn",
        sign_2="Scorpio",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(capricorn_scorpio)

    capricorn_sagittarius = Compatibility(
        sign_1="Capricorn",
        sign_2="Sagittarius",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",

    )
    commit.append(capricorn_sagittarius)

    capricorn_capricorn = Compatibility(
        sign_1="Capricorn",
        sign_2="Capricorn",
        rating= 6,
        description= "Your signs are conjunct. Your styles in love are so similar, it’s uncanny. Your relationship is very intense." ,

    )
    commit.append(capricorn_capricorn)

    capricorn_aquarius = Compatibility(
        sign_1="Capricorn",
        sign_2="Aquarius",
        rating = 3,
        description="Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages." ,

    )
    commit.append(capricorn_aquarius)


    capricorn_pisces = Compatibility(
        sign_1="Capricorn",
        sign_2="Pisces",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",
    )
    commit.append(capricorn_pisces)

    """
    AQUARIUS==================================AQUARIUS===================================AQUARIUS
    """

    aquarius_aries = Compatibility(
        sign_1="Aquarius",
        sign_2="Aries",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(aquarius_aries)

    aquarius_taurus = Compatibility(
        sign_1="Aquarius",
        sign_2="Taurus",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(aquarius_taurus)

    aquarius_gemini = Compatibility(
        sign_1="Aquarius",
        sign_2="Gemini",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(aquarius_gemini)

    aquarius_cancer = Compatibility(
        sign_1="Aquarius",
        sign_2="Cancer",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(aquarius_cancer)

    aquarius_leo = Compatibility(
        sign_1="Aquarius",
        sign_2="Leo",
        rating = 4,
        description= "Your signs are opposite. You find each other fascinating, frustrating, and intriguing – all at the same time!",
    )
    commit.append(aquarius_leo)

    aquarius_virgo = Compatibility(
        sign_1="Aquarius",
        sign_2="Virgo",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(aquarius_virgo)

    aquarius_libra = Compatibility(
        sign_1="Aquarius",
        sign_2="Libra",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(aquarius_libra)

    aquarius_scorpio = Compatibility(
        sign_1="Aquarius",
        sign_2="Scorpio",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(aquarius_scorpio)

    aquarius_sagittarius = Compatibility(
        sign_1="Aquarius",
        sign_2="Sagittarius",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(aquarius_sagittarius)

    aquarius_capricorn = Compatibility(
        sign_1="Aquarius",
        sign_2="Capricorn",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",

    )
    commit.append(aquarius_capricorn)

    aquarius_aquarius = Compatibility(
        sign_1="Aquarius",
        sign_2="Aquarius",
        rating= 6,
        description="Your signs are conjunct. Your styles in love are so similar, it’s uncanny. Your relationship is very intense." ,

    )
    commit.append(aquarius_aquarius)


    aquarius_pisces = Compatibility(
        sign_1="Aquarius",
        sign_2="Pisces",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",
    )
    commit.append(aquarius_pisces)

    """
    PISCES==================================PISCES===================================PISCES
    """

    pisces_aries = Compatibility(
        sign_1="Pisces",
        sign_2="Aries",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",

    )
    commit.append(pisces_aries)

    pisces_taurus = Compatibility(
        sign_1="Pisces",
        sign_2="Taurus",
        rating = 5,
        description="Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another." ,

    )
    commit.append(pisces_taurus)

    pisces_gemini = Compatibility(
        sign_1="Pisces",
        sign_2="Gemini",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(pisces_gemini)

    pisces_cancer = Compatibility(
        sign_1="Pisces",
        sign_2="Cancer",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting." ,

    )
    commit.append(pisces_cancer)

    pisces_leo = Compatibility(
        sign_1="Pisces",
        sign_2="Leo",
        rating = 2,
        description= "Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary.",

    )
    commit.append(pisces_leo)

    pisces_virgo = Compatibility(
        sign_1="Pisces",
        sign_2="Virgo",
        rating = 4,
        description= "Your signs are opposite. You find each other fascinating, frustrating, and intriguing – all at the same time!",

    )
    commit.append(pisces_virgo)

    pisces_libra = Compatibility(
        sign_1="Pisces",
        sign_2="Libra",
        rating = 2,
        description="Your signs are inconjunct. If an attraction exists, it’s magnetic and binding, but it’s hard to find a reason for it, and plenty of adjustments are necessary." ,

    )
    commit.append(pisces_libra)

    pisces_scorpio = Compatibility(
        sign_1="Pisces",
        sign_2="Scorpio",
        rating = 7,
        description= "Your signs are trine. Your styles in love are similar enough to understand, and different enough to be exciting.",

    )
    commit.append(pisces_scorpio)

    pisces_sagittarius = Compatibility(
        sign_1="Pisces",
        sign_2="Sagittarius",
        rating = 1,
        description= "Your signs are square. It’s very challenging to understand each other‘s needs and love, and classes are frequent. Nevertheless, the attraction can be very strong",

    )
    commit.append(pisces_sagittarius)

    pisces_capricorn = Compatibility(
        sign_1="Pisces",
        sign_2="Capricorn",
        rating = 5,
        description= "Your signs are sextile. You appreciate each others styles in love. It’s easy to collaborate with one another.",

    )
    commit.append(pisces_capricorn)

    pisces_aquarius = Compatibility(
        sign_1="Pisces",
        sign_2="Aquarius",
        rating = 3,
        description= "Your signs are semi-sextile. You don’t really understand each other’s style and love. Your relationship requires some adjustments. It would be wise to learn each other‘s love languages.",

    )
    commit.append(pisces_aquarius)


    pisces_pisces = Compatibility(
        sign_1="Pisces",
        sign_2="Pisces",
        rating= 6,
        description="Your signs are conjunct. Your styles in love are so similar, it’s uncanny. Your relationship is very intense." ,
    )
    commit.append(pisces_pisces)

    for comp in commit:
        db.session.add(comp)
    db.session.commit()

def undo_compatabilities():
    db.session.execute('TRUNCATE compatabilities RESTART IDENTITY CASCADE;')
    db.session.commit()
