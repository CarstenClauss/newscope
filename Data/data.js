import { Topnews } from './../Models/TopnewsModel';

export const DUMMY_TOPNEWS = JSON.parse(
    JSON.stringify({
        status: 'ok',
        totalResults: 38,
        articles: [
            {
                source: { id: null, name: 'Essentiallysports.com' },
                author: 'Arjun Athreya',
                title:
                    'Autopsy Reports Reveal Horrifying Details Behind the Death of Kobe Bryant and Others in the Helicopter Crash - Essentially Sports',
                description:
                    'Almost four months after the passing of Kobe Bryant, autopsy reports comfirm that everyone aboard the aircraft instaly died upon ground impact.',
                url:
                    'https://www.essentiallysports.com/nba-news-autopsy-reports-reveal-horrifying-details-behind-the-death-of-kobe-bryant-and-others-in-the-helicopter-crash/',
                urlToImage: 'https://image-cdn.essentiallysports.com/wp-content/uploads/20200516123108/Kobe-And-Gianna-Feature.jpg',
                publishedAt: '2020-05-16T07:23:00Z',
                content:
                    'January 26 marked a dark day in the world of basketball. Nobody can forget the tragic demise of the Los Angles Lakers legend, Kobe Bryant. For the millions of his fans, it is still extremely hard to believe that he is no more. The mamba, who was traveling wit… [+1971 chars]',
            },
            {
                source: { id: 'engadget', name: 'Engadget' },
                author: '',
                title: "Bioware says 'Anthem' redesign will be a 'longer process' - Engadget",
                description: "Bioware is updating players on where the 'Anthem' redesign is, and what's next for the troubled AAA game.",
                url: 'https://www.engadget.com/anthem-redesign-updates-063248496.html',
                urlToImage:
                    'https://o.aolcdn.com/images/dims?resize=1200%2C630&crop=1200%2C630%2C0%2C0&quality=80&image_uri=https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-uploaded-images%2F2020-05%2F79a40b40-973b-11ea-8fb6-0d777398d59c&client=amp-blogside-v2&signature=88e975aebe34f5f9108bcf08a189a51c4f699418',
                publishedAt: '2020-05-16T07:08:14Z',
                content:
                    'While many games-as-a-service thrive, EA’s Anthemlaunch is one of the bigger misfires in recent history. In February, Bioware boss Casey Hudson officially announced plans to “reinvent” its experience, and today a blog post explains a bit more about the team b… [+431 chars]',
            },
            {
                source: { id: null, name: 'Youtube.com' },
                author: null,
                title: 'Brazil health minister Teich resigns just weeks into the job - Al Jazeera English',
                description:
                    "In Brazil, a second health minister has resigned in less than a month. Nelson Teich quit after criticising President Jair Bolsonaro's handling of the coronav...",
                url: 'https://www.youtube.com/watch?v=p8z48IoTHPs',
                urlToImage: 'https://i.ytimg.com/vi/p8z48IoTHPs/maxresdefault.jpg',
                publishedAt: '2020-05-16T04:02:54Z',
                content:
                    "In Brazil, a second health minister has resigned in less than a month.Nelson Teich quit after criticising President Jair Bolsonaro's handling of the coronavirus pandemic.Brazil has reported more than 200,000 cases.And it is not the only country in Latin Ameri… [+396 chars]",
            },
            {
                source: { id: null, name: 'Space.com' },
                author: 'Tariq Malik',
                title: "Space Force to launch X-37B space plane on secret mission Saturday. Here's how to watch live. - Space.com",
                description: 'The launch is dedicated to COVID-19 responders and victims.',
                url: 'https://www.space.com/space-force-x-37b-space-plane-otv-6-launch-webcast.html',
                urlToImage: 'https://cdn.mos.cms.futurecdn.net/SVPYNSgajNTRQqbStGKQaR-1200-80.jpg',
                publishedAt: '2020-05-16T03:39:00Z',
                content:
                    'The Space Force will launch a robotic X-37B space plane on a new secret mission for the U.S. military early Saturday (May 16) and you can watch it live online. \r\nWeather permitting, the X-37B space plane will lift off atop an Atlas V rocket from Cape Canavera… [+4272 chars]',
            },
            {
                source: { id: 'politico', name: 'Politico' },
                author: null,
                title: 'Trump ousts State Department watchdog - POLITICO',
                description: 'Democrats blasted the Friday-night dismissal as an assault on the rule of law.',
                url: 'https://www.politico.com/news/2020/05/15/state-department-inspector-general-fired-261536',
                urlToImage: 'https://static.politico.com/9d/16/c5a8e18646fb864d79598c97f6c9/200515-linick-gty-773.jpg',
                publishedAt: '2020-05-16T03:21:00Z',
                content:
                    "Trump's move infuriated Democrats who say he's trying to circumvent oversight of his administration, undermining the ability of other branches to hold him accountable. The move follows Trump's anger at being impeached, but it also comes as the White House str… [+4222 chars]",
            },
            {
                source: { id: null, name: 'Boston.com' },
                author: 'nicole-yang',
                title: 'Rory McIlroy says he won’t golf again with President Trump, criticizes his leadership - Boston.com',
                description: 'The four-time major winner was criticized for his round with the president in 2017.',
                url: 'https://www.boston.com/sports/golf/2020/05/15/rory-mcilroy-donald-trump-golf',
                urlToImage: 'https://www.boston.com/wp-content/uploads/2016/09/Deutsche-Bank-Golf-3-850x478.jpeg',
                publishedAt: '2020-05-16T02:48:53Z',
                content:
                    'Rory McIlroy already had expressed doubts about any future rounds of golf with President Donald Trump, saying in April 2017 that hed have to think twice about it after receiving a considerable amount of heat for his round with the president two months earlier… [+2231 chars]',
            },
            {
                source: { id: 'politico', name: 'Politico' },
                author: 'ANITA KUMAR',
                title: "Burr's alleged conflicts extend beyond his coronavirus-related stock trades - POLITICO",
                description: 'The North Carolina senator holds numerous investments in firms regulated by the committees on which he sits.',
                url:
                    'https://www.politico.com/news/2020/05/15/burrs-alleged-conflicts-extend-beyond-his-coronavirus-related-stock-trades-261523',
                urlToImage: 'https://static.politico.com/31/c4/12fbc7e5435586151937708732c3/200515-burr-gty-773.jpg',
                publishedAt: '2020-05-16T02:09:57Z',
                content:
                    'Maybe the bottom line is, if youre going to be in the Senate you cant own any stock. Or at least own mutual funds. Who knows, people could say youre gaming an index fund, Sen. John Cornyn (R-Texas) told POLITICO this week.\r\nIn 2017, Burr traded stock in two c… [+7288 chars]',
            },
            {
                source: { id: null, name: 'Nypost.com' },
                author: 'Steven Nelson',
                title: 'House Democrats pass doomed $3T coronavirus relief bill - New York Post ',
                description:
                    'House Democrats passed a $3 trillion coronavirus relief bill on Friday night despite Senate Republicans and President Trump declaring the so-called Heroes Act dead on arrival. Republican House Mino…',
                url: 'https://nypost.com/2020/05/15/house-democrats-pass-doomed-3t-coronavirus-relief-bill/',
                urlToImage: 'https://thenypost.files.wordpress.com/2020/05/10648011p.jpg?quality=90&strip=all&w=1200',
                publishedAt: '2020-05-16T01:55:12Z',
                content:
                    'House Democrats passed a $3 trillion coronavirus relief bill on Friday night despite Senate Republicans and President Trump declaring the so-called Heroes Act dead on arrival.\r\nRepublican House Minority Leader Kevin McCarthy of California complained that the … [+3219 chars]',
            },
            {
                source: { id: null, name: 'Forbes.com' },
                author: 'Sarah Hansen',
                title:
                    'With Another $3 Trillion Stimulus Package On The Line, Here’s Everything The Government Has Done To Rescue The Economy So Far - Forbes',
                description:
                    'Lawmakers have passed trillions of dollars in rescue legislation while the Fed has crossed into uncharted territory.',
                url:
                    'https://www.forbes.com/sites/sarahhansen/2020/05/15/with-another-3-trillion-stimulus-package-on-the-line-heres-everything-the-government-has-done-to-rescue-the-economy-so-far/',
                urlToImage:
                    'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ebf316d142a910006474fe0%2F0x0.jpg%3FcropX1%3D0%26cropX2%3D4177%26cropY1%3D35%26cropY2%3D2382',
                publishedAt: '2020-05-16T01:40:55Z',
                content:
                    'Lawmakers have passed trillions of dollars in rescue legislation while the Fed has crossed into ... [+] uncharted territory. \r\nGetty\r\nWith job losses caused by the coronavirus pandemic reaching more than 36 million in just two months, the economy is in unchar… [+4581 chars]',
            },
            {
                source: { id: null, name: 'Theguardian.combusiness' },
                author: 'Guardian staff reporter',
                title: 'JC Penney, century-old mainstay of US malls, declares bankruptcy amid pandemic - The Guardian',
                description:
                    'Coronavirus struck final blow to already struggling department store, reportedly largest retail casualty so far',
                url: 'https://amp.theguardian.combusiness/2020/may/15/jc-penney-bankruptcy-retail-business-us-economy',
                urlToImage:
                    'https://i.guim.co.uk/img/media/c305e2cbdee9b85a3467de538995b2662058b48d/0_76_4200_2520/master/4200.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=ff1d334deb77de6a69270090e228e4fa',
                publishedAt: '2020-05-16T01:36:52Z',
                content:
                    'JC Penney, the more than 100-year old US department store chain, filed for bankruptcy on Friday, making it the latest business to hit bottom amid the coronavirus pandemic.\r\nThe chain, known for selling family apparel, cosmetics and jewelry, is the latest in a… [+2787 chars]',
            },
            {
                source: { id: null, name: 'Theguardian.com' },
                author: 'David Smith',
                title: "Trump unveils 'warp-speed' effort to create coronavirus vaccine by year's end - The Guardian",
                description:
                    '‘Operation Warp Speed’ to attempt rapid vaccine development despite experts’ caution, while bullish Trump says schools should reopen in the autumn',
                url: 'https://www.theguardian.com/us-news/2020/may/15/trump-coronavirus-warp-speed-vaccine-white-house',
                urlToImage:
                    'https://i.guim.co.uk/img/media/1eb3c18acc61acd9acc73d03352ccc876b89f64e/0_112_3500_2099/master/3500.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=77598dc2139007d8653c3e256b71a257',
                publishedAt: '2020-05-16T01:36:49Z',
                content:
                    'Donald Trump has announced details of a warp-speed effort to create a coronavirus vaccine by the end of the year, even as experts warn that such a breakthrough could take longer than 18 months.\r\nDuring remarks in the White House Rose Garden on Friday that had… [+4748 chars]',
            },
            {
                source: { id: null, name: 'Cinemablend.com' },
                author: 'Adam Holmes',
                title: 'Scooby Doo Actor Matthew Lillard Explains Why Not Playing Shaggy In Scoob! Was A ‘Bummer’ - CinemaBlend',
                description: 'Zoinks!',
                url:
                    'https://www.cinemablend.com/news/2496350/scooby-doo-actor-matthew-lillard-explains-why-not-playing-shaggy-in-scoob-was-a-bummer',
                urlToImage: 'https://img.cinemablend.com/quill/1/a/a/6/8/f/1aa68fa86a8241cdaa50c39ac8ecd547a73552e2.jpg',
                publishedAt: '2020-05-16T01:22:17Z',
                content:
                    'The late Casey Kasem may have been the first actor to bring Scooby-Doo character Shaggy Rogers to life, but ever since Kasem retired from the role in 2009, Matthew Lillard has been regularly voicing the character, and had already played Scooby Doos best pal i… [+2966 chars]',
            },
            {
                source: { id: null, name: 'Nypost.com' },
                author: 'Laura Italiano',
                title: 'Gregory McMichael leaked viral video of Ahmaud Arbery shooting to press in shocking twist - New York Post ',
                description:
                    'Viral video of the shooting of unarmed Georgia jogger Ahmaud Arbery was first leaked to the press at the request of the dad now accused of his murder — because he thought it would make him an…',
                url: 'https://nypost.com/2020/05/15/gregory-mcmichael-leaked-the-ahmaud-arbery-video-report/',
                urlToImage: 'https://thenypost.files.wordpress.com/2020/05/mcmichael-arbery.jpg?quality=90&strip=all&w=1200',
                publishedAt: '2020-05-16T00:52:41Z',
                content:
                    'Viral video of the shooting of unarmed Georgia jogger Ahmaud Arbery was first leaked to the press at the request of the dad now accused of his murder — because he thought it would make him and his son look better.\r\nThe ironic shocker — that it was ex-cop Greg… [+1492 chars]',
            },
            {
                source: { id: null, name: 'Forbes.com' },
                author: 'Rachel Sandler',
                title:
                    'How To Use Messenger Rooms, Facebook’s Zoom Competitor That Lets You Video Chat With Up To 50 People With No Time Limit - Forbes',
                description: 'Users can create public and private rooms, and don’t need a Facebook account to join.',
                url:
                    'https://www.forbes.com/sites/rachelsandler/2020/05/15/how-to-use-messenger-rooms-facebooks-zoom-competitor-that-lets-you-video-chat-with-up-to-50-people-with-no-time-limit/',
                urlToImage:
                    'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ebf37372026220006ffeb32%2F0x0.jpg',
                publishedAt: '2020-05-16T00:50:12Z',
                content:
                    'Messenger rooms seen on a desktop.\r\nFacebook\r\nFacebooks new video-conferencing service debuted in the U.S., Mexico and Canada on Thursday, with the rest of the world set to get the new feature next week. With the coronavirus pandemic forcing the bulk of socia… [+3064 chars]',
            },
            {
                source: { id: null, name: 'Yahoo.com' },
                author: 'Jason Owens',
                title: 'Ex-LeBron James teammate Channing Frye calls Michael Jordan just a scorer in embarrassing take - Yahoo Sports',
                description: 'The LeBron-stan is strong with this one.',
                url:
                    'https://sports.yahoo.com/ex-le-bron-james-teammate-channing-frye-calls-michael-jordan-just-a-scorer-in-embarrassing-take-002952625.html',
                urlToImage:
                    'https://s.yimg.com/uu/api/res/1.2/AyWx_XnvK_VS2jQ5qlHtcw--~B/aD0xNjI0O3c9MjIzNTtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2020-05/298a9090-970c-11ea-bfef-f00e1e4d1d86',
                publishedAt: '2020-05-16T00:29:00Z',
                content:
                    'Among other things, The Last Dance has done a fine job of bringing the LeBron James stans to the table.\r\nCount Channing Frye among them.\r\nThe 13-year NBA veteran who played alongside James when the Cleveland Cavaliers won the 2016 NBA championship showed up F… [+2470 chars]',
            },
            {
                source: { id: null, name: 'Aol.com' },
                author: 'Ned Zeman',
                title: 'Newly reopened South Florida area seen as an emerging coronavirus hotspot - AOL',
                description:
                    'Federal officials responding to the pandemic are concerned about the rapidly rising number of cases in Palm Beach County, Fla., according to Yahoo News.',
                url: 'https://www.aol.com/article/news/2020/05/15/newly-reopened-fla-area-seen-as-an-emerging-virus-hotspot/24318276/',
                urlToImage:
                    'https://o.aolcdn.com/images/dims3/GLOB/legacy_thumbnail/1028x675/format/jpg/quality/85/https%3A%2F%2Fs.yimg.com%2Fos%2Fcreatr-images%2F2020-05%2F18cf3000-970a-11ea-bbaf-13d1a27f5c01',
                publishedAt: '2020-05-16T00:14:48Z',
                content:
                    'WASHINGTON Federal officials responding to the coronavirus pandemic are concerned about the rapidly rising number of cases in Palm Beach County, Fla., according to an internal Trump administration document reviewed by Yahoo News.\r\nThe document, a May 15 daily… [+19313 chars]',
            },
            {
                source: { id: 'techcrunch', name: 'TechCrunch' },
                author: 'Devin Coldewey',
                title: 'NASA’s ‘Artemis Accords’ set forth new and old rules for outer space cooperation - TechCrunch',
                description:
                    'NASA’s plan to return to the Moon is ambitious enough on its own, but the agency is aiming to modernize international cooperation in space in the process. Today it published a summary of the “Artemis Accords,” a new set of voluntary guidelines that partner na…',
                url: 'http://techcrunch.com/2020/05/15/nasas-artemis-accords-set-forth-new-and-old-rules-for-outer-space-cooperation/',
                urlToImage: 'https://techcrunch.com/wp-content/uploads/2020/05/nasa-artemis-astronauts.jpg?w=711',
                publishedAt: '2020-05-15T23:47:55Z',
                content:
                    'NASA’s plan to return to the Moon is ambitious enough on its own, but the agency is aiming to modernize international cooperation in space in the process. Today it published a summary of the “Artemis Accords,” a new set of voluntary guidelines that partner na… [+3342 chars]',
            },
            {
                source: { id: null, name: 'Deadline.com' },
                author: 'Patrick Hipes',
                title: 'Florida Governor Outlines Next Steps In Theme Parks’ Reopening Path - Deadline',
                description:
                    'Florida Gov. Ron DeSantis on Friday outlined what may be the next steps on the path to reopen the state’s theme parks including Walt Disney World Resort and Universal Orlando Resort. In a press conference, DeSantis called on park operators to submit their reo…',
                url: 'https://deadline.com/2020/05/florida-theme-parks-reopening-plans-disney-world-universal-orlando-1202936239/',
                urlToImage: 'https://pmcdeadline2.files.wordpress.com/2020/03/disney-world-orlando-universal-.jpg?w=1000',
                publishedAt: '2020-05-15T23:41:44Z',
                content:
                    'Florida Gov. Ron DeSantis on Friday outlined what may be the next steps on the path to reopen the state’s theme parks including Walt Disney World Resort and Universal Orlando Resort.\r\nIn a press conference, DeSantis called on park operators to submit their re… [+2517 chars]',
            },
            {
                source: { id: null, name: 'Chicagotribune.com' },
                author: 'Gregory Pratt',
                title: 'Reopening Chicago: Lightfoot says restaurants may reopen in June - Chicago Tribune',
                description:
                    'Chicago restaurants might be able to reopen in June and residents may be allowed to sit outside enjoying music, theater, and other outdoor activities, Mayor Lori Lightfoot said on Friday.',
                url:
                    'https://www.chicagotribune.com/coronavirus/ct-coronavirus-chicago-restaurants-reopening-lightfoot-20200515-ux4xyyj4fbfltiozoc3fpveemu-story.html',
                urlToImage:
                    'https://www.chicagotribune.com/resizer/iaG_uchBA2qLQ2SLrOYPORsXXjY=/1200x0/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/5JSTZDTDCJDHPFQKU4WVE4QZIQ.jpg',
                publishedAt: '2020-05-15T22:45:24Z',
                content: null,
            },
            {
                source: { id: null, name: 'Gamesradar.com' },
                author: 'Jordan Gerblick',
                title: "Chrissy Teigen's Animal Crossing-inspired recipe sounds delicious - GamesRadar+",
                description: 'The celebrity chef came up with the recipe while digging up bamboo shoots in Animal Crossing: New Horizons',
                url: 'https://www.gamesradar.com/chrissy-teigens-animal-crossing-inspired-recipe-sounds-delicious/',
                urlToImage: 'https://cdn.mos.cms.futurecdn.net/VmtvjPkoEktjwY2jGAtjrD-1200-80.jpg',
                publishedAt: '2020-05-15T22:36:41Z',
                content:
                    "Celebrity chef Chrissy Teigen's latest recipe was inspired by pretty much everyone's current obsession, Animal Crossing: New Horizons. Teigen was harvesting bamboo shoots when she realized she'd never made a recipe using the vegetable, prompting her to make a… [+1239 chars]",
            },
        ],
    })
);
export const DUMMY_TOPNEWS_2 = JSON.parse(
    JSON.stringify({
        status: 'ok',
        totalResults: 38,
        articles: [
            {
                source: { id: null, name: 'Gamesradar.com' },
                author: 'Jordan Gerblick',
                title: "Chrissy Teigen's Animal Crossing-inspired recipe sounds delicious - GamesRadar+",
                description: 'The celebrity chef came up with the recipe while digging up bamboo shoots in Animal Crossing: New Horizons',
                url: 'https://www.gamesradar.com/chrissy-teigens-animal-crossing-inspired-recipe-sounds-delicious/',
                urlToImage: 'https://cdn.mos.cms.futurecdn.net/VmtvjPkoEktjwY2jGAtjrD-1200-80.jpg',
                publishedAt: '2020-05-15T22:36:41Z',
                content:
                    "Celebrity chef Chrissy Teigen's latest recipe was inspired by pretty much everyone's current obsession, Animal Crossing: New Horizons. Teigen was harvesting bamboo shoots when she realized she'd never made a recipe using the vegetable, prompting her to make a… [+1239 chars]",
            },
        ],
    })
);
