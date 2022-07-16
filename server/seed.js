require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialiect: "postgres",
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = {
    seed: (req, res) => {
        sequelize.query(`
        drop table if exists books;

        CREATE TABLE books (
            book_id SERIAL PRIMARY KEY,
            title VARCHAR(200),
            author VARCHAR(200),
            category VARCHAR(200),
            image_url VARCHAR(2000),
            short_description TEXT
        );

        INSERT INTO books (title, author, category, image_url, short_description)
        VALUES ('The Pheonix Project', 'Gene Kim', 'DevOps', 'https://images-na.ssl-images-amazon.com/images/I/81ZMvLDtmIL.jpg', 'In a fast-paced and entertaining style, three luminaries of the DevOps movement deliver a story that anyone who works in IT will recognize. Readers will not only learn how to improve their own IT organizations, they will never view IT the same way again.'), 
        ('The Unicorn Project', 'Gene Kim', 'DevOps','https://m.media-amazon.com/images/I/51jkkeU8HvL.jpg','The Age of Software is here, and another mass extinction event looms—this is a story about rebel developers and business leaders working together, racing against time to innovate, survive, and thrive in a time of unprecedented uncertainty...and opportunity.'),
        ('User Story Mapping', 'Jeff Patton', 'Product Management', 'https://images-na.ssl-images-amazon.com/images/I/51OBhcSAfAL._SX331_BO1,204,203,200_.jpg', 'User story mapping is a valuable tool for software development, once you understand why and how to use it. This insightful book examines how this often misunderstood technique can help your team stay focused on users and their needs without getting lost in the enthusiasm for individual product features.'),
        ('Inspired', 'Marty Cagan', 'Product Management', 'http://prodimage.images-bn.com/pimages/9781119387503_p0_v3_s1200x630.jpg', 'Whether you are an early-stage startup working to get to product/market fit, or a growth-stage company working to scale your product organization, or a large, long-established company trying to regain your ability to consistently deliver new value for your customers, INSPIRED will take you and your product organization to a new level of customer engagement, consistent innovation, and business success.'),
        ('Hooked', 'Nir Eyal', 'Product Management', 'https://images-na.ssl-images-amazon.com/images/I/81fcWvYdukL.jpg', 'Hooked is written for product managers, designers, marketers, start-up founders, and anyone who seeks to understand how products influence our behavior.'),
        ('Contagious', 'Jonah Berger', 'Product Management', 'https://images-na.ssl-images-amazon.com/images/I/41RqbMG5AnL._SX326_BO1,204,203,200_.jpg', 'Contagious provides specific, actionable techniques for helping information spread—for designing messages, advertisements, and content that people will share. Whether you are a manager at a big company, a small business owner trying to boost awareness, a politician running for office, or a health official trying to get the word out, Contagious will show you how to make your product or idea catch on.'),
        ('Automating Inequality', 'Virginia Eugbanks', 'Data', 'https://images-na.ssl-images-amazon.com/images/I/91+V67CA47L.jpg', 'In Automating Inequality, Virginia Eubanks systematically investigates the impacts of data mining, policy algorithms, and predictive risk models on poor and working-class people in America.'),
        ('Invisible Women', 'Caroline Criado Perez', 'Data', 'https://images-na.ssl-images-amazon.com/images/I/41o5Wl8DcjL.jpg', 'Data is fundamental to the modern world. From economic development to health care to education and public policy, we rely on numbers to allocate resources and make crucial decisions. But because so much data fails to take into account gender, because it treats men as the default and women as atypical, bias and discrimination are baked into our systems. And women pay tremendous costs for this insidious bias, in time, in money, and often with their lives.'),
        ('Storytelling with Data', 'Cole Nussbaumer Knaflic', 'Data', 'https://m.media-amazon.com/images/I/41OonY0kRWL._AC_SY780_.jpg', 'Storytelling is not an inherent skill, especially when it comes to data visualization, and the tools at our disposal do not make it any easier. This book demonstrates how to go beyond conventional tools to reach the root of your data, and how to use your data to create an engaging, informative, compelling story.'),
        ('Radical Candor', 'Kim Scott', 'Leadership', 'https://images-na.ssl-images-amazon.com/images/I/81c4mD9fbYL.jpg', 'Radical Candor is about caring personally and challenging directly, about soliciting criticism to improve your leadership and also providing guidance that helps others grow. It focuses on praise but does not shy away from criticism—to help you love your work and the people you work with.'),
        ('Dont Make Me Think', 'Steve Krug', 'UX/UI', 'https://images-na.ssl-images-amazon.com/images/I/51WS36aA2BL._SX387_BO1,204,203,200_.jpg', 'Since first published in 2000, hundreds of thousands of Web designers and developers have relied on this guide to help them understand the principles of intuitive navigation and information design. Witty, commonsensical, and eminently practical, it is one of the best-loved and most recommended books on the subject.'),
        ('Lean UX', 'Jeff Gothelf', 'UX/UI', 'https://m.media-amazon.com/images/I/41JWTd4PCWL._AC_SY780_.jpg', 'Lean UX is synonymous with modern product design and development. By combining human-centric design, agile ways of working, and a strong business sense, designers, product managers, developers, and scrum masters around the world are making Lean UX the leading approach for digital product teams today.'), 
        ('Just Enough Research', 'Erika Hall', 'UX/UI', 'https://images-na.ssl-images-amazon.com/images/I/31c5qh9hliL.jpg', 'Learn how to discover your competitive advantages, spot your own blind spots and biases, understand and harness your findings, and why you should never, ever hold a focus group. You will start doing good research faster than you can plan your next pitch.'),
        ('Breaking and Entering', 'Jeremy N. Smith', 'Cybersecurity', 'https://images-na.ssl-images-amazon.com/images/I/71J0LKb2wdL.jpg', 'The world of hacking and cybersecurity still carries a mystique; only the privileged few are permitted to learn the secrets that lie within the close-knit hacker community. This book opens the gates and invites readers inside.'),
        ('The Art of Invisibility', 'Kevin Mitnick', 'Cybersecurity', 'https://images-na.ssl-images-amazon.com/images/I/61ksTbaI6lL.jpg', 'Reading this book, you will learn everything from password protection and smart Wi-Fi usage to advanced techniques designed to maximize your anonymity. Kevin Mitnick knows exactly how vulnerabilities can be exploited and just what to do to prevent that from happening.'),
        ('American Kingpin', 'Nick Bilton', 'Cybersecurity', 'https://images-na.ssl-images-amazon.com/images/I/91L1ebJwsPL.jpg', 'It is a story of the boy next door gone criminal, spurred on by the clash between the new world of libertarian-leaning, anonymous, decentralized Web advocates and the old world of government control, order, and the rule of law. Filled with unforgettable characters and capped by an astonishing climax, American Kingpin might be dismissed as too outrageous for fiction. But it’s all too real.'),
        ('How Women Rise', 'Sally Helgedsen', 'Leadership', 'https://m.media-amazon.com/images/I/51+H0NhtSFL.jpg', 'Sally and Marshall identify the twelve habits that hold women back as they seek to advance, showing them why what worked for them in the past might actually be sabotaging their future success. Essential reading for any woman who is ready to advance to the next level.'),
        ('Cracking the Coding Interview', 'Gayle Laakman McDowell', 'Software Engineering', 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg', 'Learn how to uncover the hints and hidden details in a question, discover how to break down a problem into manageable chunks, develop techniques to unstick yourself when stuck, learn (or re-learn) core computer science concepts, and practice on 189 interview questions and solutions.'),
        ('Blood, Sweat, and Pixels', 'Jason Schreier', 'Software Engineering', 'https://m.media-amazon.com/images/I/51APYREq6iL.jpg', 'Documenting the round-the-clock crunches, buggy-eyed burnout, and last-minute saves, Blood, Sweat, and Pixels is a journey through development hell—and ultimately a tribute to the dedicated diehards and unsung heroes who scale mountains of obstacles in their quests to create the best games imaginable.'),
        ('Staff Engineer', 'Will Larson', 'Software Engineering', 'https://m.media-amazon.com/images/I/41RJt+xmh4L.jpg', 'What if you want to advance your career without becoming an engineering manager? The technical leadership path remains relatively undocumented, hard to navigate, and inconsistent across companies. Staff Engineer is your guide to building your career towards a Staff engineering role, receiving the title, and succeeding within the role.'),
        ('The Managers Path', 'Camille Fournier', 'Leadership', 'https://images-na.ssl-images-amazon.com/images/I/51L%2BF83aDPL._SY291_BO1,204,203,200_QL40_ML2_.jpg', 'From mentoring interns to working with senior staff, you will get actionable advice for approaching various obstacles in your path. This book is ideal whether you’re a New manager, a mentor, or a more experienced leader looking for fresh advice. Pick up this book and learn how to become a better manager and leader in your organization.'),
        ('Managing Humans', 'Michael Lopp', 'Leadership', 'https://images-na.ssl-images-amazon.com/images/I/718q6lQACYL.jpg', 'Whether you are an aspiring manager, a current manager, or just wondering what the heck a manager does all day, there is a story in this book that will speak to you―and help you survive and prosper amid the general craziness of dysfunctional bright people caught up in the chase of riches and power.');
        
        `).then(() => {
            console.log('DB Seeded!');
            res.sendStatus(200);
        }).catch(err => console.log('error seeding DB', err));
    }
};