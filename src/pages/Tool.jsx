
function Tool() {
    const tools = [{
        title: "HTML5",
        img: "https://ucarecdn.com/188949ff-9fe5-4e13-a682-f9a2cb4614fa/-/crop/1531x667/69,0/-/preview/",
        para: "HTML5 is a markup language used for structuring and presenting hypertext documents on the World Wide Web. It was the fifth and final major HTML version that is now a retired World Wide Web Consortium recommendation. The current specification is known as the HTML Living Standard."
      },
      {
        title: "CSS3",
        img: "https://swapps.com/wp-content/uploads/2017/01/animations-with-css-3.png",
        para: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML. It controls the layout, colors, fonts, and overall visual appearance of web pages."
      },
      {
        title: "JavaScript",
        img: "https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1644309392998-Sorting%20image-25.png",
        para: "JavaScript is a versatile, high-level programming language primarily used for creating dynamic and interactive content on the web. It enables developers to enhance user experience by allowing for real-time updates, form validation, animations, and responsive interactions."
      },
      {
        title: "React",
        img: "https://miro.medium.com/v2/resize:fit:1400/1*x0d41ns8PTQZz4a3VbMrBg.png",
        para: "React.js is a JavaScript library for building user interfaces, particularly single-page applications. Developed by Facebook, it allows developers to create reusable UI components that manage their own state, promoting efficient and maintainable code."
      },
      {
        title: "Node.js",
        img: "https://d2ms8rpfqc4h24.cloudfront.net/feature_image_152a3e6669.jpg",
        para: "Node.js is a JavaScript runtime built on Chrome's V8 engine that allows developers to run JavaScript on the server side. It enables the creation of scalable and high-performance applications, particularly for real-time web applications"
      },
      {
        title: "BootStrap",
        img: "https://msatechnosoft.in/blog/wp-content/uploads/2018/06/bootstrap-image-MSA-Technosoft.jpg",
        para: "Bootstrap is a popular open-source front-end framework designed for developing responsive and mobile-first web applications. Created by Twitter, it provides a collection of CSS and JavaScript components that streamline the web development process"
      },
      {
        title: "GitHub",
        img: "https://github.blog/wp-content/uploads/2024/07/github-logo.png",
        para: "GitHub is a web-based platform for version control and collaboration, built around Git, a distributed version control system. It allows developers to store, manage, and track changes to their code repositories"
      },
      {
        title: "Next.js",
        img: "https://flatirons.com/static/0a79ca63e3ace4bfd802a70a2d7427ae/537f5/What-is-Drupal-An-Overview-in-2025.webp",
        para: "Next.js is a popular React framework that enables developers to build server-rendered and statically generated web applications. It provides a range of features that enhance the development experience and improve performance"
      },
      {
        title: "Tailwind CSS",
        img: "https://picperf.io/https://laravelnews.s3.amazonaws.com/images/tailwindcss-1633184775.jpg",
        para: "Tailwind CSS is a utility-first CSS framework that provides low-level utility classes to build custom designs directly in your markup. Instead of defining styles in traditional CSS files, Tailwind allows developers to apply styles by using a collection of utility classes, which promotes a more efficient and modular approach to styling."
      },
      {
        title: "Firebase",
        img: "https://firebase.google.com/images/social.png",
        para: "Firebase is a comprehensive platform developed by Google for building web and mobile applications. It offers a range of tools and services to help developers create high-quality apps, manage their backend, and enhance user engagement."
      },
      {
        title: "Python",
        img: "https://raspberry-valley.azurewebsites.net/img/Python-01.jpg",
        para: "Python is a high-level, interpreted programming language known for its simplicity and readability. It supports multiple programming paradigms, including procedural, object-oriented, and functional programming."
      },
      {
        title: "Vs-Code",
        img: "https://miro.medium.com/v2/resize:fit:1400/0*SGbxc-dbU0gyaVWm.jpg",
        para: "Visual Studio Code (VS Code) is a lightweight, open-source code editor developed by Microsoft. It is designed for building and debugging modern web and cloud applications."
      },
      {
        title: "SQL",
        img: "https://cdn.prod.website-files.com/61ddd0b42c51f89b7de1e910/6697e5d70e6b50dbe5bbe3dd_6697e36f9a2e61c3f9a3c850_SQL.jpeg",
        para: "SQL (Structured Query Language) is a standardized programming language used for managing and manipulating relational databases. It allows users to perform various operations on data, including querying, inserting, updating, and deleting records."
      },
      {
        title: "WordPress",
        img:"https://www.wppourlesnuls.com/wp-content/uploads/2019/05/wordpress.gif",
        para: "WordPress is an open-source content management system (CMS) that allows users to create, manage, and publish websites easily. Originally designed for blogging, it has evolved into a versatile platform suitable for various types of websites, including e-commerce, portfolios, and business sites."
      },
      {
        title: "PHP",
        img: "https://kinsta.com/wp-content/uploads/2018/05/what-is-php-3-1.png",
        para: "PHP (Hypertext Preprocessor) is a widely-used open-source server-side scripting language designed specifically for web development. It is embedded within HTML and is particularly well-suited for creating dynamic web pages and applications. "
      },
      {
        title: "JQuery",
        img: "https://www.horilla.com/wp-content/uploads/2024/04/what-are-the-features-and-advantages-of-jquery.jpg",
        para: "jQuery is a fast, lightweight, and feature-rich JavaScript library designed to simplify HTML document traversal, manipulation, and event handling. It provides an easy-to-use API that works across a variety of browsers, enabling developers to create interactive and dynamic web applications"
      }
    
    ]
  return (
    <div className="max-w-8xl grid grid-cols-4 p-4 w-full mx-auto ">
      {tools.map((tool) => {
        return(
          <div key={tool.title} className="p-4 hover:scale-105 transition-all">
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img className="aspect-video  w-full object-cover object-center" src={tool.img} alt="blog" />
            <div className="p-6">
              <h2 className="tracking-widest text-2xl title-font font-bold text-white mb-1">{tool.title}</h2>
              <p className="leading-relaxed mb-3">{tool.para}</p>
              
            </div>
          </div>
        </div>
        )
      })}
      </div>
    
  )
}

export default Tool