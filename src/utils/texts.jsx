const texts = [
  {
    id: 1,
    text: `Maya always knew she had a special gift for making people feel beautiful. 
    With every snip, curl, and blow-dry, she transformed her clients, one fabulous hairstyle at a time. 

    But Maya’s dreams were bigger than just hair. 

    She wanted her little salon to become the talk of the town—the kind of place where clients lined up around the block, and every day felt like a new adventure.

But running a business? That’s a whole different story.

Maya’s got passion, but she’s about to find out that passion alone won’t pay the bills. With a tight budget and big ambitions,
 she’s stepping into the unpredictable world of entrepreneurship. 

 To be successful, she'll have to visit different locations throughout the city to speak to investors, potential customers, realtors,
 and more. 

Where should she go first?`,
    image: maya1,
    alt: "A guy looking at the futuristic skyscrapers",
    options: [
      {
        text: `Visit the bank`,
        nextText: 2,
      },
      {
        text: `Visit the local coffee shop`,
        nextText: 33,
      },
    ],
  },
  {
    id: 2,
    text: `
          The bank’s lobby is sleek and modern, with marble floors that gleam under the bright lights. Maya walks in, the soft click of her heels echoing as she makes her way toward the investor's office.
          
          The receptionist gives her a polite nod, gesturing to the plush leather chairs in the waiting area. The scent of freshly brewed coffee wafts from a nearby station. 
           
          This is Maya’s chance—her moment to secure the funding she needs to expand her salon. 
           
          But as she looks around at the polished surfaces and serious faces, her nerves start to flutter.
           
          Can she make the right impression and win over the investor?`,

    image: maya2,
    alt: "Futuristic apartment",
    options: [
      {
        text: `Pitch the expansion with fancy projections and big promises.`,
        nextText: 3,
      },
      {
        text: `Pitch the expansion based on realistic goals and past performance.`,
        nextText: 32,
      },
    ],
  },
  {
    id: 3,
    text: `The investor looks impressed at first, but soon their expression changes. 
    
    "This sounds great on paper," they say, "but I need to see real results." 
    
    Maya leaves the bank empty-handed, realizing that grand promises don’t always guarantee success. Maybe next time, she’ll focus more on the numbers that matter.`,
    image: maya3,
    alt: "Futuristic bar entrance",
    options: [
      {
        text: `Try again?`,
        nextText: 2,
      },
      {
        text: `Start over`,
        nextText: 1,
      },
    ],
  },
  {
    id: 4,
    text: `As Maya rambles on about her latest salon service, her clients smile politely but seem disengaged. 
    
    When she finishes, they quickly change the subject. 
    
    Later, she realizes they weren’t interested at all, but she never gave them a chance to speak up. 
    
    Her new service falls flat.`,
    image: maya4,
    alt: "Futuristic bar interior",
    options: [
      {
        text: `Try again`,
        nextText: 33,
      },
      {
        text: `Start over`,
        nextText: 1,
      },
    ],
  },
  {
    id: 5,
    text: `Maya asks her clients what frustrates them most about haircare. 
    
    "Honestly, it's the frizz!" one of them says. 
    
    Another agrees, "Same here."
    
    Maya takes notes and shifts her focus to a new frizz-control treatment. Her clients are thrilled, and the bookings start rolling in!
    
    Now, Maya can turn more of her attention on testing the market.`,
    image: maya5,
    alt: "A dog in a futuristic bar",
    options: [
      {
        text: `Visit the farmers' market`,
        nextText: 6,
      },
      {
        text: `Go to the park`,
        nextText: 9,
      },
    ],
  },
  {
    id: 6,
    text: `The farmers' market is alive with vibrant energy. Stalls overflowing with fresh fruits, vegetables, handmade crafts, and artisanal goods line the cobblestone paths. 
    
    Maya has set up her own booth, nestled between a local honey vendor and a booth selling organic soaps. The scent of lavender and fresh produce fills the air as shoppers meander from stall to stall, their woven baskets filled with goodies. 
    
    The hum of conversation and laughter blends with the occasional cry of a street musician’s guitar. Maya’s table is adorned with colorful bottles of her homemade haircare products, and now, she waits to see if anyone will stop and show interest. 
    
    Will these casual shoppers be her ideal customers?`,
    image: maya6,
    alt: "Toxic green and yellow clouds",
    options: [
      {
        text: `Bring a full inventory to the market without prior testing.`,
        nextText: 7,
      },
      {
        text: `Bring a small batch to test the demand and gather feedback.`,
        nextText: 8,
      },
    ],
  },
  {
    id: 7,
    text: `Maya’s table is stacked high with new hair products, but by the end of the day, most of it is still there. 
    
    Customers walk by, uninterested, leaving her with unsold inventory. 
    
    She realizes she should have tested the waters first.`,
    image: maya7,
    alt: "Futuristic bar upper floor interior",
    options: [
      {
        text: `Try again`,
        nextText: 6,
      },
      {
        text: `Start over`,
        nextText: 1,
      },
    ],
  },
  {
    id: 8,
    text: `Maya brings a small selection of her products to the market, and they sell out within hours. 
    
    Customers love the unique ingredients, and Maya gathers valuable feedback.
    
    She leaves with new ideas and a better sense of what her customers want, ready to scale up.`,
    image: maya8,
    alt: "Toxic rain behind the glass",
    options: [
      {
        text: `Visit the park`,
        nextText: 9,
      },
      {
        text: `Go to the cosmetology school`,
        nextText: 12,
      },
    ],
  },
  {
    id: 9,
    text: `Greenview Park is a perfect blend of nature and urban life, with wide-open green spaces and pathways winding between clusters of tall trees. 
    
    The park is buzzing with weekend activity—children playing, couples having picnics, and joggers making their rounds.
    
    Maya has set up a small, elegant booth near a high-traffic walkway, surrounded by colorful banners showcasing her salon’s luxury service.
    
    Today, her goal is simple: find out if people are interested in premium hair treatments outside of the usual salon setting. Maya knows that this is her chance to gather real-time feedback and test whether her new service has the potential to succeed.
    
    Will they stop by for a touch of pampering, or will they see her booth as just another distraction during their day off?`,
    image: maya9,
    alt: "Futuristic bar interior",
    options: [
      {
        text: `Launch the luxury service without feedback.`,
        nextText: 10,
      },
      {
        text: `Offer a sample to passersby and gather their input.`,
        nextText: 11,
      },
    ],
  },
  {
    id: 10,
    text: `Maya spends hours setting up her luxury haircut station, but as the day goes on, only a few people stop by.
    
    "Looks fancy, but it’s a bit much for a haircut," one person mutters as they walk away. 
    
    Maya realizes she jumped in too quickly, and now she's out the cost of all the fancy materials.`,
    image: maya10,
    alt: "Futuristic shop entrance",
    options: [
      {
        text: `Try again`,
        nextText: 9,
      },
      {
        text: `Start over`,
        nextText: 1,
      },
    ],
  },
  {
    id: 11,
    text: `Maya offers quick, free hair touch-ups to passersby and asks for their feedback.
    
    “I love the premium feel!” one woman says. Another suggests adding more affordable options. 
    
    With these insights, Maya tweaks her luxury service and sees a huge uptick in future bookings.
    
    Now, she's ready to find a mentor and invest more into her business.`,
    image: maya11,
    alt: "Futuristic shop interior",
    options: [
      {
        text: `Visit the cosmetology school`,
        nextText: 12,
      },
      {
        text: `Get a booth at the hair expo`,
        nextText: 15,
      },
    ],
  },
  {
    id: 12,
    text: `Walking through the familiar hallways of the cosmetology school she graduated from, Maya is hit with a wave of nostalgia. 
    
    The scent of hair products lingers in the air, and the soft hum of blow dryers fills the background. Posters of beauty icons line the walls, and students buzz around in their white aprons, practicing their cuts and styles. 
    
    The memory of her time here feels like yesterday, yet so much has changed since she opened her own salon. Today, Maya isn’t here as a student—she’s here to seek advice.
    
    She spots her former professors in the staff room, laughing together over coffee. These were the people who taught her everything she knows, but now, could they become her mentors in navigating the complex world of entrepreneurship?`,
    image: maya12,
    alt: "Futuristic shop interior",
    options: [
      {
        text: `Wait for the professors to offer help.`,
        nextText: 13,
      },
      {
        text: `Ask the professors directly for guidance and advice.`,
        nextText: 14,
      },
    ],
  },
  {
    id: 13,
    text: `Maya spends most of the conversation talking about her challenges, hoping her professors will jump in with advice. But they simply nod and listen, waiting for Maya to ask specific questions. 
    
    Maya leaves feeling unsure of what she gained from the meeting.`,
    image: maya13,
    alt: "Futuristic shop interior",
    options: [
      {
        text: `Try again`,
        nextText: 12,
      },
      {
        text: `Start over`,
        nextText: 1,
      },
    ],
  },
  {
    id: 14,
    text: `Maya takes a deep breath and asks her former professors for specific advice on growing her client base. 
    
    They smile and dive into actionable strategies, sharing tips that Maya never considered before. 
    
    She leaves feeling empowered and with a clear plan of action.`,
    image: maya14,
    alt: "Futuristic shop interior",
    options: [
      {
        text: `Get a booth at the hair expo`,
        nextText: 15,
      },
      {
        text: `Go to your salon`,
        nextText: 18,
      },
    ],
  },
  {
    id: 15,
    text: `The National Hair Expo is buzzing with excitement as industry professionals from all over the country gather to showcase the latest trends and innovations in hair care. 
    
    Neon lights flicker above lavish booths adorned with dazzling product displays, while sleek demo stations feature stylists performing live makeovers. Maya walks through the convention hall, taking it all in. This is her chance to show off her salon’s services to a broader audience—but the expo is huge, and getting noticed will take careful planning. 
    
    She faces a big decision: does she go all out and invest in a large, eye-catching booth to make a bold statement, or does she start small, keeping costs low while testing the waters? 
    
    Maya knows this decision could shape her business’s future, and the stakes are high.`,
    image: maya15,
    alt: "Orc with a stick looking like a gun",
    options: [
      {
        text: `Invest in a large, expensive booth.`,
        nextText: 16,
      },
      {
        text: `Go with a smaller setup and test the waters first.`,
        nextText: 17,
      },
    ],
  },
  {
    id: 16,
    text: `Maya sets up an elaborate, expensive booth at the expo, but the traffic isn’t as high as expected. 
    
    She ends up spending most of her budget on the booth with little return. 
    
    The expo turns into a financial loss, and she regrets not testing the waters first.`,
    image: maya16,
    alt: "Futuristic shop interior",
    options: [
      {
        text: `Try again`,
        nextText: 15,
      },
      {
        text: `Start over`,
        nextText: 1,
      },
    ],
  },
  {
    id: 17,
    text: `“Maya decides to keep things simple with a small, affordable booth. 
    
    She generates a lot of interest and gathers contact info from potential clients. 
    
    The low-cost investment pays off, and she leaves the expo with a list of leads and plans for future growth.`,
    image: maya17,
    alt: "Futuristic shop interior",
    options: [
      {
        text: `Visit the cosmetology school`,
        nextText: 12,
      },
      {
        text: `Go to your salon.`,
        nextText: 18,
      },
    ],
  },
  {
    id: 18,
    text: `The warm, welcoming atmosphere of Maya’s salon feels like a second home.
     
    The soft hum of hairdryers and the smell of freshly brewed tea fill the air. Stylish mirrors line the walls, reflecting the soft glow of vintage lamps hanging from the ceiling.
    
    Maya’s team is gathered in the back near the waiting area, where the latest magazines are stacked neatly next to a potted plant that Maya has somehow managed to keep alive. With freshly polished floors and a relaxing vibe, the salon has become a haven for clients seeking a break from the world. 
    
    But today, the focus is on more than just hair—her social media following is skyrocketing, but appointments are not. 
    
    The team is excited about the follower count, but Maya wonders: is this really helping the business grow?`,
    image: maya18,
    alt: "Futuristic Arena Entrance",
    options: [
      {
        text: `Double down on social media growth`,
        nextText: 19,
      },
      {
        text: `Prioritize increasing customer satisfaction and repeat bookings`,
        nextText: 20,
      },
    ],
  },
  {
    id: 19,
    text: `Maya’s social media team continues to focus on growing followers, and soon her salon’s Instagram page hits 10,000 followers. 
    
    But despite all the likes and shares, salon bookings barely increase. 
    
    Maya realizes too late that vanity metrics don’t pay the bills.`,
    image: maya19,
    alt: "Arena lockers area",
    options: [
      {
        text: `Try again`,
        nextText: 18,
      },
      {
        text: `Start over`,
        nextText: 1,
      },
    ],
  },
  {
    id: 20,
    text: `Maya shifts her focus to improving the client experience in her salon. 
    
    Soon, customers are booking more frequently and referring their friends. 
    
    Though her social media following grows slower, her business sees a steady increase in revenue.`,
    image: maya20,
    alt: "Futuristic arena",
    options: [
      {
        text: `Get a booth at the hair expo`,
        nextText: 15,
      },
      {
        text: `Visit your realtor`,
        nextText: 21,
      },
    ],
  },
  {
    id: 21,
    text: `Maya’s salon has been doing well—so well, in fact, that her chairs are booked solid for weeks at a time.
     
    With business booming and more clients asking for appointments than she can handle, Maya knows it might be time to expand. 
    
    The idea of opening a second location has been on her mind for months, and today, she’s finally meeting with a real estate agent to discuss signing a lease. 
    
    The office is sleek and modern, filled with glossy brochures featuring potential properties around the city. Maya feels a mix of excitement and anxiety as the agent flips through available spaces. Expanding could mean big growth for her business, but the financial risk is significant. 
    
    Should she commit to a second location right away, or test the demand with a temporary setup first? 
    
    The decision is hers to make, and it could make or break her growing empire.`,
    image: maya21,
    alt: "If-statement with a useShortcut function inside.",
    options: [
      {
        text: `Sign the lease and expand immediately`,
        nextText: 22,
      },
      {
        text: `Run a pop-up or temporary salon before committing to a second location`,
        nextText: 23,
      },
    ],
  },
  {
    id: 22,
    text: `Maya signs the lease for her second salon location, but within a few months, she’s struggling to fill appointments. 
    
    The new salon isn’t bringing in enough revenue to cover the costs, and Maya is left scrambling to make ends meet.`,
    image: maya22,
    alt: "Orange portal",
    options: [
      {
        text: `Try again`,
        nextText: 21,
      },
      {
        text: `Start over`,
        nextText: 1,
      },
    ],
  },
  {
    id: 23,
    text: `Maya decides to test the new location with a pop-up salon. 
    
    The demand is high, and after collecting plenty of customer feedback, she confidently moves forward with the lease. 
    
    Her second salon opens with plenty of eager clients waiting to book.
    
    This all happens just in time too. Maya has just heard a rumor that Shark Tank is coming to town, and she's going to try her hand at pitching to them.`,
    image: maya23,
    alt: "Sphere with a figure inside of it",
    options: [
      {
        text: `Get a spot on Shark Tank`,
        nextText: 24,
      },
      {
        text: `Visit the coffeeshop`,
        nextText: 33,
      },
    ],
  },
  {
    id: 24,
    text: `The bright lights of the Shark Tank set shine down as Maya steps into the spotlight. 
    
    The famous panel of sharks—Mark Cuban, Barbara Corcoran, Kevin O’Leary, and Lori Greiner—are sitting in their chairs, ready to hear what she has to offer. 
    
    The stakes feel higher than ever. Her second salon is up and running, but it hasn’t been without its challenges. Scaling operations across two locations proved more difficult than expected—she struggled with managing staff, keeping up with customer demand, and maintaining consistent quality at both salons. 
    
    Maya now knows firsthand how tricky expanding can be, but she’s learned from those early mistakes.

Today, she’s pitching something even bigger: a mobile salon service that can reach clients who are too busy to visit her physical salons.

It’s an ambitious new venture that will allow her to serve customers at home, at work, or even at special events. However, she needs a significant investment to make it work—customized vehicles, staff, and the technology to manage mobile appointments seamlessly. 

Should she gloss over the struggles she’s faced with her second salon and focus on the future, or be upfront about the challenges she’s overcome and present her new plan with lessons learned?`,
    image: maya24,
    alt: "Sphere with a figure inside of it",
    options: [
      {
        text: `Stick to the original expansion plan despite poor results.`,
        nextText: 26,
      },
      {
        text: `Admit mistakes and propose a new plan based on customer feedback.`,
        nextText: 27,
      },
    ],
  },
  {
    id: 25,
    text: `You get a jelly-filled donut before heading to the set of Shark Tank. It's filling and delicious.
    
    The lights are blindingly bright on the Shark Tank set as Maya steps into the spotlight, clutching her pitch cards a little too tightly. 
    
    Across from her sit the famous panel of sharks: Mark Cuban, casually leaning back in his chair; Barbara Corcoran, giving her that "I’ve seen it all" look; and Kevin O’Leary, “Mr. Wonderful” himself, poised for the numbers breakdown. 
    
    Maya’s heart is pounding, but she’s ready.

Maya’s business has grown faster than she could have imagined—her second salon is already a success, and her customer base is expanding rapidly. Now, she’s pitching something even bigger: a mobile salon service that brings high-end, on-demand hair and beauty treatments directly to clients’ homes, offices, and events.

It’s an ambitious plan, but Maya knows there’s a market for it. The mobile service could reach customers who don’t have time to visit her physical salons, and it could be a game-changer for her business. But scaling a mobile service requires serious funding—customized vehicles, specialized equipment, and a dedicated team. That’s why she’s here, facing the sharks, pitching her bold new idea on national TV. 

Will they bite, or will they send her home empty-handed?`,
    image: maya25,
    additionalImage: youngDeoImage,
    alt: "Sphere with a figure inside of it",
    additionalImageAlt: "Bearded man with glasses and futuristic headphones",
    options: [
      {
        text: `Stick to the original expansion plan despite poor results.`,
        nextText: 26,
      },
      {
        text: `Admit her mistakes and propose a new plan based on customer feedback.`,
        nextText: 27,
      },
    ],
  },
  {
    id: 26,
    text: `Maya sticks to her script, delivering a confident pitch for the mobile salon service without mentioning the hurdles she faced with her second location. But the sharks quickly catch on. 
    
    "You’ve already had trouble scaling with your second salon," Kevin O’Leary says bluntly. "What makes you think this will be any different?" 
    
    Barbara frowns and adds, "You need to prove you can handle growth before expanding again." 
    
    Mark Cuban leans forward. "You’ve got a good idea, but I’m out," he says, before delivering the final blow: "You’re not ready yet." 
    
    Maya leaves the stage empty-handed, realizing too late that she should have acknowledged her earlier challenges.`,
    image: maya26,
    alt: "Sphere with a figure inside of it",
    options: [
      {
        text: `Try again`,
        nextText: 24,
      },
      {
        text: `Start over`,
        nextText: 1,
      },
    ],
  },
  {
    id: 27,
    text: `Maya takes a deep breath.
    
    "I’ve learned a lot from opening my second salon," she begins, surprising the sharks. 
    
    She explains the challenges she faced—managing staff, ensuring quality control, and scaling operations—and how those lessons have shaped her new approach. 
    
    "With the mobile service, I’ll start small, focusing on specific areas where demand is highest," she continues, "and I’ve built in flexibility to adjust as needed based on client feedback." 
    
    The sharks perk up. Barbara smiles, impressed with Maya’s honesty, and Mark Cuban nods. "Now that’s what I like to hear," Mark says. "Learning from your mistakes shows you’ve got what it takes."
    
    By the end, Maya has multiple offers and leaves the stage with the funding she needs to launch her mobile salon service.`,
    image: maya27,
    alt: "Sphere with a figure inside of it",
    options: [
      {
        text: `Visit her realtors' office`,
        nextText: 21,
      },
      {
        text: `Visit the community center`,
        nextText: 28,
      },
    ],
  },
  {
    id: 28,
    text: `The neighborhood community center is buzzing with excitement as small business owners, entrepreneurs, and local residents gather for a networking event. 
    
    The walls are decorated with colorful flyers advertising upcoming workshops and events, and a long buffet table is set with refreshments. 
    
    Maya finds herself in the middle of a lively conversation with other small business owners, each exchanging ideas and tips for success. The room smells of fresh-brewed coffee, and the chatter of eager entrepreneurs fills the space. 
    
    Maya has the chance to introduce her new loyalty program to keep her clients coming back, but she wonders—should she dive in headfirst or take a step back and ask for feedback first?
    
    The energy in the room is infectious, and everyone is ready to make their next big move.`,
    image: maya28,
    alt: "Sphere with a figure inside of it",
    options: [
      {
        text: `Introduce the loyalty program immediately without feedback.`,
        nextText: 29,
      },
      {
        text: `Survey current customers at the event and use their feedback to fine-tune the program.`,
        nextText: 30,
      },
    ],
  },
  {
    id: 29,
    text: `Maya steps up to the front of the room, her excitement buzzing as she unveils her new loyalty program to the business owners and clients gathered at the community center. 
    
    The idea seems great—on paper. But after a few months, Maya notices that her program isn’t gaining traction. 
    
    Clients aren’t engaging with it like she expected. She realizes too late that she should’ve asked for feedback before launching it fully.`,
    image: maya29,
    alt: "Sphere with a figure inside of it",
    options: [
      {
        text: `Try again`,
        nextText: 28,
      },
      {
        text: `Start over`,
        nextText: 1,
      },
    ],
  },
  {
    id: 30,
    text: `Maya begins her presentation at the community center by asking the audience for their opinions. 
    
    "What would make you stay loyal to a business?" she asks. 
    
    The feedback comes pouring in—clients love the idea of a loyalty program but want simpler rewards and more personalized touches.
    
    Maya takes careful notes and adjusts her program before rolling it out to her salon. 
    
    The result? Clients love it, and Maya sees a steady increase in return visits and referrals.`,
    image: maya30,
    alt: "Sphere with a figure inside of it",
    options: [
      {
        text: `Celebrate your successful journey`,
        nextText: 31,
      },
      {
        text: `Play again`,
        nextText: 1,
      },
    ],
  },
  {
    id: 31,
    text: `Maya’s salon empire is thriving, and it’s all thanks to YOU! 
    
    From detangling tough decisions to making the cut when it mattered most, you’ve helped Maya turn her business dreams into a polished reality.
    
    She’s now running not just one, but TWO successful salons, and her bold new mobile salon service is truly head and shoulders above the competition!

Your sharp business sense, smooth strategies, and ability to brush off setbacks took Maya’s journey to the next level. You’ve proven that true entrepreneurship isn’t just about styling flashy ideas—it’s about adapting, staying sharp, and knowing when to trim the fat.

So, give yourself a well-deserved round of applause for helping Maya make the big chop and create a business that’s a cut above the rest. With you as her trusted guide, the future looks nothing short of fabulous.

Thanks for playing Risky Business! You’ve helped Maya comb through the challenges and curl up with success. Here’s to keeping it sleek and staying ahead of the curve!
`,
    image: maya31,
    alt: "Sphere with a figure in front of it",
    options: [
      {
        text: `Go to the set of Shark Tank`,
        nextText: 24,
      },
      {
        text: `Play again?`,
        nextText: 1,
      }, 
    ],
  },
  {
    id: 32,
    text: `The investor nods as Maya walks them through her realistic, step-by-step growth plan. 
    
    “This looks solid,” they say, “and your salon’s steady growth shows real potential.”
    
    Maya leaves the bank with a small loan in hand and a new sense of confidence in her business decisions. Now, she can focus on gathering customer feedback.”`,
    image: maya32,
    alt: "Futuristic shop entrance",
    options: [
      {
        text: `Visit the coffee shop`,
        nextText: 33,
      },
      {
        text: `Visit the farmers market`,
        nextText: 6,
      },
    ],
  },
  {
    id: 33,
    text: `The Buzzed Bean is a cozy, bustling coffee shop where Maya often meets her most loyal clients. The air is rich with the smell of roasted coffee beans, and the sound of steam hissing from the espresso machine fills the background. 
    Wooden tables are scattered around, each occupied by chattering customers sipping lattes or tapping away on laptops.
     
    Maya finds a corner table by the window, where sunlight streams in, casting a warm glow on the reclaimed wood furniture. Today, she’s not just here for coffee—she’s here to gather feedback on her latest salon service. 
    
    Her clients arrive, smiling and waving as they join her. But will they be honest about what they really think?`,

    image: maya33,
    alt: "Futuristic rainbow robo-unicorn",
    options: [
      {
        text: `Explain the new service in detail.`,
        nextText: 4,
      },
      {
        text: `Ask clients about their haircare struggles and listen carefully.`,
        nextText: 5,
      },
    ],
  },
]
import mayastart from "../assets/mayastoryscreen.jpg";
import mayapitch from "../assets/mayapitchpage.jpg";
import maya1 from "../assets/mayaid1.jpg";
import maya2 from "../assets/mayaid2.jpg";
import maya3 from "../assets/mayaid3.jpg";
import maya4 from "../assets/mayaid4.jpg";
import maya5 from "../assets/mayaaid5.jpg";
import maya6 from "../assets/mayaid6.jpg";
import maya7 from "../assets/mayaid7.jpg";
import maya8 from "../assets/mayaid8.jpg";
import maya9 from "../assets/mayaid9.jpg";
import maya10 from "../assets/mayaid10.jpg";
import maya11 from "../assets/mayaid11.jpg";
import maya12 from "../assets/mayaid12.jpg";
import maya13 from "../assets/mayaid13.jpg";
import maya14 from "../assets/mayaid14.jpg";
import maya15 from "../assets/mayaid15.jpg";
import maya16 from "../assets/mayaid16.jpg";
import maya17 from "../assets/mayaid17.jpg";
import maya18 from "../assets/mayaid18.jpg";
import maya19 from "../assets/mayaid19.jpg";
import maya20 from "../assets/mayaid20.jpg";
import maya21 from "../assets/mayaid21.jpg";
import maya22 from "../assets/mayaid22.jpg";
import maya23 from "../assets/mayaid23.jpg";
import maya24 from "../assets/mayaid24.jpg";
import maya25 from "../assets/mayaid25.jpg";
import maya26 from "../assets/mayaid26.jpg";
import maya27 from "../assets/mayaid27.jpg";
import maya28 from "../assets/mayaid28.jpg";
import maya29 from "../assets/mayaid29.jpg";
import maya30 from "../assets/mayaid30.jpg";
import maya31 from "../assets/mayaid31.jpg";
import maya32 from "../assets/mayaid32.jpg";
import maya33 from "../assets/mayaid33.jpg";



import mainCharacterImage from "../assets/mainCharacterImage.jpg";
import apartmentImage from "../assets/apartmentImage.jpg";
import unicornImage from "../assets/unicornImage.jpg";
import mnemonicBarEntranceImage from "../assets/mnemonicBarEntranceImage.jpg";
import unaEkImage from "../assets/unaEkImage.jpg";
import dixiesShopImage from "../assets/dixiesShopImage.jpg";
import nnifImage from "../assets/nnifImage.jpg";
import mnemonicBarInteriorImage from "../assets/mnemonicBarInteriorImage.jpg";
import gameOverImage from "../assets/gameOverImage.jpg";
import ckiwImage from "../assets/ckiwImage.jpg";
import toxicCloudsImage from "../assets/toxicCloudsImage.jpg";
import deoImage from "../assets/deoImage.jpg";
import dixiesShopInteriorImage from "../assets/dixiesShopInteriorImage.jpg";
import mnemonicBarUpperFloorInteriorImage from "../assets/mnemonicBarUpperFloorInteriorImage.jpg";
import toxicRainImage from "../assets/toxicRainImage.jpg";
import blueScreenImage from "../assets/blueScreenImage.jpg";
import dixieImage from "../assets/dixieImage.jpg";
import dixiesShopStorageRoomImage from "../assets/dixiesShopStorageRoomImage.jpg";
import orcImage from "../assets/orcImage.jpg";
import shrikeEntranceImage from "../assets/shrikeEntranceImage.jpg";
import arikaImage from "../assets/arikaImage.jpg";
import shrikeLockersAreaImage from "../assets/shrikeLockersAreaImage.jpg";
import kassadAndMasteenImage from "../assets/kassadAndMasteenImage.jpg";
import shrikeArenaImage from "../assets/shrikeArenaImage.jpg";
import gnomeImage from "../assets/gnomeImage.jpg";
import shortcutImage from "../assets/shortcutImage.jpg";
import orangePortalImage from "../assets/orangePortalImage.jpg";
import cyborgRabbitImage from "../assets/cyborgRabbit.jpg";
import sphereImage from "../assets/sphereImage.jpg";
import smilingRabbit from "../assets/smilingRabbit.jpg";
import youngDeoImage from "../assets/youngDeoImage.jpg";
import sphereExitImage from "../assets/sphereExitImage.jpg";
import shrikeTrackImage from "../assets/shrikeTrackImage.jpg";
import mainCharacterFinalImage from "../assets/mainCharacterFinalImage.jpg";
import theEndImage from "../assets/theEndImage.jpg";
import arikaAtFinishLineImage from "../assets/arikaAtFinishLineImage.jpg";
import bridgeLivingAreaImage from "../assets/bridgeLivingAreaImage.jpg";
import saneImage from "../assets/saneImage.jpg";
import whiteRabbitImage from "../assets/whiteRabbitImage.jpg";
import finalSecondPlaceImage from "../assets/finalSecondPlaceImage.jpg";
import humanoidRabbitImage from "../assets/humanoidRabbitImage.jpg";
import towersFinalImage from "../assets/towersFinalImage.jpg";
import finalLoopImage from "../assets/finalLoopImage.jpg";

export default texts;
