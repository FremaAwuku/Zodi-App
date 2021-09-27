from app.models import db, SunSign


# Adds a demo ZodiacList, you can add other ZodiacLists here if you want
def seed_sun_signs():
    aries = SunSign(
        sign = 'Aries',
        dates="March 21 - April 19",
        element="Fire" ,
        qualities="Cardinal",
        ruling_planet="Mars" ,
        symbol="The Ram" ,
        strengths= "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
        weaknesses="Impatient, moody, short-tempered, impulsive, aggressive" ,
        short_description= "Aries rules the head and leads with the head, often literally walking head first, leaning forwards for speed and focus. Its representatives are naturally brave and rarely afraid of trial and risk. They possess youthful strength and energy, regardless of their age and quickly perform any given tasks.",
        long_description=">With a zodiac sign ruled by Mars, the god of war, it's little surprise that Rams are known for being brave and tenacious. Aries signs are pioneers! They're the ones you call on to boldly go where none have gone before. Their fearlessness and courageousness make them the ideal people for trying new experiences, taking big risks, and breaking new ground >You'll rarely meet an Aries who isn't capable of finishing several things at once, often before lunch break! Their challenges show when they get impatient, aggressive and vent anger pointing it to other people. Strong personalities born under this sign have a task to fight for their goals, embracing togetherness and teamwork through this incarnation. >An Aries is not weighed down by the freedom of choice, and is perhaps the sign that is least conflicted about what they want. They throw themselves at the world eagerly and without fear. It is one of their most commendable qualities, but also what causes them a great deal of pain and grief. >It is likely that Aries do fall in love relatively quickly. They have a lot of energy, and they don’t want to waste too much time on trivial matters. While they enjoy taking the time to get to know a person, they may not do so for an extended period of time. Aries may consider themselves to be immediately aware of whether or not they are in love with someone. The decision to be in a relationship doesn’t take long for them. An Aries will have strong feelings about whether or not the relationship is working, and will be able to break things off without a great deal of difficulty. >When it comes to the workplace, the natural leadership abilities of an Aries can be a tremendous asset. These are the people who will take on a new project with an infectious enthusiasm. Their innate intelligence and quick-thinking ways make them the kind of people you can trust to handle any setbacks along the way")
    taurus = SunSign(
        sign ="Taurus" ,
        dates="April 20 - May 20",
        element='Earth',
        qualities= "Fixed" ,
        ruling_planet='Venus' ,
        symbol="The Bull",
        strengths="Reliable, patient, practical, diligent, responsible, stable" ,
        weaknesses= "Stubborn, possessive, uncompromising, controlling" ,
        short_description="Consistent and well-grounded, Taurus is the sign that harvests the fruits of labor. They feel the need to always be surrounded by love and beauty, turned to the material world, hedonism, and physical pleasures. People born with their Sun in Taurus are sensual and tactile, considering touch and taste the most important of all senses. Stable and conservative, this is one of the most dependable signs of the zodiac, ready to endure and stick to their choices until they reach the point of personal satisfaction." ,
        long_description=
        ">The ruler of Taurus is Venus, the planet of love, attraction, beauty, satisfaction, creativity and gratitude. This tender nature will make Taurus an excellent cook, gardener, lover, and artist. They are loyal and don't like sudden changes, criticism or the chase of guilt people are often prone to, being somewhat dependable on other people and emotions they seem to be unable to let go of. Still, no matter their potential emotional challenge, these individuals have the ability to bring a practical voice of reason in any chaotic and unhealthy situation. >Most Taurus individuals are oriented around the physical world. They tend to be grounded and logical. They love routine and they’re committed to their own comfort. They like to be in control. They’re patient and steady, and their materialism is an extension of their pursuit of stability. >Taurus' are incredibly articulate with a great speaking voice. They are great listeners, highly observant, and their minds are like a sponge that soaks up and holds onto data and facts and stores them for that moment when they're needed or when they can be used to impress. > Because Taurus is ruled by Venus, the planet of love and romance, it makes this sign is one of the most sensual of the zodiac. Taurus energy is most turned on when its physical senses are titillated, which means cuddles, back rubs, and affection are an important part of how they give and receive love. This sign likes to feel comfortable and doesn't mind predictability, so they may not be the most adventurous when it comes to planning dates. However, they're one of the most devoted signs, so they make stable and patient partners who will stick with you through thick and thin — and they expect their lovers to be equally devoted and dependable > In their professional lives, Taureans are patient, reliable, and very thorough. When given a specific task, they'll address it with laser-sharp focus until it's complete. If you've got a Taurus employee or coworker, this is the person you want working on major projects that need a meticulous hand. That said, this intense concentration can make it difficult for the Taurus sign to focus on more than one task at a time, so it's usually best if they can work through a project in its entirety before starting on another"

    )
    gemini = SunSign(
        sign = "Gemini",
        dates= "May 21 - June 20",
        element="Air" ,
        qualities="Mutable" ,
        ruling_planet="Mercury",
        symbol= "The Twins" ,
        strengths="communication, curious, adaptable, ability to learn quickly and exchange ideas" ,
        weaknesses="Nervous, inconsistent, indecisive, vindictive" ,
        short_description="These curious twins are terrific pioneers, using their energy to spearhead innovative creative projects. A fearless thinker, Gemini is always down to try something new. But after they have shared their progressive vision with the world, it’s best to let these twins get back to ideating: These hyperactive air signs have short attention spans and are most satisfied when they can move fluidly from one idea to the next." ,
        long_description="> Expressive and quick-witted, Gemini represents two different personalities in one and you will never be sure which one you will face. They are sociable, communicative and ready for fun, with a tendency to suddenly get serious, thoughtful and restless. They are fascinated with the world itself, extremely curious, with a constant feeling that there is not enough time to experience everything they want to see. > Both Gemini and Virgo are governed by Mercury, the messenger planet of communication. Despite sharing a planetary ruler, however, these two signs are opposite in their approaches: Gemini expresses emotions externally, whereas Virgo processes internally. Gemini is all about output, so these twins love to chat and often speak with their hands (which happens to be the body part associated with Gemini). Communication is paramount for them, and they require fluent streams of transmission. >They love texting and tweeting almost as much as they love talking IRL. In fact, the act of expression is often even more important to loquacious Gemini than what is actually being said — and they must remember to be thoughtful with their words. Another incredible Gemini quality, however, is that these natural chameleons can quickly recover from even the most shameful foot-in-mouth moments. Gemini moves too fast to care about embarrassing missteps: They simply move on. > Fun and always ready for an intellectual challenge, Gemini sees love first through communication and verbal contact, and find it as important as physical contact with their partner. Inquisitive and always ready to flirt, a Gemini could spend a lot of time with different lovers until they find the right one who is able to match their intellect and energy. > In constant need of intellectual stimulation, the most suitable job for a Gemini has to be challenging to their brain. They are skillful, inventive and often very smart, with a need for a dynamic working environment and a lot of social contacts met in the office. The best careers they can choose are those of traders, inventors, writers, orators, preachers and lawyers, but any career that gives them the opportunity to communicate freely while keeping them on the move and busy at all times, is an excellent choice. As if they were created for multitasking, problem solving and bringing new ideas to life, they need a workplace that won't keep them stuck in a routinely, repetitive tasks that don't allow them to shine.",

    )
    cancer = SunSign(
        sign = "Cancer",
        dates= "June 21 - July 22",
        element= "Water",
        qualities= "Cardinal",
        ruling_planet= "Moon" ,
        symbol="The Crab" ,
        strengths="Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive" ,
        weaknesses="Temperamental, pessimistic, suspicious, manipulative, insecure" ,
        short_description="Deeply intuitive and sentimental, Cancer can be one of the most challenging zodiac signs to get to know. They are very emotional and sensitive, and care deeply about matters of the family and their home. Cancer is sympathetic and attached to people they keep close. Those born with their Sun in Cancer are very loyal and able to empathize with other people's pain and suffering" ,
        long_description= ">  Being ruled by the Moon, phases of the lunar cycle deepen Cancers internal mysteries and create fleeting emotional patterns that are beyond their control. Guided by emotion and their heart, Cancers could have a hard time blending into the world around them. As children, they don't have enough coping and defensive mechanisms for the outer world, and have to be approached with care and understanding, for that is what they give in return.> Cancers are homebodies. They like the comfort of the familiar,stability, and routine. Because of this, cancers tend to be less experimental than other signs. > Cancer naturally have an attraction to the vintage relics or nostalgic feelings of the past, and this may stem from their internal want to keep traditions alive. They like art that reminds them of a different time. > Cancer is a very emotional sign, and feelings are the most important thing in their relationships. Gentle and caring, they will show their sensibility to the world without even thinking they might get hurt. For partners, they always choose a person who is able to understand them through non-verbal, silent contact, and a shared daily routine, and their affection won't last long with superficial, flaky or unreliable partners. The lack of initiative these individuals suffer from won't make it easy for them to build a sex life they wish for, if they don't find a partner who is able to make them feel calm, protected, and free to express themselves. >In romance, Cancer is a giving and generous lover and expects the same in return. The Crab is above mind games and hates the thrill of the chase—if you love someone, why not say it now? It's not uncommon for Cancer to fall into committed love after just a few days or weeks, and even though that decision is sudden, it can easily last a lifetime. Cancers tends to be happiest when they're part of a pair, and the best relationship brings out their greatest traits. But even though a Cancer thrives in a duo, he or she also has an independent streak, and needs plenty of time to do things solo. This sign has an active internal life, and is often are happy living in the realm of imagination. Sometimes Cancers need help from one of the more grounded signs to make their dreams a reality. >When a job needs to get done, a Cancer will roll their sleeves up and finish it successfully. If they are left alone to work, they usually perform better than when surrounded by other people, loyal to their employer and focused on the task. They will have great careers as nurses, housekeepers, gardeners, politicians and decorators. >For Cancer representatives, security and money are of great importance and stand for the real reason they work as much as they do. They easily earn money and aren't used to spending it all in one day. It is their goal to save, invest, and watch their investments grow daily. Resourceful and good at managing time and finances, this is a sign that is often in charge of all money in the household, keeping their partner or other family members under control",

    )
    leo = SunSign(
        sign = "Leo",
        dates="July 23 - August 22" ,
        element= "Fire",
        qualities= "Fixed",
        ruling_planet= "Sun" ,
        symbol= "The Lion",
        strengths="Creative, passionate, generous, warm-hearted, cheerful, humorous" ,
        weaknesses= "Arrogant, stubborn, self-centered, lazy, inflexible",
        short_description= "People born under the sign of Leo are natural born leaders. They are dramatic, creative, self-confident, dominant and extremely difficult to resist, able to achieve anything they want to in any area of life they commit to. There is a specific strength to a Leo and their 'king of the jungle' status. Leo often has many friends for they are generous and loyal. Self-confident and attractive, this is a Sun sign capable of uniting different groups of people and leading them as one towards a shared cause, and their healthy sense of humor makes collaboration with other people even easier.",
        long_description= "> Leo belongs to the element of Fire, just like Aries and Sagittarius. This makes them warmhearted, in love with life, trying to laugh and have a good time. Able to use their mind to solve even the most difficult problems, they will easily take initiative in resolving various complicated situations. Ruled by the Sun, Leo worships this fiery entity in the sky, quite literally as well as metaphorically. They are in search for self-awareness and in constant growth of ego. Aware of their desires and personality, they can easily ask for everything they need, but could just as easily unconsciously neglect the needs of other people in their chase for personal gain or status. When a Leo representative becomes too fond and attached to their achievements and the way other people see them, they become an easy target, ready to be taken down.> This Fire sign is passionate and sincere and its representatives show their feelings with ease and clarity. When in love, they are fun, loyal, respectful and very generous towards their loved one. They will take the role of a leader in any relationship, and strongly rely on their need for independency and initiative. This can be tiring for their partner at times, especially if they start imposing their will and organizing things that aren't theirs to organize in the first place. Each Leo needs a partner who is self-aware, reasonable and on the same intellectual level as them. Their partner also has to feel free to express and fight for themselves, or too much light from their Leo's Sun might burn their own personality down.> Sex life of each Leo is an adventure, fun and very energetic. This is someone who has a clear understanding of boundaries between sex and love, but might fail to see how important intimacy and emotional connection is to the quality of their sex life. Every Leo needs a partner to fight through their awareness and reach their sensitive, subconscious core, in order to find true satisfaction in a meaningful relationship >Leos are highly energetic and tend to always be busy, no matter the need for their employment. They are ambitious, creative and optimistic and once they dedicate to their work, they will do everything just right. The best possible situation they can find themselves in is to be their own bosses or manage others with as little control from their superiors as possible. Jobs that allow open expression of artistic talent, such as acting and entertainment, are ideal for a Leo. Management, education and politics are also a good fit, as well as anything that puts them in a leadership position which naturally suits them.",

    )
    virgo = SunSign(
        sign = "Virgo" ,
        dates="August 23 - September 22" ,
        element= 'Earth',
        qualities="Mutable",
        ruling_planet="Mercury" ,
        symbol= "The Goddess",
        strengths="Dedicated, analytical, kind, hardworking, practical" ,
        weaknesses="Shyness, worry, overly critical of self and others, all work and no play" ,
        short_description="Virgos are always paying attention to the smallest details and their deep sense of humanity makes them one of the most careful signs of the zodiac. Their methodical approach to life ensures that nothing is left to chance, and although they are often tender, their heart might be closed for the outer world. This is a sign often misunderstood, not because they lack the ability to express, but because they won’t accept their feelings as valid, true, or even relevant when opposed to reason. The symbolism behind the name speaks well of their nature, born with a feeling they are experiencing everything for the first time.",
        long_description= ">Since Mercury is the ruling planet of this sign, its representatives have a well-developed sense of speech and writing, as well as all other forms of communication. Many Virgos may choose to pursue a career as writers, journalists, and typists, but their need to serve others makes them feel good as caregivers, on a clear mission to help. >Virgo is an Earth sign, fitting perfectly between Taurus and Capricorn. This will lead to a strong character, but one that prefers conservative, well-organized things and a lot of practicality in their everyday life. These individuals have an organized life, and even when they let go to chaos, their goals and dreams still have strictly defined borders in their mind. Constantly worried that they missed a detail that will be impossible to fix, they can get stuck in details, becoming overly critical and concerned about matters that nobody else seems to care much about. >The sign of Virgo in love leads to its tragic inability to feel worthy, beautiful, or lovable. Compatibility of Virgo with other zodiac signs is mostly based on the ability of their partner to give them all the love they need to start feeling safe and open up enough to show their soft, vulnerable heart. They will rarely have direct statements of love, but intimacy brings out all of the beauty of their emotional self-expression. A Virgo will prefer a stable relationship than having fun, casual lovers, except if they become one, using their charm and superficial communication to win hearts without ever investing their own. Methodical and intellectually dominant, each Virgo seems to have an equation in their mind that their partner has to follow.Trust needs to be built with Virgo, slowly, steadily and patiently, and each partner they have in life has a chance to be nurtured and cared for, but only if they give enough to deserve special treatment of Virgo. >Virgo stands for all practical and used things, and it is in the nature of these individuals to save money and always put something on the side. They will see irrational spending as a bad habit or a matter of being spoiled, and always hold on to practical solutions that don’t cost much. Unfortunately, this approach can sometimes make them a bit cheap and too concerned about everything they might lack tomorrow. They need to learn to indulge in some hedonism too. >Virgos are practical, analytical and hard-working, always knowing exactly where to look for the core of any problem. Their methodology makes them shine at jobs that require good organization, dealing with paperwork, problem solving and working with their minds and their hands. When they focus, perfection is to be expected from their work, for no other sign has such an eye for details as Virgo. In love with books and artistic expression, they make good critics, while their need to help humankind serves them best if they decide to become doctors, nurses or psychologists.",

    )
    libra = SunSign(
        sign = "Libra",
        dates= "September 23 - October 23",
        element="Air" ,
        qualities= "Cardinal",
        ruling_planet="Venus" ,
        symbol="The Scales" ,
        strengths="Cooperative,diplomatic, gracious, fair-minded, social",
        weaknesses="Indecisive, avoids confrontations, will carry a grudge, self-pity" ,
        short_description="People born under the sign of Libra are peaceful, fair, and they hate being alone. Partnership is very important for them, seeking someone with the ability to be the mirror to themselves. These individuals are fascinated by balance and symmetry, they are in a constant chase for justice and equality, realizing through life that the only thing that should be truly important to themselves in their own inner core of personality. This is someone ready to do nearly anything to avoid conflict, keeping the peace whenever possible" ,
        long_description= "ADDMORE> Planet ruling the sign of Libra is Venus, making these people great lovers but also fond of expensive, material things. Their lives need to be enriched by music, art, and beautiful places they get a chance to visit",

    )
    scorpio = SunSign(
        sign = "Scorpio",
        dates="October 24 - November 21" ,
        element= "Water",
        qualities="Fixed" ,
        ruling_planet="Mars & Pluto" ,
        symbol="The Scorpion/The Phoenix" ,
        strengths= "Resourceful, powerful, brave, passionate, a true friend",
        weaknesses="Distrusting, jealous, manipulative, violent" ,
        short_description="Scorpios are passionate and assertive people with determination and focus you rarely see in other zodiac signs. They will turn to in-depth research to reach the truth behind anything they find important. Great leaders and guides, Scorpios are resourceful, dedicated and fearless when there is challenge to be overcome. They will hold on to other people’s secrets, even when they aren’t very fond of them to begin with and do anything they can for those they tie themselves to." ,
        long_description= "ADDMORE> The rulers of Scorpio are Pluto and Mars, one of them being the planet of transformation and regeneration, and the other pushing them forwards and providing them with enough initiative to build their lives energetic and strong. These individuals are known for being calm and cool, looking mysterious and hard to figure out. There is a deep understanding of the rules of the Universe inside every Scorpio that gives them the power others rush through life rarely recognizing within.",

    )
    sagittarius = SunSign(
        sign ="Sagittarius",
        dates= "November 22 - December 21",
        element="Fire" ,
        qualities="Mutable" ,
        ruling_planet='Jupiter' ,
        symbol='The Archer/The Centaur' ,
        strengths= "Generous, idealistic, great sense of humor",
        weaknesses= "Promises more than can deliver, very impatient, will say anything no matter how undiplomatic",
        short_description= "Curious and energetic, Sagittarius are the travelers of the zodiac. Their open mind and philosophical view motivate them to wander around the world in search of the meaning of life. Sagittarius is an extrovert, always optimistic, full of enthusiasm, and ready for changes. This is a Sun sign of individuals who are often preoccupied with mental work, but when they find grounding, they show their ability to transform visions and thoughts into concrete actions and circumstances." ,
        long_description="ADDMORE>Sagittarius is ruled by Jupiter, the largest planet of the Solar system and the greatest beneficent giant in Astrology. Their enthusiasm has no boundaries, and these people possess a great sense of humor accompanied by intense curiosity. In need of absolute freedom, their adventurous spirit takes them from one end of the world to the other, exploring different cultures and philosophies." ,

    )
    capricorn = SunSign(
        sign ="Capricorn" ,
        dates="December 22 - January 19" ,
        element='Earth' ,
        qualities= "Cardinal",
        ruling_planet= "Saturn",
        symbol="The Goat",
        strengths="Responsible, disciplined, self-control, good managers" ,
        weaknesses= "Know-it-all, unforgiving, condescending, pessimistic",
        short_description="Capricorn is a sign that represents time and responsibility, and its representatives are traditional and often very serious by nature. These individuals possess an inner state of independence that enables significant progress both in their personal and professional lives. They are masters of self-control and have the ability to lead the way, make solid and realistic plans, and manage many people who work for them at any time. They will learn from their mistakes and get to the top based solely on their experience and expertise.",
        long_description="ADDMORE>Saturn is the ruling planet of Capricorn, and this planet represents restrictions of all kinds. Its influence makes these people practical and responsible, but also cold, distant and unforgiving, prone to the feeling of guilt and turned to the past. They need to learn to forgive in order to make their own life lighter and more positive." ,
    )
    aquarius = SunSign(
        sign ="Aquarius",
        dates="January 20 - February 18",
        element="Air" ,
        qualities="Fixed" ,
        ruling_planet="Uranus" ,
        symbol="The WaterBearer",
        strengths= "Progressive, original, independent, humanitarian",
        weaknesses= "Runs from emotional expression, temperamental, uncompromising, aloof",
        short_description="Aquarius is the sign different from the rest of the zodiac and people born with their Sun in it feel special. This makes them eccentric and energetic in their fight for freedom, or at times shy and quiet, afraid to express their true personality. In both cases they are deep thinkers and highly intellectual people who love to fight for idealistic causes. They are able to see people without prejudice and this makes them truly special. Although they can easily adapt to the energy that surrounds them, Aquarius representatives have a deep need to have some time alone and away from everything in order to restore power.",
        long_description="ADD MORE>Uranus is the ruler of Aquarius, shoulder to shoulder with its traditional ruler – Saturn. Although Uranus has an abrupt, timid, and sometimes aggressive nature, their other ruler often grounds them enough and helps them find enough distance from other people to remain somewhat indifferent. A visionary and someone ready for changes, an Aquarius is a known thinker and someone who will shake your world once they are in it. They feel best as a part of a certain community, but might have trouble finding just the right place where they feel they belong.",

    )
    pisces = SunSign(
        sign = "Pisces",
        dates="February 19 - March 20",
        element="Water" ,
        qualities= "Mutable",
        ruling_planet= "Neptune & Jupiter",
        symbol="The Two Harmonious Fish" ,
        strengths=  "Compassionate, artistic, intuitive, gentle, wise, musical",
        weaknesses="Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr" ,
        short_description= "Pisces are very friendly and often find themselves in company of very different people. They are selfless and always willing to help others, a very fine intent for as long as they don’t expect anything much in return. People born with their Sun in Pisces have an intuitive understanding of the life cycle and form incredible emotional relationship with other humans on the basis of natural order and senses guiding them",
        long_description="ADDMORE>Ruling planets of the sign of Pisces and Neptune and Jupiter, and intuition is the strongest suit of their kind. Connected to art, music, and any sort of liberal expression, every Pisces representative has a talent they need to use to feel creative and free. Tolerant and compassionate, they could do too much for other people out of good intentions, forgetting about their own wellbeing in the process." ,

    )
    db.session.add(aries)
    db.session.add(taurus)
    db.session.add(gemini)
    db.session.add(cancer)
    db.session.add(leo)
    db.session.add(virgo)
    db.session.add(libra)
    db.session.add(scorpio)
    db.session.add(sagittarius)
    db.session.add(capricorn)
    db.session.add(aquarius)
    db.session.add(pisces)
    db.session.commit()

def undo_sun_signs():
    db.session.execute('TRUNCATE sun_signs RESTART IDENTITY CASCADE;')
    db.session.commit()
